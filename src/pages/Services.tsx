import { ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Machine Learning Solutions",
      desc: "Our ML solutions encompass a wide range of use cases from predictive analytics to natural language processing.",
      bullets: ["Deep Learning Networks", "Computer Vision Systems", "Natural Language Processing", "Reinforcement Learning"]
    },
    {
      title: "Blockchain Development",
      desc: "Build secure and transparent decentralized applications and smart contracts with our blockchain expertise.",
      bullets: ["Smart Contract Development", "DeFi Platforms", "NFT Marketplaces", "Tokenization"]
    },
    {
      title: "Algorithmic Trading",
      desc: "We build cutting-edge algorithmic trading platforms and quantitative models for financial institutions.",
      bullets: ["Trading Strategy Development", "Market Data Integration", "High-Frequency Trading", "Risk Management Systems"]
    },
    {
      title: "Data Engineering",
      desc: "We design and implement robust data pipelines, architectures, and data warehouses.",
      bullets: ["ETL/ELT Pipelines", "Data Warehousing", "Big Data Processing", "Real-time Analytics"]
    },
    {
      title: "Predictive Analytics",
      desc: "Leverage historical data to identify trends and predict future outcomes with high accuracy.",
      bullets: ["Sales Forecasting", "Demand Prediction", "Risk Assessment", "Customer Churn Analysis"]
    },
    {
      title: "MLOps & Infrastructure",
      desc: "We help you deploy, manage, and scale your machine learning models reliably in production.",
      bullets: ["Model Deployment", "Performance Monitoring", "CI/CD for ML", "Infrastructure Setup"]
    }
  ];

  const industries = [
    {
      title: "Financial Services & Trading",
      desc: "Software solutions tailored for the financial sector, including algorithmic trading and fintech platforms.",
      bullets: ["Wealth Management", "Risk Analysis", "Trading Systems", "Core Banking"]
    },
    {
      title: "Blockchain & Crypto",
      desc: "End-to-end development for blockchain networks, wallets, exchanges, and decentralized apps.",
      bullets: ["Crypto Wallets", "Smart Contracts", "Decentralized Finance", "Custom Blockchains"]
    },
    {
      title: "Esports & Gaming",
      desc: "High-performance applications, analytics, and platforms for the gaming industry.",
      bullets: ["Tournament Platforms", "Player Analytics", "Live Streaming Integration", "Game Server Hosting"]
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Secure, compliant, and innovative software solutions for healthcare providers.",
      bullets: ["Telemedicine Platforms", "Electronic Health Records", "Patient Management", "Medical AI Diagnostics"]
    },
    {
      title: "Manufacturing",
      desc: "Industry 4.0 solutions, IoT integrations, and supply chain optimization software.",
      bullets: ["IoT Ecosystems", "Supply Chain Analytics", "Predictive Maintenance", "Factory Automation"]
    },
    {
      title: "Retail & E-commerce",
      desc: "Scalable e-commerce platforms and retail analytics to enhance customer experiences.",
      bullets: ["Custom E-commerce", "Inventory Management", "Personalization Engines", "Payment Gateways"]
    }
  ];

  const renderCard = (item: any, i: number) => (
    <div key={i} className="bg-white dark:bg-[#0f1422] rounded-[32px] p-8 md:p-10 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10 transition-colors flex flex-col h-full">
      <div className="w-24 h-24 mb-6 bg-slate-200 dark:bg-[#1e293b] rounded-2xl mx-auto flex items-center justify-center">
         {/* Placeholder for the 3D icons from screenshot */}
         <div className="text-slate-500 dark:text-slate-600 dark:text-slate-400 font-medium text-xs">3D Icon</div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4">{item.title}</h3>
      <p className="text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed text-center mb-8 flex-1">{item.desc}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 mb-10">
        {item.bullets.map((bullet: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
            <span className="text-slate-600 dark:text-slate-400 text-[11px] font-medium leading-tight">{bullet}</span>
          </div>
        ))}
      </div>

      <button className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 border border-blue-500/20 font-bold text-[11px] uppercase tracking-wider px-6 py-2.5 rounded-full transition-all flex items-center gap-2 mx-auto mt-auto">
        Learn More <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-24 py-10 pb-40"
    >
      
      {/* Hero Section */}
      <section className="px-4 max-w-[1400px] mx-auto w-full">
        <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex-1 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Comprehensive <span className="text-blue-500">Digital Solutions</span>
            </h1>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed max-w-xl">
              We engineer scalable, secure, and high-performance software tailored to achieve specific business goals. 
              Our suite of solutions ranges from simple integrations to massive enterprise systems.
            </p>
          </div>
          <div className="flex-[0.8] flex justify-center relative z-10">
            {/* Using a Lucide icon as placeholder for the big 3D gears */}
            <div className="w-64 h-64 bg-slate-200 dark:bg-[#1e293b]/50 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/5 relative">
              <Settings className="w-32 h-32 text-blue-500 opacity-80" />
              <Settings className="w-16 h-16 text-cyan-400 absolute bottom-10 right-10 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 dark:text-[#8e95a3] text-sm max-w-2xl mx-auto">
            Comprehensive AI, Blockchain, and Data solutions designed to push your business into the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((srv, i) => renderCard(srv, i))}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold mb-4">Industries We Serve</h2>
          <p className="text-slate-600 dark:text-[#8e95a3] text-sm max-w-2xl mx-auto">
            Custom software solutions tailored specifically to the unique demands of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => renderCard(ind, i))}
        </div>
      </section>

    </motion.div>
  );
}
