import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Contact() {
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
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10"
      key={isAnimating}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>{i18n.language === 'bg' ? 'Контакти' : 'Contact'}</title>
        <meta name="description" content={i18n.language === 'bg' ? "Свържете се с Висшия адвокатски съвет" : "Contact the Supreme Bar Council"} />
        <meta name="keywords" content={i18n.language === 'bg' ? "контакти, телефон, адрес, имейл, адвокат" : "contact, phone, address, email, lawyer"} />
        <meta property="og:title" content={i18n.language === 'bg' ? 'Контакти' : 'Contact'} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-8 mb-12 shadow-lg"
      >
        <h1 className="text-4xl md:text-5xl text-center font-bold text-blue-900 drop-shadow-lg mb-4">
          {i18n.language === 'bg' ? 'Свържете се с нас' : 'Contact Us'}
        </h1>
        <p className="text-center text-blue-800 text-lg drop-shadow-md">
          {i18n.language === 'bg' 
            ? 'Ние сме тук, за да отговорим на вашите въпроси и предложения'
            : 'We are here to answer your questions and hear your suggestions'}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&q=80"
            alt="Handshake"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Description */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-blue-900 text-lg leading-relaxed drop-shadow-md">
              {i18n.language === 'bg'
                ? 'Висшия адвокатски съвет е органът на адвокатската професия в България, отговарящ за защита на независимостта на адвокатурата, развитието на правната система и представляне на интересите на адвокатите пред всички органи на власт.'
                : 'The Supreme Bar Council is the body of the legal profession in Bulgaria, responsible for protecting the independence of the bar, developing the legal system, and representing the interests of lawyers before all authorities.'}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            {/* Phone */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 rounded-lg p-3 shadow-sm flex items-center space-x-3"
            >
              <div className="bg-blue-200 p-2 rounded-lg">
                <FaPhone className="text-blue-900 text-lg" />
              </div>
              <div>
                <p className="text-blue-900 font-semibold text-sm">
                  {i18n.language === 'bg' ? 'Телефон' : 'Phone'}
                </p>
                <p className="text-blue-800 text-sm">+359 2 987 6543</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 rounded-lg p-3 shadow-sm flex items-center space-x-3"
            >
              <div className="bg-blue-200 p-2 rounded-lg">
                <FaEnvelope className="text-blue-900 text-lg" />
              </div>
              <div>
                <p className="text-blue-900 font-semibold text-sm">
                  {i18n.language === 'bg' ? 'Имейл' : 'Email'}
                </p>
                <p className="text-blue-800 text-sm">contact@supremebar.bg</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 rounded-lg p-3 shadow-sm flex items-center space-x-3"
            >
              <div className="bg-blue-200 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-blue-900 text-lg" />
              </div>
              <div>
                <p className="text-blue-900 font-semibold text-sm">
                  {i18n.language === 'bg' ? 'Адрес' : 'Address'}
                </p>
                <p className="text-blue-800 text-sm">
                  {i18n.language === 'bg' 
                    ? 'Висш адвокатски съвет, София, България'
                    : 'Supreme Bar Council, Sofia, Bulgaria'}
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 rounded-lg p-3 shadow-sm flex items-center space-x-3"
            >
              <div className="bg-blue-200 p-2 rounded-lg">
                <FaClock className="text-blue-900 text-lg" />
              </div>
              <div>
                <p className="text-blue-900 font-semibold text-sm">
                  {i18n.language === 'bg' ? 'Работно време' : 'Working Hours'}
                </p>
                <p className="text-blue-800 text-sm">
                  {i18n.language === 'bg' 
                    ? 'Пн-Пт 09:00-18:00'
                    : 'Mon-Fri 09:00-18:00'}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
