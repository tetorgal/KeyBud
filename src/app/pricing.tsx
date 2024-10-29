import { Link, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TermsAndConditionsModal from '../components/termsAndConditionsModal';
import AntDesign from '@expo/vector-icons/AntDesign';

import '../i18n';
import { useTranslation } from 'react-i18next';

export default function PricingScreen() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    const checkTermsAcceptance = async () => {
      const accepted = await AsyncStorage.getItem('termsAccepted');
      if (accepted === 'true') {
        setTermsAccepted(true);
      }
    };
    checkTermsAcceptance();
  }, []);

  const handleAccept = () => {
    setTermsAccepted(true);
  };

  const handleDecline = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      {!termsAccepted && (
        <TermsAndConditionsModal onAccept={handleAccept} onDecline={handleDecline} />
      )}

      {termsAccepted && (
        <ScrollView>
          <Content />
        </ScrollView>
      )}

      {!termsAccepted && (
        <View style={styles.termsPromptContainer}>
          <Text style={styles.termsPromptText}>
            {t('terms_prompt_message', { defaultValue: 'You need to accept the Terms and Conditions to view this content.' })}
          </Text>
          <Link
            style={styles.goHomeLink}
            href="/"
          >
            <Text style={styles.goHomeText}>{t('go_home_button', { defaultValue: 'Go Home' })}</Text>
            <AntDesign name="rightcircle" size={24} color="white" />
          </Link>
        </View>
      )}

      <Footer />
    </View>
  );
}

function Content() {
  const { t } = useTranslation();

  return (
    <View style={styles.contentContainer}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.pricingTitle}>
          {t('pricing_title', { defaultValue: 'Our Pricing Plans' })}
        </Text>
        <Text style={styles.pricingDescription}>
          {t('pricing_description', { defaultValue: 'Choose the plan that fits your business needs.' })}
        </Text>
      </View>

      {/* Pricing Cards Section */}
      <View style={styles.pricingCardsContainer}>
        {/* Basic Plan */}
        <View style={styles.pricingCard}>
          <Text style={styles.planTitle}>
            {t('basic_plan_title', { defaultValue: 'Basic Plan' })}
          </Text>
          <Text style={styles.planDescription}>
            {t('basic_plan_description', { defaultValue: 'Ideal for small businesses starting their digital transformation journey.' })}
          </Text>
          <Text style={styles.planPrice}>
            {t('basic_plan_price', { defaultValue: '$49/month' })}
          </Text>
          <Link
            style={styles.contactUsLink}
            href="/pricing"
          >
            <Text style={styles.contactUsText}>
              {t('contact_us', { defaultValue: 'Contact Us' })}
            </Text>
          </Link>
        </View>

        {/* Professional Plan */}
        <View style={styles.pricingCard}>
          <Text style={styles.planTitle}>
            {t('professional_plan_title', { defaultValue: 'Professional Plan' })}
          </Text>
          <Text style={styles.planDescription}>
            {t('professional_plan_description', { defaultValue: 'Perfect for growing businesses that need advanced features and support.' })}
          </Text>
          <Text style={styles.planPrice}>
            {t('professional_plan_price', { defaultValue: '$99/month' })}
          </Text>
          <Link
            style={styles.contactUsLink}
            href="/pricing"
          >
            <Text style={styles.contactUsText}>
              {t('contact_us', { defaultValue: 'Contact Us' })}
            </Text>
          </Link>
        </View>

        {/* Enterprise Plan */}
        <View style={styles.pricingCard}>
          <Text style={styles.planTitle}>
            {t('enterprise_plan_title', { defaultValue: 'Enterprise Plan' })}
          </Text>
          <Text style={styles.planDescription}>
            {t('enterprise_plan_description', { defaultValue: 'Tailored for large businesses needing custom solutions and dedicated support.' })}
          </Text>
          <Text style={styles.planPrice}>
            {t('enterprise_plan_price', { defaultValue: 'Contact for Pricing' })}
          </Text>
          <Link
            style={styles.contactUsLink}
            href="/pricing"
          >
            <Text style={styles.contactUsText}>
              {t('contact_us', { defaultValue: 'Contact Us' })}
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.footerContainer, { paddingBottom: bottom }]}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} KeyBud
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  termsPromptContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  termsPromptText: {
    color: '#3B82F6',
    textAlign: 'center',
  },
  goHomeLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1D4ED8',
    borderRadius: 8,
  },
  goHomeText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
  },
  contentContainer: {
    flex: 1,
  },
  headerSection: {
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  pricingTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1D4ED8',
  },
  pricingDescription: {
    marginTop: 8,
    maxWidth: 700,
    textAlign: 'center',
    color: "#2D3748",
    fontSize: 20,
  },
  pricingCardsContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  pricingCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Larger offset for shadow
    shadowOpacity: 0.2, // Increase shadow opacity
    shadowRadius: 6, // Increase shadow spread
    elevation: 8, // Higher elevation for Android
    marginBottom: 16,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 8,
  },
  planDescription: {
    color: "#2D3748",
    fontSize: 18,
    marginBottom: 16,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  contactUsLink: {
    marginTop: 16,
    backgroundColor: "#2563eb",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    display: 'flex', // Ensure the component is a flex container
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
    flexDirection: 'row', // Ensures row layout if you add an icon
  },
  contactUsText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center', // Centers text horizontally
  },
  footerContainer: {
    backgroundColor: '#FFFFFF',
  },
  footerContent: {
    paddingVertical: 4,
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    textAlign: 'center',
  },
});
