import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Using the actual icon image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png"
          alt="Iris Weather Icon"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}

