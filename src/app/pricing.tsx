import { Link, useRouter } from "expo-router"; // Import useRouter for navigation
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TermsAndConditionsModal from '../components/termsAndConditionsModal'; // Adjust the path if needed
import AntDesign from '@expo/vector-icons/AntDesign';

import '../i18n';
import { useTranslation } from 'react-i18next';

export default function PricingScreen() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const { t } = useTranslation(); // Use the translation hook

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
    router.push('/'); // Redirect to home route on decline
  };

  return (
    <View className="flex flex-1 bg-neutral-100 dark:bg-neutral-950">
      {/* Show the modal if terms are not accepted */}
      {!termsAccepted && (
        <TermsAndConditionsModal onAccept={handleAccept} onDecline={handleDecline} />
      )}

      {termsAccepted && (
        <ScrollView>
          <Content />
        </ScrollView>
      )}

      {!termsAccepted && (
        <View className="flex-1 justify-center items-center p-5">
          <Text className="text-blue-500 dark:text-white text-center">
            {t('terms_prompt_message', { defaultValue: 'You need to accept the Terms and Conditions to view this content.' })}
          </Text>
          <Link
            suppressHighlighting
            className="flex h-9 items-center justify-center mt-4 rounded-md bg-blue-600 dark:bg-blue-600 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-blue-500 dark:hover:bg-blue-500"
            href="/"
          >
            <span className="mx-2 font-bold text-white dark:text-white">{t('go_home_button', { defaultValue: 'Go Home' })}</span>
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
    <View className="flex-1">
      {/* Header Section */}
      <View className="p-4 gap-4 mt-4 items-center overflow-hidden">
        <Text
          role="heading"
          className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent"
        >
          {t('pricing_title', { defaultValue: 'Our Pricing Plans' })}
        </Text>
        <Text className="mx-auto max-w-[700px] text-lg text-center dark:text-gray-500 md:text-xl dark:text-neutral-500">
          {t('pricing_description', { defaultValue: 'Choose the plan that fits your business needs.' })}
        </Text>
      </View>

      {/* Pricing Cards Section */}
      <View className="px-4 mt-10 space-y-6">
        {/* Basic Plan */}
        <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <Text className="text-xl font-semibold dark:text-neutral-100 mb-2">
            {t('basic_plan_title', { defaultValue: 'Basic Plan' })}
          </Text>
          <Text className="dark:text-neutral-400 mb-4">
            {t('basic_plan_description', { defaultValue: 'Ideal for small businesses starting their digital transformation journey.' })}
          </Text>
          <Text className="text-2xl font-bold dark:text-neutral-100">
            {t('basic_plan_price', { defaultValue: '$49/month' })}
          </Text>
          <Link
            suppressHighlighting
            className="text-center font-extrabold mt-4 bg-blue-700 dark:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200"
            href="/pricing"
          >
            {t('contact_us', { defaultValue: 'Contact Us' })}
          </Link>
        </View>

        {/* Professional Plan */}
        <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <Text className="text-xl font-semibold dark:text-neutral-100 mb-2">
            {t('professional_plan_title', { defaultValue: 'Professional Plan' })}
          </Text>
          <Text className="dark:text-neutral-400 mb-4">
            {t('professional_plan_description', { defaultValue: 'Perfect for growing businesses that need advanced features and support.' })}
          </Text>
          <Text className="text-2xl font-bold dark:text-neutral-100">
            {t('professional_plan_price', { defaultValue: '$99/month' })}
          </Text>
          <Link
            suppressHighlighting
            className="text-center font-extrabold mt-4 bg-blue-700 dark:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200"
            href="/pricing"
          >
            {t('contact_us', { defaultValue: 'Contact Us' })}
          </Link>
        </View>

        {/* Enterprise Plan */}
        <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <Text className="text-xl font-semibold dark:text-neutral-100 mb-2">
            {t('enterprise_plan_title', { defaultValue: 'Enterprise Plan' })}
          </Text>
          <Text className="dark:text-neutral-400 mb-4">
            {t('enterprise_plan_description', { defaultValue: 'Tailored for large businesses needing custom solutions and dedicated support.' })}
          </Text>
          <Text className="text-2xl font-bold dark:text-neutral-100">
            {t('enterprise_plan_price', { defaultValue: 'Contact for Pricing' })}
          </Text>
          <Link
            suppressHighlighting
            className="text-center font-extrabold mt-4 bg-blue-700 dark:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-200"
            href="/pricing"
          >
            {t('contact_us', { defaultValue: 'Contact Us' })}
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="bg-white dark:bg-neutral-950 flex shrink-0 items-center justify-center py-4"
      style={{ paddingBottom: bottom }}
    >
      <Text className="text-sm text-neutral-500">
        {t('footer_message', { defaultValue: '© 2024 Your Company. All rights reserved.' })}
      </Text>
    </View>
  );
}
