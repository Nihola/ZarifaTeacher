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
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* ✨ Logo with animated graduation cap */}
        <div className="text-2xl font-bold tracking-wide relative flex items-center group">
          <span>ZarifaTeache</span>
          <span className="ml-0 relative inline-block">
            <span>r</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-6 h-6 -top-0 left-[1px] text-white drop-shadow-md"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 45, 0],
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`font-medium transition duration-200 ${isActive(link.href)
                  ? 'border-b-2 border-yellow-300 text-yellow-300'
                  : 'hover:text-yellow-300'
                }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          {/* Language Dropdown */}
          <div className="relative ml-6">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/80 hover:text-blue-900 transition text-white text-sm font-semibold"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>{currentLang.label}</span>
              <FiChevronDown />
            </button>

            {langDropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white rounded-xl shadow-lg z-50 w-32">
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-sm text-blue-900"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${isActive(link.href)
                  ? 'text-yellow-300'
                  : 'text-white hover:text-yellow-300'
                }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          {/* Language Switcher Mobile */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/80 hover:text-blue-900 transition text-white text-sm font-semibold"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>{currentLang.label}</span>
              <FiChevronDown />
            </button>

            {langDropdownOpen && (
              <div className="absolute mt-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg z-50 w-32">
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-sm text-blue-900"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
