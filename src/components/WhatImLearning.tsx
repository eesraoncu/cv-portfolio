import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

interface LearningItem {
    emoji: string;
    title: string; titleEn: string;
    desc: string; descEn: string;
    progress: number;
    color: string;
}

const items: LearningItem[] = [
    { emoji: '🤖', title: 'Makine Öğrenmesi', titleEn: 'Machine Learning', desc: 'Python ile scikit-learn ve TensorFlow', descEn: 'scikit-learn and TensorFlow with Python', progress: 35, color: '#f59e0b' },
    { emoji: '☁️', title: 'Docker & Kubernetes', titleEn: 'Docker & Kubernetes', desc: 'Container orkestrasyon sistemleri', descEn: 'Container orchestration systems', progress: 50, color: '#2563eb' },
    { emoji: '⛓️', title: 'Web3 & Solidity', titleEn: 'Web3 & Solidity', desc: 'Akıllı kontrat geliştirme', descEn: 'Smart contract development', progress: 60, color: '#7c3aed' },
    { emoji: '🧪', title: 'Test Otomasyonu', titleEn: 'Test Automation', desc: 'JUnit, Mockito ve React Testing Library', descEn: 'JUnit, Mockito and React Testing Library', progress: 45, color: '#059669' },
];

const WhatImLearning: React.FC = () => {
    const { lang } = useI18n();

    return (
        <section id="learning" className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="section-tag">{lang === 'tr' ? 'Öğrenme Yolculuğu' : 'Learning Journey'}</div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {lang === 'tr' ? 'Şu An Ne Öğreniyorum?' : 'Currently Learning'}
                    </h2>
                    <p className="text-slate-400 text-sm mt-2 max-w-xl">
                        {lang === 'tr' ? 'Sürekli gelişim yolculuğumda odaklandığım konular' : 'Topics I am currently focused on'}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="pro-card p-6 flex items-start gap-5"
                        >
                            <div className="text-2xl w-10 text-center flex-shrink-0 mt-0.5">{item.emoji}</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{lang === 'tr' ? item.title : item.titleEn}</h3>
                                    <span className="text-xs font-mono text-slate-400 flex-shrink-0">{item.progress}%</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">{lang === 'tr' ? item.desc : item.descEn}</p>
                                <div className="skill-bar-track">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.progress}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className="h-full rounded-full"
                                        style={{ background: item.color }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatImLearning;
