'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram } from 'lucide-react'

export default function InstagramEmbed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Urmărește-ne pe <span className="text-gradient">Instagram</span>
            </h2>
            <p className="text-white/70 text-lg">
              Vezi cele mai recente lucrări și proiecte în desfășurare
            </p>
          </div>

          {/* Instagram Embed Container */}
          <div className="relative bg-white/5 border border-white/10 rounded-sm p-8 min-h-[400px] flex items-center justify-center">
            {/* Placeholder for Instagram embed */}
            <div className="text-center">
              <Instagram className="w-16 h-16 mx-auto mb-4 text-white/30" />
              <p className="text-white/50 mb-6">
                Instagram feed-ul va fi integrat aici
              </p>
              <a
                href="https://www.instagram.com/hot.honey.ttt/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-accent text-white font-semibold uppercase tracking-wider text-sm hover-glow rounded-sm transition-all"
              >
                Vezi pe Instagram
              </a>
            </div>

            {/* 
              To integrate actual Instagram feed, you can use:
              1. Instagram Basic Display API
              2. Third-party services like SnapWidget, Juicer, etc.
              3. Instagram oEmbed API
              
              Example with oEmbed (requires server-side):
              <iframe
                src="https://www.instagram.com/p/[POST_ID]/embed"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                className="w-full"
              />
            */}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/hot.honey.ttt/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              <span className="text-lg">@hot.honey.ttt</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
