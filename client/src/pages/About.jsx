import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaGavel,
  FaFileAlt,
  FaExchangeAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import svetlozar from "../assets/images/svetlio.png";

export default function About() {
  const firstSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);
  const practiceSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  const firstSectionInView = useInView(firstSectionRef, { once: false, margin: "-100px" });
  const valuesSectionInView = useInView(valuesSectionRef, { once: false, margin: "-100px" });
  const practiceSectionInView = useInView(practiceSectionRef, { once: false, margin: "-100px" });
  const videoSectionInView = useInView(videoSectionRef, { once: false, margin: "-100px" });

  const values = [
    { num: "01", title: "Независимост", text: "Независимостта на адвокатурата е основополагащ принцип за върховенството на правото." },
    { num: "02", title: "Професионализъм", text: "Висока правна подготовка, непрекъснато обучение и отговорност." },
    { num: "03", title: "Етика", text: "Почтеност, лоялност към клиента и уважение към закона." },
    { num: "04", title: "Самоуправление", text: "Правилата се определят от самите адвокати." },
    { num: "05", title: "Отговорност", text: "Отговорност към клиента, обществото и колегията." },
    { num: "06", title: "Прозрачност", text: "Публичност и отчетност във всички решения." },
  ];

  const practiceSections = [
    {
      title: "Създаване на гаранции за независимостта на адвокатурата",
      items: [
        { number: "01", title: "Достъп до професията", icon: FaShieldAlt },
        { number: "02", title: "Повишаване квалификацията на адвокатите", icon: FaGraduationCap },
        { number: "03", title: "Защита на професионалните права на адвокатите", icon: FaGavel },
      ],
    },
    {
      title: "Подобряване на правната среда в страната",
      items: [
        { number: "01", title: "Правомощия, свързани със законодателния процес", icon: FaExchangeAlt },
        { number: "02", title: "Правомощия, свързани с Върховните съдилища", icon: FaGavel },
        { number: "03", title: "Правомощия, свързани с Конституционния съд", icon: FaShieldAlt },
      ],
    },
    // {
    //   title: "Представителни правомощия и обществени функции",
    //   items: [
    //     { number: "01", title: "Взаимодействие с органите на съда и прокуратурата", icon: FaGavel },
    //     { number: "02", title: "Взаимодействие с изпълнителната власт и органите на местно самоуправление", icon: FaExchangeAlt },
    //     { number: "03", title: "Взаимодействие с международни адвокатски организации", icon: FaGlobeAmericas },
    //   ],
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 mb-10"
    >
      <Helmet>
        <title>Избори за органи на Адвокатска колегия Варна 2026</title>
      </Helmet>

      {/* FIRST SECTION */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={firstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-blue-50 shadow-lg rounded-lg p-8 mb-12 border-l-4 border-blue-900"
      >
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Избори за органи на Адвокатска колегия Варна 2026
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Подкрепете ни за постигане на следните цели:
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Увеличение на работата, доходите, влиянието и квалификацията</li>
              <li>Издигане авторитета на адвокатите и колегията</li>
              <li>Публичност и безпристрастно разпределение на защитите</li>
              <li>Прекратяване използването на колегията срещу адвокатите</li>
              <li>Прекратяване на дисциплинарните репресии</li>
              <li>Пълна прозрачност в управлението</li>
              <li>Премахване възнагражденията за председател и секретар</li>
              <li>Създаване на взаимоспомагателна каса</li>
              <li>Подкрепа за адвокати в малките населени места</li>
              <li>Нов модерен сайт и безплатен достъп до правни системи</li>
            </ul>
          </div>

          <div className="lg:w-1/3 h-72 rounded-lg overflow-hidden shadow-lg">
            <img src={svetlozar} alt="Светлозар Николов" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      {/* VALUES SECTION */}
      <motion.div
        ref={valuesSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {values.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-blue-900"
          >
            <span className="text-4xl font-bold text-blue-900 opacity-30">{v.num}</span>
            <h3 className="text-lg font-bold text-blue-900 mt-2 mb-2">{v.title}</h3>
            <p className="text-sm text-gray-700">{v.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* PRACTICE AREAS SECTION */}
      <motion.div
        ref={practiceSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={practiceSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {practiceSections.map((section, sectionIndex) => (
          <motion.div key={sectionIndex} className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border-l-4 border-amber-500"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{section.title}</h2>
            </motion.div>

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
                    <div className="text-5xl font-bold text-blue-600 mb-4 opacity-70">{item.number}</div>
                    <div className="text-4xl text-blue-700 mb-4"><Icon /></div>
                    <h3 className="text-lg font-bold text-blue-950 leading-tight">{item.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* VIDEO SECTION */}
      <motion.div
        ref={videoSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={videoSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto border-l-4 border-blue-900"
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/f39hPKFgX-k?si=WUTOcG5dtxHI4jAr"
            title="Изявление на адвокат Светлозар Николов"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900">
            Изявление на адвокат Светлозар Николов
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
