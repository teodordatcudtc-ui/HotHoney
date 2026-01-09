'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { X } from 'lucide-react'

// Placeholder images - Replace these with actual image paths
const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Tatuaj realistic', category: 'realistic' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Tatuaj geometric', category: 'geometric' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Tatuaj abstract', category: 'abstract' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Tatuaj black & grey', category: 'black-grey' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Tatuaj neo-japonez', category: 'neo-japanese' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Tatuaj fine line', category: 'fine-line' },
  { id: 7, src: '/images/gallery-7.jpg', alt: 'Tatuaj traditional', category: 'traditional' },
  { id: 8, src: '/images/gallery-8.jpg', alt: 'Tatuaj ornamental', category: 'ornamental' },
  { id: 9, src: '/images/gallery-9.jpg', alt: 'Tatuaj color', category: 'color' },
  { id: 10, src: '/images/gallery-10.jpg', alt: 'Piercing', category: 'piercing' },
  { id: 11, src: '/images/gallery-11.jpg', alt: 'Tatuaj realistic', category: 'realistic' },
  { id: 12, src: '/images/gallery-12.jpg', alt: 'Tatuaj geometric', category: 'geometric' },
]

const categories = ['toate', 'realistic', 'geometric', 'abstract', 'black-grey', 'neo-japanese', 'fine-line', 'traditional', 'ornamental', 'color', 'piercing']

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState('toate')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredImages = selectedCategory === 'toate' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
            <span className="text-gradient">Galerie</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
            Explorează lucrările noastre și descoperă arta tatuajului în toate formele sale.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-black border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all rounded-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-accent text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category === 'toate' ? 'Toate' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent-from/20 flex items-center justify-center">
                  <span className="text-white/30 text-sm uppercase tracking-wider">
                    {image.alt}
                  </span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder - Replace with actual image */}
            <div className="w-full h-[80vh] bg-gradient-to-br from-primary/30 to-accent-from/30 flex items-center justify-center rounded-sm">
              <span className="text-white/50 text-lg">
                {galleryImages.find(img => img.id === selectedImage)?.alt}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Instagram CTA */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Urmărește-ne pe <span className="text-gradient">Instagram</span>
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Vezi cele mai recente lucrări și proiecte în desfășurare pe profilul nostru Instagram.
            </p>
            <a
              href="https://www.instagram.com/hot.honey.ttt/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm transition-all"
            >
              @hot.honey.ttt
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
