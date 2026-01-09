'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Phone, MapPin, Instagram, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-accent-animated opacity-10" />
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="container-custom section-padding relative z-10 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Contact</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
            Programează o consultație sau contactează-ne pentru orice întrebări.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                  Informații <span className="text-gradient">Contact</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Suntem aici să răspundem la întrebările tale și să te ajutăm să planifici următorul tău tatuaj sau piercing.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:0732537742"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gradient-accent transition-all">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-white/60 mb-1">Telefon</h3>
                    <p className="text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                      0732 537 742
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Strada+Vasile+Lascăr+158,+București+020497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gradient-accent transition-all">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-white/60 mb-1">Adresă</h3>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">
                      Strada Vasile Lascăr 158<br />
                      București 020497<br />
                      Sector 2
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/hot.honey.ttt/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-sm group-hover:bg-gradient-accent transition-all">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-white/60 mb-1">Instagram</h3>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">
                      @hot.honey.ttt
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-8 border border-white/10 rounded-sm bg-white/5"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Trimite un <span className="text-gradient">Mesaj</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/60 mb-2">
                    Nume
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-from transition-all"
                    placeholder="Numele tău"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-from transition-all"
                    placeholder="email@exemplu.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-white/60 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-from transition-all"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/60 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-from transition-all resize-none"
                    placeholder="Spune-ne despre ideea ta de tatuaj sau piercing..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-sm text-green-400 text-sm"
                  >
                    Mesajul tău a fost trimis cu succes! Te vom contacta în curând.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-sm text-red-400 text-sm"
                  >
                    A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    'Se trimite...'
                  ) : (
                    <>
                      Trimite Mesaj
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          >
            Ne <span className="text-gradient">Găsești</span> Aici
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-white/10"
          >
            {/* 
              TODO: Actualizează acest iframe cu link-ul corect de embed de pe Google Maps
              Pași:
              1. Deschide Google Maps
              2. Caută: Strada Vasile Lascăr 158, București 020497
              3. Click pe "Partajare" > "Integrează o hartă"
              4. Copiază codul iframe și înlocuiește src-ul de mai jos
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1234567890123!2d26.12345678901234!3d44.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA3JzI0LjQiTiAyNsKwMDcnMjguNCJF!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(1) brightness(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Strada+Vasile+Lascăr+158,+București+020497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all rounded-sm text-sm uppercase tracking-wider"
            >
              Deschide în Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
