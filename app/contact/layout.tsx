import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Hot Honey Tattoo Studio București',
  description: 'Contactează Hot Honey Tattoo Studio pentru programări și consultații. Locație: Strada Vasile Lascăr 158, București. Telefon: 0732 537 742.',
  keywords: 'contact tattoo studio București, programare tatuaj București, telefon Hot Honey Tattoo, adresă tattoo studio sector 2',
  openGraph: {
    title: 'Contact | Hot Honey Tattoo Studio București',
    description: 'Contactează Hot Honey Tattoo Studio pentru programări și consultații. Locație: Strada Vasile Lascăr 158, București.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
