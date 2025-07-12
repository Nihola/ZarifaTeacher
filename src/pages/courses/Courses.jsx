import React from "react";
import { courses } from "./CourseData";

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 py-30">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Kurslar Ro‘yxati
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
           
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-sm text-gray-600">Davomiyligi: {course.duration}</p>
            <p className="text-lg font-bold mt-2">{course.price.toLocaleString()} so‘m / oy</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Batafsil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
