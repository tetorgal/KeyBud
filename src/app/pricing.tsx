import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Page() {
  return (
    <View className="flex flex-1 bg-neutral-100 dark:bg-neutral-950">
      <ScrollView>
        <Content />
      </ScrollView>
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
          {t('services_title')} {/* Translated text */}
        </Text>
        <Text className="mx-auto max-w-[700px] text-lg text-center dark:text-gray-500 md:text-xl dark:text-neutral-500">
          {t('services_description')} {/* Translated text */}
        </Text>
      </View>

      {/* Cards Section */}
      <View className="px-4 mt-10 space-y-6">
        {/* Card 1 */}
        <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <Text className="text-xl font-semibold dark:text-neutral-100 mb-2">{t('it_consulting_title')}</Text>
          <Text className="dark:text-neutral-400">
            {t('it_consulting_description')}
          </Text>
          <Link
            suppressHighlighting
            className="mt-4 text-blue-600 dark:text-blue-400 font-medium"
            href="/services"
          >
            {t('read_more')} {/* Translated text */}
          </Link>
        </View>

        {/* Card 2 */}
        <View className="dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
          <Text className="text-xl font-semibold dark:text-neutral-100 mb-2">{t('cloud_solutions_title')}</Text>
          <Text className="dark:text-neutral-400">
            {t('cloud_solutions_description')}
          </Text>
          <Link
            suppressHighlighting
            className="mt-4 text-blue-600 dark:text-blue-400 font-medium"
            href="/services"
          >
            {t('read_more')} {/* Translated text */}
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
      className="bg-white dark:bg-neutral-950 flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center dark:text-neutral-600 text-black"}>
          © {new Date().getFullYear()} KeyBud
        </Text>
      </View>
    </View>
  );
}
