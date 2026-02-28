import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Star } from 'lucide-react';
import { useI18n } from '../i18n';

interface Project {
  id: number; title: string; description: string;
  image: string; technologies: string[]; category: string;
  githubUrl?: string; liveUrl?: string;
}

interface GitHubRepo { id: number; name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number; fork: boolean; }

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const { t } = useI18n();
  const isTr = t('nav.home') === 'Ana Sayfa';

  useEffect(() => {
    fetch('https://api.github.com/users/eesraoncu/repos?sort=updated&per_page=6&type=public')
      .then(r => r.json())
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data)) setGithubRepos(data.filter(r => !r.fork && r.description));
      })
      .catch(() => { });
  }, []);

  const projects: Project[] = [
    {
      id: 1, title: 'Teknofest Blockchain',
      description: t('projects.teknofestDesc'),
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      category: 'Blockchain', githubUrl: 'https://github.com/eesraoncu',
    },
    {
      id: 2, title: 'BeProPlant',
      description: t('projects.beproDesc'),
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Redux', 'Expo'],
      category: 'Mobile', githubUrl: 'https://github.com/eesraoncu',
    },
    {
      id: 3, title: 'Teknofest IKA',
      description: isTr
        ? 'Teknofest yarışması kapsamında geliştirilen İnsansız Kara Aracı (İKA) projesi. Otonom navigasyon ve görev yönetim sistemi.'
        : 'Unmanned Ground Vehicle (UGV) project developed for the Teknofest competition. Autonomous navigation and mission management system.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      technologies: ['ROS2', 'Python', 'C++', 'OpenCV', 'Gazebo'],
      category: 'Robotics', githubUrl: 'https://github.com/eesraoncu',
    },
    {
      id: 4, title: 'TÜBİTAK 2209-B TTS',
      description: isTr
        ? 'TÜBİTAK 2209-B Sanayi Odaklı Lisans Araştırma Projeleri kapsamında geliştirilen Türkçe Metinden Sese Dönüştürme (TTS) sistemi.'
        : 'Turkish Text-to-Speech (TTS) system developed under TÜBİTAK 2209-B Industry-Oriented Undergraduate Research Projects program.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'Deep Learning'],
      category: 'AI / NLP', githubUrl: 'https://github.com/eesraoncu',
    },
  ];


  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <X size={14} className="text-slate-600" />
                </button>
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">{selected.category}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{selected.title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{selected.description}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('projects.techs')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-1">
                  {selected.githubUrl && (
                    <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {selected.liveUrl && (
                    <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-14">
          <div className="section-tag">{isTr ? 'Projeler' : 'Projects'}</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('heading.projects')}</h2>
          <p className="text-slate-400 text-sm mt-2">{t('projects.lead')}</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="pro-card overflow-hidden cursor-pointer group"
            >
              <div className="h-40 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">{project.category}</span>
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Github size={13} className="text-slate-800" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <ExternalLink size={12} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-slate-400 py-0.5 px-1.5">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos */}
        {githubRepos.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Github size={18} className="text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isTr ? 'GitHub Repoları' : 'GitHub Repositories'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {githubRepos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="pro-card p-5 block"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">{repo.name}</h4>
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                        <Star size={11} /> {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">{repo.description}</p>
                  {repo.language && (
                    <span className="tech-tag text-[11px]">{repo.language}</span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;