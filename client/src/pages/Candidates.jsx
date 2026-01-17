import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

import svetlozar from "../assets/images/svetlio.png";
import ivelina from "../assets/images/ivelina.jpg";
import diana from "../assets/images/diana.jpg";
import veliko from "../assets/images/veliko.jpg";
import stefka from "../assets/images/stefka.jpg";
import vladimir from "../assets/images/vladimir.jpg";
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
      bio: "Адвокат с 25-годишен професионален стаж...",
      badge: "1",
    },
    {
      id: 3,
      name: "адв. Диана Георгиева Иванова",
      position: "Кандидат за член на Адвокатския съвет и секретар",
      specialization: "Наказателно право",
      college: "Адвокатска колегия Варна",
      image: diana,
      bio: "Адвокат с 24-годишен професионален стаж...",
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
      bio: "Адвокат с 8-годишен професионален стаж...",
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
      bio: "Адвокат с 14-годишен професионален стаж...",
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
      bio: "Адвокат с 22-годишен професионален стаж...",
      badge: "5",
    },
    {
      id: 7,
      name: "адв. Ангелина Димова Димитрова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Съдебна практика, гражданско право",
      college: "Адвокатска колегия Варна",
      image: angelina,
      bio: "Юрист с дългогодишен професионален опит...",
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
      bio: "Адвокат с 17-годишен професионален стаж...",
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
      bio: "Адвокат с 26-годишен професионален стаж...",
      badge: "8",
    },
    {
      id: 10,
      name: "адв. Йордан Чаков Атанасов",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Наказателно право",
      college: "Адвокатска колегия Варна",
      image: yordan,
      bio: "Адвокат с 30-годишен професионален стаж...",
      badge: "9",
    },
    {
      id: 11,
      name: "адв. Мария Иванова Димитрова",
      position: "Кандидат за член на Адвокатския съвет",
      specialization: "Гражданско право",
      college: "Адвокатска колегия Варна",
      image: maria,
      bio: "Адвокат с 16-годишен професионален стаж...",
      badge: "10",
    },
  ];

  const Card = ({ c, imageHeight = "h-96" }) => (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border-b-4 border-blue-900"
    >
      <div className={`relative ${imageHeight}`}>
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
        <p className="text-xs text-blue-950 font-semibold">{c.bio}</p>
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

      {/* HEADER – оригинален фон */}
      <div className="text-center mb-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-2xl px-8 py-12">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Нашите кандидати
        </h1>
        <p className="text-xl text-gray-800 font-semibold">
          Екип от утвърдени професионалисти, посветени на правото и справедливостта
        </p>
      </div>

      {/* Колегия */}
      {/* <div className="text-center mb-12 bg-white/40 backdrop-blur-md rounded-xl py-6">
        <h2 className="text-4xl font-bold text-blue-900">
          Адвокатска колегия Варна
        </h2>
      </div> */}

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
          <Card key={c.id} c={c} />
        ))}
      </div>
    </motion.div>
  );
}
