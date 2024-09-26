import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import '../i18n';
import { useTranslation } from 'react-i18next';

export default function Page() {
  return (
    <View className="flex flex-1 bg-neutral-100 dark:bg-neutral-950">

      <ScrollView className="flex flex-1">
        <Header />
        <Content />
      </ScrollView>
      <Footer />
    </View>
  );
}

function Content() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <View className="flex-1 py-12 md:py-24 lg:py-32 xl:py-48">
      <View className="px-4 md:px-6">
        <View className="flex flex-col items-center gap-4 text-center">
          <Text
            role="heading"
            className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent"
          >
            {t('welcome_message')}
          </Text>
          <Text className="mx-auto max-w-[700px] text-lg text-center md:text-xl text-black dark:text-neutral-500">
            {t('description_message')}
          </Text>

          <View className="gap-4">
            <Link
              suppressHighlighting
              className="flex h-9 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-600 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-blue-500 dark:hover:bg-blue-500"
              href="/services"
            >
              <span className="mx-2 font-bold text-white dark:text-white">{t('explore_services')}</span>
              <AntDesign name="rightcircle" size={24} color="white" />
            </Link>
          </View>

          <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
            <Text className="text-lg font-bold text-black dark:text-white">{t('mission_title')}</Text>
            <Text className="text-black dark:text-neutral-400">
              {t('mission_description')}
            </Text>
          </View>

          <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
            <Text className="text-lg font-bold dark:text-white">{t('about_us_title')}</Text>
            <Text className="text-black dark:text-neutral-400">
              {t('about_us_description')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between bg-blue-600 dark:bg-neutral-900">
        <Link
          className="bg-neutral-100 dark:bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent font-bold flex-1 items-center justify-center"
          href="/"
        >
          KeyBud
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-neutral-100 dark:text-neutral-400 text-md font-medium hover:underline web:underline-offset-4"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-neutral-100 dark:text-neutral-400 text-md font-medium hover:underline web:underline-offset-4"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-neutral-100 dark:text-neutral-400 text-md font-medium hover:underline web:underline-offset-4"
            href="/profile"
          >
            Profile
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="bg-white dark:bg-neutral-950 flex-shrink-0"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6">
        <Text className="text-center dark:text-neutral-600 text-black">
          © {new Date().getFullYear()} KeyBud
        </Text>
      </View>
    </View>
  );
}
