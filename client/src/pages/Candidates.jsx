import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope } from "react-icons/fa";

export default function Candidates() {
  const candidatesRef = useRef(null);
  const candidatesInView = useInView(candidatesRef, {
    once: false,
    margin: "-100px",
  });

  const candidates = [
    {
      id: 1,
      name: "Стефан Николаев Марчев",
      position: "Председател – Висш адвокатски съвет",
      specialization: "Корпоративно право, международни договори",
      college: "Адвокатска колегия София",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop",
      bio: "Опитен адвокат със специализация в корпоративното право и международните договори",
      badge: "✓",
    },
    {
      id: 2,
      name: "Илонка Николова Райчинова",
      position: "Председател – Висш дисциплинарен съд",
      specialization: "Административно право, дисциплинарни производства",
      college: "Адвокатска колегия САК",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop",
      bio: "Специалист в административното право и дисциплинарните производства",
      badge: "✓",
    },
    {
      id: 3,
      name: "Гергана Костова Върбанова",
      position: "Член – Висш адвокатски съвет",
      specialization: "Трудово и социално право",
      college: "Адвокатска колегия Варна",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&q=80",
      bio: "Експерт в трудовото право и защитата на социалните права",
      badge: "1",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 mb-10"
    >
      <Helmet>
        <title>Кандидати</title>
        <meta
          name="description"
          content="Запознайте се с кандидатите за органите на адвокатурата"
        />
        <meta property="og:title" content="Кандидати" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-xl -z-10 rounded-2xl" />
        <div className="relative px-8 py-12 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900 drop-shadow-lg">
            Нашите кандидати
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-semibold">
            Екип от утвърдени професионалисти, посветени на правото и справедливостта
          </p>
        </div>
      </motion.div>

      {/* SECTION: Висш адвокатски съвет */}
      {/* SECTION: Висш адвокатски съвет */}
<motion.div className="text-center mb-12">
  <h2 className="inline-block px-6 py-2 text-4xl md:text-5xl font-bold text-blue-900 mb-3 rounded-lg bg-blue-100/60">
    Висш адвокатски съвет
  </h2>
  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-3" />
</motion.div>


      {/* GRID */}
      <motion.div
        ref={candidatesRef}
        variants={containerVariants}
        initial="hidden"
        animate={candidatesInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {candidates.map((c) => (
          <motion.div
            key={c.id}
            variants={itemVariants}
            whileHover={{ y: -12 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border-b-4 border-blue-900"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover"
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {c.name}
              </h3>

              <p className="text-xs font-semibold text-blue-950 mb-2">
                <span className="text-blue-900 font-bold">Специалност:</span>
                <br />
                {c.specialization}
              </p>

              <p className="text-xs font-semibold text-blue-950 mb-3">
                <span className="text-blue-900 font-bold">Колегия:</span>
                <br />
                {c.college}
              </p>

              <p className="text-xs text-blue-950 font-semibold mb-4 line-clamp-2">
                {c.bio}
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition">
                <FaEnvelope className="w-3 h-3" />
                Контакт
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Свържете се с нас</h2>
        <p className="text-xl mb-6 text-blue-100">
          Имате въпроси към нашия екип? Пишете ни още днес.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
          Контактна форма
        </button>
      </motion.div>
    </motion.div>
  );
}
