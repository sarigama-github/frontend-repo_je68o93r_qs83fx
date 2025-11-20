import { motion } from 'framer-motion'

const tiers = [
  { name: 'Classic', price: '$25', features: ['Standard cut', 'Rinse & style', '10 min finish'] },
  { name: 'Premium', price: '$40', features: ['Skin fade or restyle', 'Hot towel', '15 min finish'] },
  { name: 'Deluxe', price: '$55', features: ['Premium cut + beard', 'Hot towel shave', 'Styling product'] },
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{opacity:0, y: 12}}
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{opacity:0, y: 16}}
              whileInView={{opacity:1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: i*0.05, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur ${i===1 ? 'ring-2 ring-amber-400' : ''}`}
            >
              <div className="text-amber-300 font-semibold">{t.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-white">{t.price}</div>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {t.features.map(f => <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full justify-center px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">Book this</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
