import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{opacity:0, y: 12}}
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Visit Us
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
            <iframe
              className="w-full h-80"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-amber-300" />
              123 Fade Street, New York, NY
            </div>
            <div className="mt-3 flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-amber-300" />
              (123) 456-7890
            </div>
            <div className="mt-6">
              <a href="tel:+11234567890" className="inline-flex px-5 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">Call to Book</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
