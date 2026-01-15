import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      className="w-11/12 sm:w-5/6 mx-auto px-4 sm:px-10 py-8 mt-6 header-sm:mt-14 sm:mt-6 mb-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Контакти</title>
        <meta
          name="description"
          content="Свържете се с Висшия адвокатски съвет"
        />
        <meta
          name="keywords"
          content="контакти, телефон, адрес, имейл, адвокат"
        />
        <meta property="og:title" content="Контакти" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-8 mb-12 shadow-lg"
      >
        <h1 className="text-4xl md:text-5xl text-center font-bold text-blue-900 drop-shadow-lg mb-4">
          Свържете се с нас
        </h1>
        <p className="text-center text-blue-800 text-lg drop-shadow-md">
          Ние сме тук, за да отговорим на вашите въпроси и предложения
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
            alt="Контакт"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-blue-900 text-lg leading-relaxed drop-shadow-md">
              Висшият адвокатски съвет е органът на адвокатската професия в
              България, който защитава независимостта на адвокатурата,
              подпомага развитието на правната система и представлява
              интересите на адвокатите пред всички органи на власт.
            </p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <ContactItem
              icon={<FaPhone />}
              label="Телефон"
              value="+359 2 987 6543"
            />
            <ContactItem
              icon={<FaEnvelope />}
              label="Имейл"
              value="contact@supremebar.bg"
            />
            <ContactItem
              icon={<FaMapMarkerAlt />}
              label="Адрес"
              value="Висш адвокатски съвет, София, България"
            />
            <ContactItem
              icon={<FaClock />}
              label="Работно време"
              value="Понеделник – Петък, 09:00 – 18:00"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-blue-50 rounded-lg p-3 shadow-sm flex items-center space-x-3"
    >
      <div className="bg-blue-200 p-2 rounded-lg text-blue-900 text-lg">
        {icon}
      </div>
      <div>
        <p className="text-blue-900 font-semibold text-sm">{label}</p>
        <p className="text-blue-800 text-sm">{value}</p>
      </div>
    </motion.div>
  );
}
