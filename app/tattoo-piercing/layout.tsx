import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tattoo & Piercing | Hot Honey Tattoo Studio București',
  description: 'Află mai multe despre procesul nostru de tatuare și piercing. De la consultație la îngrijire post-procedură, te ghidăm prin fiecare pas.',
  keywords: 'tattoo București, piercing București, proces tatuare, îngrijire tatuaj, consultație tatuaj',
  openGraph: {
    title: 'Tattoo & Piercing | Hot Honey Tattoo Studio București',
    description: 'Află mai multe despre procesul nostru de tatuare și piercing. De la consultație la îngrijire post-procedură.',
    type: 'website',
  },
}

export default function TattooPiercingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
