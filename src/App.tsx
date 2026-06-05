import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Career from './pages/Career';
import CareerDetails from './pages/CareerDetails';
import Contact from './pages/Contact';
import { Globe, MessageCircle, Mail, Hash, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white">
        <Navbar />
        
        <main className="flex-1 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:id" element={<CareerDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020617] py-12 mt-auto">
          <div className="max-w-[1400px] mx-auto px-4">
            
            {/* Top row: Logo, Links, Socials */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-200 dark:border-white/5 pb-8 mb-8">
              
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white text-black rounded-sm flex items-center justify-center font-bold text-lg leading-none pt-1">
                  bV
                </div>
                <span className="font-bold tracking-tight text-slate-900 dark:text-white leading-tight text-xl">
                  byValizada
                </span>
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
                <a href="/services" className="hover:text-blue-500 transition-colors">Services</a>
                <a href="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
                <a href="/about" className="hover:text-blue-500 transition-colors">About Us</a>
                <a href="/career" className="hover:text-blue-500 transition-colors">Careers</a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-slate-900/5 dark:bg-white/5 transition-colors">
                  <span className="text-[10px] font-bold text-blue-500">FB</span>
                </a>
                <a href="#" className="w-8 h-8 rounded border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-slate-900/5 dark:bg-white/5 transition-colors">
                  <span className="text-[10px] font-bold text-blue-500">TW</span>
                </a>
                <a href="#" className="w-8 h-8 rounded border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-slate-900/5 dark:bg-white/5 transition-colors">
                  <span className="text-[10px] font-bold text-blue-500">IN</span>
                </a>
              </div>
            </div>

            {/* Bottom row: Contact info, Copyright */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-slate-600 dark:text-[#8e95a3] text-[11px]">
              
              <div className="flex flex-wrap justify-center items-center gap-6">
                <span className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-blue-500" /> hello@byvalizada.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-blue-500" /> +1 (555) 123-4567
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-blue-500" /> 123 Innovation St, Tech District, TX 75001
                </span>
              </div>

              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-slate-900 dark:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-900 dark:text-white transition-colors">Terms of Service</a>
              </div>

              <div className="text-center">
                © 2026 byValizada. All rights reserved.
              </div>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
