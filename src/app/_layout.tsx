import "../global.css";
import '../i18n';
import "intl-pluralrules";
import i18next from "i18next";
import { Stack } from 'expo-router';
import TermsAndConditionsModal from '../components/termsAndConditionsModal';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Layout() {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  useEffect(() => {
    const checkTermsAccepted = async () => {
      const accepted = await AsyncStorage.getItem('termsAccepted');
      setTermsAccepted(accepted === 'true');
    };

    checkTermsAccepted();
  }, []);

  const handleAcceptTerms = async () => {
    setTermsAccepted(true);
    await AsyncStorage.setItem('termsAccepted', 'true');
  };

  const handleDeclineTerms = () => {
    // Handle the case where the user declines terms if needed
    // For example, navigate away or show an alert
  };

  return (
    <>
      {/* Render the modal at the app start if terms are not accepted */}
      {!termsAccepted && (
        <TermsAndConditionsModal
          onAccept={handleAcceptTerms}
          onDecline={handleDeclineTerms}
        />
      )}

      {/* Render the rest of the app's navigation */}
      <Stack />
    </>
  );
}
