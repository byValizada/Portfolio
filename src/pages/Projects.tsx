import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Maliyyə İdarəetmə Paneli",
      description: "İstifadəçilərin şəxsi maliyyələrini və xərclərini vizual qrafiklərlə idarə etməsinə imkan verən tam funksional panel.",
      tech: ["React", "TypeScript", "Tailwind", "Recharts"],
      link: "#",
      github: "#"
    },
    {
      title: "E-Ticarət Platforması",
      description: "Müasir UI dizaynına və mürəkkəb səbət məntiqinə sahib, yüksək performanslı onlayn alış-veriş tətbiqi.",
      tech: ["Next.js", "Framer Motion", "Stripe API"],
      link: "#",
      github: "#"
    },
    {
      title: "Süni İntellekt Chatbotu",
      description: "OpenAI API üzərində qurulmuş, fərdi cavablar verə bilən sürətli və minimalistik chat interfeysi.",
      tech: ["React", "Node.js", "OpenAI API"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-4">Seçilmiş Layihələr</h2>
        <p className="text-lg text-slate-600 dark:text-slate-600 dark:text-slate-400 max-w-2xl">
          Son zamanlar üzərində işlədiyim, texniki çətinlikləri həll edən və dizayn yönümlü bəzi layihələrim.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group glass rounded-3xl overflow-hidden relative flex flex-col hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="glow bg-blue-400/10"></div>
            
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <span className="text-slate-900 dark:text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Detallı bax</span>
              </div>
            </div>
            
            <div className="p-6 relative z-10 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
                <a href={project.github} className="text-slate-500 dark:text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <Code2 className="w-4 h-4" /> Kodlar
                </a>
                <a href={project.link} className="text-blue-500 hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm font-medium ml-auto">
                  <ExternalLink className="w-4 h-4" /> Canlı Baxış
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
