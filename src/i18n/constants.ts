import enLang from './resources/en.json'
import nlLang from './resources/nl.json'

export enum SupportedLanguages {
    en = 'en',
    nl = 'nl'
}

export const resources = {
    [SupportedLanguages.en]: {
        translation: enLang
    },
    [SupportedLanguages.nl]: {
        translation: nlLang
    }
}
