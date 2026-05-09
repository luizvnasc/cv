import { ref } from 'vue'
import en from '../locales/en.js'
import pt from '../locales/pt.js'

const locale = ref('en')
const locales = { en, pt }

export function useI18n() {
  function setLocale(lang) {
    if (locales[lang]) locale.value = lang
  }

  function t(key, params = {}) {
    const strings = locales[locale.value]
    let str = key.split('.').reduce((o, k) => o?.[k], strings)
    if (str === undefined || str === null) return key
    Object.entries(params).forEach(([k, v]) => {
      str = String(str).replace(`{${k}}`, String(v))
    })
    return str
  }

  return { locale, setLocale, t }
}
