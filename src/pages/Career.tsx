import { ChevronDown, Search, PenTool, Code, Megaphone, CheckSquare } from 'lucide-react';

export default function Career() {
  const jobs = [
    {
      id: "1",
      icon: <PenTool className="w-4 h-4 text-blue-500" />,
      title: "WEB DESIGNER",
      salary: "$40,000 - $60,000 / year",
      experience: "2+ years",
      location: "Remote",
      skills: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design experience."
    },
    {
      id: "2",
      icon: <Code className="w-4 h-4 text-blue-500" />,
      title: "MOBILE APP DEVELOPER",
      salary: "$60,000 - $90,000 / year",
      experience: "3+ years",
      location: "Hybrid (NY)",
      skills: "Proficiency in React Native or Flutter, strong understanding of iOS/Android app design guidelines, experience with RESTful APIs."
    },
    {
      id: "3",
      icon: <Megaphone className="w-4 h-4 text-blue-500" />,
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$50,000 - $70,000 / year",
      experience: "2+ years",
      location: "On-Site (NY)",
      skills: "Proficiency in SEO/SEM, social media marketing, experience with Google Analytics and Ads, content strategy creation."
    },
    {
      id: "4",
      icon: <CheckSquare className="w-4 h-4 text-blue-500" />,
      title: "PROJECT MANAGER",
      salary: "$80,000 - $110,000 / year",
      experience: "4+ years",
      location: "Remote",
      skills: "Strong leadership and communication skills, Agile/Scrum methodology experience, excellent organizational skills."
    }
  ];

  return (
    <div className="flex flex-col gap-24 py-10 pb-40">
      
      {/* Hero Section */}
      <section className="px-4 max-w-[1400px] mx-auto w-full">
        <div className="bg-white dark:bg-[#0f1422] rounded-[32px] border border-slate-200 dark:border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="flex-1 relative z-10 pl-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future with Us
            </h1>
            <p className="text-slate-600 dark:text-[#8e95a3] text-sm leading-relaxed max-w-xl mb-8">
              Join byValizada. Help us build cutting-edge intelligent applications and transform how businesses operate globally.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-8 py-3 rounded-full transition-all tracking-wide">
              See Open Positions
            </button>
          </div>
          <div className="flex-[0.8] flex justify-center relative z-10">
             {/* 3D Briefcase placeholder */}
             <div className="w-48 h-48 bg-slate-200 dark:bg-[#1e293b] rounded-xl border-t-8 border-yellow-600 flex flex-col relative shadow-2xl transform -rotate-6">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 border-4 border-[#1e293b] rounded-t-xl border-b-0"></div>
                <div className="w-full h-4 bg-yellow-600 mt-12 opacity-50"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-[1400px] mx-auto px-4 w-full -mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Dropdowns */}
            {['Role/Field', 'Experience', 'Location'].map((filter, i) => (
              <div key={i} className="relative cursor-pointer">
                <div className="bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-full py-2.5 px-6 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-3">
                  <span>{filter}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-full py-2.5 pl-6 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-white/20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
              <Search className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
            </div>
          </div>

        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold">Open Positions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white dark:bg-[#0f1422] rounded-3xl p-8 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10 transition-colors flex flex-col">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center">
                  {job.icon}
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">{job.title}</h3>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-slate-600 dark:text-[#8e95a3] text-[12px]">
                <p><span className="font-semibold text-slate-700 dark:text-slate-300">Salary:</span> {job.salary}</p>
                <p><span className="font-semibold text-slate-700 dark:text-slate-300">Experience:</span> {job.experience}</p>
                <p><span className="font-semibold text-slate-700 dark:text-slate-300">Location:</span> {job.location}</p>
              </div>

              {/* Skills */}
              <div className="mb-8 flex-1">
                <h4 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Skills</h4>
                <p className="text-slate-600 dark:text-[#8e95a3] text-[12px] leading-relaxed">{job.skills}</p>
              </div>

              {/* Button */}
              <a href={`/career/${job.id}`} className="block w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] py-3.5 rounded-xl transition-all tracking-wide">
                  Apply Now
                </button>
              </a>
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
