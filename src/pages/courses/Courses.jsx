import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegClock } from "react-icons/fa6";

function Courses() {
  const { t } = useTranslation();
  const courseList = t("courseData", { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-100 p-6 py-30 max-sm:pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courseList.map((courseData, index) => (
          <div key={index} className="bg-white p-6  rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {courseData.title}
            </h2>
            <p className="text-lg font-semibold text-gray-500">{courseData.description}</p>
            <p className="text-lg font-bold ">
              {courseData.newprice} 
            </p>
            <del className="text-lg font-bold mt-2 text-gray-500">
              {courseData.price} 
            </del>
            <br />
            <button className="mt-4 text-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-[99%] py-2 px-4 rounded hover:from-purple-300 hover:to-pink-800 transition">
              {courseData.detailsBtn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
