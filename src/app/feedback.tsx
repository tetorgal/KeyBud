import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

type TranslationKey = 'welcome_message' | 'description_message' | 'feedback_placeholder' | 'image_selected' | 'submit_feedback';

const translations: Record<TranslationKey, string> = {
  welcome_message: "Give Us Some Feedback",
  description_message: "We value your opinion. Please share your thoughts with us to help improve our service.",
  feedback_placeholder: "Write your feedback here...",
  image_selected: "Image selected:",
  submit_feedback: "Submit Feedback",
};

const t = (key: TranslationKey): string => {
  return translations[key] || key;
};

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const requestCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    return status === 'granted';
  };

  const requestMediaPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === 'granted';
  };

  const handleTakePhoto = async () => {
    const cameraGranted = await requestCameraPermissions();
    if (!cameraGranted) {
      Alert.alert('Permission required', 'Please grant camera permission to use this feature.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSelectFile = async () => {
    const mediaGranted = await requestMediaPermissions();
    if (!mediaGranted) {
      Alert.alert('Permission required', 'Please grant media library permission to use this feature.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Feedback submitted', `Feedback: ${feedback}\nImage: ${image}`);
    setFeedback('');
    setImage(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>{t("welcome_message")}</Text>
        <Text style={styles.description}>{t("description_message")}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={feedback}
            onChangeText={setFeedback}
            placeholder={t("feedback_placeholder")}
            style={styles.input}
            multiline
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleSelectFile} style={styles.iconButton}>
              <Ionicons name="attach-outline" size={24} color="#2563eb" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTakePhoto} style={styles.iconButton}>
              <Ionicons name="camera-outline" size={24} color="#2563eb" />
            </TouchableOpacity>
          </View>
        </View>
        {image && <Text style={styles.imageText}>{t("image_selected")} {image}</Text>}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>{t("submit_feedback")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1d4ed8",
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "#2D3748",
    maxWidth: 700,
    marginBottom: 24,
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 12,
  },
  input: {
    minHeight: 100,
    maxHeight: 150,
    fontSize: 18,
    color: '#3B3B3B',
    padding: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  iconButton: {
    padding: 8,
  },
  imageText: {
    fontSize: 16,
    color: '#3B3B3B',
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FeedbackScreen;
