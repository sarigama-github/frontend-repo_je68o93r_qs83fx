import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1593702295090-2e8a28b47d59?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-b7082a5176bb?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585169330690-2b8238b2aaae?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567175740744-948f72fd37ee?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1470&auto=format&fit=crop',
]

export default function Gallery(){
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{opacity:0, y: 12}}
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Work We7re Proud Of
        </motion.h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{opacity:0, scale: 0.96}}
              whileInView={{opacity:1, scale: 1}}
              viewport={{ once: true }}
              transition={{ delay: i*0.03, duration: 0.4 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
