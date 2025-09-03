import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
 
export default function About() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ students: 0, mentors: 0, courses: 0, successRate: 0 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    const increment = () => {
      setStats(prev => {
        if (
          prev.students >= 100 &&
          prev.mentors >= 10 &&
          prev.courses >= 10 &&
          prev.successRate >= 80 &&
          !isPaused
        ) {
          setIsPaused(true);
          setTimeout(() => {
            setStats({ students: 0, mentors: 0, courses: 0, successRate: 0 });
            setIsPaused(false);
          }, 3000); // 1-second pause before reset
          return prev;
        }
        if (!isPaused) {
          return {
            students: prev.students < 100 ? prev.students + 5 : 100,
            mentors: prev.mentors < 10 ? prev.mentors + 1 : 10,
            courses: prev.courses < 10 ? prev.courses + 1 : 10,
            successRate: prev.successRate < 80 ? prev.successRate + 1 : 80,
          };
        }
        return prev;
      });
    };
    interval = setInterval(increment, 50); // Moderate increment speed
    return () => clearInterval(interval);
  }, [isPaused]);

  const features = [
    {
      icon: './programming.png',
      title: t('features.programming.title'),
      desc: t('features.programming.desc'),
    },
    {
      icon: './certificate.png',
      title: t('features.certificates.title'),
      desc: t('features.certificates.desc'),
    },
    {
      icon: './language.png',
      title: t('features.languages.title'),
      desc: t('features.languages.desc'),
    },
  ];

  const statsData = [
    { value: stats.students, label: t('stats.students.label'), suffix: '+' },
    { value: stats.mentors, label: t('stats.mentors.label'), suffix: '+' },
    { value: stats.courses, label: t('stats.courses.label'), suffix: '+' },
    { value: stats.successRate, label: t('stats.successRate.label'), suffix: '%' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 max-sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        {/* Header Section */}
        <header className="text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 text-sm sm:text-base"
          >
            
            <span>{t('about.tagline')}</span>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('about.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 max-w-[800px] m-auto justify-center">
              {t('about.subtitle')}
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('about.description')}
          </motion.p>
        </header>

        {/* Features Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-50 rounded-xl p-6 text-center shadow-md transition-all duration-300 overflow-hidden group"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-50 rounded-xl p-6 text-center shadow-md transition-all duration-300 group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.value}{stat.suffix}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}