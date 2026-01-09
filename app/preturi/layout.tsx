import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prețuri | Hot Honey Tattoo Studio București',
  description: 'Prețuri orientative pentru tatuaje și piercing la Hot Honey Tattoo Studio. Fiecare proiect este unic - programează o consultație pentru un preț exact.',
  keywords: 'prețuri tatuaje București, prețuri piercing București, cost tatuaj, preț tattoo studio sector 2',
  openGraph: {
    title: 'Prețuri | Hot Honey Tattoo Studio București',
    description: 'Prețuri orientative pentru tatuaje și piercing. Fiecare proiect este unic - programează o consultație.',
    type: 'website',
  },
}

export default function PreturiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
