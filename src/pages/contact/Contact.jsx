import React, { useState } from 'react';
import ContactSection from './ContactSection';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyv4lE2zBK0Kt7-wQCXKX_DmSt_ylRpNWJ4oeJbLA2TaEBcKTgRJNvl-PZdMlXRxnIf/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success(t('contact.success'), {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });

      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      toast.error(t('contact.error'), {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  return (
    <section className="bg-[#F4F6FC] pt-20">
      <div className="container max-w-[1200px] mx-auto w-full px-4 py-10 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl w-full max-w-lg mb-10 bg-white shadow-md"
        >
          <h2 className=" text-2xl font-bold text-center mb-2  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-md text-center mb-6 font-semibold text-blue-900">
            {t('contact.subtitle')}
          </p>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder={t('contact.name_placeholder')}
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('contact.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder={t('contact.phone_placeholder')}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg transition 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
           hover:from-purple-300 hover:to-pink-800"
          >
            {t('contact.submit')}
          </button>
        </form>
      </div>
      <ContactSection />

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
