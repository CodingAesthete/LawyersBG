import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import lawyerImage from "@/assets/images/lawyer1.jpg";

export default function About() {
  const firstSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  const firstSectionInView = useInView(firstSectionRef, { once: false, margin: "-100px" });
  const valuesSectionInView = useInView(valuesSectionRef, { once: false, margin: "-100px" });
  const videoSectionInView = useInView(videoSectionRef, { once: false, margin: "-100px" });

 const values = [
  {
    num: "01",
    title: "Независимост",
    text:
      "Независимостта на адвокатурата е основополагащ принцип за върховенството на правото. Тя гарантира, че адвокатите могат да защитават правата и законните интереси на гражданите без натиск, страх или външна намеса от държавни органи, институции или частни интереси.",
  },
  {
    num: "02",
    title: "Професионализъм",
    text:
      "Професионализмът изисква висока правна подготовка, непрекъснато обучение и отговорно отношение към всеки казус. Само чрез поддържане на високи стандарти адвокатурата може да отговори на очакванията на обществото и да запази общественото доверие.",
  },
  {
    num: "03",
    title: "Етика",
    text:
      "Етичните норми са фундаментът на адвокатската професия. Те осигуряват почтеност, лоялност към клиента и уважение към закона, като същевременно предотвратяват злоупотреби и конфликти на интереси.",
  },
  {
    num: "04",
    title: "Самоуправление",
    text:
      "Самоуправлението на адвокатурата означава, че правилата, дисциплината и развитието на професията се определят от самите адвокати. Това е ключово условие за запазване на независимостта и за ефективна защита на обществения интерес.",
  },
  {
    num: "05",
    title: "Отговорност",
    text:
      "Всеки адвокат носи отговорност както пред своя клиент, така и пред обществото и професионалната общност. Тази отговорност изисква честност, добросъвестност и спазване на закона във всички аспекти на професионалната дейност.",
  },
  {
    num: "06",
    title: "Прозрачност",
    text:
      "Прозрачността в дейността на адвокатурата и нейните органи създава доверие и легитимност. Ясните правила, отчетността и публичността на решенията са предпоставка за стабилна и уважавана професионална общност.",
  },
];


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 sm:w-5/6 mx-auto rounded-lg px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 mb-10"
    >
      <Helmet>
        <title>За нас</title>
        <meta
          name="description"
          content="Информация за дейността, принципите и ценностите на адвокатурата"
        />
        <meta
          name="keywords"
          content="за нас, адвокатура, ценности, принципи, независимост"
        />
        <meta property="og:title" content="За нас" />
        <meta
          property="og:description"
          content="Основни принципи и ценности в дейността на адвокатурата"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* FIRST SECTION */}
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
          За нас
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Основни ценности и принципи на управление
            </h2>

            <p className="leading-relaxed tracking-wide mb-4 text-gray-700">
              Практиката на правото е основана на фундаментални принципи, които
              гарантират интегритет, отговорност и справедливост. Тези принципи
              формират основата на адвокатската професия.
            </p>

            <p className="leading-relaxed tracking-wide mb-6 text-gray-700">
              За да бъде адвокатурата независима и свободна, управлението на
              адвокатските дела трябва да се осъществява от самите адвокати, без
              намеса от други власти или външни влияния.
            </p>

            <h2 className="text-xl font-semibold text-blue-800 mb-4 mt-6">
              Автономност като основа за справедливост
            </h2>

            <p className="leading-relaxed tracking-wide text-gray-700">
              Истинската независимост не може да съществува без автономност при
              вземането на решения. Самоуправлението гарантира защита на правата и
              интересите на всеки гражданин.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded-lg overflow-hidden shadow-lg h-64 lg:h-80"
          >
            <img
              src={lawyerImage}
              alt="Адвокат"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* VALUES SECTION */}
      <motion.div
        ref={valuesSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="text-center mb-12 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-lg p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-2xl">
            Нашите ценности
          </h2>
          <p className="text-2xl text-blue-100 font-semibold mb-4">
            Принципи, които ни водят
          </p>
          <p className="text-white text-lg leading-relaxed">
            Основните ценности, върху които се изгражда дейността на адвокатурата.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={valuesSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-900"
            >
              <span className="text-4xl font-bold text-blue-900 opacity-30">
                {value.num}
              </span>
              <h3 className="text-lg font-bold text-blue-900 mb-3 mt-2">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VIDEO SECTION */}
      <motion.div
        ref={videoSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={videoSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto border-l-4 border-blue-900"
      >
        <div className="w-full aspect-video bg-gray-900">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Представяне"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            Представяне на дейността
          </h3>
          <p className="text-gray-700 text-lg">
            Кратко видео, представящо основните принципи и мисията на
            адвокатурата.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
