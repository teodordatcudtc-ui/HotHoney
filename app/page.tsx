'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ImageCarousel from '@/components/ImageCarousel'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel 
            images={['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg']}
            autoPlayInterval={5000}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        
        {/* Content */}
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="container-custom section-padding relative z-10 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display mb-4 leading-[0.9] tracking-tight uppercase"
          >
            HOT <span className="text-gradient">HONEY</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-white/90 uppercase tracking-wider"
          >
            TATTOO STUDIO
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Arta tatuajului cu viziune artistică. Fiecare tatuaj este o poveste vizuală unică, nu un produs de serie.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm group"
              >
                Programare
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </Link>
            <Link href="/galerie">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold uppercase tracking-wider text-sm hover:border-white/40 hover:bg-white/5 transition-all rounded-sm"
              >
                Galerie
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Viziunea</span> Noastră
              </h2>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  La <strong className="text-white">Hot Honey Tattoo Studio</strong>, arta tatuajului este o formă de exprimare contemporană. Este o formă de artă în piele și timp. Este un gest de curaj, de asumare, de identitate.
                </p>
                
                <p>
                  Suntem o echipă de artiști, uniți de un respect profund față de acest meșteșug al tatuajului și de o viziune comună: <strong className="text-white">fiecare tatuaj trebuie să fie o poveste vizuală unică, nu un produs de serie</strong>.
                </p>
                
                <p>
                  Avem peste 20 de ani de experiență cumulată în spate, dar ce contează cu adevărat este prezentul – și cum îl transformăm, zi de zi, în expresie pură pe pielea celor care ne trec pragul.
                </p>
              </div>
            </motion.div>

            {/* Image Carousel - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-sm overflow-hidden border border-white/10"
            >
              <ImageCarousel 
                images={['/images/vision-1.jpg', '/images/vision-2.jpg', '/images/vision-3.jpg']}
                autoPlayInterval={4000}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            De Ce <span className="text-gradient">Hot Honey</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: '20+ Ani Experiență',
                description: 'Suntem artiști de tatuaje dedicați și pasionați, aducând o perspectivă bogată și diversificată în arta noastră.',
              },
              {
                title: 'Stiluri Diverse',
                description: 'Realistic, geometric, abstract, black & grey și neo japonez – oferind varietate și lucrări personalizate de înaltă calitate.',
              },
              {
                title: 'Viziune Artistică',
                description: 'Fiecare proiect este abordat cu atenție la detalii și respect pentru arta tatuajului ca formă de expresie.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 rounded-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stiluri Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
              Stiluri <span className="text-gradient">Diverse</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Realistic',
                  description: 'Tatuaje hiperrealiste cu detalii incredibile, care transformă imagini în opere de artă pe piele.',
                },
                {
                  title: 'Geometric',
                  description: 'Design-uri precise cu linii și forme geometrice, creând compoziții moderne și elegante.',
                },
                {
                  title: 'Abstract',
                  description: 'Arta abstractă care explorează forme, culori și compoziții unice, fără limite creative.',
                },
                {
                  title: 'Black & Grey',
                  description: 'Tatuaje în nuanțe de gri, creând profunzime și contrast prin tehnici de shading avansate.',
                },
                {
                  title: 'Neo-Japanese',
                  description: 'Reinterpretare modernă a stilului japonez tradițional, cu elemente contemporane.',
                },
                {
                  title: 'Fine Line',
                  description: 'Linii delicate și precise, creând design-uri subtile și rafinate cu detalii minuțioase.',
                },
              ].map((style, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 rounded-sm group"
                >
                  <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-white transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {style.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Gata să începi <span className="text-gradient">povestea ta</span>?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Programează o consultație și discută cu noi despre ideea ta de tatuaj sau piercing.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm"
              >
                Contactează-ne
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
