import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="text-[150px] md:text-[200px] font-black leading-none text-slate-200 dark:text-white/5 drop-shadow-xl select-none">
        404
      </h1>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 -mt-10 md:-mt-16 relative z-10">
        Page Not Found
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <NavLink 
        to="/" 
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full flex items-center gap-2 transition-all hover:-translate-x-1"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </NavLink>
    </motion.div>
  );
}
