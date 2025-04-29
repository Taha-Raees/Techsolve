"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Settings, X } from "lucide-react"
import Link from "next/link"
import { getCookiePreferences, setCookiePreferences } from "@/lib/cookies"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies are always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already set cookie preferences
    const savedPreferences = getCookiePreferences()
    if (!savedPreferences) {
      setShowBanner(true)
    } else {
      setPreferences(savedPreferences)
    }
  }, [])

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    setCookiePreferences(prefs)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const acceptAllCookies = () => {
    const allEnabled = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allEnabled)
    saveCookiePreferences(allEnabled)
  }

  const savePreferences = () => {
    saveCookiePreferences(preferences)
  }

  const declineAllCookies = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(essentialOnly)
    saveCookiePreferences(essentialOnly)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      
      {/* Cookie Banner */}
      <div className="relative w-full max-w-2xl rounded-t-lg sm:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-lg">
        {showPreferences ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Cookie Preferences</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Checkbox
                    id="essential"
                    checked={preferences.essential}
                    disabled
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="essential" className="font-medium dark:text-white">
                      Essential Cookies
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      These cookies are necessary for the website to function and cannot be disabled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, analytics: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="analytics" className="font-medium dark:text-white">
                      Analytics Cookies
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Help us improve our website by collecting and reporting information about usage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Checkbox
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, marketing: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="marketing" className="font-medium dark:text-white">
                      Marketing Cookies
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={declineAllCookies}>
                  Decline All
                </Button>
                <Button onClick={savePreferences}>Save Preferences</Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">We Value Your Privacy</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    Read our{" "}
                    <Link href="/privacy-policy" className="text-primary dark:text-teal-400 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    to learn more.
          </p>
        </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(true)}
                  className="w-full sm:w-auto order-1 sm:order-none"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Cookie Settings
                </Button>
                <div className="flex gap-4 w-full sm:w-auto sm:ml-auto">
                  <Button
                    variant="outline"
                    onClick={declineAllCookies}
                    className="flex-1 sm:flex-none"
                  >
                    Decline All
          </Button>
                  <Button
                    onClick={acceptAllCookies}
                    className="flex-1 sm:flex-none"
                  >
                    Accept All
          </Button>
        </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
