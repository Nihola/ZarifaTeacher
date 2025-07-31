import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/20">

        {/* Logo & Mission */}
        <div>
          <div className="text-2xl font-bold tracking-wide relative flex items-center group mb-4">
            <span>ZarifaTeache</span>
            <span className="relative inline-block">
              <span>r</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-6 h-6 -top-0 left-[1px] text-white drop-shadow-md"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 4,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
              >
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                <path d="M11 12.47L3.76 9.13 2.5 10v2l8.5 4.6 8.5-4.6v-2l-1.26-.87L13 12.47v2.53l-1 .54-1-.54v-2.53z" />
              </motion.svg>
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            {t('footer.mission')}
          </p>
        </div>

        {/* Pages – hidden on small screens */}
        <div className="hidden md:block">
          <h4 className="font-semibold text-lg mb-3">{t('footer.pages')}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-yellow-300 transition duration-200">{t('footer.home')}</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-300 transition duration-200">{t('footer.courses')}</Link></li>
            <li><Link to="/mentors" className="hover:text-yellow-300 transition duration-200">{t('footer.mentors')}</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition duration-200">{t('footer.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition duration-200">{t('footer.contact')}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.contact_title')}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2 hover:text-white transition">
              <FiPhone className="text-lg" /> <span>+998 94 247 71 75</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FiMail className="text-lg" /> <span>teacherzarifa@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FiMapPin className="text-lg" /> <span>{t('footer.location')}</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FiClock className="text-lg" /> <span>{t('footer.hours')}</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.follow')}</h4>
          <div className="flex gap-4 mt-2">
            <motion.a
              href="https://t.me/zarifa_education"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 2.2, rotate: 5 }}
              className="text-white transition"
            >
              <FaTelegramPlane className="text-2xl hover:text-pink-400 shadow-md hover:shadow-blue-500/50" />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 2.2, rotate: -5 }}
              className="text-white transition"
            >
              <FaInstagram className="text-2xl hover:text-pink-400 shadow-md hover:shadow-pink-400/40" />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 2.2 }}
              className="text-white transition"
            >
              <FaYoutube className="text-2xl hover:text-red-500 shadow-md hover:shadow-red-500/40" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ZarifaTeacher. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
