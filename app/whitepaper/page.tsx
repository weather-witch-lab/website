'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function WhitepaperPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the PDF link
    window.location.href = 'https://pdflink.to/irisweatherai/'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-950">
      <div className="text-center p-8">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading whitepaper...</p>
      </div>
    </div>
  )
}

