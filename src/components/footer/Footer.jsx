import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Mission */}
        <div>
          <h3 className="text-2xl font-bold mb-3">{t('footer.title')}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{t('footer.mission')}</p>
        </div>
 
        <div className="hidden md:block">
          <h4 className="font-semibold text-lg mb-3">{t('footer.pages')}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-white transition">{t('footer.home')}</Link></li>
            <li><Link to="/courses" className="hover:text-white transition">{t('footer.courses')}</Link></li>
            <li><Link to="/mentors" className="hover:text-white transition">{t('footer.mentors')}</Link></li>
            <li><Link to="/about" className="hover:text-white transition">{t('footer.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">{t('footer.contact')}</Link></li>
          </ul>
        </div>  <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.contact_title')}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <FiPhone className="text-lg" /> <span>+998 90 123 45 67</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-lg" /> <span>info@zarifateacher.uz</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-lg" /> <span>{t('footer.location')}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="text-lg" /> <span>{t('footer.hours')}</span>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.follow')}</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" rel="noreferrer">
              <FaTelegramPlane className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400 transition duration-300" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaYoutube className="text-2xl hover:text-red-500 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ZarifaTeacher. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
