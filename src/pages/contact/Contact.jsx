import React, { useState } from 'react';
import ContactSection from './ContactSection';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan ma’lumot:', formData);
    alert(t('contact.success'));
    setFormData({ name: '', phone: '' });
  };

  return (
    <section className="bg-[#F4F6FC] pt-20">
      <div className='container max-w-[1200px] mx-auto w-full px-4 py-10 flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl w-full max-w-lg mb-10"
        >
          <h2 className=" text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className='text-md text-center mb-6 font-semibold text-blue-900'>
            {t('contact.subtitle')}
          </p>

          {/* Ism */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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

          {/* Telefon */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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

          {/* Yuborish tugmasi */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg transition 
           bg-gradient-to-r from-blue-400 to-blue-800 
           hover:from-blue-600 hover:to-blue-900"
          >
            {t('contact.submit')}
          </button>
        </form>
      </div>
      <ContactSection />
    </section>
  );
};

export default Contact;

