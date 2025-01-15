'use server'

import sharp from 'sharp'
import { Bot } from 'lucide-react'
import fs from 'fs/promises'
import path from 'path'

const sizes = {
  favicon16: 16,
  favicon32: 32,
  apple: 180,
  android192: 192,
  android512: 512
}

async function generateFavicon() {
  // Create SVG buffer from Lucide icon
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${Bot({}).props.children}
    </svg>
  `

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public')
  await fs.mkdir(publicDir, { recursive: true })

  // Generate different sizes
  await Promise.all([
    // Favicon 16x16
    sharp(Buffer.from(svg))
      .resize(sizes.favicon16, sizes.favicon16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png')),

    // Favicon 32x32
    sharp(Buffer.from(svg))
      .resize(sizes.favicon32, sizes.favicon32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png')),

    // Apple Touch Icon
    sharp(Buffer.from(svg))
      .resize(sizes.apple, sizes.apple)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png')),

    // Android Chrome 192x192
    sharp(Buffer.from(svg))
      .resize(sizes.android192, sizes.android192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png')),

    // Android Chrome 512x512
    sharp(Buffer.from(svg))
      .resize(sizes.android512, sizes.android512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png')),

    // ICO file (contains both 16x16 and 32x32)
    sharp(Buffer.from(svg))
      .resize(sizes.favicon32, sizes.favicon32)
      .toFormat('ico')
      .toFile(path.join(publicDir, 'favicon.ico'))
  ])
}

// Generate favicons
generateFavicon()

