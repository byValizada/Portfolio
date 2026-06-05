import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero3D from '../components/Hero3D';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What services does byValizada provide?", a: "byValizada offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
    { q: "Lorem Ipsum is simply dummy text of the printing", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { q: "Lorem Ipsum is simply dummy text of the printing", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { q: "Lorem Ipsum is simply dummy text of the printing", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { q: "Lorem Ipsum is simply dummy text of the printing", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  return (
    <>
      <Helmet>
        <title>byValizada | Premier Tech Agency</title>
        <meta name="description" content="byValizada builds cutting-edge intelligent applications and transforms how businesses operate globally." />
      </Helmet>
      
      <div className="flex flex-col gap-32 py-20 pb-40">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 max-w-[1400px] mx-auto w-full pt-10">
          <div className="flex-1 space-y-8">
            <h1 className="text-[64px] font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Transforming Data<br />
              into <span className="bg-blue-600 text-white px-4 py-1 rounded-2xl inline-block mt-2">Decisions</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              Leverage the power of machine learning and AI to unlock insights that drive business growth
            </p>
            <div className="pt-2">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide px-8 py-3.5 rounded-full transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Start a Project
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-slate-400 dark:bg-slate-600"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-blue-500 text-white text-xs flex items-center justify-center font-bold">+10k</div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Over <span className="text-slate-900 dark:text-white font-bold">200+ clients</span> have trusted us</p>
            </div>
          </div>
          <div className="flex-[1.2] relative flex justify-end min-h-[400px]">
            {/* 3D Interaktiv Komponent */}
            <Hero3D />
          </div>
        </section>

      {/* Partners Logos */}
      <section className="w-full border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020617] py-10">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-between items-center opacity-40 grayscale gap-8">
          <span className="text-2xl font-bold">Spotify</span>
          <span className="text-2xl font-bold">zoom</span>
          <span className="text-2xl font-bold"># slack</span>
          <span className="text-2xl font-bold text-center leading-none">amazon</span>
          <span className="text-2xl font-bold text-center leading-none">Adobe</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-20">
          <h2 className="text-[32px] font-bold mb-4">Our Ultimate Set of Services for Your<br />Ideas Implementation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Predictive Analytics", desc: "Discover trends and make data-driven decisions that will shape your AI journey." },
            { title: "AI Consulting", desc: "Expert guidance on implementing AI solutions for your business needs." },
            { title: "Data Engineering", desc: "Build robust data pipelines and infrastructure for AI scaleability." }
          ].map((srv, i) => (
            <div key={i} className="bg-white dark:bg-[#0f1422] rounded-[32px] p-10 text-center flex flex-col items-center border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10 transition-colors">
              {/* Placeholder for the 3D icons in the screenshot */}
              <div className="w-32 h-32 mb-8 bg-slate-200 dark:bg-[#1e293b] rounded-2xl flex items-center justify-center">
                <div className="text-slate-500 dark:text-slate-600 dark:text-slate-400 font-medium text-sm">3D Icon</div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{srv.title}</h3>
              <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold">Why Choose Us</h2>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-12 max-w-5xl mx-auto">
          {[
            { title: "Innovation", desc: "Pushing boundaries with AI. Innovation is at our core, ensuring you stay ahead." },
            { title: "Collaboration", desc: "Working with you, not just for you. We collaborate closely to ensure success." },
            { title: "Excellence", desc: "Delivering highest standard solutions in everything we do." },
            { title: "Integrity", desc: "Honesty and transparency in every action, building trust and lasting relations." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-[100px] h-[100px] rounded-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#020617] font-bold" />
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Started */}
      <section className="max-w-[1400px] mx-auto px-4 w-full relative">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold">Why We Started</h2>
        </div>
        
        <div className="flex items-center justify-center gap-6 relative">
          <button className="absolute left-0 lg:-left-12 w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center hover:bg-slate-700 transition-colors z-10 hidden md:flex">
            <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-hidden">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-b from-[#0a0e17] to-transparent p-10 rounded-[32px] border border-slate-200 dark:border-white/5 text-center flex flex-col items-center">
                <div className="text-blue-500 text-4xl font-serif leading-none mb-6">"</div>
                <p className="text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed mb-10 flex-1">
                  "We built byValizada because we believe that the power of data and AI shouldn't be locked behind complex technical barriers. Every business deserves to make intelligent decisions."
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Valizada Tural</h4>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-[11px]">CEO, byValizada</p>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 lg:-right-12 w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center hover:bg-slate-700 transition-colors z-10 hidden md:flex">
            <ArrowRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wide px-8 py-3 rounded-full transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-[32px] font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const num = (i + 1).toString().padStart(2, '0');
            const isOpen = openFaq === i;
            
            return (
              <div key={i} className={`rounded-[20px] overflow-hidden transition-all duration-300 border border-slate-200 dark:border-white/5 ${isOpen ? 'bg-[#151b2b]' : 'bg-slate-100 dark:bg-[#0a0e17]'}`}>
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <span className={`text-lg font-bold ${isOpen ? 'text-blue-500' : 'text-slate-500 dark:text-slate-600 dark:text-slate-400'}`}>{num}</span>
                    <span className={`font-semibold text-[15px] ${isOpen ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'}`}>{faq.q}</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <X className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-500 dark:text-slate-600 dark:text-slate-400" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 ml-11">
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
    </>
  );
}
