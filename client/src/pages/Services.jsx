import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";

export default function Services() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const services = [
    { icon: '📋', text: t('serv1') },
    { icon: '👥', text: t('serv2') },
    { icon: '⚖️', text: t('serv3') },
    { icon: '🔨', text: t('serv4') },
    { icon: '📄', text: t('serv5') },
    { icon: '💡', text: t('serv6') },
  ];

  return (
    <motion.div
      key={isAnimating}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="text-lg font-changer:text-xl w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10 bg-blue-50 shadow-lg"
    >
      <Helmet>
        <title>{t('servicesTitle')}</title>
        <meta name="description" content={t('servicesDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "правни услуги, адвокат, консултация, договори" : "legal services, lawyer, consultation, contracts"} />
        <meta property="og:title" content={t('servicesTitle')} />
        <meta property="og:description" content={t('servicesDescription')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-[1.7rem] font-bold mb-6 text-center text-blue-900 drop-shadow-xl">
        {t('servicesTitle')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-4xl">{service.icon}</span>
            <p className="leading-relaxed tracking-wide">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
