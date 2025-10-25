import React from 'react';
import { FaTelegram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SeoHeader from '../../components/SEOheader';
const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full mx-auto max-w-[1200px] py-10 px-4 bg-[#F4F6FC] flex flex-col lg:flex-row gap-8 ">
            <SeoHeader
              title="ZarifaTeacher - O‘quv Markazi Toshkentda"
              description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
              keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
            />
      
      {/* Aloqa ma'lumotlari */}
      <div className="w-full min-h-[350px] lg:w-1/2 bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {t("contactSection.title")}
        </h2>

        {/* Telegram */}
        <a href="https://t.me/zarifa_education" target="_blank" rel="noopener noreferrer" className="block ">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-lg">
              <FaTelegram className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">{t("contactSection.telegram")}</p>
              <p className="text-sm text-gray-600">{t("contactSection.telegram_username")}</p>
            </div>
          </div>
        </a>

        {/* Telefon */}
        <a href="tel:+998977307175" className="block">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-lg">
              <FaPhoneAlt className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">{t("contactSection.phone")}</p>
              <p className="text-sm text-gray-600">{t("contactSection.phone_number")}</p>
            </div>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:zarifaeducation@gmail.com" className="block">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 hover:shadow-lg transition">
            <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-lg">
              <FaEnvelope className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">{t("contactSection.email")}</p>
              <p className="text-sm text-gray-600">{t("contactSection.email_address")}</p>
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
            <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-lg">
              <FaMapMarkerAlt className="text-xl" />
            </span>
            <div>
              <p className="text-[18px] font-semibold text-black">{t("contactSection.address")}</p>
              <p className="text-sm text-gray-600">{t("contactSection.address_text")}</p>
            </div>
          </div>
        </a>
      </div>

      {/* Google Map */}
      <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5989.862778913475!2d69.234749!3d41.353845!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzEzLjgiTiA2OcKwMTQnMDUuMSJF!5e0!3m2!1sru!2s!4v1751535503350!5m2!1sru!2s"
          width="100%"
          height="100%"
          className="min-h-[300px] w-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
