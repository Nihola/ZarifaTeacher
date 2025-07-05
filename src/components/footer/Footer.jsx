import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Mission */}
        <div>
          <h3 className="text-2xl font-bold mb-2">{t('footer.title')}</h3>
          <p className="text-sm opacity-80">{t('footer.mission')}</p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.pages')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">{t('footer.home')}</Link></li>
            <li><Link to="/courses">{t('footer.courses')}</Link></li>
            <li><Link to="/mentors">{t('footer.mentors')}</Link></li>
            <li><Link to="/about">{t('footer.about')}</Link></li>
            <li><Link to="/contact">{t('footer.contact')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.contact_title')}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone /> <span>{t('footer.phone')}: +998 90 123 45 67</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> <span>{t('footer.email')}: info@zarifateacher.uz</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> <span>{t('footer.location')}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiClock /> <span>{t('footer.hours')}</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t('footer.follow')}</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" rel="noreferrer"><FaTelegramPlane className="text-2xl hover:text-blue-400" /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram className="text-2xl hover:text-pink-500" /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaYoutube className="text-2xl hover:text-red-500" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ZarifaTeacher. {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
