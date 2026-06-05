import { ArrowRight, Clock, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1400px] mx-auto px-4 py-20 pb-40"
    >
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Latest Insights</h1>
        <p className="text-slate-600 dark:text-[#8e95a3] text-lg">Thoughts, stories and ideas on technology, design and business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <NavLink to={`/blog/${post.id}`} key={post.id} className="group bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">{post.title}</h3>
              <p className="text-sm text-slate-600 dark:text-[#8e95a3] mb-6 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-blue-500 font-bold text-sm gap-2">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}
