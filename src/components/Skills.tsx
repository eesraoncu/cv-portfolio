import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend Geliştirme',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      name: 'Backend Geliştirme',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'C++', level: 65 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      name: 'Veritabanları',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 80 }
      ]
    }
  ];

  const centeredCategories = [
    {
      name: 'Robotics & OS',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'ROS2', level: 70 },
        { name: 'Gazebo', level: 65 },
        { name: 'Ubuntu', level: 80 }
      ]
    },
    {
      name: 'Araçlar',
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-white via-secondary-50 to-accent-50 relative overflow-hidden">
      {/* Decorative Elements - Enlarged */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 25, -25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-16 left-16 text-6xl opacity-50"
      >
        🌸
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 35, 0],
          rotate: [0, -30, 30, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-24 text-5xl opacity-60"
      >
        🌺
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-1/3 text-4xl"
      >
        ⭐
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.4, 1, 0.4],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-24 right-1/4 text-5xl"
      >
        ✨
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -35, 35, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 left-1/3 text-4xl opacity-40"
      >
        🌹
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-80 right-1/4 text-3xl opacity-50"
      >
        🌻
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Yetenekler
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Yazılım geliştirme sürecinin her aşamasında kullandığım teknolojiler ve araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-10 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200"
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className={`w-18 h-18 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-lg font-semibold text-purple-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-4 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {centeredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-10 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-pink-200"
              >
                <div className="flex items-center space-x-4 mb-10">
                  <div className={`w-18 h-18 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-lg font-semibold text-pink-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-4 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-effect rounded-3xl p-16 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-orange-200">
            <h3 className="text-4xl font-semibold text-gray-900 mb-12">
              Ek Yetenekler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Diller</h4>
                <div className="space-y-6">
                  {[
                    { name: 'Türkçe', level: 'Ana Dil' },
                    { name: 'İngilizce', level: 'İleri Seviye' },
                    { name: 'Almanca', level: 'Orta Seviye' }
                  ].map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-200"
                    >
                      <span className="text-gray-700 text-xl font-medium">{lang.name}</span>
                      <span className="text-sm text-purple-600 font-bold">{lang.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Araçlar</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    'VS Code', 'Postman', 'IntelliJ IDEA', 'Swagger',
                    'Git', 'GitHub', 'Jira', 'Slack'
                  ].map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-badge text-center bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 border-pink-300 text-lg font-semibold py-4 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Sertifikalar</h4>
                <div className="space-y-6">
                  {[
                    'Turkishe Bootcamp Başarı Sertifikası',
                    'YGA & Ford Bootcamp Sertifikası',
                    'DenizBank Online Staj Sertifikası'
                  ].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-purple-50 rounded-3xl border border-orange-200"
                    >
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></div>
                      <span className="text-lg text-gray-600 font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 