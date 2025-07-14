import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='mb-10'>
      <section className="bg-white text-blue-900 min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 ">

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
      <div className="relative max-w-5xl mx-auto mt-16 p-10 bg-white rounded-3xl shadow-2xl overflow-hidden group transition-all duration-700 hover:scale-[1.01]">

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-60 z-0 pointer-events-none" />

        {/* Curved Ring (Top Right) */}
        <div className="absolute top-0 right-0 w-80 h-80 border-[6px] border-red-200 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30 z-0 animate-slow-pulse" />

        {/* Decorative Circle (Bottom Left) */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-red-100 opacity-20 rounded-full blur-2xl animate-float z-0" />

        {/* Diagonal Line Decoration */}
        <div className="absolute -bottom-6 -right-6 w-96 h-96 border-t-4 border-r-4 border-red-100 rotate-45 z-0 opacity-30" />

        {/* Overlay Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#fca5a5_1px,transparent_1px)] [background-size:20px_20px] opacity-5 z-0 pointer-events-none" />

        {/* Content Area */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Sertifikat
            <span className="block w-24 h-1 bg-red-500 mt-3 group-hover:w-32 transition-all duration-500" />
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700 font-medium max-w-3xl">
            Kursni muvaffaqiyatli tugatgan har bir talabaga xalqaro standartlarga mos sertifikat beriladi.
          </p>
        </div>
      </div>


    </div>



  );
};

export default Home;
