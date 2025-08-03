import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-700 to-cyan-800 text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section: Logo & Mission and Quick Links */}
        <div className="flex flex-row gap-3 w-full md:w-auto">
          <div className="mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold tracking-tight flex items-center mb-4"
            >
              <Link to="/" className="flex items-center">
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Zarifa
                </motion.span>
                <motion.span
                  className="ml-1 text-white"
                  whileHover={{ color: '#4B5EFC' }}
                  transition={{ duration: 0.3 }}
                >
                  Teacher
                </motion.span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-yellow-300"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                >
                  <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                  <path d="M11 12.47L3.76 9.13 2.5 10v2l8.5 4.6 8.5-4.6v-2l-1.26-.87L13 12.47v2.53l-1 .54-1-.54v-2.53z" />
                </motion.svg>
              </Link>
            </motion.div>
            <p className="text-sm text-white/80 leading-tight">
              {t('footer.text')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-8 hidden md:block">
            <h4 className="font-semibold text-lg mb-4 text-yellow-300">Pages</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5, color: '#FFD700' }} transition={{ duration: 0.3 }}>
                <Link to="/" className="text-white/80 hover:text-yellow-300 transition duration-300">{t('footer.home')}</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFD700', backgroundColor: '#4B5EFC20' }} transition={{ duration: 0.3 }} className="rounded px-2">
                <Link to="/courses" className="text-white/80 hover:text-yellow-300 transition duration-300">{t('footer.courses')}</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFD700' }} transition={{ duration: 0.3 }}>
                <Link to="/mentors" className="text-white/80 hover:text-yellow-300 transition duration-300">{t('footer.mentors')}</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFD700' }} transition={{ duration: 0.3 }}>
                <Link to="/about" className="text-white/80 hover:text-yellow-300 transition duration-300">{t('footer.about')}</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFD700' }} transition={{ duration: 0.3 }}>
                <Link to="/contact" className="text-white/80 hover:text-yellow-300 transition duration-300">{t('footer.contact')}</Link>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Info and Social Links */}
        <div className="flex flex-row w-full md:w-auto">
          <div className="ml-8 hidden md:block">
            <h4 className="font-semibold text-lg mb-4 text-yellow-300">Contact Us</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiPhone className="text-lg" /></span> <span>+998 94 247 71 75</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiMail className="text-lg" /></span> <span>teacherzarifa@gmail.com</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiMapPin className="text-lg" /></span> <span>{t('footer.location')}</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiClock className="text-lg" /></span> <span>{t('footer.hours')}</span>
              </motion.li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="ml-8 hidden md:block">
            <h4 className="font-semibold text-lg mb-4 text-yellow-300">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://t.me/zarifa_education"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, rotate: 360, color: '#0088cc' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaTelegramPlane className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, rotate: -360, color: '#E1306C' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, color: '#FF0000' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaYoutube className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile Quick Links, Contact Info, and Social Links */}
        <div className="md:hidden">
          <div className="mb-8">
            <h4 className="font-semibold text-lg mb-4 text-yellow-300">Contact Us</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiPhone className="text-lg" /></span> <span>+998 94 247 71 75</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiMail className="text-lg" /></span> <span>teacherzarifa@gmail.com</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiMapPin className="text-lg" /></span> <span>{t('footer.location')}</span>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: '#FFFFFF' }} transition={{ duration: 0.3 }} className="flex items-center gap-2 text-white/80">
                <span className="bg-blue-600/50 p-2 rounded-full"><FiClock className="text-lg" /></span> <span>{t('footer.hours')}</span>
              </motion.li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-300">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://t.me/zarifa_education"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, rotate: 360, color: '#0088cc' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaTelegramPlane className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, rotate: -360, color: '#E1306C' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.4, color: '#FF0000' }}
                whileTap={{ scale: 0.9 }}
                className="text-white transition-all duration-500 ease-in-out"
              >
                <FaYoutube className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white/60 py-4 border-t border-white/20">
        © {new Date().getFullYear()} ZarifaTeacher. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;