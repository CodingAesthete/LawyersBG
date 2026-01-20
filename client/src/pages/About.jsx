import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import svetlozar from "../assets/images/svetphoto.png";

export default function About() {
  const firstSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  const firstSectionInView = useInView(firstSectionRef, { once: false, margin: "-100px" });
  const videoSectionInView = useInView(videoSectionRef, { once: false, margin: "-100px" });

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
        className="bg-blue-50 shadow-lg rounded-lg p-8 mb-16 border-l-4 border-blue-900"
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

          <div className="lg:w-1/3 h-82 rounded-lg overflow-hidden shadow-lg">
            <img
              src={svetlozar}
              alt="Светлозар Николов"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* VIDEO SECTION */}
      <motion.div
  ref={videoSectionRef}
  initial={{ opacity: 0, y: 50 }}
  animate={videoSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto border-l-4 border-blue-900"
>
  <div
    style={{
      position: "relative",
      paddingTop: "56.25%",
    }}
  >
    <iframe
      src="https://player.vimeo.com/video/1156641318"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Изявление на адвокат Светлозар Николов"
    />
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
