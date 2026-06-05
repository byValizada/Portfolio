import { ArrowRight, Clock, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Software",
      excerpt: "How large language models are transforming everyday business operations.",
      category: "Artificial Intelligence",
      author: "Tural Valizada",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Building Scalable Data Pipelines",
      excerpt: "A comprehensive guide to modern data engineering practices.",
      category: "Data Engineering",
      author: "Tech Team",
      date: "Oct 18, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "UI/UX Trends for 2027",
      excerpt: "What to expect in user interface design next year.",
      category: "Design",
      author: "Design Team",
      date: "Oct 12, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 pb-40">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Latest Insights</h1>
        <p className="text-slate-600 dark:text-[#8e95a3] text-lg">Thoughts, stories and ideas on technology, design and business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
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
    </div>
  );
}
