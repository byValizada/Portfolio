import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { useEffect } from 'react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/404');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1400px] mx-auto px-4 py-10 pb-40"
    >
      
      {/* Back Button */}
      <NavLink to="/blog" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white font-semibold text-sm mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Articles
      </NavLink>

      <article className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <div className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.2] mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-white/5 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
            
            {/* Social Share */}
            <div className="ml-auto flex items-center gap-2">
              <span className="mr-2"><Share2 className="w-4 h-4" /></span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-[#8e95a3] text-lg leading-relaxed">
          {post.content.map((paragraph, index) => {
            if (index === 0) {
              return <p key={index} className="lead text-xl text-slate-800 dark:text-slate-200 font-medium mb-8">{paragraph}</p>;
            }
            if (paragraph.length < 50 && !paragraph.includes('.')) {
              return <h2 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">{paragraph}</h2>;
            }
            return <p key={index} className="mb-6">{paragraph}</p>;
          })}
        </div>

      </article>
    </motion.div>
  );
}
