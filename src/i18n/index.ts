import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

import {SupportedLanguages, resources} from './constants'

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: SupportedLanguages.en,
        fallbackLng: SupportedLanguages.en,
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    })

export default i18next
