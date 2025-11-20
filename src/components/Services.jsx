import { motion } from 'framer-motion'
import { Scissors, Sparkles, SprayCan, Bath, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Signature Fade',
    desc: 'Skin fades, tapers and classic cuts tailored to your style.',
    price: '$30'
  },
  {
    icon: Bath,
    title: 'Hot Towel Shave',
    desc: 'Traditional straight-razor shave with premium oils and towels.',
    price: '$25'
  },
  {
    icon: SprayCan,
    title: 'Beard Trim & Shape',
    desc: 'Clean lines and sculpted beard to match your look.',
    price: '$18'
  },
  {
    icon: Sparkles,
    title: 'Kids Cut',
    desc: 'Fresh styles for the little legends. Gentle and patient.',
    price: '$20'
  },
]

export default function Services(){
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.07),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{opacity:0, y: 12}}
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          What We Do Best
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{opacity:0, y: 16}}
              whileInView={{opacity:1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: i*0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur hover:border-amber-300/30 hover:shadow-amber-300/10 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <div className="mt-4 text-amber-300 font-semibold">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
