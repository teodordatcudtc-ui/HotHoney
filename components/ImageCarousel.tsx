'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  autoPlayInterval?: number
  className?: string
}

export default function ImageCarousel({ 
  images, 
  autoPlayInterval = 5000,
  className = '' 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  // Verifică dacă imaginile sunt path-uri reale sau placeholder-uri
  const isRealImage = (img: string) => {
    return img.startsWith('/') || img.startsWith('http')
  }

  const handleImageError = () => {
    setImageErrors((prev) => new Set(prev).add(currentIndex))
  }

  const currentImage = images[currentIndex]
  const hasError = imageErrors.has(currentIndex)

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {isRealImage(currentImage) && !hasError ? (
            <Image
              src={currentImage}
              alt={`Carousel image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
              onError={handleImageError}
              unoptimized={false}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent-from/30 flex items-center justify-center">
              <span className="text-white/30 text-sm uppercase tracking-wider">
                {hasError ? 'Image not found' : currentImage}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay pentru contrast */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}
