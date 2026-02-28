import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

type Dictionary = Record<string, Record<Language, string>>;

const dictionary: Dictionary = {
  'nav.home': { tr: 'Ana Sayfa', en: 'Home' },
  'nav.about': { tr: 'Hakkımda', en: 'About' },
  'nav.experience': { tr: 'Deneyim', en: 'Experience' },
  'nav.skills': { tr: 'Yetenekler', en: 'Skills' },
  'nav.projects': { tr: 'Projeler', en: 'Projects' },
  'nav.contact': { tr: 'İletişim', en: 'Contact' },

  'heading.about': { tr: 'Hakkımda', en: 'About' },
  'heading.experience': { tr: 'Deneyim', en: 'Experience' },
  'heading.skills': { tr: 'Yetenekler', en: 'Skills' },
  'skills.lead': { tr: 'Yazılım geliştirme sürecinin her aşamasında kullandığım teknolojiler ve araçlar', en: 'Technologies and tools I use in every stage of the development process' },
  'skills.backend': { tr: 'Backend Geliştirme', en: 'Backend Development' },
  'skills.frontend': { tr: 'Frontend Geliştirme', en: 'Frontend Development' },
  'skills.databases': { tr: 'Veritabanları', en: 'Databases' },
  'skills.toolsSection': { tr: 'Araçlar', en: 'Tools' },
  'skills.additional': { tr: 'Ek Yetenekler', en: 'Additional Skills' },
  'skills.languagesSection': { tr: 'Diller', en: 'Languages' },
  'skills.certificatesSection': { tr: 'Sertifikalar', en: 'Certıfıcates' },
  'skills.language.tr': { tr: 'Türkçe', en: 'Turkish' },
  'skills.language.en': { tr: 'İngilizce', en: 'English' },
  'skills.language.de': { tr: 'Almanca', en: 'German' },
  'skills.level.native': { tr: 'Ana Dil', en: 'Native' },
  'skills.level.intermediate': { tr: 'Orta Seviye', en: 'Intermediate' },
  'skills.level.beginner': { tr: 'Başlangıç Seviyesi', en: 'Beginner' },
  'heading.projects': { tr: 'Projeler', en: 'Projects' },
  'projects.lead': { tr: 'Geliştirdiğim yenilikçi projeler ve teknolojik çözümler', en: 'Innovative projects and technological solutions I have developed' },
  'projects.all': { tr: 'Tümü', en: 'All' },
  'projects.techs': { tr: 'Kullanılan Teknolojiler', en: 'Technologies Used' },
  'projects.teknofestDesc': { tr: 'Blockchain teknolojisi kullanarak güvenli ve şeffaf bir sistem geliştirdim. Akıllı kontratlar ve merkezi olmayan uygulamalar ile yenilikçi çözümler ürettim.', en: 'Developed a secure and transparent system using blockchain technology. Built innovative solutions with smart contracts and decentralized applications.' },
  'projects.beproDesc': { tr: 'Bitki bakımı ve takibi için geliştirilmiş mobil uygulama. Kullanıcılar bitkilerini takip edebilir, bakım hatırlatıcıları alabilir ve bitki sağlığı hakkında bilgi edinebilir.', en: 'A mobile app for plant care and tracking. Users can monitor their plants, receive care reminders, and get insights about plant health.' },
  'heading.volunteer': { tr: 'Gönüllü Çalışmalar', en: 'Volunteering' },
  'heading.references': { tr: 'Referanslar', en: 'References' },
  'references.lead': { tr: 'Profesyonel referanslarım', en: 'Professional references' },
  // Volunteer
  'volunteer.lead': { tr: 'Toplumsal katkı ve liderlik deneyimlerim', en: 'My contributions to society and leadership experiences' },
  'volunteer.contentCreator': { tr: 'İçerik Üreticisi', en: 'Content Creator' },
  'volunteer.turkishe.desc': { tr: 'Teknoloji ve yazılım alanında topluluk için içerikler ürettim, bilgi paylaşımına katkı sağladım.', en: 'Produced content for the community in technology and software, contributing to knowledge sharing.' },
  'volunteer.makuse.role': { tr: 'Lisans Öğrenci Başkanı', en: 'Undergraduate Student President' },
  'volunteer.makuse.title': { tr: 'MAKÜSE Araştırma Topluluğu', en: 'MAKÜSE Research Community' },
  'volunteer.makuse.desc': { tr: 'Topluluk liderliği, organizasyon ve bilimsel araştırma süreçlerinde aktif rol aldım.', en: 'Actively involved in community leadership, organization, and scientific research processes.' },
  // Organizations
  'org.icta': { tr: 'Bilgi Teknolojileri ve İletişim Kurumu', en: 'Information and Communication Technologies Authority' },
  'heading.contact': { tr: 'İletişim', en: 'Contact' },
  'about.personalInfo': { tr: 'Kişisel Bilgiler', en: 'Personal Info' },
  'about.education': { tr: 'Eğitim', en: 'Education' },
  'about.whoami': { tr: 'Ben Kimim?', en: 'Who Am I?' },
  'about.interests': { tr: 'İlgi Alanlarım', en: 'Interests' },
  'about.strengths': { tr: 'Güçlü Yönlerim', en: 'Strengths' },
  'about.lead': { tr: 'Modern web teknolojileri konusunda tutkulu bir yazılım geliştiricisi olarak, kullanıcı deneyimini ön planda tutan yenilikçi çözümler geliştiriyorum.', en: 'As a passionate software developer in modern web technologies, I build innovative solutions with a strong focus on user experience.' },
  'projects.process': { tr: 'Proje Geliştirme Sürecim', en: 'My Project Development Process' },
  'experience.responsibilities': { tr: 'Sorumluluklar ve Başarılar', en: 'Responsibilities & Achievements' },
  'experience.techs': { tr: 'Kullanılan Teknolojiler', en: 'Technologies Used' },
  'edu.degree': { tr: 'Yazılım Mühendisliği', en: 'Software Engineering' },
  'edu.school': { tr: 'Burdur Mehmet Akif Ersoy Üniversitesi', en: 'Burdur Mehmet Akif Ersoy University' },
  'edu.description': { tr: 'Bilgisayar bilimleri, algoritma analizi ve yazılım geliştirme konularında kapsamlı eğitim.', en: 'Comprehensive education in computer science, algorithm analysis and software development.' },
  'interest.web': { tr: 'Web Geliştirme', en: 'Web Development' },
  'interest.backend': { tr: 'Backend Geliştirme', en: 'Backend Development' },
  'interest.ai': { tr: 'Yapay Zeka', en: 'Artificial Intelligence' },
  'interest.data': { tr: 'Veri Bilimi', en: 'Data Science' },
  'interest.ml': { tr: 'Makine Öğrenmesi', en: 'Machine Learning' },
  // Strengths
  'strength.problemSolving': { tr: 'Problem Çözme', en: 'Problem Solving' },
  'strength.teamwork': { tr: 'Ekip Çalışması', en: 'Teamwork' },
  'strength.continuousLearning': { tr: 'Sürekli Öğrenme', en: 'Continuous Learning' },
  'strength.detailOriented': { tr: 'Detay Odaklılık', en: 'Detail Oriented' },
  'strength.creativeThinking': { tr: 'Yaratıcı Düşünme', en: 'Creative Thinking' },
  'strength.timeManagement': { tr: 'Zaman Yönetimi', en: 'Time Management' },
  // Experience section
  'experience.lead': { tr: 'Yazılım geliştirme alanında kazandığım deneyimler ve projeler', en: 'My experiences and projects in software development' },
  'experience.internshipTitle': { tr: 'Yaz Stajı', en: 'Summer Internship' },
  'experience.company': { tr: 'Bilgi Teknolojileri ve İletişim Kurumu', en: 'Information and Communication Technologies Authority' },
  'experience.location': { tr: 'Ankara, Türkiye', en: 'Ankara, Turkey' },
  'experience.period': { tr: 'Haziran 2025 - Temmuz 2025', en: 'June 2025 - July 2025' },
  'experience.desc1': { tr: 'Web geliştirme ve yazılım projelerinde aktif rol aldım', en: 'Actively contributed to web development and software projects' },
  'experience.desc2': { tr: 'Modern teknolojiler ile kullanıcı dostu arayüzler geliştirdim', en: 'Developed user-friendly interfaces with modern technologies' },
  'experience.desc3': { tr: 'Ekip çalışması ve proje yönetimi deneyimi kazandım', en: 'Gained experience in teamwork and project management' },
  'experience.desc4': { tr: 'Kod kalitesi ve test süreçlerinde katkıda bulundum', en: 'Contributed to code quality and testing processes' },
  'label.email': { tr: 'Email', en: 'Email' },
  'label.phone': { tr: 'Telefon', en: 'Phone' },
  'label.location': { tr: 'Konum', en: 'Location' },
  'label.openToProjects': { tr: 'Yeni projeler için açık', en: 'Open to new projects' },
  'contact.subtitle': { tr: 'Benimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz', en: 'Use the form below to get in touch with me' },
  'contact.sendMessage': { tr: 'Mesaj Gönder', en: 'Send Message' },
  'contact.cta': { tr: 'Projeleriniz hakkında konuşmak veya işbirliği yapmak için benimle iletişime geçin', en: 'Contact me to discuss your projects or collaborate' },
  'contact.submit': { tr: 'Mail Gönder', en: 'Send Mail' },
  'contact.name': { tr: 'Ad Soyad', en: 'Full Name' },
  'contact.email': { tr: 'E-posta', en: 'Email' },
  'contact.subject': { tr: 'Konu', en: 'Subject' },
  'contact.message': { tr: 'Mesaj', en: 'Message' },
  'contact.placeholder.name': { tr: 'Adınız ve soyadınız', en: 'Your full name' },
  'contact.placeholder.email': { tr: 'E-posta adresiniz', en: 'Your email address' },
  'contact.placeholder.subject': { tr: 'Mesaj konusu', en: 'Message subject' },
  'contact.placeholder.message': { tr: 'Mesajınızı buraya yazın...', en: 'Write your message here...' },
  'about.p1': { tr: 'Burdur Mehmet Akif Ersoy Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Java ve Spring Boot ekosistemi üzerinde yoğunlaşarak backend geliştirme ve sistem mimarisi konularında kendimi geliştiriyorum.', en: 'I am a 3rd-year Software Engineering student at Burdur Mehmet Akif Ersoy University, specializing in backend development and system architecture with a focus on the Java and Spring Boot ecosystem.' },
  'about.p2': { tr: 'Erasmus+ programıyla Bialystok Teknik Üniversitesinde lisans eğitimimi sürdürüyorum. Java, Spring Boot ve PostgreSQL ile güvenli, ölçeklenebilir backend sistemleri geliştirmeye odaklanıyorum.', en: 'Currently on an Erasmus+ exchange at Politechnika Bialostocka in Poland. I focus on building secure, scalable backend systems with Java, Spring Boot and PostgreSQL.' },
  'about.p3': { tr: 'BTK bünyesinde yaz stajı tamamlayarak gerçek dünya yazılım süreçleri, ekip dinamikleri ve kurumsal geliştirme pratiklerinde değerli deneyimler kazandım.', en: 'I completed a summer internship at BTK, gaining hands-on experience in real-world software processes, team dynamics, and enterprise development practices.' },
  'footer.quickLinks': { tr: 'Hızlı Linkler', en: 'Quick Links' },
  'footer.contact': { tr: 'İletişim', en: 'Contact' },
  'footer.copyright': { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
  'footer.bio': { tr: 'Backend teknolojileri konusunda öğrenmeye devam eden, güvenli ve ölçeklenebilir sistemler geliştirmeye odaklanan bir yazılım geliştiricisi öğrencisi. Java, Spring Boot ve PostgreSQL teknolojileri ile çalışmaktan keyif alıyorum.', en: 'A software developer student passionate about backend technologies, focused on building secure and scalable systems. I enjoy working with Java, Spring Boot and PostgreSQL.' },
  'process.analysis': { tr: 'Analiz', en: 'Analysis' },
  'process.design': { tr: 'Tasarım', en: 'Design' },
  'process.development': { tr: 'Geliştirme', en: 'Development' },
  'process.deploy': { tr: 'Deploy', en: 'Deploy' },
  'process.analysis.desc': { tr: 'Proje gereksinimlerini analiz ederim', en: 'I analyze project requirements' },
  'process.design.desc': { tr: 'Kullanıcı deneyimi odaklı tasarım', en: 'User-experience focused design' },
  'process.development.desc': { tr: 'Modern teknolojiler ile kodlama', en: 'Coding with modern technologies' },
  'process.deploy.desc': { tr: 'Güvenli ve hızlı deployment', en: 'Secure and fast deployment' },
  'hero.tagline': { tr: 'Yazılım Mühendisliği öğrencisi. Java, Spring Boot ve React ile güvenilir, ölçeklenebilir ürünler geliştiriyorum.', en: 'Software Engineering student building reliable, scalable products with Java, Spring Boot and React.' },
  'hero.downloadCV': { tr: 'CV İndir', en: 'Download CV' },
  'hero.contactMe': { tr: 'İletişime Geç', en: 'Contact Me' },
  'skills.roboticsOs': { tr: 'Robotik & İşletim Sistemleri', en: 'Robotics & OS' },
  // Certificates
  'cert.turkishe': { tr: 'Turkishe Bootcamp Başarı Sertifikası', en: 'Turkishe Bootcamp Certificate of Achievement' },
  'cert.ygaFord': { tr: 'YGA & Ford Bootcamp Sertifikası', en: 'YGA & Ford Bootcamp Certificate' },
  'cert.denizbank': { tr: 'DenizBank Online Staj Sertifikası', en: 'DenizBank Online Internship Certificate' },
};

function translate(key: string, lang: Language): string {
  const entry = dictionary[key];
  if (!entry) return key;
  return entry[lang] ?? entry['tr'];
}

type I18nContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    return stored ?? 'tr';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    setLang,
    toggleLang: () => setLang(prev => (prev === 'tr' ? 'en' : 'tr')),
    t: (key: string) => translate(key, lang),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}


