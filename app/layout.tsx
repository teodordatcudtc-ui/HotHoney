import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Hot Honey Tattoo Studio | Tattoo & Piercing București',
  description: 'Hot Honey Tattoo Studio - Studio de tatuaje și piercing premium în București. Arta tatuajului cu viziune artistică, experiență de peste 20 de ani.',
  keywords: 'tattoo salon București, piercing București, tattoo studio sector 2, tatuaje București, piercing București, Hot Honey Tattoo',
  openGraph: {
    title: 'Hot Honey Tattoo Studio | Tattoo & Piercing București',
    description: 'Studio de tatuaje și piercing premium în București',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
