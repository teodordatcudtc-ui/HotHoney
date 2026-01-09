'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, Palette, Shield, Heart, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultație',
    description: 'Discutăm despre ideea ta, stilul preferat și locația tatuajului sau piercing-ului. Este momentul în care transformăm conceptul în realitate.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Design & Planificare',
    description: 'Creăm un design personalizat sau adaptăm unul existent. Planificăm sesiunea și stabilim toate detaliile tehnice.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Procedura',
    description: 'În timpul procedurii, ne asigurăm că totul este steril, sigur și confortabil. Lucrăm cu atenție la detalii și respect pentru pielea ta.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Îngrijire Post-Procedură',
    description: 'Oferim instrucțiuni clare pentru îngrijirea tatuajului sau piercing-ului și suntem disponibili pentru întrebări după procedură.',
    icon: <Sparkles className="w-6 h-6" />,
  },
]

export default function TattooPiercingPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-accent-animated opacity-10" />
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="container-custom section-padding relative z-10 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Tattoo & <span className="text-gradient">Piercing</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
            Fiecare tatuaj și piercing este o experiență personală, creată cu atenție la detalii și respect pentru arta noastră.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="section-padding bg-black">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Procesul <span className="text-gradient">Nostru</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-gradient">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-accent-from to-accent-to opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Ce Să <span className="text-gradient">Te Aștepți</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Mediu Steril & Sigur',
                description: 'Folosim doar echipamente sterile, de unica folosință, și respectăm toate standardele de siguranță și igienă.',
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: 'Design Personalizat',
                description: 'Fiecare tatuaj este creat sau adaptat special pentru tine, transformând ideea ta într-o operă de artă unică.',
                icon: <Palette className="w-8 h-8" />,
              },
              {
                title: 'Experiență & Expertiză',
                description: 'Peste 20 de ani de experiență în arta tatuajului, cu mii de lucrări realizate cu succes.',
                icon: <CheckCircle className="w-8 h-8" />,
              },
              {
                title: 'Ghidare Completă',
                description: 'Te ghidăm prin tot procesul, de la consultație până la îngrijirea post-procedură, pentru rezultate optime.',
                icon: <Heart className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 rounded-sm"
              >
                <div className="text-gradient mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding bg-black">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Întrebări <span className="text-gradient">Frecvente</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Cât costă un tatuaj?',
                answer: 'Prețul unui tatuaj depinde de mărime, complexitate, stil și timpul necesar. În timpul consultației, discutăm despre buget și găsim soluția potrivită pentru tine.',
              },
              {
                question: 'Cât durează o sesiune de tatuare?',
                answer: 'Durata variază în funcție de complexitatea design-ului. O sesiune poate dura de la 1-2 ore pentru tatuaje mici, până la 4-6 ore sau mai mult pentru proiecte mari.',
              },
              {
                question: 'Este dureros?',
                answer: 'Nivelul de disconfort variază în funcție de locația tatuajului și toleranța individuală la durere. Majoritatea clienților descriu senzația ca fiind tolerabilă.',
              },
              {
                question: 'Cum îngrijesc tatuajul după procedură?',
                answer: 'Oferim instrucțiuni detaliate pentru îngrijirea post-procedură. În general, este important să menții zona curată, hidratată și protejată de soare.',
              },
              {
                question: 'Pot programa o consultație?',
                answer: 'Da! Recomandăm să programezi o consultație pentru a discuta despre ideea ta și pentru a planifica proiectul. Contactează-ne prin telefon sau formularul de contact.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-white/10 hover:border-white/20 transition-all rounded-sm"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Gata să începi <span className="text-gradient">proiectul tău</span>?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Programează o consultație și discută cu noi despre ideea ta de tatuaj sau piercing.
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
