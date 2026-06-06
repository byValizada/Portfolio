import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Career from './pages/Career';
import CareerDetails from './pages/CareerDetails';
import ClientPortal from './pages/ClientPortal';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import NotFound from './pages/NotFound';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white">
        <Navbar />
        
        <main className="flex-1 mt-24">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/:id" element={<CareerDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portal" element={<ClientPortal />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <LiveChat />

        {/* Global Footer */}
        <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020617] py-16 mt-auto">
          <div className="max-w-[1400px] mx-auto px-4">
            
            {/* Newsletter Section */}
            <div className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-[1.5]">
                <h3 className="font-bold text-lg mb-6">Newsletter</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Stay updated with our latest news and AI insights.</p>
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const input = form.elements[0] as HTMLInputElement;
                    const btn = form.elements[1] as HTMLButtonElement;
                    btn.disabled = true;
                    btn.innerHTML = '...';
                    const { addToCollection } = await import('./lib/firebase');
                    await addToCollection('subscribers', { email: input.value });
                    input.value = '';
                    btn.innerHTML = 'Done';
                    setTimeout(() => { btn.disabled = false; btn.innerHTML = '<svg class="lucide lucide-send w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>'; }, 3000);
                  }}
                  className="flex gap-2"
                >
                  <input type="email" required placeholder="Enter your email" className="flex-1 bg-slate-100 dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-full transition-colors flex items-center justify-center min-w-[40px]">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

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
