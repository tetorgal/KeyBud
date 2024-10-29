import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const checkIfTermsAccepted = async () => {
      const accepted = await AsyncStorage.getItem('termsAccepted');
      if (accepted !== 'true') {
        setIsModalVisible(true);
      }
    };
    checkIfTermsAccepted();
  }, []);

  const handleAcceptTerms = async () => {
    await AsyncStorage.setItem('termsAccepted', 'true');
    setIsModalVisible(false);
    onAccept(); // Call the accept handler
  };

  const handleDisagree = () => {
    Alert.alert(
      t('terms_alert_title'), // Use translation for alert title
      t('terms_alert_message'), // Use translation for alert message
      [{ text: t('terms_alert_button'), onPress: () => { setIsModalVisible(false); onDecline(); } }] // Close modal and call decline
    );
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
        <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, width: '90%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>{t('terms_title')}</Text>
          <Text style={{ fontSize: 16, marginBottom: 12 }}>{t('terms_description')}</Text>

          {/* Agree Button */}
          <TouchableOpacity
            onPress={handleAcceptTerms}
            style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 5, marginBottom: 8 }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>{t('terms_accept')}</Text>
          </TouchableOpacity>

          {/* Disagree Button */}
          <TouchableOpacity
            onPress={handleDisagree}
            style={{ borderColor: '#e5e7eb', borderWidth: 1, padding: 12, borderRadius: 5 }}
          >
            <Text style={{ color: '#3b82f6', textAlign: 'center' }}>{t('terms_decline')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TermsAndConditionsModal;
