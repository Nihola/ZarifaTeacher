import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-blue-900 min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">

      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed mb-6"
        >
          {t("hero.description")}
        </motion.p>

        <Link
          to="/courses"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          {t("hero.button")}
        </Link>
      </div>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="/hero.png"
          alt="ZarifaTeacher students"
          className="rounded-3xl object-cover w-full max-w-md md:max-w-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
