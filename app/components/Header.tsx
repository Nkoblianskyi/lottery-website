"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy, CheckCircle, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleOpenLogin = () => {
      setLoginOpen(true)
    }

    window.addEventListener("openLogin", handleOpenLogin)

    return () => {
      window.removeEventListener("openLogin", handleOpenLogin)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginOpen(false)
    // Redirect back to timer section
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterOpen(false)
    setShowSuccessModal(true)
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false)
    setLoginOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
              <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-blue-900">AussieBigWins</h1>
              <p className="text-[10px] sm:text-xs text-orange-600">Premium Lottery Experience</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-900 hover:text-orange-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-blue-900 hover:text-orange-600 font-medium">
              Home
            </Link>
            <Link href="/faq" className="text-blue-900 hover:text-orange-600 font-medium">
              FAQ
            </Link>
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <button className="text-blue-900 hover:text-orange-600 font-medium">Contact Us</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login Required</DialogTitle>
                  <DialogDescription>Please log in to contact us</DialogDescription>
                </DialogHeader>
                <LoginForm onSubmit={handleLogin} />
              </DialogContent>
            </Dialog>

            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>Enter your credentials to access your account</DialogDescription>
                </DialogHeader>
                <LoginForm onSubmit={handleLogin} />
              </DialogContent>
            </Dialog>

            <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
                  Register
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-md mx-auto p-0 max-h-[95vh] overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                  <DialogTitle>Create Account</DialogTitle>
                  <DialogDescription>Join AussieBigWins today</DialogDescription>
                </DialogHeader>
                <RegisterForm onSubmit={handleRegister} />
              </DialogContent>
            </Dialog>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <Link
                href="/"
                className="text-blue-900 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/faq"
                className="text-blue-900 hover:text-orange-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <button
                className="text-blue-900 hover:text-orange-600 font-medium text-left py-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setLoginOpen(true)
                }}
              >
                Contact Us
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setLoginOpen(true)
                  }}
                >
                  Login
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setRegisterOpen(true)
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-6 w-6" />
              Registration Successful!
            </DialogTitle>
            <DialogDescription>
              Your account has been created successfully. Please log in to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button onClick={handleSuccessModalClose} className="bg-green-600 hover:bg-green-700">
              Continue to Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function LoginForm({ onSubmit }: { onSubmit: (e: React.FormEvent) => void }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" required />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Login
      </Button>
    </form>
  )
}

function RegisterForm({ onSubmit }: { onSubmit: (e: React.FormEvent) => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.email) newErrors.email = "Required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email"
      if (!formData.password) newErrors.password = "Required"
      else if (formData.password.length < 8) newErrors.password = "Min 8 chars"
    }

    if (step === 2) {
      if (!formData.title) newErrors.title = "Required"
      if (!formData.firstName) newErrors.firstName = "Required"
      if (!formData.lastName) newErrors.lastName = "Required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required"
      if (!formData.phone) newErrors.phone = "Required"
    }

    if (step === 3) {
      if (!formData.zip) newErrors.zip = "Required"
      if (!formData.location) newErrors.location = "Required"
      if (!formData.street) newErrors.street = "Required"
      if (!formData.houseNumber) newErrors.houseNumber = "Required"
      if (!formData.iban) newErrors.iban = "Required"
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "Must agree"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(3)) {
      onSubmit(e)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-sm font-medium">Step {currentStep} of 3</span>
          <span className="text-white/80 text-xs">
            {currentStep === 1 && "Account Info"}
            {currentStep === 2 && "Personal Details"}
            {currentStep === 3 && "Address & Bank"}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {/* Step 1: Account Info */}
        {currentStep === 1 && (
          <div className="space-y-3">
            <div>
              <Label htmlFor="regEmail" className="text-sm font-medium text-gray-700">
                📧 Email *
              </Label>
              <Input
                id="regEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-9 text-sm ${errors.email ? "border-red-400" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="regPassword" className="text-sm font-medium text-gray-700">
                🔒 Password *
              </Label>
              <div className="relative">
                <Input
                  id="regPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 8 characters"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`h-9 text-sm pr-8 ${errors.password ? "border-red-400" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="pt-4">
              <Button
                type="button"
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 h-10"
              >
                Next Step →
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Details */}
        {currentStep === 2 && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="title" className="text-xs font-medium text-gray-700">
                  Title *
                </Label>
                <select
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`w-full p-1.5 border rounded text-xs h-8 ${errors.title ? "border-red-400" : "border-gray-300"}`}
                >
                  <option value="">Select</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="ms">Ms</option>
                  <option value="dr">Dr</option>
                </select>
                {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
              </div>
              <div className="col-span-2">
                <Label htmlFor="firstName" className="text-xs font-medium text-gray-700">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`h-8 text-xs ${errors.firstName ? "border-red-400" : ""}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="lastName" className="text-xs font-medium text-gray-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                placeholder="Smith"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`h-8 text-xs ${errors.lastName ? "border-red-400" : ""}`}
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>

            <div>
              <Label htmlFor="birthName" className="text-xs font-medium text-gray-700">
                Birth Name (if different)
              </Label>
              <Input
                id="birthName"
                placeholder="Optional"
                value={formData.birthName}
                onChange={(e) => handleInputChange("birthName", e.target.value)}
                className="h-8 text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="dateOfBirth" className="text-xs font-medium text-gray-700">
                  📅 Birth Date *
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className={`h-8 text-xs ${errors.dateOfBirth ? "border-red-400" : ""}`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <Label htmlFor="placeOfBirth" className="text-xs font-medium text-gray-700">
                  Birth Place
                </Label>
                <Input
                  id="placeOfBirth"
                  placeholder="City"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-xs font-medium text-gray-700">
                📱 Phone *
              </Label>
              <Input
                id="phone"
                placeholder="+61 4XX XXX XXX"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`h-8 text-xs ${errors.phone ? "border-red-400" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" onClick={handlePrev} variant="outline" className="flex-1 h-9 text-sm">
                ← Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 h-9 text-sm"
              >
                Next →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Address & Bank */}
        {currentStep === 3 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="zip" className="text-xs font-medium text-gray-700">
                  📍 Postcode *
                </Label>
                <Input
                  id="zip"
                  placeholder="2000"
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
                  className={`h-8 text-xs ${errors.zip ? "border-red-400" : ""}`}
                />
                {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
              </div>
              <div>
                <Label htmlFor="location" className="text-xs font-medium text-gray-700">
                  City *
                </Label>
                <Input
                  id="location"
                  placeholder="Sydney"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className={`h-8 text-xs ${errors.location ? "border-red-400" : ""}`}
                />
                {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <Label htmlFor="street" className="text-xs font-medium text-gray-700">
                  Street *
                </Label>
                <Input
                  id="street"
                  placeholder="Main Street"
                  value={formData.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  className={`h-8 text-xs ${errors.street ? "border-red-400" : ""}`}
                />
                {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
              </div>
              <div>
                <Label htmlFor="houseNumber" className="text-xs font-medium text-gray-700">
                  No. *
                </Label>
                <Input
                  id="houseNumber"
                  placeholder="123"
                  value={formData.houseNumber}
                  onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                  className={`h-8 text-xs ${errors.houseNumber ? "border-red-400" : ""}`}
                />
                {errors.houseNumber && <p className="text-red-500 text-xs">{errors.houseNumber}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="iban" className="text-xs font-medium text-gray-700">
                🏦 IBAN *
              </Label>
              <Input
                id="iban"
                placeholder="AU12 3456 7890 1234 5678 90"
                value={formData.iban}
                onChange={(e) => handleInputChange("iban", e.target.value)}
                className={`h-8 text-xs ${errors.iban ? "border-red-400" : ""}`}
              />
              {errors.iban && <p className="text-red-500 text-xs">{errors.iban}</p>}
            </div>

            <div className="bg-gray-50 p-2 rounded">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                  className="mt-0.5 w-3 h-3"
                />
                <label htmlFor="agreeToTerms" className="text-xs text-gray-600 leading-tight">
                  I agree to the{" "}
                  <a
                    href="https://politicians.ozbigwinaustralia.com"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms & conditions
                  </a>{" "}
                  and data processing
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" onClick={handlePrev} variant="outline" className="flex-1 h-9 text-sm">
                ← Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 h-9 text-sm font-semibold"
              >
                Create Account ✓
              </Button>
            </div>

            <div className="text-center text-xs text-gray-500 pt-1">
              Already have an account?{" "}
              <button type="button" className="text-blue-600 hover:text-blue-800 underline">
                Log In
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
