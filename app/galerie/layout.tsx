import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerie | Hot Honey Tattoo Studio - Portofoliu Tatuaje',
  description: 'Explorează galeria noastră de tatuaje și piercing. Lucrări realizate de artiștii noștri în diverse stiluri: realistic, geometric, abstract, black & grey și mai multe.',
  keywords: 'galerie tatuaje București, portofoliu tatuaje, tatuaje realistic, tatuaje geometric, piercing București',
  openGraph: {
    title: 'Galerie | Hot Honey Tattoo Studio - Portofoliu Tatuaje',
    description: 'Explorează galeria noastră de tatuaje și piercing. Lucrări realizate de artiștii noștri în diverse stiluri.',
    type: 'website',
  },
}

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
