import { useState } from 'react';
import { LayoutDashboard, FileText, CheckCircle, Search, Bell, LogOut, Download, CreditCard, Loader2 } from 'lucide-react';
import { login, logout } from '../lib/auth';

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [payingInvoice, setPayingInvoice] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      setIsLoggedIn(true);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
  };

  const handlePayment = () => {
    setPayingInvoice(true);
    setTimeout(() => {
      alert("Mock Stripe Checkout Started!");
      setPayingInvoice(false);
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mx-auto mb-4">
              bV
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Client Portal</h1>
            <p className="text-sm text-slate-500 dark:text-[#8e95a3]">Sign in to manage your projects</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#0a0e17] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="client@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#0a0e17] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600" />
                <span className="text-slate-600 dark:text-[#8e95a3]">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:text-blue-400 font-medium">Forgot password?</a>
            </div>
            {error && <div className="p-3 bg-red-500/10 text-red-500 text-sm rounded-lg">{error}</div>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-colors mt-6 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10 pb-40">
      
      {/* Dashboard Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-slate-200 dark:border-white/5 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, Innovator Inc.</h1>
          <p className="text-slate-500 dark:text-[#8e95a3] mt-1">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="pl-10 pr-4 py-2 bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="relative p-2 bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-50 dark:border-[#020617]"></span>
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: "Active Projects", val: "2", icon: <LayoutDashboard />, color: "text-blue-500" },
          { title: "Pending Invoices", val: "$4,500", icon: <FileText />, color: "text-orange-500" },
          { title: "Completed Milestones", val: "12", icon: <CheckCircle />, color: "text-emerald-500" }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.val}</h3>
            </div>
            <div className={`p-4 rounded-full bg-slate-50 dark:bg-[#0a0e17] ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Project Tracker */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Projects</h2>
          
          <div className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Demand Forecasting System</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Phase 3: Model Training & Validation</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold">In Progress</span>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Overall Progress</span>
                <span className="text-blue-500">65%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-[#0a0e17] rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Recent Milestones</h4>
              {[
                { name: "Data Pipeline Setup", status: "completed", date: "Oct 12" },
                { name: "Initial Model Architecture", status: "completed", date: "Oct 28" },
                { name: "Hyperparameter Tuning", status: "current", date: "In Progress" },
                { name: "API Integration", status: "pending", date: "Upcoming" }
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${m.status === 'completed' ? 'bg-emerald-500' : m.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                  <div className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">{m.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{m.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          
          {/* Documents & Invoices */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Invoices & Documents</h2>
            <div className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-white/5 rounded-2xl p-4 space-y-3">
              
              {/* Unpaid Invoice */}
              <div className="flex flex-col gap-3 p-4 rounded-xl border border-orange-500/30 bg-orange-500/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 text-orange-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Invoice_INV-2026-89.pdf</p>
                      <p className="text-xs text-orange-500 font-semibold">Due: $4,500</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handlePayment}
                  disabled={payingInvoice}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-bold transition-colors disabled:opacity-50"
                >
                  {payingInvoice ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />} 
                  {payingInvoice ? 'Processing...' : 'Pay with Stripe'}
                </button>
              </div>

              {[
                { name: "Q3_Project_Report.pdf", size: "2.4 MB" },
                { name: "API_Documentation_v2.md", size: "45 KB" }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-[#0a0e17] rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[150px]">{doc.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{doc.size}</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-blue-500 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
            <p className="text-sm text-blue-100 mb-6 leading-relaxed">Our dedicated support team is available 24/7 to help you with any questions.</p>
            <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm">
              Open Support Ticket
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
