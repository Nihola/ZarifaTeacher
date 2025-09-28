import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const currentLang = languageOptions.find((l) => l.code === i18n.language) || languageOptions[0];

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
    <header className="bg-white shadow-md fixed w-full z-1000">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Logo + Language Bar */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-2xl sm:text-3xl"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Zarifa
            </motion.span>
            <motion.span
              className="text-indigo-600 text-2xl sm:text-3xl font-semibold "
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Teacher
            </motion.span>
          </Link>

          {/* Language Selector - always visible */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800 text-sm sm:text-base font-semibold transition duration-300 shadow-md"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <span>{currentLang.label}</span>
              <FiChevronDown className="text-indigo-600" />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 right-0 bg-white rounded-xl shadow-xl z-50 w-32 border border-indigo-100 overflow-hidden"
                >
                  {languageOptions
                    .filter((lang) => lang.code !== currentLang.code)
                    .map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangChange(lang)}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-indigo-50 text-sm text-gray-800 transition duration-200"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.label}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 sm:gap-8">
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
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-4 py-6 flex flex-col items-center space-y-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition duration-200 ${isActive(link.href) ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
                  }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
