import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_top_right,rgba(250,204,21,0.06),transparent),radial-gradient(1200px_600px_at_bottom_left,rgba(34,211,238,0.06),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Team />
        <Contact />

        <footer className="py-12 border-t border-white/10 mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Fade & Blade Barbershop. All rights reserved.</p>
            <div className="text-sm text-slate-400">
              Built with care • Fresh fades daily
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
