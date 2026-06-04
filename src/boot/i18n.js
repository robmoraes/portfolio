import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const languageStorageKey = 'portfolio.locale'
const defaultLocale = 'en-US'

function getRouteLocale() {
  const pathLocale = window.location.pathname
    .split('/')
    .filter(Boolean)
    .find((pathSegment) => Object.hasOwn(messages, pathSegment))

  if (pathLocale) {
    return pathLocale
  }

  return window.location.hash
    .replace(/^#\/?/, '')
    .split('/')
    .filter(Boolean)
    .find((pathSegment) => Object.hasOwn(messages, pathSegment))
}

export default defineBoot(({ app }) => {
  const routeLocale = getRouteLocale()
  const storedLocale = localStorage.getItem(languageStorageKey)
  const requestedLocale = routeLocale
  const initialLocale =
    requestedLocale ?? (Object.hasOwn(messages, storedLocale) ? storedLocale : defaultLocale)

  if (requestedLocale) {
    localStorage.setItem(languageStorageKey, requestedLocale)
  }

  const i18n = createI18n({
    locale: initialLocale,
    globalInjection: true,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})
