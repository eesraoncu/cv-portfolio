import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, Phone } from 'lucide-react';
import { useI18n } from '../i18n';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic: mailto ile gönder
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Ad: ${formData.name}\nE-posta: ${formData.email}\nMesaj: ${formData.message}`);
    window.location.href = `mailto:eesraoncu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
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
          <h2 className="text-6xl font-bold text-gray-900 mb-8 dark:text-gray-100">{t('heading.contact')}</h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed dark:text-gray-200">{t('contact.subtitle')}</p>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-16 card-hover bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border border-purple-200">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 dark:text-gray-100">{t('contact.sendMessage')}</h3>
              <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-200">{t('contact.cta')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="space-y-4"
                >
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">{t('contact.name')}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-600" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-purple-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder={t('contact.placeholder.name')}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="space-y-4"
                >
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">{t('contact.email')}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-pink-600" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-pink-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder={t('contact.placeholder.email')}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-4"
              >
                <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-2">{t('contact.subject')}</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-orange-600" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-orange-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder={t('contact.placeholder.subject')}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-4"
              >
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">{t('contact.message')}</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-6 h-6 text-purple-600" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-purple-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder={t('contact.placeholder.message')}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-center pt-8"
              >
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <Send className="w-6 h-6 mr-2" />
                  {t('contact.submit')}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 