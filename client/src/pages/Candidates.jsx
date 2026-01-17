import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

import svetlozar from "../assets/images/svetphoto.png";
import ivelina from "../assets/images/iva.png";
import diana from "../assets/images/diana.png";
import veliko from "../assets/images/veliko.png";
import stefka from "../assets/images/stefka.png";
import vladimir from "../assets/images/vlado.png";
import angelina from "../assets/images/angelina.png";
import ganka from "../assets/images/ganka.png";
import nevena from "../assets/images/nevena.jpg";
import yordan from "../assets/images/yordan.png";
import maria from "../assets/images/maria.jpg";

export default function Candidates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const chairman = {
    id: 1,
    name: "адв. Светлозар Анастасов Николов",
    position: "За председател на Адвокатска колегия",
    specialization:
      "Защита на правата на кредитополучателите, гражданско право, изпълнително производство, несъстоятелност, право на ЕС",
    college: "Адвокатска колегия Варна",
    image: svetlozar,
    bio: "Член на Адвокатска колегия Варна от 2013 г. Специализира в защитата на правата на кредитополучателите, гражданското право, изпълнителното производство и несъстоятелността. Притежава професионална квалификация „Право на ЕС“ към СУ „Св. Климент Охридски“. Владее английски, руски, немски и испански език. Председател на Съюза на българските адвокати и член на ръководството на Адвокатска колегия Варна.",
    badge: "✓",
  };

  const members = [
    {
      id: 2,
      name: "адв. Ивелина Владимирова Иванова – Парушева",
      position: "Кандидат за член на Адвокатския съвет и заместник-председател",
      specialization:
        "Гражданско право, административно право, право на Европейския съюз, медиация",
      college: "Адвокатска колегия САК",
      image: ivelina,
      bio: "Адвокат с 25-годишен професионален стаж. Специализира в областта на гражданското и административното право. Допълнително е завършила „Право на Европейския съюз“ и медиация. Била е делегат на Общото събрание на адвокатите от страната за 2024 г. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "1",
    },
    {
      id: 3,
      name: "адв. Диана Георгиева Иванова",
      position: "Кандидат за член на Адвокатския съвет и секретар",
      specialization: "Наказателно право",
      college: "Адвокатска колегия Варна",
      image: diana,
      bio: "Адвокат с 24-годишен професионален стаж. Специализира в областта на наказателното право. Учредител е на Съюза на българските адвокати. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "2",
    },
    {
      id: 4,
      name: "адв. Велико Славов Великов",
      position: "Кандидат за член на Адвокатския съвет",
      specialization:
        "Корпоративно и търговско право, IT право и цифрови услуги",
      college: "Адвокатска колегия Варна",
      image: veliko,
      bio: "Адвокат с 8-годишен професионален стаж. Специализира в обслужването на фирми в IT сектора и в областта на цифровите услуги. Работи активно за изучаване, подпомагане и развитие на иновативните технологии, както и за осигуряване на среда на правна предвидимост и правна сигурност в добрите търговски практики. До момента не е участвал в органите за управление на адвокатурата.",
      badge: "3",
    },
    {
      id: 5,
      name: "адв. Стефка Петкова Кючукова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization:
        "Гражданско, административно и наказателно право",
      college: "Адвокатска колегия Варна",
      image: stefka,
      bio: "Адвокат с 14-годишен професионален стаж. Специализира в областта на гражданското, административното и наказателното право. Владее английски и италиански език. Била е делегат на Общото събрание на адвокатите от страната за 2024 г. Учредител е на Съюза на българските адвокати. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "4",
    },
    {
      id: 6,
      name: "адв. Владимир Иванов Иванов",
      position: "Кандидат за член на Адвокатския съвет",
      specialization:
        "Гражданско, имиграционно, международно, търговско право",
      college: "Адвокатска колегия Варна",
      image: vladimir,
      bio: "Адвокат с 22-годишен професионален стаж. Специализира в областта на гражданското, имиграционното, международното, търговското, инвестиционното и договорното право. Работил е като арбитражен съдия по сложни търговски спорове и активно представлява лица пред Европейския съд по правата на човека (ЕСПЧ). Член е на Европейската асоциация на адвокатите и работи свободно на английски, френски и руски език. До момента не е участвал в органите за управление на адвокатурата.",
      badge: "5",
    },
    {
      id: 7,
      name: "адв. Ангелина Димова Димитрова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Съдебна практика, гражданско право",
      college: "Адвокатска колегия Варна",
      image: angelina,
      bio: "Юрист с дългогодишен професионален опит в съдебната система и адвокатурата. Професионалният ѝ път преминава през всички нива на съдебната система – била е председател на Районен съд – Генерал Тошево, съдия и заместник-председател на Районен съд – Варна, както и съдия в Окръжен съд – Варна. От края на 2002 г. до настоящия момент практикува като адвокат в Адвокатска колегия – Варна, с фокус върху професионалната независимост, отговорността към колегията и утвърждаването на авторитета на адвокатската професия. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "6",
    },
    {
      id: 8,
      name: "адв. Ганка Андонова Йост",
      position: "Кандидат за член на Адвокатския съвет",
      specialization:
        "Административно право, обществени поръчки",
      college: "Адвокатска колегия Варна",
      image: ganka,
      bio: "Адвокат с 17-годишен професионален стаж. Специализира в областта на административното право и при възлагането на обществени поръчки. Била е началник на отдел „Обществени поръчки и правно обслужване“ в Общинска администрация Ветрино. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "7",
    },
    {
      id: 9,
      name: "адв. Невена Кирилова Стефанова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization:
        "Вещно право, административно-наказателно право",
      college: "Адвокатска колегия Варна",
      image: nevena,
      bio: "Адвокат с 26-годишен професионален стаж. Специализира в областта на вещното, административното и административно-наказателното право. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "8",
    },
    {
      id: 10,
      name: "адв. Йордан Чаков Атанасов",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Наказателно право",
      college: "Адвокатска колегия Варна",
      image: yordan,
      bio: "Осем години е бил районен прокурор в Девня. Адвокат с 30-годишен професионален стаж. Работи основно в областта на наказателното право. До момента не е участвал в органите за управление на адвокатурата.",
      badge: "9",
    },
    {
      id: 11,
      name: "адв. Мария Иванова Димитрова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Гражданско право",
      college: "Адвокатска колегия Варна",
      image: maria,
      bio: "Адвокат с 16-годишен професионален стаж. Специализира в областта на гражданското право. Владее английски и руски езици. До момента не е участвала в органите за управление на адвокатурата.",
      badge: "10",
    },
  ];

  const Card = ({ c, imageHeight = "h-96", grow = false }) => (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border-b-4 border-blue-900 h-auto ${
        grow ? "min-h-[620px]" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${imageHeight} overflow-hidden`}>
        <img
          src={c.image}
          alt={c.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
          {c.badge}
        </div>
        <div className="absolute bottom-0 p-4 text-white text-sm font-bold">
          {c.position}
        </div>
      </div>

      {/* Text – вече НЕ се реже */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-blue-900 mb-2">{c.name}</h3>
        <p className="text-xs font-semibold text-blue-950 mb-2">
          <span className="font-bold">Специалност:</span>
          <br />
          {c.specialization}
        </p>
        <p className="text-xs font-semibold text-blue-950 mb-2">
          <span className="font-bold">Колегия:</span>
          <br />
          {c.college}
        </p>
        <p className="text-xs text-blue-950 font-semibold whitespace-normal">
          {c.bio}
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mb-10"
    >
      <Helmet>
        <title>Кандидати</title>
      </Helmet>

      {/* HEADER */}
      <div className="text-center mb-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-2xl px-8 py-12">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Нашите кандидати
        </h1>
        <p className="text-xl text-gray-800 font-semibold">
          Екип от утвърдени професионалисти, посветени на правото и справедливостта
        </p>
      </div>

      {/* Председател */}
      <div className="text-center mb-10 bg-blue-100/70 rounded-xl py-4">
        <h3 className="text-2xl font-bold text-blue-900">
          За председател на Адвокатска колегия Варна
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div />
        <Card c={chairman} imageHeight="h-[28rem]" />
        <div />
      </div>

      {/* Членове */}
      <div className="text-center mb-10 bg-blue-50/70 rounded-xl py-4">
        <h3 className="text-2xl font-bold text-blue-900">
          Кандидати за членове на Адвокатска колегия
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((c) => (
          <Card key={c.id} c={c} grow />
        ))}
      </div>
    </motion.div>
  );
}
