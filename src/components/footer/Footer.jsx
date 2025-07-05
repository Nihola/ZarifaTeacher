import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import TrueFocus from './../TrueFocus';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="animated-gradient mt-14 text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        
        <Fade direction="up" triggerOnce>
          <div>
            <TrueFocus
              sentence="Zarifa Teacher"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            <p className="text-sm opacity-90 leading-relaxed">
              {t("footer.mission")}
            </p>
          </div>
        </Fade>

         
        <Slide direction="up" triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">{t("footer.pages")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">{t("footer.home")}</Link></li>
              <li><Link to="/courses" className="hover:underline">{t("footer.courses")}</Link></li>
              <li><Link to="/mentors" className="hover:underline">{t("footer.mentors")}</Link></li>
              <li><Link to="/about" className="hover:underline">{t("footer.about")}</Link></li>
              <li><Link to="/contact" className="hover:underline">{t("footer.contact")}</Link></li>
            </ul>
          </div>
        </Slide>

         
        <Slide direction="up" delay={100} triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">{t("footer.contact_title")}</h3>
            <p className="text-sm mb-2">📞 +998 90 123 45 67</p>
            <p className="text-sm mb-2">✉️ info@zarifateacher.uz</p>
            <p className="text-sm mb-2">📍 {t("footer.location")}</p>
            <p className="text-sm">🕒 {t("footer.hours")}</p>
          </div>
        </Slide>

      
        <Zoom triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">{t("footer.follow")}</h3>
            <div className="flex gap-5 mt-3">
              <a
                href="https://t.me/zarifateacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 text-2xl transition-all duration-300"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://instagram.com/zarifateacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 text-2xl transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@zarifateacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 text-2xl transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </Zoom>
      </div>

      
      <Fade delay={200} triggerOnce>
        <div className="mt-10 text-center text-xs text-white/70">
          © {new Date().getFullYear()} ZarifaTeacher. {t("footer.rights")}
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
