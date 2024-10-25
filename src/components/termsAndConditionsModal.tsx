import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import translation hook
import '../i18n'; // Import the i18n configuration

interface TermsAndConditionsModalProps {
  onAccept: () => void; // Function type for accepting terms
  onDecline: () => void; // Function type for declining terms
}

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ onAccept, onDecline }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    checkIfTermsAccepted();
  }, []);

  const checkIfTermsAccepted = async () => {
    const accepted = await AsyncStorage.getItem('termsAccepted');
    if (!accepted) {
      setIsModalVisible(true);
    }
  };

  const handleAcceptTerms = async () => {
    await AsyncStorage.setItem('termsAccepted', 'true');
    setIsModalVisible(false);
    onAccept(); // Call the accept handler
  };

  const handleDisagree = () => {
    Alert.alert(
      t('terms_alert_title'), // Use translation for alert title
      t('terms_alert_message'), // Use translation for alert message
      [{ text: t('terms_alert_button'), onPress: () => onDecline() }] // Use translation for button text
    );
    setIsModalVisible(false);  // Close modal on disagreement
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View className="flex-1 justify-center items-center bg-black bg-opacity-75">
        <View className="bg-white p-6 rounded-lg w-11/12 bg-white dark:bg-neutral-900">
          <Text className="text-lg font-bold mb-4 text-black dark:text-white">
            {t('terms_title')} {/* Use translation for terms title */}
          </Text>
          <Text className="text-base text-black mb-4 text-black dark:text-gray-100">
            {t('terms_description')} {/* Use translation for terms description */}
          </Text>
          {/* Agree Button */}
          <TouchableOpacity
            onPress={handleAcceptTerms}
            className="bg-blue-600 p-3 rounded-md mb-2"
          >
            <Text className="text-white text-center">{t('terms_accept')}</Text> {/* Translation for Agree button */}
          </TouchableOpacity>

          {/* Disagree Button */}
          <TouchableOpacity
            onPress={handleDisagree}
            className="border border-gray-100 p-3 rounded-md"
          >
            <Text className="text-white text-center">{t('terms_decline')}</Text> {/* Translation for Disagree button */}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TermsAndConditionsModal;
