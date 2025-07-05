import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import translationUZ from './locales/uz/translation.json';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// Language resources
const resources = {
    uz: { translation: translationUZ },
    en: { translation: translationEN },
    ru: { translation: translationRU },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'uz',
        supportedLngs: ['uz', 'en', 'ru'],
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
