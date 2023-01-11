const i18next = require('i18next')

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'fr',
  debug: true,
  resources: {
    en: {
      common: require('../../lang/en/common.json'),
    },
  },
})

i18next.t('Nice')
