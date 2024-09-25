import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as translations from './translations';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translations.en.translations },
            de: { translation: translations.de.translations },
            es: { translation: translations.es.translations },
            fr: { translation: translations.fr.translations },
            gu: { translation: translations.gu.translations },
            hi: { translation: translations.hi.translations },
            zh: { translation: translations.zh.translations },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;