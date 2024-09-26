import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: navigator.language || 'en', // Automatically set language from browser
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator'], // Detect language from the browser's settings
      caches: ['localStorage'], // Store selected language in local storage
    },
  });

export default i18n;
