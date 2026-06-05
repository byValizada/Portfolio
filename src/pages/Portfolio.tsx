import { ArrowRight, ChevronDown, Loader2, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedService, setSelectedService] = useState("All Services");
  
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const industryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  const industriesList = ["All Industries", "Financial Services", "Healthcare", "Esports", "Manufacturing", "Retail", "Blockchain"];
  const servicesList = ["All Services", "Predictive Analytics", "AI Consulting", "Data Engineering", "Machine Learning", "Algorithmic Trading"];

  const projectsData = [
    {
      title: "Predictive Trading Bot",
      img: "/portfolio_project_placeholder.png",
      desc: "An advanced algorithmic trading platform powered by machine learning for high-frequency financial markets.",
      bullets: ["Real-time data processing", "Risk management algorithms", "Sub-millisecond execution", "Backtesting engine"],
      industry: "Financial Services",
      service: "Algorithmic Trading"
    },
    {
      title: "Medical AI Diagnostics",
      img: "/portfolio_project_placeholder.png",
      desc: "A computer vision model designed to detect early signs of diseases from medical imaging scans.",
      bullets: ["Computer vision integration", "HIPAA compliant storage", "Automated reporting", "99.9% accuracy rate"],
      industry: "Healthcare",
      service: "Machine Learning"
    },
    {
      title: "Esports Tournament Hub",
      img: "/portfolio_project_placeholder.png",
      desc: "A scalable platform for hosting massive multiplayer online gaming tournaments with live analytics.",
      bullets: ["Live match analytics", "Anti-cheat integration", "Automated brackets", "Global leaderboards"],
      industry: "Esports",
      service: "Data Engineering"
    },
    {
      title: "Smart Factory IoT",
      img: "/portfolio_project_placeholder.png",
      desc: "IoT network integration for predicting machine failures and optimizing supply chain operations.",
      bullets: ["Predictive maintenance", "Supply chain tracking", "Sensor data ingestion", "Real-time alerts"],
      industry: "Manufacturing",
      service: "Predictive Analytics"
    },
    {
      title: "DeFi Crypto Wallet",
      img: "/portfolio_project_placeholder.png",
      desc: "A secure, non-custodial wallet application for decentralized finance with multi-chain support.",
      bullets: ["Smart contract auditing", "Multi-signature security", "Cross-chain swaps", "Fiat on-ramp"],
      industry: "Blockchain",
      service: "Data Engineering"
    },
    {
      title: "Retail Customer Insights",
      img: "/portfolio_project_placeholder.png",
      desc: "An AI-driven CRM system that analyzes customer behavior to optimize retail store layouts and online marketing.",
      bullets: ["Customer churn prediction", "Recommendation engine", "Foot traffic analytics", "Sales forecasting"],
      industry: "Retail",
      service: "AI Consulting"
    }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearAll = () => {
    setSearchQuery("");
    setSelectedIndustry("All Industries");
    setSelectedService("All Services");
  };

  // Filter the projects
  const filteredProjects = projectsData.filter(project => {
    const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchIndustry = selectedIndustry === "All Industries" || project.industry === selectedIndustry;
    const matchService = selectedService === "All Services" || project.service === selectedService;
    return matchSearch && matchIndustry && matchService;
  });

  return (
    <div className="flex flex-col gap-24 py-10 pb-40">
      
      {/* Hero Section */}
      <section className="px-4 max-w-[1400px] mx-auto w-full">
        <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="flex-1 relative z-10 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work, Your Future</h1>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed max-w-xl">
              We engineer scalable, secure, and high-performance software tailored to achieve specific business goals. 
              Our suite of solutions ranges from simple integrations to massive enterprise systems.
            </p>
          </div>
          <div className="flex-[0.8] flex justify-center relative z-10">
            <div className="w-[300px] h-[200px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm relative overflow-hidden">
               <div className="absolute inset-x-4 top-4 h-8 bg-slate-900/10 dark:bg-white/10 rounded-md"></div>
               <div className="absolute inset-x-4 top-16 bottom-4 flex gap-4">
                 <div className="flex-[2] bg-slate-900/10 dark:bg-white/10 rounded-md"></div>
                 <div className="flex-1 bg-slate-900/10 dark:bg-white/10 rounded-md"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold mb-4">Our Case Studies</h2>
          <p className="text-slate-600 dark:text-[#8e95a3] text-sm max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations through custom AI and data solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto relative z-20">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search in projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-full py-3 pl-6 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
              <Search className="w-4 h-4 text-slate-900 dark:text-white" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            
            {/* Industry Dropdown */}
            <div className="relative cursor-pointer" ref={industryRef}>
              <div 
                className={`bg-slate-100 dark:bg-[#0a0e17] border ${isIndustryOpen ? 'border-blue-500' : 'border-slate-300 dark:border-white/10'} rounded-full py-3 px-6 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-3 hover:border-slate-400 dark:hover:border-white/20 transition-colors`}
                onClick={() => { setIsIndustryOpen(!isIndustryOpen); setIsServiceOpen(false); }}
              >
                <span className="min-w-[90px]">{selectedIndustry}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustryOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isIndustryOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white dark:bg-[#0f1422] border border-slate-300 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden py-2 z-50"
                  >
                    {industriesList.map(ind => (
                      <div 
                        key={ind} 
                        className={`px-4 py-2.5 text-sm hover:bg-slate-900/5 dark:bg-white/5 transition-colors ${selectedIndustry === ind ? 'text-blue-500 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                        onClick={() => { setSelectedIndustry(ind); setIsIndustryOpen(false); }}
                      >
                        {ind}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Dropdown */}
            <div className="relative cursor-pointer" ref={serviceRef}>
              <div 
                className={`bg-slate-100 dark:bg-[#0a0e17] border ${isServiceOpen ? 'border-blue-500' : 'border-slate-300 dark:border-white/10'} rounded-full py-3 px-6 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-3 hover:border-slate-400 dark:hover:border-white/20 transition-colors`}
                onClick={() => { setIsServiceOpen(!isServiceOpen); setIsIndustryOpen(false); }}
              >
                <span className="min-w-[90px]">{selectedService}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isServiceOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white dark:bg-[#0f1422] border border-slate-300 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden py-2 z-50"
                  >
                    {servicesList.map(srv => (
                      <div 
                        key={srv} 
                        className={`px-4 py-2.5 text-sm hover:bg-slate-900/5 dark:bg-white/5 transition-colors ${selectedService === srv ? 'text-blue-500 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                        onClick={() => { setSelectedService(srv); setIsServiceOpen(false); }}
                      >
                        {srv}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Clear All Button */}
            <button 
              onClick={clearAll}
              className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all tracking-wide"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
            {filteredProjects.map((project) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={project.title} 
                className="bg-white dark:bg-[#0f1422] rounded-[32px] p-8 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all flex flex-col group cursor-pointer"
              >
                {/* Card Image */}
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-8 relative">
                  {/* Category Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{project.industry}</span>
                  </div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500"
                  />
                </div>

                {/* Title & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <p className="text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed mb-8 flex-1">
                  {project.desc}
                </p>
                
                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2">
                  {project.bullets.map((bullet: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-400 text-[11px] font-medium leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 dark:text-slate-600 dark:text-slate-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg">No projects match your current filters.</p>
            <button onClick={clearAll} className="text-blue-500 hover:text-blue-400 mt-2 font-medium">Clear filters</button>
          </div>
        )}

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors text-sm font-semibold tracking-wider">
              <Loader2 className="w-5 h-5" />
              LOAD MORE...
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
