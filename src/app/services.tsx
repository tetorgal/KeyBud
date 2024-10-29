import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
import '../i18n';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Page() {
  return (
    <View style={styles.container}>
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
    <View style={styles.contentContainer}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text
          role="heading"
          style={styles.pricingTitle}
        >
          {t('services_title')} {/* Services Title */}
        </Text>
        <Text style={styles.pricingDescription}>
          {t('services_description')} {/* Services Description */}
        </Text>
      </View>

      {/* Cards Section */}
      <View style={styles.pricingCardsContainer}>
        {/* Card 1 */}
        <View style={styles.pricingCard}>
          <Text style={styles.planTitle}>
            {t('it_consulting_title')} {/* IT Consulting Title */}
          </Text>
          <Text style={styles.planDescription}>
            {t('it_consulting_description')} {/* IT Consulting Description */}
          </Text>
          <Link
            suppressHighlighting
            style={styles.goHomeLink}
            href="/services"
          >
            <Text style={styles.goHomeText}>
              {t('read_more')} {/* Read More */}
            </Text>
          </Link>
        </View>

        {/* Card 2 */}
        <View style={styles.pricingCard}>
          <Text style={styles.planTitle}>
            {t('cloud_solutions_title')} {/* Cloud Solutions Title */}
          </Text>
          <Text style={styles.planDescription}>
            {t('cloud_solutions_description')} {/* Cloud Solutions Description */}
          </Text>
          <Link
            suppressHighlighting
            style={styles.goHomeLink}
            href="/services"
          >
            <Text style={styles.goHomeText}>
              {t('read_more')} {/* Read More */}
            </Text>
          </Link>
        </View>

        <Link href="/pricing" style={styles.contactUsLink}>
          <Text style={styles.contactUsText}>
            {t("pricing")}
          </Text>
          <AntDesign name="rightcircle" size={18} color="white" style={styles.icon} />
        </Link>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footerContainer}>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
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
  goHomeLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#2563eb",
    borderRadius: 8,
  },
  goHomeText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
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
  icon: {
    marginLeft: 8, // Space between text and icon
  },
});
