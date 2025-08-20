import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import { useI18n } from '../i18n';

const Experience: React.FC = () => {
  const { t } = useI18n();
  const experiences = [
    {
      title: t('experience.internshipTitle'),
      company: t('experience.company'),
      location: t('experience.location'),
      period: t('experience.period'),
      description: [
        t('experience.desc1'),
        t('experience.desc2'),
        t('experience.desc3'),
        t('experience.desc4')
      ],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements - Enlarged */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-16 left-16 text-5xl opacity-50"
      >
        🌸
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -25, 25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-24 text-4xl opacity-60"
      >
        🌺
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-1/3 text-3xl"
      >
        ⭐
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-24 right-1/4 text-4xl"
      >
        ✨
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -30, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 left-1/3 text-3xl opacity-40"
      >
        🌹
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t('heading.experience')}</h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">{t('experience.lead')}</p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Experience Header */}
                <div className="lg:col-span-1">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Building className="w-6 h-6 text-purple-600" />
                        <span className="text-xl text-gray-700 font-semibold">
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-pink-600" />
                        <span className="text-lg text-gray-600">
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Calendar className="w-6 h-6 text-orange-600" />
                        <span className="text-lg text-gray-600 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6">{t('experience.responsibilities')}</h4>
                      <ul className="space-y-4">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex items-start space-x-4 text-lg text-gray-700 leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6">{t('experience.techs')}</h4>
                      <div className="flex flex-wrap gap-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-300 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gradient-to-r dark:from-pink-500/20 dark:to-purple-500/20 dark:text-white dark:border-pink-400"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 