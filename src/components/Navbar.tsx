import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/career' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-[#020617] border-b border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-black rounded-sm flex items-center justify-center font-bold text-lg leading-none pt-1">
              bV
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
              byValizada
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] uppercase tracking-wider font-semibold transition-colors hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Controls: Theme & Contact */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <NavLink to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold tracking-wide uppercase px-8 py-3 rounded-full transition-all">
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-blue-500 bg-slate-800' : 'text-slate-700 dark:text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-blue-500 hover:text-blue-400"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
