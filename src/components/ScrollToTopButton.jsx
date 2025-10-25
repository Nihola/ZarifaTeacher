import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import SeoHeader from './SEOheader';
const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return visible ? (
        
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all animate-bounce"
        >
                  <SeoHeader
                    title="ZarifaTeacher - O‘quv Markazi Toshkentda"
                    description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
                    keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
                  />
            <FaChevronUp />
        </button>
    ) : null;
};

export default ScrollToTopButton;
