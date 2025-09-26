import React from 'react';
import { useTranslation } from "react-i18next";

export default function CardComponents() {
    const { t } = useTranslation();

    // Fixed image paths and IDs for each course
    const courses = [
        { id: "frontend", image: "./frontend.png", mentorImage: "./mentors/zilola.JPG" },
        { id: "englishkids", image: "./englishkids.png", mentorImage: "./mentors/maftuna.JPG" },
        { id: "math", image: "./math.png", mentorImage: "./mentors/dilshod.JPG" },
        { id: "english", image: "./english.png", mentorImage: "./mentors/jalilova.JPG" },
        { id: "russian", image: "./russian.png", mentorImage: "./mentors/nigina.JPG" },
        { id: "arabic", image: "./arabic.png", mentorImage: "./mentors/gulmira.JPG" },
        { id: "itbasics", image: "./itbasics.png", mentorImage: "./mentors/zilola.JPG" },
        { id: "mentalarithmetic", image: "./mentalarithmetic.png", mentorImage: "./mentors/shoira.JPG" },
    ];

    return (
        <div className='bg-gray-100'>
            <div className="max-w-7xl mx-auto p-4 xl:p-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    {t("coursesHeading")}
                </h2>

                {/* Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
                    {courses.map((course, index) => {
                        const courseKey = `courses.${course.id}`;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-[30px] py-5 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start h-auto sm:h-[300px] gap-4 hover:shadow-lg transition-shadow duration-300 relative group p-4"
                            >
                                {/* Image Section */}
                                <div className="w-full sm:w-[220px] md:w-[300px] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-[18px] flex items-center justify-center h-[200px] sm:h-full transition-all duration-300 relative">
                                    <img
                                        src={course.image}
                                        alt={t(`${courseKey}.title`)}
                                        className="w-32 sm:w-40 md:w-44 object-contain duration-300 group-hover:translate-x-[-5px] group-hover:translate-y-[-10px]"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="flex flex-col justify-center gap-2 text-center sm:text-left w-full">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold">
                                        {t(`${courseKey}.title`)}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        {t(`${courseKey}.description`)}
                                    </p>

                                    <div className="flex items-center justify-center sm:justify-start mt-3">
                                        <img
                                            src={course.mentorImage}
                                            alt={t(`${courseKey}.mentor`)}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-yellow-500 text-sm">
                                                {t("courseMentorLabel")}
                                            </span>
                                            <span className="text-gray-800 text-sm md:text-base">
                                                {t(`${courseKey}.mentor`)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
