type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export const COOKIE_PREFERENCES_KEY = 'cookiePreferences'
export const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null

  const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
  return preferences ? JSON.parse(preferences) : null
}

export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return

  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences))
  
  // Apply cookie preferences
  if (preferences.analytics) {
    enableAnalytics()
  } else {
    disableAnalytics()
  }

  if (preferences.marketing) {
    enableMarketingCookies()
  } else {
    disableMarketingCookies()
  }
}

export function clearCookiePreferences(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(COOKIE_PREFERENCES_KEY)
  disableAnalytics()
  disableMarketingCookies()
}

// Analytics functions
function enableAnalytics(): void {
  // Initialize analytics (e.g., Google Analytics)
  // Example:
  // if (typeof window !== 'undefined' && 'gtag' in window) {
  //   window.gtag('consent', 'update', {
  //     analytics_storage: 'granted'
  //   })
  // }
}

function disableAnalytics(): void {
  // Disable analytics tracking
  // Example:
  // if (typeof window !== 'undefined' && 'gtag' in window) {
  //   window.gtag('consent', 'update', {
  //     analytics_storage: 'denied'
  //   })
  // }
}

// Marketing cookies functions
function enableMarketingCookies(): void {
  // Enable marketing cookies and tracking
  // Example:
  // if (typeof window !== 'undefined' && 'fbq' in window) {
  //   window.fbq('consent', 'grant')
  // }
}

function disableMarketingCookies(): void {
  // Disable marketing cookies and tracking
  // Example:
  // if (typeof window !== 'undefined' && 'fbq' in window) {
  //   window.fbq('consent', 'revoke')
  // }
} 