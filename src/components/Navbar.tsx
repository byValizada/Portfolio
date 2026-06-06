import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.career'), path: '/career' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.estimator'), path: '/calculator' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/5 shadow-sm py-0' 
          : 'bg-transparent border-transparent py-2'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-black rounded-sm flex items-center justify-center font-bold text-lg leading-none pt-1">
              bV
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
              byValizada
            </span>
          </div>

          {/* Desktop Menu with Layout Animation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] uppercase tracking-widest font-bold transition-colors z-10 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Controls: Theme, Language & Contact */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)} 
                className="p-2 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors uppercase text-sm font-bold"
              >
                <Globe className="w-5 h-5" /> {i18n.language}
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/10 rounded-lg shadow-xl overflow-hidden flex flex-col">
                  <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-left text-sm font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">EN</button>
                  <button onClick={() => changeLanguage('az')} className="px-4 py-2 text-left text-sm font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">AZ</button>
                  <button onClick={() => changeLanguage('ru')} className="px-4 py-2 text-left text-sm font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">RU</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <NavLink to="/contact" className="ml-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold tracking-wide uppercase px-8 py-3 rounded-full transition-all">
              {t('nav.contact')}
            </NavLink>
            <NavLink to="/portal" className="ml-2 p-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors" title="Client Portal">
              <User className="w-5 h-5" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => changeLanguage(i18n.language === 'en' ? 'az' : 'en')}
              className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white p-2 text-xs font-bold uppercase"
            >
              {i18n.language}
            </button>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white p-2"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden absolute w-full shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 mt-4 text-sm font-bold uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-xl text-center shadow-lg shadow-blue-500/20"
              >
                {t('nav.contact')}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
