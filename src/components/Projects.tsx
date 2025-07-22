import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Teknofest Blockchain',
      description: 'Blockchain teknolojisi kullanarak güvenli ve şeffaf bir sistem geliştirdim. Akıllı kontratlar ve merkezi olmayan uygulamalar ile yenilikçi çözümler ürettim.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      category: 'blockchain',
      emoji: '🔗'
    },
    {
      id: 2,
      title: 'BeProPlant',
      description: 'Bitki bakımı ve takibi için geliştirilmiş mobil uygulama. Kullanıcılar bitkilerini takip edebilir, bakım hatırlatıcıları alabilir ve bitki sağlığı hakkında bilgi edinebilir.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'JavaScript', 'Redux', 'Expo'],
      category: 'mobile',
      emoji: '🌱'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-white via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements - Enlarged */}
      <motion.div
        animate={{
          y: [0, -30, 0],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Projeler
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Geliştirdiğim yenilikçi projeler ve teknolojik çözümler
          </p>
        </motion.div>

        {/* Category Filter - Only "Tümü" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-4 rounded-3xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-purple-200 hover:border-purple-400'
              }`}
            >
              Tümü
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl overflow-hidden card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Emoji Animation */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6 text-4xl"
                >
                  {project.emoji}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Kullanılan Teknolojiler
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-300 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-effect rounded-3xl p-16 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-pink-200">
            <h3 className="text-4xl font-semibold text-gray-900 mb-10 text-center">
              Proje Geliştirme Sürecim
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: '💡',
                  title: 'Analiz',
                  description: 'Proje gereksinimlerini analiz ederim'
                },
                {
                  icon: '🎨',
                  title: 'Tasarım',
                  description: 'Kullanıcı deneyimi odaklı tasarım'
                },
                {
                  icon: '⚡',
                  title: 'Geliştirme',
                  description: 'Modern teknolojiler ile kodlama'
                },
                {
                  icon: '🚀',
                  title: 'Deploy',
                  description: 'Güvenli ve hızlı deployment'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-200"
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Gönüllü Çalışmalar Bölümü */}
      <section id="volunteer" className="py-32 bg-gradient-to-br from-white via-orange-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Gönüllü Çalışmalar</h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">Toplumsal katkı ve liderlik deneyimlerim</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-orange-200">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Turkishe Network</h3>
              <p className="text-xl text-gray-600 mb-2">İçerik Üreticisi</p>
              <p className="text-lg text-gray-500">Teknoloji ve yazılım alanında topluluk için içerikler ürettim, bilgi paylaşımına katkı sağladım.</p>
            </div>
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-orange-200">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Maküse Araştırma Topluluğu</h3>
              <p className="text-xl text-gray-600 mb-2">Lisans Öğrenci Başkanı</p>
              <p className="text-lg text-gray-500">Topluluk liderliği, organizasyon ve bilimsel araştırma süreçlerinde aktif rol aldım.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects; 