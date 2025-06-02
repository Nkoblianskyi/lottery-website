import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and improving our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the website to function properly and cannot be disabled:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Session cookies to maintain your shopping cart</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Performance Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies help us understand how visitors interact with our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Google Analytics to measure website traffic</li>
              <li>Performance monitoring to identify technical issues</li>
              <li>User behavior analysis to improve our services</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Functional Cookies</h3>
            <p className="text-gray-700 mb-4">These cookies enhance your experience on our website:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Preference cookies to remember your settings</li>
              <li>Language selection cookies</li>
              <li>Location cookies for relevant content</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. However, please note that disabling essential
              cookies may affect the functionality of our website. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>View and delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-6">
              Some cookies on our website are set by third-party services we use, such as Google Analytics, payment
              processors, and security services. These third parties have their own privacy policies governing how they
              use your information.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
