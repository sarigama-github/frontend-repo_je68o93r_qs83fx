import { useState } from 'react'
import { Menu, X, Scissors, Phone, Instagram, Facebook, MapPin } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = () => setOpen(!open)
  const handleLinkClick = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/20">
            <Scissors className="w-5 h-5" />
          </div>
          <span className="text-white font-semibold tracking-wide group-hover:text-amber-300 transition-colors">Fade & Blade</span>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="tel:+1234567890" className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">
            <Phone className="w-4 h-4" /> Book Now
          </a>
        </div>

        <button onClick={handleNav} className="md:hidden text-white p-2 rounded hover:bg-white/10">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden relative mx-4 mt-2 rounded-xl border border-white/10 bg-slate-900/95 p-2 overflow-hidden">
          <div className="flex flex-col divide-y divide-white/5">
            <NavLink href="#services" onClick={handleLinkClick}>Services</NavLink>
            <NavLink href="#gallery" onClick={handleLinkClick}>Gallery</NavLink>
            <NavLink href="#pricing" onClick={handleLinkClick}>Pricing</NavLink>
            <NavLink href="#team" onClick={handleLinkClick}>Team</NavLink>
            <NavLink href="#contact" onClick={handleLinkClick}>Contact</NavLink>
            <div className="flex items-center gap-3 px-4 py-3">
              <a href="https://instagram.com" target="_blank" className="text-slate-300 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com" target="_blank" className="text-slate-300 hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#contact" className="ml-auto inline-flex items-center gap-1 text-amber-300"><MapPin className="w-4 h-4" /> Find us</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
