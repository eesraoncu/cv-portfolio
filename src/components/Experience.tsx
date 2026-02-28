import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { useI18n } from '../i18n';

const Experience: React.FC = () => {
  const { t } = useI18n();

  const experiences = [
    {
      title: t('experience.internshipTitle'),
      company: t('experience.company'),
      companyShort: 'BTK',
      location: t('experience.location'),
      period: t('experience.period'),
      type: t('nav.home') === 'Ana Sayfa' ? 'Staj' : 'Internship',
      description: [t('experience.desc1'), t('experience.desc2'), t('experience.desc3'), t('experience.desc4')],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    },
  ];

  const volunteer = [
    {
      role: t('volunteer.contentCreator'),
      org: 'Turkishe Network',
      desc: t('volunteer.turkishe.desc'),
    },
    {
      role: t('volunteer.makuse.role'),
      org: t('volunteer.makuse.title'),
      desc: t('volunteer.makuse.desc'),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-tag">{t('nav.home') === 'Ana Sayfa' ? 'Deneyim' : 'Experience'}</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('heading.experience')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Timeline — col-span-2 */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pro-card p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 size={13} className="text-slate-400" />
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-semibold">{exp.type}</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('experience.responsibilities')}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <div className="dot-accent mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('experience.techs')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar — Volunteer */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pro-card p-6"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wide">{t('heading.volunteer')}</h3>
              <div className="space-y-5">
                {volunteer.map((v, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{v.org}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{v.role}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                    {i < volunteer.length - 1 && <div className="border-t border-slate-100 dark:border-slate-800 mt-3 pt-1" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reference */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="pro-card p-6"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">{t('heading.references')}</h3>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Yavuz Metin KOÇ</p>
                <p className="text-xs text-slate-400 mt-1">{t('org.icta')}</p>
                <a href="mailto:yavuzmetin.koc@ict.btk.gov.tr" className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block break-all">
                  yavuzmetin.koc@ict.btk.gov.tr
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;