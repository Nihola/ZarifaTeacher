import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SeoHeader from './SEOheader';

export default function CardComponents() {
    const { t } = useTranslation();

    const courses = [
        { id: "frontend", image: "./frontend.png", mentorImage: "./mentors/zilola.JPG" },
        { id: "englishkids", image: "./englishkids.png", mentorImage: "./mentors/jalilova.JPG" },
        { id: "math", image: "./math.png", mentorImage: "./mentors/dilshod.JPG" },
        { id: "english", image: "./english.png", mentorImage: "./mentors/maftuna.JPG" },
        { id: "russian", image: "./russian.png", mentorImage: "./mentors/nigina.JPG" },
        { id: "arabic", image: "./arabic.png", mentorImage: "./mentors/gulmira.JPG" },
        { id: "itbasics", image: "./itbasics.png", mentorImage: "./mentors/zilola.JPG" },
        { id: "mentalarithmetic", image: "./mentalarithmetic.png", mentorImage: "./mentors/dilshod.JPG" },
    ];

    return (
        <div className="bg-gray-100 py-8 px-4">
                  <SeoHeader
                    title="ZarifaTeacher - O‘quv Markazi Toshkentda"
                    description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
                    keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
                  />
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                    {t("coursesHeading")}
                </h2>

                {/* Responsive grid that auto-fits columns */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {courses.map((course, index) => {
                        const courseKey = `courses.${course.id}`;
                        return (
                            <Link
                                to={`/courses/${course.id}`}
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
                                    <img
                                        src={course.image}
                                        alt={t(`${courseKey}.title`)}
                                        className="w-32 sm:w-36 md:w-40 object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                                        {t(`${courseKey}.title`)}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base flex-grow">
                                        {t(`${courseKey}.description`)}
                                    </p>

                                    {/* Mentor */}
                                    <div className="flex items-center mt-4">
                                        <img
                                            src={course.mentorImage}
                                            alt={t(`${courseKey}.mentor`)}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3"
                                        />
                                        <div>
                                            <span className="text-yellow-500 text-sm block">
                                                {t("courseMentorLabel")}
                                            </span>
                                            <span className="text-gray-800 text-sm md:text-base">
                                                {t(`${courseKey}.mentor`)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
