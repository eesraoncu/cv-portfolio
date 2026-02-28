import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { useI18n } from '../i18n';

const About: React.FC = () => {
  const { t } = useI18n();

  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'eesraoncu@gmail.com', href: 'mailto:eesraoncu@gmail.com' },
    { icon: Phone, label: t('nav.home') === 'Ana Sayfa' ? 'Telefon' : 'Phone', value: '+90 506 092 2408' },
    { icon: MapPin, label: t('nav.home') === 'Ana Sayfa' ? 'Konum' : 'Location', value: 'Antalya, Türkiye' },
  ];

  const interests = [t('interest.web'), t('interest.backend'), t('interest.ai'), t('interest.data'), t('interest.ml')];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-tag">{t('nav.home') === 'Ana Sayfa' ? 'Hakkımda' : 'About'}</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('heading.about')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Bio — col-span-2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants} className="pro-card p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">{t('about.whoami')}</h3>
              <div className="space-y-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="pro-card p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('about.education')}</h3>
              </div>
              <div className="space-y-6">

                {/* MAKÜ */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{t('edu.degree')}</h4>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-0.5">{t('edu.school')}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">2023 – 2027</span>
                        <p className="text-xs text-slate-400 mt-1">GPA: <span className="font-semibold text-slate-600 dark:text-slate-300">3.32</span></p>
                      </div>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-3 leading-relaxed">{t('edu.description')}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800" />

                {/* Politechnika Białostocka — Erasmus */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-50 dark:bg-violet-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Computer Science</h4>
                        <p className="text-violet-600 dark:text-violet-400 text-sm font-medium mt-0.5">Politechnika Białostocka</p>
                        <span className="inline-flex items-center text-[10px] font-semibold bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded-full mt-1">Erasmus+</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">Şub 2026 – Tem 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="pro-card p-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                {personalInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors font-medium break-all">{info.value}</a>
                      ) : (
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="pro-card p-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">{t('about.interests')}</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="tech-tag">{interest}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;