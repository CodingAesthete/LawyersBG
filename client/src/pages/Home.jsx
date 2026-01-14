import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Home() {
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
        <title>{t('homeTitle')}</title>
        <meta name="description" content={t('homeDescription')} />
        <meta name="keywords" content={i18n.language === 'bg' ? "адвокат, правни услуги, корпоративно право, България" : "lawyer, legal services, corporate law, Bulgaria"} />
        <meta property="og:title" content={t('homeTitle')} />
        <meta property="og:description" content={t('homeDescription')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1, scale: isAnimating ? 0.95 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[1.7rem] font-bold mb-6 text-center text-blue-900 drop-shadow-xl">
          {t('homeTitle')}
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-6">
          <p className="flex-1 leading-relaxed tracking-wide mb-4">
            {t('homeP1')}
          </p>
          <div className="w-full lg:w-1/3 md:justify-center lg:w-1/3 mt-4 md:mt-2 bg-gray-200 rounded-md h-64 flex items-center justify-center">
            <span className="text-gray-500">Courthouse Image</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-6">
          <div className="w-full lg:w-1/3 mt-4 md:mt-2 order-2 lg:order-1 bg-gray-200 rounded-md h-64 flex items-center justify-center">
            <span className="text-gray-500">Team Image</span>
          </div>
          <p className="flex-1 leading-relaxed tracking-wide mb-4 order-1 lg:order-2">
            {t('homeP2')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-6">
          <p className="flex-1 leading-relaxed tracking-wide mb-4">
            {t('homeP3')}
          </p>
          <div className="w-full lg:w-1/3 mt-4 md:mt-2 bg-gray-200 rounded-md h-64 flex items-center justify-center">
            <span className="text-gray-500">Office Image</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
