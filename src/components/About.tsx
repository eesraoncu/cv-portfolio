import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'eesraoncu@gmail.com' },
    { icon: Phone, label: 'Telefon', value: '+90 506 092 2408' },
    { icon: MapPin, label: 'Konum', value: 'Antalya, Türkiye' },
  ];

  const education = [
    {
      degree: 'Yazılım Mühendisliği',
      school: 'Burdur Mehmet Akif Ersoy Üniversitesi',
      period: '2023 - 2027',
      gpa: '3.21',
      description: 'Bilgisayar bilimleri, algoritma analizi ve yazılım geliştirme konularında kapsamlı eğitim.'
    }
  ];

  const interests = [
    'Web Geliştirme',
    'Backend Geliştirme',
    'Yapay Zeka',
    'Veri Bilimi',
    'Makine Öğrenmesi'
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative overflow-hidden">
      {/* Decorative Elements - Enlarged */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-5xl opacity-50"
      >
        🌸
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -20, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 text-4xl opacity-60"
      >
        🌺
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-1/4 text-3xl"
      >
        ⭐
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-1/3 text-4xl"
      >
        ✨
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
            Hakkımda
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Modern web teknolojileri konusunda tutkulu bir yazılım geliştiricisi olarak, 
            kullanıcı deneyimini ön planda tutan yenilikçi çözümler geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                Kişisel Bilgiler
              </h3>
              <div className="space-y-8">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-8"
                  >
                    <div className="flex-shrink-0 w-18 h-18 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <info.icon className="w-9 h-9 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-500">{info.label}</p>
                      <p className="text-xl text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-pink-200">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10 flex items-center">
                <GraduationCap className="w-10 h-10 text-pink-600 mr-5" />
                Eğitim
              </h3>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-pink-200">
                      <h4 className="text-3xl font-semibold text-gray-900 mb-4">
                        {edu.degree}
                      </h4>
                      <p className="text-pink-600 font-bold text-xl mb-4">
                        {edu.school}
                      </p>
                      <div className="flex items-center space-x-6 mb-6">
                        <p className="text-base text-gray-500 font-medium">
                          {edu.period}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-semibold text-purple-600">GPA:</span>
                          <span className="text-xl font-bold text-purple-600">{edu.gpa}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Me & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* About Me */}
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-orange-200">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                Ben Kimim?
              </h3>
              <div className="space-y-8 text-gray-600 leading-relaxed text-xl">
                <p>
                  Burdur Mehmet Akif Ersoy Üniversitesi Yazılım Mühendisliği bölümünde öğrenciyim. 
                  Backend teknolojileri ve veritabanı yönetimi konularında geliştiriciyim.
                </p>
                <p>
                  Java, Spring Boot, PostgreSQL ve modern backend teknolojileri ile çalışmaktan keyif alıyorum. 
                  Güvenli ve ölçeklenebilir sistemler geliştirmeye odaklanıyorum.
                </p>
                <p>
                  Bilgi Teknolojileri ve İletişim Kurumunda yaz stajı deneyimim bulunmaktadır. 
                  Ekip çalışmasına yatkın, problem çözme becerileri güçlü ve sürekli öğrenmeye açık bir öğrenciyim.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="glass-effect rounded-3xl p-12 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                İlgi Alanlarım
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-badge text-center bg-gradient-to-r from-purple-100 to-secondary-100 text-primary-800 border-primary-200 text-xl font-semibold py-6 px-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Strengths - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-effect rounded-3xl p-16 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-pink-200 max-w-7xl mx-auto">
            <h3 className="text-4xl font-semibold text-gray-900 mb-12 text-center">
              Güçlü Yönlerim
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                'Problem Çözme',
                'Ekip Çalışması',
                'Sürekli Öğrenme',
                'Detay Odaklılık',
                'Yaratıcı Düşünme',
                'Zaman Yönetimi'
              ].map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-200"
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-gray-700 text-xl font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 