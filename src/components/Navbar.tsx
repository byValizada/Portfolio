import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Navbar/Logo';
import NavLinks from './Navbar/NavLinks';
import Controls from './Navbar/Controls';
import debounce from '../lib/debounce';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const prefersReduced = useReducedMotion();

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 20);
    }, 30),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Persist theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  const toggleDark = useCallback(() => setIsDark(d => !d), []);
  const toggleLangOpen = useCallback(() => setLangOpen(o => !o), []);
  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      setLangOpen(false);
    },
    [i18n]
  );

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.career'), path: '/career' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.estimator'), path: '/calculator' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-b from-white/95 to-white/80 dark:from-[#020617]/80 border-b border-slate-200 dark:border-white/5 shadow-md py-0'
          : 'bg-transparent border-transparent py-2'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
          <Logo />
          <NavLinks links={links} />
          <Controls
            isDark={isDark}
            toggleDark={toggleDark}
            langOpen={langOpen}
            toggleLangOpen={toggleLangOpen}
            changeLanguage={changeLanguage}
            i18n={i18n}
            t={t}
          />
          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleLangOpen}
              className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white p-2 text-xs font-bold uppercase"
              aria-label="Toggle language"
            >
              {i18n.language}
            </motion.button>
            <motion.button
              onClick={toggleDark}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(o => !o)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                    `block px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                className="block px-4 py-3 mt-4 text-sm font-bold uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-xl text-center shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-white"
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
