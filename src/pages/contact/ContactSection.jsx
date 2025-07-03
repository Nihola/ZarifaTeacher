import React from 'react';
import { FaTelegram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="w-full mx-auto max-w-[1200px] py-10 px-6 bg-[#F4F6FC] flex flex-col lg:flex-row gap-8">
      
      {/* Chap qism - Aloqa ma'lumotlari */}
      <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Biz bilan bog'lanish</h2>

        {/* Telegram */}
        <a href="https://t.me/zarifa_education" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className="bg-[#1C1E53] text-white p-3 rounded-lg">
              <FaTelegram className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">Telegram</p>
              <p className="text-sm text-gray-600">@zarifa_education</p>
            </div>
          </div>
        </a>

        {/* Telefon */}
        <a href="tel:+998977307175" className="block">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className="bg-[#1C1E53] text-white p-3 rounded-lg">
              <FaPhoneAlt className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">Telefon</p>
              <p className="text-sm text-gray-600">+998 (97) 730 71 75</p>
            </div>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:zarifaeducation@gmail.com" className="block">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className="bg-[#1C1E53] text-white p-3 rounded-lg">
              <FaEnvelope className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">Email</p>
              <p className="text-sm text-gray-600">zarifaeducation@gmail.com</p>
            </div>
          </div>
        </a>

        {/* Manzil */}
        <a
          href="https://www.google.com/maps?q=41.353845,69.234749"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg hover:shadow-lg transition">
            <span className="bg-[#1C1E53] text-white p-3 rounded-lg">
              <FaMapMarkerAlt className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">Manzil</p>
              <p className="text-sm text-gray-600">Toshkent, Qoraqamish 1/2</p>
            </div>
          </div>
        </a>
      </div>

      {/* O‘ng qism - Google Map */}
      <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5989.862778913475!2d69.234749!3d41.353845!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzEzLjgiTiA2OcKwMTQnMDUuMSJF!5e0!3m2!1sru!2s!4v1751535503350!5m2!1sru!2s"
          width="100%"
          height="100%"
          className="min-h-[400px] w-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;

