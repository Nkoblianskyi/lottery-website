import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              AussieBigWins collects personal information necessary to provide our lottery services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Name, address, and contact details</li>
              <li>Date of birth and identification information</li>
              <li>Payment and banking information</li>
              <li>Gaming history and preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your personal information to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Process lottery ticket purchases and prize payments</li>
              <li>Verify your identity and age</li>
              <li>Communicate important account information</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and customer experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures to protect your personal information, including
              encryption, secure servers, and regular security audits. Access to your information is restricted to
              authorized personnel only.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">Under Australian privacy laws, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your account</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
