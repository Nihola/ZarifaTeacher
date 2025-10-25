import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import courses from "../courses/CourseData"; // use default export
import SeoHeader from "../../components/SEOheader";
function Courses() {
  const { t } = useTranslation();
  // For now, using our static data instead of translations:
  const courseList = courses;

  return (
    <div className="min-h-screen bg-gray-100 p-6 py-30 max-sm:pt-40">
            <SeoHeader
              title="ZarifaTeacher - O‘quv Markazi Toshkentda"
              description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
              keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
            />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courseList.map((courseData) => (
          <div
            key={courseData.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {courseData.title}
            </h2>
            <p className="text-lg text-gray-500 mb-2">
              👨‍🏫 {courseData.mentor}
            </p>
            <p className="text-lg font-bold text-gray-700 mb-2 line-through">
              💰 {courseData.lastPrice?.toLocaleString()} UZS
            </p>
            <p className="text-lg font-bold text-gray-700 mb-2">
              💰 {courseData.price.toLocaleString()} UZS
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
              <FaRegClock /> {courseData.duration}
            </p>
            <Link to={`/courses/${courseData.id}`}>
              <button className="mt-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-[99%] py-2 px-4 rounded hover:from-purple-300 hover:to-pink-800 transition">
                Batafsil
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
