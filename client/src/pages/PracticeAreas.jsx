import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaGraduationCap, FaGavel, FaFileAlt, FaExchangeAlt, FaGlobeAmericas } from 'react-icons/fa';

export default function PracticeAreas() {
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

  const sections = [
    {
      title: i18n.language === 'bg' ? 'Създаване на гаранции за независимостта на адвокатурата' : 'Ensuring Judicial Independence',
      items: [
        {
          number: '01',
          title: i18n.language === 'bg' ? 'Достъп до професията' : 'Access to the Profession',
          icon: FaShieldAlt
        },
        {
          number: '02',
          title: i18n.language === 'bg' ? 'Повишаване квалификацията на адвокатите' : 'Raising the Qualification of Lawyers',
          icon: FaGraduationCap
        },
        {
          number: '03',
          title: i18n.language === 'bg' ? 'Защита професионалните права на адвокатите' : 'Protection of Professional Rights',
          icon: FaGavel
        },
        {
          number: '04',
          title: i18n.language === 'bg' ? 'Водене на електронните единни адвокатски регистри' : 'Management of Electronic Bar Registers',
          icon: FaFileAlt
        }
      ]
    },
    {
      title: i18n.language === 'bg' ? 'Подобряване на правната среда в страната' : 'Improving the Legal Environment',
      items: [
        {
          number: '01',
          title: i18n.language === 'bg' ? 'Правомощия, свързани със законодателния процес' : 'Legislative Process Powers',
          icon: FaExchangeAlt
        },
        {
          number: '02',
          title: i18n.language === 'bg' ? 'Правомощия, свързани с Върховните съдилища' : 'Supreme Court Powers',
          icon: FaGavel
        },
        {
          number: '03',
          title: i18n.language === 'bg' ? 'Правомощия, свързани с Конституционния съд' : 'Constitutional Court Powers',
          icon: FaShieldAlt
        }
      ]
    },
    {
      title: i18n.language === 'bg' ? 'Представителни правомощия и обществени функции' : 'Representative Powers and Public Functions',
      items: [
        {
          number: '01',
          title: i18n.language === 'bg' ? 'Взаимодействие с органите на съда и прокуратурата' : 'Interaction with Courts and Prosecution',
          icon: FaGavel
        },
        {
          number: '02',
          title: i18n.language === 'bg' ? 'Взаимодействие с изпълнителната власт и органите на местно самоуправление' : 'Interaction with Executive Authority',
          icon: FaExchangeAlt
        },
        {
          number: '03',
          title: i18n.language === 'bg' ? 'Взаимодействие с международни адвокатски организации' : 'Interaction with International Organizations',
          icon: FaGlobeAmericas
        }
      ]
    }
  ];

  return (
    <motion.div
      key={isAnimating}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10"
    >
      <Helmet>
        <title>{i18n.language === 'bg' ? 'НАСОКИ НА ДЕЙНОСТТА' : 'Areas of Activity'}</title>
        <meta name="description" content={i18n.language === 'bg' ? "Насоки на дейността на Висшия адвокатски съвет" : "Areas of activity of the Supreme Bar Council"} />
        <meta property="og:title" content={i18n.language === 'bg' ? 'НАСОКИ НА ДЕЙНОСТТА' : 'Areas of Activity'} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-8 mb-4 border border-white/20"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-2xl"
        >
          {i18n.language === 'bg' ? 'НАСОКИ НА ДЕЙНОСТТА НА ВИСШИЯ АДВОКАТСКИ СЪВЕТ' : 'AREAS OF ACTIVITY OF THE SUPREME BAR COUNCIL'}
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 border border-white/20"
      >
        <p className="text-center text-white text-lg font-semibold drop-shadow-lg">
          {i18n.language === 'bg' 
            ? 'Дейностите на Висшия адвокатски съвет са основно в три направления:'
            : 'The activities of the Supreme Bar Council are mainly in three directions:'}
        </p>
      </motion.div>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
          className="mb-20"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border-l-4 border-amber-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              {section.title}
            </h2>
          </motion.div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items.map((item, itemIndex) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  whileHover={{ y: -10, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-500"
                >
                  {/* Number */}
                  <div className="text-5xl font-bold text-blue-600 mb-4 opacity-70">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl text-blue-700 mb-4">
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-blue-950 mb-4 leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-12 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          {i18n.language === 'bg' ? 'Желаете ли да ни пишете?' : 'Do you want to write to us?'}
        </h2>
        <p className="text-lg mb-6 text-blue-100">
          {i18n.language === 'bg' 
            ? 'Ако имате въпроси към нас или имате препоръки към нас'
            : 'If you have any questions or recommendations for us'}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
        >
          {i18n.language === 'bg' ? 'Пишете ни' : 'Contact Us'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
