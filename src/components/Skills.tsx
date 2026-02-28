import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';
import { useI18n } from '../i18n';

interface Skill { name: string; level: number; }

interface Category { name: string; icon: React.FC<any>; skills: Skill[]; color: string; }

const SkillBar: React.FC<{ skill: Skill; color: string; delay: number }> = ({ skill, color, delay }) => (
  <div className="space-y-1.5">
    <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{skill.name}</span>
    <div className="skill-bar-track">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const { t } = useI18n();

  const categories: Category[] = [
    {
      name: t('skills.backend'),
      icon: Database,
      color: '#2563eb',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'ASP.NET Core', level: 70 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      name: t('skills.frontend'),
      icon: Code,
      color: '#7c3aed',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      name: t('skills.databases'),
      icon: Zap,
      color: '#059669',
      skills: [
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      name: t('skills.roboticsOs'),
      icon: Globe,
      color: '#d97706',
      skills: [
        { name: 'ROS2', level: 70 },
        { name: 'Gazebo', level: 65 },
        { name: 'Ubuntu', level: 80 },
      ],
    },
  ];

  const tools = ['VS Code', 'IntelliJ IDEA', 'Postman', 'Swagger', 'Git', 'GitHub', 'Jira', 'Slack', 'Docker (learning)'];
  const languages = [
    { lang: t('skills.language.tr'), level: t('skills.level.native'), pct: 100 },
    { lang: t('skills.language.en'), level: t('skills.level.intermediate'), pct: 65 },
  ];
  const certs = [t('cert.turkishe'), t('cert.ygaFord'), t('cert.denizbank')];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-tag">{t('nav.home') === 'Ana Sayfa' ? 'Yetenekler' : 'Skills'}</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('heading.skills')}</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">{t('skills.lead')}</p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              viewport={{ once: true }}
              className="pro-card p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: cat.color + '18' }}>
                  <cat.icon size={17} style={{ color: cat.color }} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{cat.name}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} color={cat.color} delay={ci * 0.05 + si * 0.07} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row — Tools + Languages + Certs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pro-card p-7"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wide">{t('skills.toolsSection')}</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="tech-tag">{tool}</span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="pro-card p-7"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wide">{t('skills.languagesSection')}</h3>
            <div className="space-y-4">
              {languages.map((l, i) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{l.lang}</span>
                    <span className="text-xs text-slate-400">{l.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pro-card p-7"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wide">{t('skills.certificatesSection')}</h3>
            <div className="space-y-3">
              {certs.map(cert => (
                <div key={cert} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="dot-accent mt-1.5 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;