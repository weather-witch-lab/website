import Image from 'next/image'
import Link from 'next/link'

export function HeaderLogo() {
  return (
    <Link className="flex items-center justify-center" href="#">
      <span className="text-xl font-bold text-white">Iris</span>
      <Link href="https://github.com/weather-witch-lab" target="_blank" className="mx-2 text-sm text-blue-300 hover:text-blue-400">
        by Weather Witch Lab
      </Link>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico34-oodnydmFmnGmJoSpDkYnVCEr6f9VMT.png"
        alt="Weather Witch Lab Logo"
        width={24}
        height={24}
        className="h-6 w-6"
      />
    </Link>
  )
}

