import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useI18n } from '../i18n';

// Profil fotoğrafı import'u (alternatif yöntem)
// import profilePhoto from '/profil.jpg';
import profilePhoto from '../assets/profil.jpg';
// import cvPdf from '../assets/Esra_Oncu-CV.pdf';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/eesraoncu',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/eesraoncu',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:eesraoncu@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600'
    }
  ];

  const handleCVDownload = () => {
    // CV indirme fonksiyonu
    const link = document.createElement('a');
    link.href = '/Esra_Oncu_CV.pdf'; // public klasöründen erişim
    link.download = 'Esra_Oncu_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-[var(--bg-start)] dark:via-[#201a5a] dark:to-[var(--bg-end)]"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-orange-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />

      {/* Decorative Elements - Flowers and Stars */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-10 text-4xl opacity-60"
      >
        🌸
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-48 right-16 text-3xl opacity-70"
      >
        🌺
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-20 text-2xl opacity-50"
      >
        🌹
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -20, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 right-32 text-3xl opacity-60"
      >
        🌻
      </motion.div>

      {/* Stars */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-16 right-1/3 text-2xl"
      >
        ⭐
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 left-1/4 text-xl"
      >
        ✨
      </motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-1/3 text-2xl"
      >
        🌟
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Enhanced Profile Image - Enlarged */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl relative dark:border-midnight-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={profilePhoto} // Profil fotoğrafı - assets klasöründen import edildi
                  alt="Esra Öncü"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Profil fotoğrafı yüklenemedi, varsayılan görsel kullanılıyor');
                    e.currentTarget.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80";
                  }}
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-lg">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [360, 0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">💻</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold text-gray-900 dark:text-gray-100">
              Esra <span className="text-purple-600">Öncü</span>
            </h1>
            <h2 className="text-4xl md:text-5xl text-gray-700 font-medium dark:text-gray-200">
              Full Stack Developer
            </h2>
            <p className="text-2xl text-gray-500 max-w-5xl mx-auto leading-relaxed dark:text-gray-300">{t('hero.tagline')}</p>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-10"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-5 rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 shadow-xl ${link.color} transition-all duration-300 hover:shadow-2xl border border-purple-200 dark:bg-gradient-to-r dark:from-pink-500/20 dark:to-purple-500/20 dark:text-gray-100 dark:border dark:border-pink-400`}
              >
                <link.icon size={36} />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + '/Esra_Oncu_CV.pdf';
                link.download ='Esra_Oncu_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-12 py-5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-3xl font-bold border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-4 text-xl dark:bg-gradient-to-r dark:from-pink-500/20 dark:to-purple-500/20 dark:text-gray-100 dark:border dark:border-pink-400"
            >
              <Download size={28} />
              <span>{t('hero.downloadCV')}</span>
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-3xl font-bold border border-purple-200 transition-all duration-300 flex items-center space-x-4 text-xl shadow-xl hover:shadow-2xl dark:bg-gradient-to-r dark:from-pink-500/20 dark:to-purple-500/20 dark:text-gray-100 dark:border dark:border-pink-400"
            >
              <Mail size={28} />
              <span>{t('hero.contactMe')}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-3 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 