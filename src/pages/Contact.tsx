import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { addToCollection } = await import('../lib/firebase');
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    await addToCollection('contacts', {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    });
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

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
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="flex-1 relative z-10 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed max-w-xl mb-8">
              Reach out to us to discuss your project, learn more about our services, or explore partnership opportunities.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all tracking-wide">
              Send Message
            </button>
          </div>
          <div className="flex-[0.8] flex justify-center relative z-10">
             {/* 3D Chat bubbles placeholder */}
             <div className="relative w-48 h-48">
                <div className="absolute top-4 right-4 w-32 h-24 bg-blue-500 rounded-3xl rounded-br-sm shadow-2xl flex items-center justify-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 w-28 h-20 bg-slate-300 rounded-3xl rounded-bl-sm shadow-2xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          
          {/* Left: Form */}
          <div className="flex-[1.5] bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10">
            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-8">Send A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" required className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" required className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Phone (Optional)</label>
                  <input type="text" className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea required rows={6} className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <button disabled={loading || success} type="submit" className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 dark:text-white font-bold text-[13px] px-10 py-4 rounded-xl transition-all tracking-wide flex-shrink-0">
                  {loading ? 'Sending...' : success ? 'Sent!' : 'Send Message'}
                </button>
                {success && <span className="text-emerald-500 text-sm font-bold">Message received successfully!</span>}
              </div>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="flex-1 flex flex-col gap-8">
            
            <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 flex-1">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] mb-1">hello@byvalizada.com</p>
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[12px]">support@byvalizada.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] mb-1">+1 (555) 123-4567</p>
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[12px]">+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 dark:text-white mb-1">Office</h4>
                    <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] leading-relaxed">
                      123 Innovation Street,<br/>
                      Tech District, TX 75001<br/>
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 flex flex-col items-center justify-center text-center h-48 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale"></div>
              <div className="absolute inset-0 bg-white dark:bg-[#0f1422]/80"></div>
              
              <div className="relative z-10">
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all tracking-wide">
                  View on Map
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}
