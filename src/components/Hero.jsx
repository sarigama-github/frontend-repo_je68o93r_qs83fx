import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Classic Cuts, Modern Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              Step into a refined experience. Sharp fades, hot towel shaves, and a vibe that feels like home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#pricing" className="px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">See Pricing</a>
              <a href="#services" className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors">Explore Services</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-3 text-amber-300"
            >
              <Scissors className="w-5 h-5" />
              <p className="text-sm">Open Tue–Sun • Walk-ins welcome</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1470&auto=format&fit=crop"
                alt="Barber at work"
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <p className="text-white font-semibold">Award-winning Fades</p>
              <p className="text-slate-300 text-sm">Precision and style in every cut</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
