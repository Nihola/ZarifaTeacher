import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BonusCard() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto p-4 xl:p-6 max-sm:pt-10">

            <section className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 group">
                    <img
                        src="./girl.jpg"
                        alt="Students Learning Together"
                        className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />

                    {/* Bonus Badge */}
                    <div className="absolute top-4 right-4 bg-red-100 text-red-600 font-bold text-base md:text-lg rounded-lg border-2 border-red-600 px-3 py-2 text-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <div className="flex flex-col leading-tight">
                            <span className="text-xs md:text-sm">{t("bonus.badge")}</span>
                            <span className="text-lg md:text-xl">50 000</span>
                            <span className="text-xs md:text-sm">so'm</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col gap-4">
                    <span className="text-sm text-red-700 font-semibold tracking-wide uppercase">
                        {t("bonus.offer")}
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
                        {t("bonus.title")}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base">
                        {t("bonus.desc")}
                    </p>

                    <ul className="list-none text-sm md:text-base text-gray-700 mt-2 space-y-2">
                        {t("bonus.list", { returnObjects: true }).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    {/* Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative inline-flex items-center px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
                        >
                            {t("bonus.button")}
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">⟶</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-fadeIn relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                            {t("bonus.modalTitle")}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t("bonus.modalDesc")}
                        </p>

                        <h3 className="font-semibold text-lg mb-2">{t("bonus.modalCond")}</h3>
                        <ul className="space-y-2 text-gray-700 mb-4 text-sm md:text-base">
                            {t("bonus.condList", { returnObjects: true }).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <h4 className="text-blue-700 font-semibold mb-2">
                                {t("bonus.modalBonus")}
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                                {t("bonus.bonusList", { returnObjects: true }).map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-xs text-gray-500 mt-3">
                            {t("bonus.note")}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
