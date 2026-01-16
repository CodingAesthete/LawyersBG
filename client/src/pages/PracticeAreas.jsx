import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaGavel,
  FaFileAlt,
  FaExchangeAlt,
  FaGlobeAmericas,
} from "react-icons/fa";

export default function PracticeAreas() {
  const sections = [
    {
      title: "Създаване на гаранции за независимостта на адвокатурата",
      items: [
        {
          number: "01",
          title: "Достъп до професията",
          icon: FaShieldAlt,
        },
        {
          number: "02",
          title: "Повишаване квалификацията на адвокатите",
          icon: FaGraduationCap,
        },
        {
          number: "03",
          title: "Защита на професионалните права на адвокатите",
          icon: FaGavel,
        },
        {
          number: "04",
          title: "Водене на електронните единни адвокатски регистри",
          icon: FaFileAlt,
        },
      ],
    },
    {
      title: "Подобряване на правната среда в страната",
      items: [
        {
          number: "01",
          title: "Правомощия, свързани със законодателния процес",
          icon: FaExchangeAlt,
        },
        {
          number: "02",
          title: "Правомощия, свързани с Върховните съдилища",
          icon: FaGavel,
        },
        {
          number: "03",
          title: "Правомощия, свързани с Конституционния съд",
          icon: FaShieldAlt,
        },
      ],
    },
    {
      title: "Представителни правомощия и обществени функции",
      items: [
        {
          number: "01",
          title: "Взаимодействие с органите на съда и прокуратурата",
          icon: FaGavel,
        },
        {
          number: "02",
          title:
            "Взаимодействие с изпълнителната власт и органите на местно самоуправление",
          icon: FaExchangeAlt,
        },
        {
          number: "03",
          title:
            "Взаимодействие с международни адвокатски организации",
          icon: FaGlobeAmericas,
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 mb-10"
    >
      <Helmet>
        <title>Насоки на дейността</title>
        <meta
          name="description"
          content="Насоки на дейността на Варненска адвокатска колегия"
        />
        <meta property="og:title" content="Насоки на дейността" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* MAIN TITLE */}
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
          НАСОКИ НА ДЕЙНОСТТА НА ВАРНЕНСКА АДВОКАТСКА КОЛЕГИЯ
        </motion.h1>
      </motion.div>

      {/* SUBTITLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 border border-white/20"
      >
        <p className="text-center text-white text-lg font-semibold drop-shadow-lg">
          Дейностите на Варненска адвокатска колегия са основно в три направления:
        </p>
      </motion.div>

      {/* SECTIONS */}
      {sections.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
          className="mb-20"
        >
          {/* SECTION TITLE */}
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

          {/* ITEMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition border-l-4 border-amber-500"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-4 opacity-70">
                    {item.number}
                  </div>

                  <div className="text-4xl text-blue-700 mb-4">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold text-blue-950 leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* CTA
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-12 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Желаете ли да ни пишете?
        </h2>
        <p className="text-lg mb-6 text-blue-100">
          Ако имате въпроси или препоръки към нас
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
        >
          Пишете ни
        </motion.button>
      </motion.div> */}
    </motion.div>
  );
}
