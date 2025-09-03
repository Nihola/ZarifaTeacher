import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Certificates() {
    const { t } = useTranslation();

    const certificates = [
        { id: 1, title: t("certificates.items.english"), issuer: "CEFR", year: "2024", image: "./sertificate1.png" },
        { id: 2, title: t("certificates.items.english"), issuer: "CEFR", year: "2025", image: "./sertificate2.png" },
        { id: 3, title: t("certificates.items.english"), issuer: "CEFR", year: "2025", image: "./sertificate3.png" },
        { id: 4, title: t("certificates.items.english"), issuer: "CEFR", year: "2024", image: "./sertificate4.png" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsTransitioning(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 max-sm:pt-10">
            <div className="w-full max-w-7xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">
                    {t("certificates.title")}
                </h2>
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm">
                    {/* Carousel Container */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {certificates.map((cert) => (
                            <div key={cert.id} className="min-w-full p-5 sm:p-6">
                                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-lg mx-auto">
                                    <div className="relative">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                            {cert.year}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600 mb-1">
                                            {t("certificates.issuedBy")}: {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 sm:p-4 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50"
                        disabled={isTransitioning}
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 sm:p-4 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50"
                        disabled={isTransitioning}
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-5 mb-1 space-x-3">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => !isTransitioning && setCurrentIndex(index)}
                                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-indigo-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
