import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10 pb-40">
      
      {/* Back Button */}
      <NavLink to="/blog" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white font-semibold text-sm mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Articles
      </NavLink>

      <article className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <div className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-6">
            Artificial Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.2] mb-8">
            The Future of AI in Enterprise Software
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-white/5 pb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">Tural Valizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Oct 24, 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 5 min read
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
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
            alt="AI Concept" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-[#8e95a3] text-lg leading-relaxed">
          <p className="lead text-xl text-slate-800 dark:text-slate-200 font-medium mb-8">
            Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how businesses operate, scale, and deliver value to their customers.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The Rise of Large Language Models</h2>
          <p className="mb-6">
            In recent years, the capabilities of Large Language Models (LLMs) have expanded exponentially. What started as simple text completion has evolved into complex reasoning, code generation, and sophisticated semantic understanding. Enterprises are now integrating these models into their core operations, transforming everything from customer support to complex data analysis.
          </p>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-10 italic text-xl text-slate-800 dark:text-slate-300">
            "The integration of AI into enterprise software is not about replacing human ingenuity; it's about amplifying it to unprecedented levels."
          </blockquote>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Key Areas of Transformation</h2>
          <ul className="list-disc pl-6 mb-8 space-y-4">
            <li><strong>Automated Data Analysis:</strong> AI systems can now process vast amounts of unstructured data and provide actionable insights in real-time.</li>
            <li><strong>Enhanced Customer Experience:</strong> Intelligent chatbots and personalized recommendation engines are creating more engaging user experiences.</li>
            <li><strong>Operational Efficiency:</strong> From supply chain optimization to automated HR processes, AI is significantly reducing operational overhead.</li>
          </ul>

          <p className="mb-6">
            As we move forward, the competitive advantage will heavily tilt towards organizations that not only adopt AI but seamlessly weave it into their organizational DNA. The journey requires careful planning, robust data infrastructure, and a clear understanding of both the capabilities and limitations of current AI technologies.
          </p>
        </div>

      </article>
    </div>
  );
}
