import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languageOptions = [
    { code: 'UZ', label: 'UZ', flag: '/flags/uz.svg' },
    { code: 'ENG', label: 'EN', flag: '/flags/gb.svg' },
    { code: 'RU', label: 'RU', flag: '/flags/ru.svg' },
  ];

  const currentLang =
    languageOptions.find((l) => l.code === i18n.language.toUpperCase()) ||
    languageOptions[0];

  const navLinks = [
    { key: 'Asosiy', href: '/' },
    { key: 'Kurslar', href: '/courses' },
    { key: 'Mentorlar', href: '/mentors' },
    { key: 'Biz haqimizda', href: '/about' },
    { key: 'Aloqa', href: '/contact' },
  ];

  const isActive = (href) => location.pathname === href;

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">ZarifaTeacher</div>
 
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
              {t(link.key)}
            </Link>
          ))}
 
          <div className="relative ml-6">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/80 hover:text-blue-900 transition text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="tracking-wide">{currentLang.label}</span>
              <FiChevronDown className="text-base mt-[1px]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white rounded-xl shadow-lg z-50 w-32">
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-sm text-blue-900 transition-all duration-150"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="tracking-wide">{lang.label}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </nav>

    
        <button
          className="md:hidden text-white text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
 
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
              {t(link.key)}
            </Link>
          ))}

          {/* Language Dropdown for Mobile */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/80 hover:text-blue-900 transition text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="tracking-wide">{currentLang.label}</span>
              <FiChevronDown className="text-base mt-[1px]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute mt-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg z-50 w-32">
                {languageOptions
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-sm text-blue-900 transition-all duration-150"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="tracking-wide">{lang.label}</span>
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

export default Navbar;
