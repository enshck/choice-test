import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import uk from './translations/uk.json';
import { languageKey } from 'constants/localstorage-keys';
import { languages } from 'constants/languages';

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

export const i18next = use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(languageKey) || languages[0],
  interpolation: {
    escapeValue: false,
  },
});
