import React, { useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import lawyerImage from '@/assets/images/lawyer1.jpg';

export default function About() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const firstSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);
  const videoSectionRef = useRef(null);
  
  const firstSectionInView = useInView(firstSectionRef, { once: false, margin: "-100px" });
  const valuesSectionInView = useInView(valuesSectionRef, { once: false, margin: "-100px" });
  const videoSectionInView = useInView(videoSectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const values = [
    { num: "01", title: "value01Title", text: "value01Text" },
    { num: "02", title: "value02Title", text: "value02Text" },
    { num: "03", title: "value03Title", text: "value03Text" },
    { num: "04", title: "value04Title", text: "value04Text" },
    { num: "05", title: "value05Title", text: "value05Text" },
    { num: "06", title: "value06Title", text: "value06Text" },
  ];

  return (
    <motion.div
      key={isAnimating}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10"
    >
      <Helmet>
        <title>{t('aboutTitle')}</title>
        <meta name="description" content={t('aboutDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "за нас, адвокатски бюро, опит, екип" : "about us, law firm, experience, team"} />
        <meta property="og:title" content={t('aboutTitle')} />
        <meta property="og:description" content={t('aboutDescription')} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* First Section */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={firstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-50 shadow-lg rounded-lg px-4 sm:px-10 py-8 mb-12 border-l-4 border-blue-900"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={firstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[1.7rem] font-bold mb-6 text-center text-blue-900 drop-shadow-xl"
        >
          {t('aboutTitle')}
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl font-semibold text-blue-800 mb-4"
            >
              {i18n.language === 'bg' ? 'Основни ценности и принципи на управление' : 'Core Values and Governance Principles'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="leading-relaxed tracking-wide mb-4 text-gray-700"
            >
              {i18n.language === 'bg' 
                ? 'Практиката на правото е основана на фундаментални принципи, които гарантират интегритета, отговорността и справедливостта. Тези основни стълбове формират основата на нашата цялостна професионална рамка.' 
                : 'The practice of law is built upon fundamental pillars that ensure integrity, accountability, and justice. These cornerstones form the bedrock upon which our entire professional framework rests.'}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="leading-relaxed tracking-wide mb-6 text-gray-700"
            >
              {i18n.language === 'bg'
                ? 'За да бъде адвокатурата независима и свободна, управлението на адвокатските дела трябва да се осъществява от самата адвокатура – от адвокати, без намеса на която и да било друга власт или без каквото и да било външно влияние.'
                : 'For the legal profession to maintain its effectiveness and credibility, it must remain autonomous and free from external constraints. The governance of legal affairs must be administered by legal professionals themselves without interference or external influence.'}
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xl font-semibold text-blue-800 mb-4 mt-6"
            >
              {i18n.language === 'bg' ? 'Автономност като основа за справедливост' : 'Autonomy as a Foundation for Justice'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="leading-relaxed tracking-wide text-gray-700"
            >
              {i18n.language === 'bg'
                ? 'Истинската независимост в правния сектор не може да съществува без смислена автономност в вземането на решения. Нашият ангажимент към самоуправление отразява по-дълбок ангажимент към гарантирането, че всеки клиент получава представителство, свободно от външни влияния.'
                : 'True independence in the legal profession cannot exist without meaningful autonomy in decision-making. Our commitment to self-governance reflects a deeper commitment to ensuring that every client receives representation free from external influence and conflicts of interest.'}
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded-lg overflow-hidden shadow-lg h-64 lg:h-80"
          >
            <img src={lawyerImage} alt="Professional Lawyer" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        ref={valuesSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={valuesSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-lg p-8 shadow-2xl"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-bold text-white mb-2 drop-shadow-2xl"
          >
            {t('aboutValuesTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl text-blue-100 font-semibold mb-4 drop-shadow-lg"
          >
            {t('aboutValuesSubtitle')}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-lg drop-shadow-lg leading-relaxed"
          >
            {t('aboutValuesIntro')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={valuesSectionInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -10 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-900 cursor-pointer"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="mb-4"
              >
                <span className="text-4xl font-bold text-blue-900 opacity-30">
                  {value.num}
                </span>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 + index * 0.1 }}
                className="text-lg font-bold text-blue-900 mb-3"
              >
                {t(value.title)}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-gray-700 leading-relaxed text-sm"
              >
                {t(value.text)}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        ref={videoSectionRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={videoSectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto border-l-4 border-blue-900"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={videoSectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-video bg-gray-900"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title={t('videoTitle')}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={videoSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 text-center"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={videoSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold text-blue-900 mb-2"
          >
            {t('videoTitle')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={videoSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-gray-700 text-lg"
          >
            {t('videoDescription')}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
