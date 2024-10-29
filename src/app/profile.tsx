import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type ProfileOptionKey = 'settings' | 'notifications' | 'payments' | 'security' | 'saved';

const profileOptions: Record<ProfileOptionKey, string> = {
  settings: "Configuración",
  notifications: "Notificaciones",
  payments: "Pagos",
  security: "Seguridad",
  saved: "Guardados",
};

const iconNames: Record<ProfileOptionKey, keyof typeof Ionicons.glyphMap> = {
  settings: "settings-outline",
  notifications: "notifications-outline",
  payments: "card-outline",
  security: "shield-outline",
  saved: "heart-outline",
};

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileContent />
      </ScrollView>
      <Footer />
    </View>
  );
}

function ProfileContent() {
  return (
    <View style={styles.contentContainer}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/images/ellipse1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Julia</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        {(Object.keys(profileOptions) as ProfileOptionKey[]).map((key) => (
          <ProfileOption key={key} optionKey={key} />
        ))}
      </View>
    </View>
  );
}

function ProfileOption({ optionKey }: { optionKey: ProfileOptionKey }) {
  return (
    <TouchableOpacity style={styles.optionButton}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconNames[optionKey]} size={24} color="#2563eb" />
      </View>
      <Text style={styles.optionText}>{profileOptions[optionKey]}</Text>
    </TouchableOpacity>
  );
}

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} KeyBud</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 144,
    height: 144,
    borderRadius: 72,
  },
  profileName: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: '600',
    color: '#3B3B3B',
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 32,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: "#EBF2FF",
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#3B3B3B',
    marginLeft: 12,
  },
  footerContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  footerContent: {
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    textAlign: 'center',
  },
});
