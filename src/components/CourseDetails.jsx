import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import courses from "../pages/courses/CourseData";
import SeoHeader from "./SEOheader";
function CourseDetails() {
    const { t } = useTranslation();
    const { id } = useParams();

    const courseDefault = courses.find((c) => c.id === id);
    const courseTranslated = t(`courses2.${id}`, { returnObjects: true });

    if (!courseDefault) {
        return (
            <div className="flex items-center justify-center h-screen text-red-600 text-xl">
                {t("labels.courseNotFound")}
            </div>
        );
    }

    const course = courseTranslated.title ? courseTranslated : courseDefault;

    const renderContentItems = (content) =>
        content?.map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
                <span className="mt-1 text-indigo-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{text}</span>
            </li>
        ));

    const imgFallback = (e, size = "800x400") => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://via.placeholder.com/${size}?text=No+Image`;
    };

    return (
        <div className="bg-gradient-to-b from-indigo-50 to-blue-100  px-4 mt-20">
                  <SeoHeader
                    title="ZarifaTeacher - O‘quv Markazi Toshkentda"
                    description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
                    keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
                  />
            <div className="max-w-6xl mx-auto">
                {/* Banner Section */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
                    {courseDefault.image && (
                        <img
                            src={courseDefault.image}
                            alt={`${course.title} banner`}
                            onError={(e) => imgFallback(e, "1200x420")}
                            className="w-full h-56 sm:h-72 md:h-96 object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-2 sm:p-10 text-white max-w-3xl">
                            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight drop-shadow">
                                {course.title}
                            </h1>
                            <p className="mt-2 text-sm sm:text-base opacity-90">
                                {course.description}
                            </p>
                            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
                                >
                                    {t("labels.enroll")}
                                </Link>
                                <Link
                                    to="/courses"
                                    className="inline-flex items-center gap-2 bg-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/40 transition text-sm"
                                >
                                    {t("labels.back")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2 p-6 sm:p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-gray-600 text-[20px]">{t("labels.mentor")}:</p>
                            <p className="text-lg font-semibold text-gray-800">
                                {course.mentor}
                            </p>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-3">
                            {t("labels.courseContent")}
                        </h2>
                        <ul className="space-y-3">{renderContentItems(course.content)}</ul>
                    </div>

                    <aside className="p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
                        <div className="mb-6">
                            <p className="text-gray-600 text-sm">{t("labels.price")}</p>
                            <p className="text-2xl font-bold text-indigo-600">
                                {Number(courseDefault.price).toLocaleString()} UZS
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm">{t("labels.duration")}</p>
                            <p className="text-lg font-semibold text-gray-800">
                                {courseDefault.duration}
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
