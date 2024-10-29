import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

// Ensure that i18n is initialized
import "../i18n";

type HeaderProps = {
  onMenuToggle: () => void;
};

function Header({ onMenuToggle }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Link href="/">
        <Text style={styles.headerTitle}>KeyBud</Text>
      </Link>
      <TouchableOpacity onPress={onMenuToggle}>
        <Ionicons name="menu-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

function Content() {
  const { t } = useTranslation();

  return (
    <View style={styles.contentContainer}>
      <View style={styles.innerContentContainer}>
        <Text style={styles.heading}>{t("welcome_message")}</Text>
        <Text style={styles.description}>{t("description_message")}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t("mission_title")}</Text>
          <Text style={styles.cardDescription}>{t("mission_description")}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t("about_us_title")}</Text>
          <Text style={styles.cardDescription}>{t("about_us_description")}</Text>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© {new Date().getFullYear()} KeyBud</Text>
    </View>
  );
}

type MenuProps = {
  onClose: () => void;
};

function Menu({ onClose }: MenuProps) {
  const { t } = useTranslation();
  const links = [
    { href: "/services", text: t("services"), icon: "star-outline" as const },
    { href: "/pricing", text: t("pricing"), icon: "cash-outline" as const },
    { href: "/profile", text: t("profile"), icon: "person-outline" as const },
    { href: "/feedback", text: t("feedback"), icon: "chatbubbles-outline" as const },
  ];

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={30} color="#fff" />
      </TouchableOpacity>
      {links.map((link, index) => (
        <View key={index} style={styles.menuLinkContainer}>
          <Link href={link.href} style={styles.menuLink} onPress={onClose}>
            <View style={styles.menuItem}>
              <Ionicons name={link.icon} size={24} color="#fff" />
              <Text style={styles.menuLinkText}>{link.text}</Text>
            </View>
          </Link>
          <View style={styles.border} />
        </View>
      ))}
    </View>
  );
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
      <ScrollView style={styles.scrollView}>
        <Header onMenuToggle={toggleMenu} />
        <Content />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 48,
  },
  innerContentContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1d4ed8",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "#2D3748",
    maxWidth: 700,
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#2563eb",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  footer: {
    backgroundColor: "#f8fafc",
    paddingVertical: 8,
    alignItems: "center",
  },
  footerText: {
    color: "#6b7280",
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#2563eb',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuLinkContainer: {
    marginBottom: 20,
  },
  menuLink: {
    marginBottom: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  menuLinkText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    maxWidth: 350,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 8,
  },
  cardDescription: {
    color: "#2D3748",
    fontSize: 18,
  },
});
