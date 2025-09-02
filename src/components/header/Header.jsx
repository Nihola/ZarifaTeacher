import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languageOptions = [
    { code: 'uz', label: 'UZ', flag: '/flags/uz.svg' },
    { code: 'en', label: 'EN', flag: '/flags/gb.svg' },
    { code: 'ru', label: 'RU', flag: '/flags/ru.svg' },
  ];

  const currentLang =
    languageOptions.find((l) => l.code === i18n.language) || languageOptions[0];

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'courses', href: '/courses' },
    { key: 'mentors', href: '/mentors' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ];

  const isActive = (href) => location.pathname === href;

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 shadow-lg fixed w-full z-60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✨ Enhanced Logo with gradient and animated effects */}
        <div className="text-3xl font-extrabold tracking-tight relative flex items-center group">
          <Link to="/" className="flex items-center">
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Zarifa
            </motion.span>
            <motion.span
              className="text-indigo-600"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Teacher
            </motion.span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-indigo-500"
              animate={{
                y: [0, -4, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 3,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6, ease: 'easeOut' },
              }}
            >
              <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
              <path d="M11 12.47L3.76 9.13 2.5 10v2l8.5 4.6 8.5-4.6v-2l-1.26-.87L13 12.47v2.53l-1 .54-1-.54v-2.53z" />
            </motion.svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`relative font-medium text-gray-600 transition duration-300 ${isActive(link.href)
                  ? 'text-indigo-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500'
                  : 'hover:text-indigo-500 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-indigo-500 hover:after:to-purple-500'
                }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          {/* Stylish Language Dropdown */}
          <div className="relative ml-6">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800 text-sm font-semibold transition duration-300 shadow-md"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <span>{currentLang.label}</span>
              <FiChevronDown className="text-indigo-600" />
            </button>

            {langDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 right-0 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-xl z-50 w-32 border border-indigo-100 overflow-hidden"
              >
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-indigo-100 text-sm text-gray-800 transition duration-200"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
              </motion.div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-6 flex flex-col items-center space-y-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition duration-200 ${isActive(link.href)
                  ? 'text-indigo-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500'
                  : 'text-gray-600 hover:text-indigo-500 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-indigo-500 hover:after:to-purple-500'
                }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          {/* Language Switcher Mobile */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800 text-sm font-semibold transition duration-300 shadow-md"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <span>{currentLang.label}</span>
              <FiChevronDown className="text-indigo-600" />
            </button>

            {langDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 left-1/2 -translate-x-1/2 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-xl z-50 w-32 border border-indigo-100 overflow-hidden"
              >
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-indigo-100 text-sm text-gray-800 transition duration-200"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
              </motion.div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;