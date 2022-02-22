import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './locale/en/english.json';

export const defaultNS = 'english';

export const resources = {
  en: {
    english,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['english'],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
