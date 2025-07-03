
import ContactSection from './ContactSection'

// export default function Contact() {
//   return (
//     <div className='container max-w-[1200px] mx-auto px-3 py-10'>
//         <div>
//           
//         </div>
//     </div>
//   )
// }



import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan ma’lumot:', formData);
    alert("Ma'lumot yuborildi!");
    setFormData({ name: '', phone: '' });
  };

  return (
    <section className="  bg-[#F4F6FC]  ">
      <div className='container max-w-[1200px] mx-auto w-full px-4 py-10 flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl  w-full max-w-lg mb-10 "
        >
          <h2 className="text-2xl font-bold text-center mb-2 text-[#212586]  ">
            Biz bilan aloqaga chiqmohchimisiz?
          </h2>
          <p className='text-md text-center mb-6 font-semibold' >Formani to'ldiring va biz siz bilan bog'lanamiz</p>

          {/* Ism */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ismingiz
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
              placeholder="Ismingizni kiriting"
            />
          </div>

          {/* Telefon */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon raqamingiz
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E53]"
              placeholder="+998..."
            />
          </div>

          {/* Yuborish tugmasi */}
          <button
            type="submit"
            className="w-full bg-[#1C1E53] text-white py-2 rounded-lg hover:bg-[#2e3c7a] transition"
          >
            Yuborish
          </button>
        </form>
      </div>
      <ContactSection/>
    </section>
  );
};

export default ContactForm;
