import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'World Weather AI, Your AI Weather Agent',
  description: 'An intelligent AI agent powered by Google DeepMind and ECMWF technologies, delivering precise weather forecasting and climate insights.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png',
        href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png" />
        <link rel="apple-touch-icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

