import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col gap-24 py-10 pb-40">
      
      {/* Hero Section */}
      <section className="px-4 max-w-[1400px] mx-auto w-full">
        <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="flex-1 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're Engineers of<br/>Intelligent Change
            </h1>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed max-w-xl mb-8">
              Empowering the information that matters, we use your data. We point, serve to agents which drive real business growth.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all tracking-wide">
              Our Story
            </button>
          </div>
          <div className="flex-[0.8] flex justify-center relative z-10">
            {/* The CA dripping logo placeholder */}
            <div className="w-64 h-64 flex items-center justify-center relative">
              <span className="text-[120px] font-black text-slate-900 dark:text-white leading-none tracking-tighter mix-blend-overlay opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                bV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Container (Stats) */}
      <section className="max-w-[1400px] mx-auto px-4 w-full -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "CLIENTS", value: "200+" },
            { label: "PROJECTS", value: "280+" },
            { label: "HAPPY CLIENTS", value: "100%" },
            { label: "FOLLOWERS", value: "420K" },
            { label: "YEARS OF EXPERIENCE", value: "10+" }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center">
              <p className="text-slate-600 dark:text-[#8e95a3] text-[10px] uppercase font-bold tracking-wider mb-2">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[32px] font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed">
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            {/* Using the generated globe image from earlier, or a placeholder */}
            <div className="w-80 h-80 rounded-full border border-slate-200 dark:border-white/5 bg-slate-200 dark:bg-[#1e293b]/30 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,102,255,0.1)]">
              <img src="/about_network_3d.png" alt="Globe" className="w-[85%] h-[85%] object-cover rounded-full opacity-80" onError={(e) => { e.currentTarget.src = '/portfolio_project_placeholder.png' }} />
              <div className="absolute inset-0 border-4 border-emerald-500/50 rounded-full scale-105 rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center">
            {/* Target 3D placeholder */}
            <div className="w-80 h-80 rounded-full border border-slate-200 dark:border-white/5 bg-slate-200 dark:bg-[#1e293b]/30 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.1)]">
               <div className="w-48 h-48 rounded-full border-[16px] border-indigo-500/80 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border-[16px] border-white/80 flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-emerald-400"></div>
                 </div>
               </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[32px] font-bold mb-6">Our Mission</h2>
            <div className="space-y-4 text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed">
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold">Core Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI & Machine Learning", desc: "Expert strategies to analyze data and uncover critical insights, predict future trends, and empower decision making with precision." },
            { title: "Blockchain", desc: "Building secure, decentralized solutions using smart contracts and DApps to guarantee trust & transparency." },
            { title: "Algorithmic Trading", desc: "Automated, high-frequency trading systems utilizing advanced machine learning algorithms." },
            { title: "Esports Management", "desc": "Facilitating seamless match details tracking and reliable anti-cheat capabilities designed for competitive gaming." }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#0f1422] rounded-3xl p-8 border border-slate-200 dark:border-white/5 text-center flex flex-col items-center hover:border-slate-300 dark:border-white/10 transition-colors">
              <div className="w-20 h-20 mb-6 bg-slate-200 dark:bg-[#1e293b]/50 rounded-2xl flex items-center justify-center">
                 <span className="text-[10px] text-slate-500 dark:text-slate-600 dark:text-slate-400 font-bold">ICON</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-4">{item.title}</h4>
              <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Track Record */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold">Our Track Record</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "12+", title: "Years Of AI Development", desc: "A proven history of successfully deploying ML solutions across key industries." },
            { value: "$2B+", title: "Trading Volume Secured", desc: "Processed securely via robust platforms and smart contracts." },
            { value: "100+", title: "Blockchain Projects Audited", desc: "Ensuring 100% security for enterprise applications." },
            { value: "25+", title: "Esports Teams Onboard", desc: "Served top-tier organizations on a global scale." }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#0f1422] rounded-3xl p-8 border border-slate-200 dark:border-white/5 text-center flex flex-col items-center">
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{item.value}</h3>
              <h4 className="font-bold text-slate-900 dark:text-white text-[13px] mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-[#8e95a3] text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Impact */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold">Operational Impact</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "99.99%", title: "System Uptime", desc: "For secure and high availability infrastructure." },
            { value: "60%", title: "Cost Reduction", desc: "Demonstrated through automated AI & cloud IT." },
            { value: "85%", title: "Automation Rate", desc: "Across workflow, CI/CD, and DevOps." },
            { value: "3x", title: "Performance Gain", desc: "Measured improvement in request handling rate." }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#0f1422] rounded-3xl p-8 border border-slate-200 dark:border-white/5 text-center flex flex-col items-center">
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{item.value}</h3>
              <h4 className="font-bold text-slate-900 dark:text-white text-[13px] mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-[#8e95a3] text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Value */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold">Our Value</h2>
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

      {/* Ready To Discuss */}
      <section className="max-w-4xl mx-auto px-4 w-full mb-10">
        <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">READY TO DISCUSS</h2>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm mb-8">
              Your Product Needs With <span className="text-blue-500 font-bold">byValizada</span> Experts?
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-10 py-3.5 rounded-full transition-all tracking-wide">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
