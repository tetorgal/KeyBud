import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FaCog,
  FaBell,
  FaCreditCard,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";

export default function ProfilePage() {
  return (
    <View className="flex flex-1 bg-neutral-100 dark:bg-neutral-950">
      <ScrollView>
        <ProfileContent />
      </ScrollView>
      <Footer />
    </View>
  );
}

function ProfileContent() {
  return (
    <View className="flex-1 items-center mt-10">
      {/* Profile Header */}
      <View className="items-center">
        <Image
          source={require('../assets/images/ellipse1.png')}
          className="w-36 h-36 rounded-full"
        />
        <Text className="text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-100">
          Julia
        </Text>
      </View>

      {/* Profile Options */}
      <View className="w-full px-6 mt-8 space-y-6">
        <ProfileOption title="Configuración" icon={<FaCog />} />
        <ProfileOption title="Notificaciones" icon={<FaBell />} />
        <ProfileOption title="Pagos" icon={<FaCreditCard />} />
        <ProfileOption title="Seguridad" icon={<FaShieldAlt />} />
        <ProfileOption title="Guardados" icon={<FaHeart />} />
      </View>
    </View>
  );
}

function ProfileOption({ title, icon }: { title: string; icon: JSX.Element }) {
  return (
    <TouchableOpacity className="flex flex-row items-center p-4 bg-white dark:bg-neutral-900 rounded-lg boxShadow-md">
      {/* <Image source={icon} className="w-6 h-6 mr-4" /> */}
      <Text className="text-lg text-gray-800 dark:text-gray-100">{title}</Text>
    </TouchableOpacity>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="bg-white dark:bg-neutral-950 flex shrink-0"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 items-center">
        <Text className="text-center text-gray-500 dark:text-neutral-600">
          © {new Date().getFullYear()} KeyBud
        </Text>
      </View>
    </View>
  );
}
