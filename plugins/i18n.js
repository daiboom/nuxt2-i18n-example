export default function ({ app }) {
  // Get localized path for homepage
  const localePath = app.localePath('index')
  // Get path to switch current route to French
  const switchLocalePath = app.switchLocalePath('fr')
  console.log(localePath, switchLocalePath)

  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (
    oldLocale,
    newLocale,
    isInitialSetup,
    context
  ) => {
    console.log({ oldLocale, newLocale, isInitialSetup, context })
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log({ oldLocale, newLocale })
  }
}
