import { PenTool, Code } from 'lucide-react';

export default function CareerDetails() {
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
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-40">
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617]/80"></div>
        
        <div className="relative z-10 text-center px-4 mt-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-8 drop-shadow-lg">
            WEB DESIGNER
          </h1>
          <button className="bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] px-10 py-3.5 rounded-full transition-all tracking-wide">
            Apply Now
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Description & Form */}
          <div className="flex-[2] space-y-12">
            
            {/* About */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">ABOUT THIS POSITION</h3>
              <div className="space-y-4 text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed">
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">RESPONSIBILITIES</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">REQUIREMENTS</h3>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">BENEFITS</h3>
              <p className="text-slate-600 dark:text-[#8e95a3] text-[13px] leading-relaxed mb-4">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Competitive Salary", "Health Insurance", "Flexible Hours", "Remote Work Options", "Gym Membership", "Annual Retreats"].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-[#8e95a3] text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Form */}
            <div className="bg-white dark:bg-[#0f1422] rounded-3xl border border-slate-200 dark:border-white/5 p-8 mt-16">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Apply Now</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  <input type="text" placeholder="Phone Number" className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 border-dashed rounded-xl px-4 py-8 text-center cursor-pointer hover:border-slate-400 dark:hover:border-white/20 transition-colors">
                  <p className="text-blue-500 text-sm font-medium mb-1">Click to upload CV</p>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-xs">PDF, DOCX up to 10MB</p>
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] py-4 rounded-xl transition-all mt-4 tracking-wide">
                  Submit Application
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Job Details Card */}
          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            <div className="bg-white dark:bg-[#0f1422] rounded-3xl border border-slate-200 dark:border-white/5 p-8">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">JOB DETAILS</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-[11px] uppercase tracking-wider font-bold mb-1">Date Posted</p>
                  <p className="text-slate-600 dark:text-[#8e95a3] text-[13px]">September 12, 2026</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-[11px] uppercase tracking-wider font-bold mb-1">Job ID</p>
                  <p className="text-slate-600 dark:text-[#8e95a3] text-[13px]">CA-WD-2026</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-[11px] uppercase tracking-wider font-bold mb-1">Location</p>
                  <p className="text-slate-600 dark:text-[#8e95a3] text-[13px]">Remote (Global)</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-600 dark:text-slate-400 text-[11px] uppercase tracking-wider font-bold mb-1">Job Type</p>
                  <p className="text-slate-600 dark:text-[#8e95a3] text-[13px]">Full-Time</p>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] py-3.5 rounded-xl transition-all mt-8 tracking-wide">
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Similar Positions */}
      <section className="max-w-[1200px] mx-auto px-4 w-full mt-10">
        <h2 className="text-[24px] font-bold mb-8">Similar Positions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white font-bold text-[13px] py-3.5 rounded-xl transition-all tracking-wide">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
