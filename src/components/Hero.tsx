import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Terminal, Code2, GitBranch, Cpu, FileText, User } from 'lucide-react';
import { useI18n } from '../i18n';
import profilePhoto from '../assets/profil.jpg';

const TYPING_STRINGS = [
  'Full Stack Developer',
  'Java & Spring Boot',
  'React & TypeScript',
  'Backend Engineer',
];

const TypewriterText: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPING_STRINGS[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % TYPING_STRINGS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/* ── Decorative right-side card ── */
const codeLines = [
  { indent: 0, token: 'public class', name: 'EsraOncu', ext: 'implements Developer {' },
  { indent: 1, token: 'List<String>', name: 'stack', ext: '= List.of("Java", "Spring", "React");' },
  { indent: 1, token: 'double', name: 'gpa', ext: '= 3.32;' },
  { indent: 1, token: 'String', name: 'status', ext: '= "Open to opportunities";' },
  { indent: 0, token: '', name: '', ext: '' },
  { indent: 1, token: 'public Product', name: 'build', ext: '(Idea idea) {' },
  { indent: 2, token: 'return', name: '', ext: 'cleanCode + passion;' },
  { indent: 1, token: '', name: '}', ext: '' },
  { indent: 0, token: '}', name: '', ext: '' },
];

const statCards = [
  { icon: GitBranch, label: 'Erasmus+', sub: 'Białystok, PL' },
  { icon: Cpu, label: 'TÜBİTAK', sub: '2209-B' },
  { icon: Terminal, label: 'Teknofest', sub: 'Finalist' },
];

const aboutItems = [
  { icon: User, label: 'Name', value: 'Esra Öncü' },
  { icon: Code2, label: 'Role', value: 'Software Engineer' },
  { icon: GitBranch, label: 'Education', value: 'Mehmet Akif Ersoy Uni.' },
  { icon: Cpu, label: 'GPA', value: '3.32 / 4.0' },
  { icon: Terminal, label: 'Focus', value: 'Java, Spring Boot, React' },
  { icon: FileText, label: 'Research', value: 'TÜBİTAK 2209-B' },
];

const HeroCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'code'>('about');

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative"
    >
      {/* Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-950 shadow-2xl overflow-hidden">
        {/* Mac-style top bar + Tabs */}
        <div className="bg-slate-900 border-b border-slate-700/50">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {/* Tabs */}
          <div className="flex px-4 gap-1 -mb-px">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-t-lg transition-all duration-200 ${activeTab === 'about'
                ? 'bg-slate-950 text-blue-400 border border-slate-700/50 border-b-slate-950'
                : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              <User size={11} />
              README.md
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-t-lg transition-all duration-200 ${activeTab === 'code'
                ? 'bg-slate-950 text-blue-400 border border-slate-700/50 border-b-slate-950'
                : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              <Code2 size={11} />
              EsraOncu.java
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[280px]">
          {activeTab === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 space-y-3"
            >
              {aboutItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <item.icon size={14} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 block leading-none">{item.label}</span>
                    <span className="text-sm text-slate-200 font-medium truncate block">{item.value}</span>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-3 mt-3 border-t border-slate-800 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 font-mono text-sm leading-7 select-none"
            >
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex"
                >
                  <span className="w-6 text-slate-600 text-xs mr-4 text-right select-none">{line.name || line.ext || line.token ? i + 1 : ''}</span>
                  <span style={{ paddingLeft: `${line.indent * 16}px` }} className="flex gap-1.5 flex-wrap">
                    {line.token && (
                      <span className={
                        ['public class', 'public Product'].includes(line.token) ? 'text-violet-400' :
                          ['List<String>', 'double', 'String'].includes(line.token) ? 'text-blue-400' :
                            line.token === 'return' ? 'text-pink-400' :
                              'text-slate-300'
                      }>{line.token}</span>
                    )}
                    {line.name && <span className={line.token === 'public class' ? 'text-yellow-300' : 'text-slate-200'}>{line.name}</span>}
                    {line.ext && <span className="text-slate-400">{line.ext}</span>}
                  </span>
                </motion.div>
              ))}
              {/* blinking cursor at end */}
              <div className="flex mt-1">
                <span className="w-6 text-slate-600 text-xs mr-4 text-right">{codeLines.length + 1}</span>
                <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse rounded-sm ml-0" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating stat pills */}
      {statCards.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.12 }}
          className={`absolute flex items-center gap-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg ${i === 0 ? '-top-5 -left-8' :
            i === 1 ? '-bottom-5 left-1/2 -translate-x-1/2' :
              '-top-5 -right-6'
            }`}
        >
          <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
            <s.icon size={13} className="text-blue-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none">{s.label}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">{s.sub}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { t } = useI18n();
  const isTr = t('nav.home') === 'Ana Sayfa';

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/eesraoncu', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/eesraoncu', icon: Linkedin },
    { name: 'Email', url: 'mailto:eesraoncu@gmail.com', icon: Mail },
  ];

  const techStack = ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-950 pt-16 relative overflow-hidden">
      {/* Grid background — more visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial fade from center */}
      <div
        className="dark:hidden absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, transparent 40%, rgba(255,255,255,0.85) 100%)',
        }}
      />
      <div className="dark:hidden absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 50%, transparent 40%, rgba(255,255,255,0.9) 100%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        {/* Two-column layout */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT: Content ─── */}
          <div className="space-y-8">
            {/* Top row: avatar + status */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Esra Öncü"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Esra+Oncu&background=2563eb&color=fff&size=96'; }}
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  {isTr ? 'Fırsatlara açığım' : 'Open to opportunities'}
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
                Esra<br />Öncü
              </h1>
              <div className="text-2xl lg:text-3xl font-light text-slate-400 dark:text-slate-500 h-9 flex items-center">
                <TypewriterText />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-primary group">
                {isTr ? 'Projelere Bak' : 'View Projects'}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">
                {t('hero.contactMe')}
              </a>
              <a
                href={`${process.env.PUBLIC_URL || ''}/Esra_Oncu_CV1.pdf`}
                download="Esra_Oncu_CV1.pdf"
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <Download size={14} />
                {t('hero.downloadCV')}
              </a>
            </motion.div>

            {/* Tech stack chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-xs text-slate-300 dark:text-slate-600 mr-1">
                {isTr ? 'Çalıştığım teknolojiler:' : 'Technologies:'}
              </span>
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="tech-tag"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-5 pt-4 border-t border-slate-100 dark:border-slate-800"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <link.icon size={13} />
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT: Decorative card ─── */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto mt-10">
              <HeroCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;