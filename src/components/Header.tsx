import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useI18n } from '../i18n';

type HeaderProps = {
  onToggleTheme?: () => void;
  isDark?: boolean;
};

const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t, toggleLang, lang } = useI18n();

  const navItems = [
    { nameKey: 'nav.home', href: '#home' },
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.experience', href: '#experience' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-dark-800/90 backdrop-blur-md shadow-xl border-b border-purple-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Esra <span className="text-purple-600">Öncü</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.nameKey}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-xl font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 relative group dark:text-gray-100 dark:hover:text-pink-400"
              >
                {t(item.nameKey)}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className="px-4 py-3 rounded-2xl bg-white/70 dark:bg-dark-700 text-gray-800 dark:text-white border border-purple-200 shadow hover:shadow-md transition"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.nameKey}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-xl font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 py-3 px-4 rounded-2xl hover:bg-purple-50 dark:text-gray-100 dark:hover:text-pink-400 dark:hover:bg-pink-500/20"
              >
                {t(item.nameKey)}
              </motion.button>
            ))}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLang}
                className="w-full mb-3 p-3 rounded-2xl bg-white/90 text-gray-900 border border-purple-200 shadow hover:shadow-md transition"
              >
                {lang === 'tr' ? 'Switch to English' : 'Türkçe’ye geç'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { onToggleTheme && onToggleTheme(); }}
                className="w-full p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isDark ? 'Light' : 'Dark'} Mode
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 