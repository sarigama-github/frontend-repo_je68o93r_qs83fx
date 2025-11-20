import { motion } from 'framer-motion'

const team = [
  { name: 'Leo', role: 'Master Barber', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Maya', role: 'Stylist', img: 'https://images.unsplash.com/photo-1545912452-2affbaf1ff6b?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Kai', role: 'Fade Specialist', img: 'https://images.unsplash.com/photo-1502828331036-4de4b3f01562?q=80&w=1470&auto=format&fit=crop' },
]

export default function Team(){
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{opacity:0, y: 12}}
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Meet the Crew
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{opacity:0, y: 16}}
              whileInView={{opacity:1, y: 0}}
              viewport={{ once: true }}
              transition={{ delay: i*0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <div className="aspect-[4/5]">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold">{m.name}</div>
                <div className="text-slate-300 text-sm">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
