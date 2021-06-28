// This file is part of React-Invenio-Deposit
// Copyright (C) 2021 Graz University of Technology.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

// I18next dependencies
// npm install react-i18next i18next i18next-browser-languagedetector --save

import i18n from 'i18next';

import TRANSLATIONS_DE from './translations/de/translations.json';
import TRANSLATIONS_EN from './translations/en/translations.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    de: {
      translation: TRANSLATIONS_DE,
    },
  },
  // specify language detection order
  detection: {
    order: ['htmlTag'],
    // cache user language off
    caches: [],
  },
};

const i18next = i18n.createInstance();
i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  //.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(options);

  export default i18next;
