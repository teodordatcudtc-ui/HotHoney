'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

export default function PreturiPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const tattooPricing = [
    {
      category: 'Tatuaje Mici',
      description: 'Design-uri simple, până la 10cm',
      price: 'de la 300 RON',
      features: [
        'Consultare inclusă',
        'Design personalizat',
        'Îngrijire post-procedură',
      ],
    },
    {
      category: 'Tatuaje Medii',
      description: 'Design-uri moderate, 10-20cm',
      price: 'de la 600 RON',
      features: [
        'Consultare inclusă',
        'Design personalizat',
        '1-2 sesiuni',
        'Îngrijire post-procedură',
      ],
    },
    {
      category: 'Tatuaje Mari',
      description: 'Design-uri complexe, peste 20cm',
      price: 'de la 1000 RON',
      features: [
        'Consultare inclusă',
        'Design personalizat',
        'Multiple sesiuni',
        'Îngrijire post-procedură',
      ],
    },
    {
      category: 'Cover-up / Retus',
      description: 'Acoperire tatuaje existente sau retus',
      price: 'la consultare',
      features: [
        'Evaluare detaliată',
        'Design personalizat',
        'Tehnică specializată',
      ],
    },
  ]

  const piercingPricing = [
    {
      type: 'Ear Piercing',
      price: 'de la 150 RON',
      includes: 'Bijuterie inclusă',
    },
    {
      type: 'Body Piercing',
      price: 'de la 200 RON',
      includes: 'Bijuterie inclusă',
    },
    {
      type: 'Facial Piercing',
      price: 'de la 180 RON',
      includes: 'Bijuterie inclusă',
    },
  ]

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
            <span className="text-gradient">Prețuri</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
            Prețurile sunt orientative. Fiecare proiect este unic și prețul final se stabilește la consultație.
          </p>
        </motion.div>
      </section>

      {/* Tattoo Pricing */}
      <section ref={pricingRef} className="section-padding bg-black">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Prețuri <span className="text-gradient">Tatuaje</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {tattooPricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 rounded-sm"
              >
                <h3 className="text-2xl font-bold mb-2 text-gradient">{item.category}</h3>
                <p className="text-white/60 mb-4 text-sm">{item.description}</p>
                <div className="text-3xl font-bold mb-6 text-white">{item.price}</div>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <Check className="w-5 h-5 text-gradient flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Piercing Pricing */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Prețuri <span className="text-gradient">Piercing</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {piercingPricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 rounded-sm text-center"
              >
                <h3 className="text-xl font-bold mb-3">{item.type}</h3>
                <div className="text-2xl font-bold mb-2 text-gradient">{item.price}</div>
                <p className="text-white/60 text-sm">{item.includes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto p-8 border border-white/10 bg-white/5 rounded-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Notă Importantă</h3>
            <div className="space-y-3 text-white/80 leading-relaxed">
              <p>
                Prețurile afișate sunt <strong className="text-white">orientative</strong> și pot varia în funcție de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Complexitatea design-ului</li>
                <li>Dimensiunea și locația tatuajului</li>
                <li>Numărul de sesiuni necesare</li>
                <li>Stilul ales (realistic, geometric, etc.)</li>
                <li>Calitatea bijuteriei pentru piercing</li>
              </ul>
              <p className="mt-4">
                Pentru un preț exact, <strong className="text-white">programează o consultație</strong> unde discutăm despre proiectul tău și stabilim toate detaliile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-sm"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ai întrebări despre <span className="text-gradient">prețuri</span>?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Contactează-ne pentru o consultație personalizată și un preț exact pentru proiectul tău.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm transition-all"
            >
              Programează Consultație
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
