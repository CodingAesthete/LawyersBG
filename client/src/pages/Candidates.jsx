import React, { useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Candidates() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const candidatesRef = useRef(null);
  const candidatesInView = useInView(candidatesRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const candidates = [
    {
      id: 1,
      name: "Стефан Николаев Марчев",
      nameEn: "Stefan Nikolaev Marchev",
      position: "Председател - Висшия адвокатски съвет",
      positionEn: "President - Supreme Bar Council",
      specialization: "Корпоративно право, международни договори",
      specializationEn: "Corporate Law, International Agreements",
      college: "Адвокатска колегия София",
      collegeEn: "Bar Association Sofia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop",
      bio: "Опитен адвокат със специализация в корпоративното право и международните договори",
      bioEn: "Experienced lawyer specializing in corporate law and international agreements",
      badge: "✓"
    },
    {
      id: 2,
      name: "Илонка Николова Райчинова",
      nameEn: "Ilonka Nikolova Raychinova",
      position: "Председател - Висшия дисциплинарен съд",
      positionEn: "President - Supreme Disciplinary Court",
      specialization: "Административно право, дисциплинарни процедури",
      specializationEn: "Administrative Law, Disciplinary Procedures",
      college: "Адвокатска колегия САК",
      collegeEn: "Bar Association SAK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop",
      bio: "Специалист в административното право и дисциплинарните производства",
      bioEn: "Specialist in administrative law and disciplinary proceedings",
      badge: "✓"
    },
    {
      id: 3,
      name: "Гергана Костова Върбанова",
      nameEn: "Gergana Kostova Varbanova",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Трудово право, социално право",
      specializationEn: "Labor Law, Social Law",
      college: "Адвокатска колегия Варна",
      collegeEn: "Bar Association Varna",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&q=80",
      bioEn: "Expert in labor law and protection of social rights",
      badge: "1"
    },
    {
      id: 4,
      name: "Николинка Христова Мянкова",
      nameEn: "Nikolinka Hristova Myankova",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Семейно право, наследствено право",
      specializationEn: "Family Law, Inheritance Law",
      college: "Адвокатска колегия Русе",
      collegeEn: "Bar Association Ruse",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop",
      bio: "Специалист в семейното и наследственото право",
      bioEn: "Specialist in family and inheritance law",
      badge: "2"
    },
    {
      id: 5,
      name: "Снежина Христова Христова",
      nameEn: "Snezhina Hristova Hristova",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Имотно право, вещни права",
      specializationEn: "Property Law, Real Rights",
      college: "Адвокатска колегия Силистра",
      collegeEn: "Bar Association Silistra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&q=80",
      bio: "Експерт в имотното право и защита на вещните права",
      bioEn: "Expert in property law and real rights protection",
      badge: "3"
    },
    {
      id: 6,
      name: "Златина Минчева Йовчева",
      nameEn: "Zlatina Mincheva Yovcheva",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Финансово право, банково право",
      specializationEn: "Financial Law, Banking Law",
      college: "Адвокатска колегия Стара Загора",
      collegeEn: "Bar Association Stara Zagora",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&crop=entropy&cs=tinysrgb&q=80",
      bio: "Специалист в финансовото и банковото право",
      bioEn: "Specialist in financial and banking law",
      badge: "4"
    },
    {
      id: 7,
      name: "Красимир Янков Недев",
      nameEn: "Krasimir Yankov Nedev",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Търговско право, конкурсно право",
      specializationEn: "Commercial Law, Bankruptcy Law",
      college: "Адвокатска колегия Сливен",
      collegeEn: "Bar Association Sliven",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&q=80",
      bioEn: "Expert in commercial law and bankruptcy proceedings",
      badge: "5"
    },
    {
      id: 8,
      name: "Румен Цветанов Петков",
      nameEn: "Rumen Tsvetanov Petkov",
      position: "Член - Висшия адвокатски съвет",
      positionEn: "Member - Supreme Bar Council",
      specialization: "Наказателно право, защита на правата",
      specializationEn: "Criminal Law, Rights Protection",
      college: "Адвокатска колегия Пазарджик",
      collegeEn: "Bar Association Pazardzhik",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&q=80",
      bio: "Специалист в наказателното право и защита на правата на обвиняемите",
      bioEn: "Specialist in criminal law and defendants' rights protection",
      badge: "6"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
        <title>{i18n.language === 'bg' ? 'Кандидати' : 'Candidates'}</title>
        <meta name="description" content={i18n.language === 'bg' ? 'Запознайте се с нашия талантлив екип от адвокати' : 'Meet our talented team of lawyers'} />
        <meta property="og:title" content={i18n.language === 'bg' ? 'Кандидати' : 'Candidates'} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10"></div>
        
        <div className="relative px-8 sm:px-12 py-12 backdrop-blur-md bg-white/40 rounded-2xl border border-white/60 shadow-2xl">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-blue-900 drop-shadow-lg"
          >
            {i18n.language === 'bg' ? 'Нашите кандидати' : 'Our Candidates'}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-semibold leading-relaxed"
          >
            {i18n.language === 'bg' 
              ? 'Запознайте се с нашия експертен екип, посветен на справедливостта и защитата на правата'
              : 'Meet our expert team dedicated to justice and protection of rights'}
          </motion.p>
        </div>
      </motion.div>

      {/* SECTION 1: Supreme Bar Council */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mb-12 relative overflow-hidden"
      >
        <div className="relative px-8 sm:px-12 py-10 backdrop-blur-md bg-blue-100/80 rounded-xl border border-blue-200 shadow-lg">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-3"
          >
            {i18n.language === 'bg' ? 'Висш адвокатски съвет' : 'Supreme Bar Council'}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"
          ></motion.div>
        </div>
      </motion.div>

      {/* Candidates Grid */}
      <motion.div
        ref={candidatesRef}
        initial="hidden"
        animate={candidatesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {candidates.map((candidate, index) => (
          <motion.div
            key={candidate.id}
            variants={itemVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-b-4 border-blue-900 group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-80 bg-gradient-to-br from-blue-100 to-blue-50">
              <motion.img
                src={candidate.image}
                alt={i18n.language === 'bg' ? candidate.name : candidate.nameEn}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {candidate.badge}
              </div>

              {/* Position overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-white font-bold text-sm leading-tight"
                >
                  {i18n.language === 'bg' ? candidate.position : candidate.positionEn}
                </motion.p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 bg-white">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg font-bold text-blue-900 mb-2 line-clamp-2"
              >
                {i18n.language === 'bg' ? candidate.name : candidate.nameEn}
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2 mb-4 text-xs"
              >
                <p className="text-blue-950 font-semibold">
                  <span className="font-bold text-blue-900">
                    {i18n.language === 'bg' ? 'Специалност:' : 'Specialization:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.specialization : candidate.specializationEn}
                </p>
                <p className="text-blue-950 font-semibold pt-1">
                  <span className="font-bold text-blue-900">
                    {i18n.language === 'bg' ? 'Колегия:' : 'College:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.college : candidate.collegeEn}
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-xs text-blue-950 font-semibold mb-4 leading-relaxed line-clamp-2"
              >
                {i18n.language === 'bg' ? candidate.bio : candidate.bioEn}
              </motion.p>

              {/* Email Button */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex"
              >
                <button className="w-full flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all duration-200 text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-105">
                  <FaEnvelope className="w-3 h-3" />
                  Mail
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SECTION 2: Supreme Disciplinary Court */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mb-12 relative overflow-hidden mt-24"
      >
        <div className="relative px-8 sm:px-12 py-10 backdrop-blur-md bg-blue-100/80 rounded-xl border border-blue-200 shadow-lg">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-3"
          >
            {i18n.language === 'bg' ? 'Висшия дисциплинарен съд' : 'Supreme Disciplinary Court'}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"
          ></motion.div>
        </div>
      </motion.div>

      {/* Disciplinary Court Candidates Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
      >
        {[
          {
            id: 101,
            name: "Драган Йорданов Стойков",
            nameEn: "Dragan Yordanov Stoykov",
            position: "Кандидат - Висшия дисциплинарен съд",
            positionEn: "Candidate - Supreme Disciplinary Court",
            specialization: "Професионална етика, дисциплинарни процедури",
            specializationEn: "Professional Ethics, Disciplinary Procedures",
            college: "Адвокатска колегия Плевен",
            collegeEn: "Bar Association Pleven",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&q=80",
            bio: "Специалист в професионалната етика и дисциплинарните производства",
            bioEn: "Specialist in professional ethics and disciplinary proceedings"
          },
          {
            id: 102,
            name: "Виктория Петрова Василева",
            nameEn: "Victoria Petrova Vasileva",
            position: "Кандидат - Висшия дисциплинарен съд",
            positionEn: "Candidate - Supreme Disciplinary Court",
            specialization: "Правна теория, дисциплинарни стандарти",
            specializationEn: "Legal Theory, Disciplinary Standards",
            college: "Адвокатска колегия Благоевград",
            collegeEn: "Bar Association Blagoevgrad",
            image: "https://images.unsplash.com/photo-1507876466836-815c15eac495?w=600&h=700&fit=crop&q=80",
            bio: "Експерт в правната теория и дисциплинарните стандарти",
            bioEn: "Expert in legal theory and disciplinary standards"
          },
          {
            id: 103,
            name: "Константин Василев Митев",
            nameEn: "Konstantin Vasilev Mitev",
            position: "Кандидат - Висшия дисциплинарен съд",
            positionEn: "Candidate - Supreme Disciplinary Court",
            specialization: "Правни основания, арбитраж",
            specializationEn: "Legal Foundations, Arbitration",
            college: "Адвокатска колегия Хасково",
            collegeEn: "Bar Association Haskovo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop&q=80",
            bio: "Специалист в арбитража и правните основания",
            bioEn: "Specialist in arbitration and legal foundations"
          },
          {
            id: 104,
            name: "Елена Кирилова Тодорова",
            nameEn: "Elena Kirilova Todorova",
            position: "Кандидат - Висшия дисциплинарен съд",
            positionEn: "Candidate - Supreme Disciplinary Court",
            specialization: "Деонтология, професионална отговорност",
            specializationEn: "Deontology, Professional Responsibility",
            college: "Адвокатска колегия Монтана",
            collegeEn: "Bar Association Montana",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&q=80",
            bio: "Експерт в деонтологията и професионалната отговорност",
            bioEn: "Expert in deontology and professional responsibility"
          }
        ].map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-purple-600"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
              <motion.img 
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                ДС
              </div>
            </div>

            {/* Content */}
            <div className="p-5 bg-white">
              <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                {i18n.language === 'bg' ? candidate.name : candidate.nameEn}
              </h3>
              
              <div className="space-y-2 mb-4 text-xs">
                <p className="text-gray-700">
                  <span className="font-semibold text-blue-800">
                    {i18n.language === 'bg' ? 'Специалност:' : 'Specialization:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.specialization : candidate.specializationEn}
                </p>
                <p className="text-gray-700 pt-1">
                  <span className="font-semibold text-blue-800">
                    {i18n.language === 'bg' ? 'Колегия:' : 'College:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.college : candidate.collegeEn}
                </p>
              </div>

              <p className="text-xs text-gray-700 mb-4 leading-relaxed line-clamp-2">
                {i18n.language === 'bg' ? candidate.bio : candidate.bioEn}
              </p>

              {/* Email Button */}
              <div className="flex">
                <button className="w-full flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all duration-200 text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-105">
                  <FaEnvelope className="w-3 h-3" />
                  Mail
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SECTION 3: Supreme Supervisory Council */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mb-12 relative overflow-hidden mt-24"
      >
        <div className="relative px-8 sm:px-12 py-10 backdrop-blur-md bg-blue-100/80 rounded-xl border border-blue-200 shadow-lg">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-3"
          >
            {i18n.language === 'bg' ? 'Висш контролен съвет' : 'Supreme Supervisory Council'}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"
          ></motion.div>
        </div>
      </motion.div>

      {/* Supervisory Council Candidates Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
      >
        {[
          {
            id: 201,
            name: "Борис Стефанов Петров",
            nameEn: "Boris Stefanov Petrov",
            position: "Кандидат - Висш контролен съвет",
            positionEn: "Candidate - Supreme Supervisory Council",
            specialization: "Контролни механизми, финансово управление",
            specializationEn: "Control Mechanisms, Financial Management",
            college: "Адвокатска колегия Велико Търново",
            collegeEn: "Bar Association Veliko Tarnovo",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&q=80",
            bio: "Специалист в контролните механизми и финансовото управление",
            bioEn: "Specialist in control mechanisms and financial management"
          },
          {
            id: 202,
            name: "Магдалена Чолева Николова",
            nameEn: "Magdalena Choleva Nikolova",
            position: "Кандидат - Висш контролен съвет",
            positionEn: "Candidate - Supreme Supervisory Council",
            specialization: "Аудит, корпоративна управа",
            specializationEn: "Audit, Corporate Governance",
            college: "Адвокатска колегия Шумен",
            collegeEn: "Bar Association Shumen",
            image: "https://images.unsplash.com/photo-1507876466836-815c15eac495?w=600&h=700&fit=crop&q=80",
            bio: "Експерт в аудита и корпоративната управа",
            bioEn: "Expert in audit and corporate governance"
          },
          {
            id: 203,
            name: "Филипе Миланов Христов",
            nameEn: "Filipe Milanov Hristov",
            position: "Кандидат - Висш контролен съвет",
            positionEn: "Candidate - Supreme Supervisory Council",
            specialization: "Надзор, стандарти и процедури",
            specializationEn: "Supervision, Standards and Procedures",
            college: "Адвокатска колегия Лозен",
            collegeEn: "Bar Association Lozev",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop&q=80",
            bio: "Специалист в надзора и процедурните стандарти",
            bioEn: "Specialist in supervision and procedural standards"
          },
          {
            id: 204,
            name: "Анелия Гошева Ставрева",
            nameEn: "Anelia Gosheva Stavreva",
            position: "Кандидат - Висш контролен съвет",
            positionEn: "Candidate - Supreme Supervisory Council",
            specialization: "Прозрачност, отчетност и реформи",
            specializationEn: "Transparency, Accountability and Reforms",
            college: "Адвокатска колегия Смолян",
            collegeEn: "Bar Association Smolyan",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&q=80",
            bio: "Експерт в прозрачността, отчетността и правните реформи",
            bioEn: "Expert in transparency, accountability and legal reforms"
          }
        ].map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-green-600"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
              <motion.img 
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                КС
              </div>
            </div>

            {/* Content */}
            <div className="p-5 bg-white">
              <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
                {i18n.language === 'bg' ? candidate.name : candidate.nameEn}
              </h3>
              
              <div className="space-y-2 mb-4 text-xs">
                <p className="text-gray-700">
                  <span className="font-semibold text-blue-800">
                    {i18n.language === 'bg' ? 'Специалност:' : 'Specialization:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.specialization : candidate.specializationEn}
                </p>
                <p className="text-gray-700 pt-1">
                  <span className="font-semibold text-blue-800">
                    {i18n.language === 'bg' ? 'Колегия:' : 'College:'} 
                  </span>
                  <br />
                  {i18n.language === 'bg' ? candidate.college : candidate.collegeEn}
                </p>
              </div>

              <p className="text-xs text-gray-700 mb-4 leading-relaxed line-clamp-2">
                {i18n.language === 'bg' ? candidate.bio : candidate.bioEn}
              </p>

              {/* Email Button */}
              <div className="flex">
                <button className="w-full flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all duration-200 text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-105">
                  <FaEnvelope className="w-3 h-3" />
                  Mail
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">
          {i18n.language === 'bg' ? 'Свържете се с нас' : 'Get In Touch'}
        </h2>
        <p className="text-xl mb-6 text-blue-100">
          {i18n.language === 'bg' 
            ? 'Имате въпроси към нашия екип? Пишете ни днес!'
            : 'Have questions for our team? Contact us today!'}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-200"
        >
          {i18n.language === 'bg' ? 'Контактна форма' : 'Contact Form'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
