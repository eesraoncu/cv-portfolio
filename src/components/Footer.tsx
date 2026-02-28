import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useI18n } from '../i18n';

const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = [
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.experience', href: '#experience' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs font-mono">EÖ</span>
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Esra Öncü</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.nameKey}
                href={link.href}
                className="text-xs text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t(link.nameKey)}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/eesraoncu', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/eesraoncu', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:eesraoncu@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 hover:border-blue-400 dark:hover:text-blue-400 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            © {year} Esra Öncü — {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;