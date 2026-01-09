'use client'

import Link from 'next/link'
import { Instagram, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              HOT <span className="text-gradient">HONEY</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Studio de tatuaje și piercing premium în inima Bucureștiului.
              Arta tatuajului cu viziune artistică și experiență de peste 20 de ani.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-wider mb-4 text-white/80">
              Navigare
            </h4>
            <nav className="space-y-2">
              <Link href="/preturi" className="block text-white/60 hover:text-white transition-colors text-sm">
                Prețuri
              </Link>
              <Link href="/galerie" className="block text-white/60 hover:text-white transition-colors text-sm">
                Galerie
              </Link>
              <Link href="/tattoo-piercing" className="block text-white/60 hover:text-white transition-colors text-sm">
                Tattoo & Piercing
              </Link>
              <Link href="/contact" className="block text-white/60 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-wider mb-4 text-white/80">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0732537742"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>0732 537 742</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strada+Vasile+Lascăr+158,+București+020497"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Strada Vasile Lascăr 158,<br />București 020497</span>
              </a>
              <a
                href="https://www.instagram.com/hot.honey.ttt/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Instagram size={16} />
                <span>@hot.honey.ttt</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Hot Honey Tattoo Studio. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
