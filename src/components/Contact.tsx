import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useI18n } from '../i18n';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useI18n();
  const isTr = t('nav.home') === 'Ana Sayfa';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Ad: ${formData.name}\nE-posta: ${formData.email}\nMesaj: ${formData.message}`);
      window.open(`mailto:eesraoncu@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 disabled:opacity-60";

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-14">
          <div className="section-tag">{isTr ? 'İletişim' : 'Contact'}</div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('heading.contact')}</h2>
          <p className="text-slate-400 text-sm mt-2">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="pro-card p-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-5 uppercase tracking-wide">
                {isTr ? 'İletişim Bilgileri' : 'Contact Info'}
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'eesraoncu@gmail.com', href: 'mailto:eesraoncu@gmail.com' },
                  { icon: MessageSquare, label: 'LinkedIn', value: 'in/eesraoncu', href: 'https://linkedin.com/in/eesraoncu' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors font-medium break-all">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pro-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {isTr ? 'Fırsatlara açığım' : 'Open to opportunities'}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isTr ? 'Junior yazılım geliştirici veya staj pozisyonları için başvurmaya açığım.' : 'Open to applications for junior developer or internship positions.'}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="pro-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{t('contact.sendMessage')}</h3>
                  <p className="text-xs text-slate-400">{t('contact.cta')}</p>
                </div>
              </div>

              {/* Feedback */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    {isTr ? 'Mesajınız gönderildi! En kısa sürede dönüş yapacağım.' : "Message sent! I'll get back to you soon."}
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                  <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                    {isTr ? 'Bir hata oluştu. Tekrar deneyin.' : 'Something went wrong. Please try again.'}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.name')}</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={status === 'loading'}
                        className={`${inputClass} pl-9`} placeholder={t('contact.placeholder.name')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.email')}</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={status === 'loading'}
                        className={`${inputClass} pl-9`} placeholder={t('contact.placeholder.email')} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required disabled={status === 'loading'}
                    className={inputClass} placeholder={t('contact.placeholder.subject')} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">{t('contact.message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} disabled={status === 'loading'}
                    className={`${inputClass} resize-none`} placeholder={t('contact.placeholder.message')} />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />{isTr ? 'Gönderiliyor...' : 'Sending...'}</>
                  ) : (
                    <><Send size={15} /> {t('contact.submit')}</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;