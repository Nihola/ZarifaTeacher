import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import TrueFocus from './../TrueFocus';
const Footer = () => {
  return (
    <footer className="animated-gradient mt-14 text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Mission */}
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
              Biz bilan kelajagingizni yarating! O‘quv markazimiz sizga
              zamonaviy bilimlarni eng sifatli tarzda taqdim etadi.
            </p>
          </div>
        </Fade>

        {/* Navigation */}
        <Slide direction="up" triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">Sahifalar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Asosiy</Link></li>
              <li><Link to="/courses" className="hover:underline">Kurslar</Link></li>
              <li><Link to="/mentors" className="hover:underline">Mentorlar</Link></li>
              <li><Link to="/about" className="hover:underline">Biz haqimizda</Link></li>
              <li><Link to="/contact" className="hover:underline">Aloqa</Link></li>
            </ul>
          </div>
        </Slide>

        {/* Contact Info */}
        <Slide direction="up" delay={100} triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">Aloqa</h3>
            <p className="text-sm mb-2">📞 +998 90 123 45 67</p>
            <p className="text-sm mb-2">✉️ info@zarifateacher.uz</p>
            <p className="text-sm mb-2">📍 Toshkent, Chilonzor, 7-mavze</p>
            <p className="text-sm">🕒 Dushanba–Shanba: 9:00–18:00</p>
          </div>
        </Slide>

        {/* Social Links */}
        <Zoom triggerOnce>
          <div>
            <h3 className="text-lg font-semibold mb-3">Biz bilan bog‘laning</h3>
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

      {/* Bottom */}
      <Fade delay={200} triggerOnce>
        <div className="mt-10 text-center text-xs text-white/70">
          © {new Date().getFullYear()} ZarifaTeacher. Barcha huquqlar himoyalangan.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
