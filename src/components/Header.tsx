import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useI18n } from '../i18n';

type HeaderProps = { onToggleTheme?: () => void; isDark?: boolean; };

const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLang, lang } = useI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.experience', href: '#experience' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">EÖ</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white text-sm">
              Esra Öncü
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.nameKey}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                {t(item.nameKey)}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-gray-950"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.nameKey}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  {t(item.nameKey)}
                </button>
              ))}
              <div className="flex gap-2 pt-2">
                <button onClick={toggleLang} className="flex-1 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg">
                  {lang === 'tr' ? 'Switch to EN' : 'TR\'ye geç'}
                </button>
                <button onClick={() => { onToggleTheme && onToggleTheme(); }} className="flex-1 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg">
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;