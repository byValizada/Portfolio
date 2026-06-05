import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Palette, Brain, LineChart, Check } from 'lucide-react';

const services = [
  { id: 'web', name: 'Web Application', icon: <Monitor />, basePrice: 5000 },
  { id: 'mobile', name: 'Mobile App (iOS/Android)', icon: <Smartphone />, basePrice: 7000 },
  { id: 'design', name: 'UI/UX Design', icon: <Palette />, basePrice: 2000 },
  { id: 'ai', name: 'AI/ML Integration', icon: <Brain />, basePrice: 8000 },
  { id: 'data', name: 'Data Engineering', icon: <LineChart />, basePrice: 4000 }
];

export default function Calculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(1);

  const toggleService = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const calculateTotal = () => {
    const baseTotal = services.filter(s => selected.includes(s.id)).reduce((acc, curr) => acc + curr.basePrice, 0);
    return baseTotal * complexity;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1400px] mx-auto px-4 py-20 pb-40"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Project Estimator</h1>
        <p className="text-slate-600 dark:text-[#8e95a3] text-lg">Select the services you need to get an instant estimated budget for your project.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Selections */}
        <div className="flex-[2] space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">1. Select Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(srv => {
                const isSelected = selected.includes(srv.id);
                return (
                  <div 
                    key={srv.id} 
                    onClick={() => toggleService(srv.id)}
                    className={`cursor-pointer border-2 rounded-2xl p-6 transition-all ${isSelected ? 'border-blue-500 bg-blue-500/5 dark:bg-blue-500/10' : 'border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f1422] hover:border-blue-500/30'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isSelected ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                        {srv.icon}
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{srv.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">Starting from ${srv.basePrice}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">2. Project Complexity</h2>
            <div className="flex bg-slate-100 dark:bg-[#0f1422] p-2 rounded-2xl">
              {[
                { label: 'Basic', val: 1 },
                { label: 'Advanced', val: 1.5 },
                { label: 'Enterprise', val: 2.5 }
              ].map(opt => (
                <button 
                  key={opt.label}
                  onClick={() => setComplexity(opt.val)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${complexity === opt.val ? 'bg-white dark:bg-[#1e293b] text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Total */}
        <div className="flex-1">
          <div className="bg-gradient-to-br from-[#020617] to-slate-900 dark:from-blue-900 dark:to-slate-900 text-white rounded-[32px] p-8 sticky top-32 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 text-slate-300">Estimated Budget</h2>
            <div className="text-5xl font-black mb-8 text-white">
              ${calculateTotal().toLocaleString()}
              <span className="text-lg text-slate-400 font-normal block mt-2">USD (Approximate)</span>
            </div>
            
            <div className="space-y-4 mb-8">
              {selected.length === 0 ? (
                <p className="text-sm text-slate-400">Select at least one service to see the breakdown.</p>
              ) : (
                services.filter(s => selected.includes(s.id)).map(s => (
                  <div key={s.id} className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-slate-300">{s.name}</span>
                  </div>
                ))
              )}
            </div>

            <button 
              disabled={selected.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors"
            >
              Discuss Your Project
            </button>
            <p className="text-xs text-slate-400 text-center mt-4">
              * This is an estimate. Final cost will depend on detailed requirements.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
