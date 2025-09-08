// src/pages/courses/CourseDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../pages/courses/CourseData";

function CourseDetails() {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
                Kurs topilmadi
            </div>
        );
    }

    // Render course content whether it's an array or a newline-separated string
    const renderContentItems = (content) => {
        if (!content) return null;

        const items = Array.isArray(content)
            ? content
            : String(content).split("\n").map((s) => s.trim()).filter(Boolean);

        return items.map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
                {/* small check icon */}
                <span className="mt-1 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{text}</span>
            </li>
        ));
    };

    // safe image fallback
    const imgFallback = (e, size = "800x400") => {
        // a simple placeholder if local image fails
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://via.placeholder.com/${size}?text=No+Image`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 py-8 px-4 mt-5">
            <div className="max-w-6xl mx-auto ">
                {/* Hero / Banner */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl  bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
                    {course.image ? (
                        <img
                            src={course.image}
                            alt={`${course.title} banner`}
                            onError={(e) => imgFallback(e, "1200x420")}
                            className="w-[250px] h-88 sm:h-64 md:h-72 object-fit"
                        />
                    ) : (
                        <div className="w-full h-48 sm:h-64 md:h-72 bg-gradient-to-r from-indigo-400 to-purple-500" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                        <div className="p-6 sm:p-10 text-white max-w-3xl">
                            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight drop-shadow">
                                {course.title}
                            </h1>
                            <p className="mt-2 text-sm sm:text-base opacity-90">{course.description}</p>

                            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
                                >
                                    🚀 Enroll Now
                                </Link>

                                <Link
                                    to={`/courses`}
                                    className="inline-flex items-center gap-2 bg-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/40 transition text-sm"
                                >
                                    ⬅ Ortga qaytish
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main card */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-3">
                    {/* left: main content */}
                    <div className="lg:col-span-2 p-6 sm:p-8">
                        <div className="flex items-center gap-4 mb-4">
                             
                            <div className="flex gap-4 items-center justify-center">
                                <p className="text-gray-600 text-[20px]">👨‍🏫 Mentor : </p>
                                <p className="text-lg font-semibold text-gray-800">{course.mentor}</p>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-3">📚 Kurs mazmuni</h2>

                        <ul className="space-y-3">
                            {renderContentItems(course.content)}
                        </ul>

                        {/* Optional extended description */}
                        {course.longDescription && (
                            <div className="mt-6 text-gray-700">
                                {typeof course.longDescription === "string" ? (
                                    course.longDescription.split("\n").map((line, idx) => (
                                        <p key={idx} className="mb-2">{line}</p>
                                    ))
                                ) : (
                                    <p>{String(course.longDescription)}</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* right: sidebar */}
                    <aside className="p-6 border-l border-gray-100">
                        <div className="mb-6">
                            <p className="text-gray-600 text-sm">💰 Narx</p>
                            <p className="text-2xl font-bold text-indigo-600">
                                {Number(course.price).toLocaleString()} UZS
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 text-sm">⏳ Davomiylik</p>
                            <p className="text-lg font-semibold text-gray-800">{course.duration}</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 text-sm">📅 Darslar</p>
                            <p className="text-sm text-gray-700">Gruppa va individual formatlar mavjud</p>
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            <Link
                                to="/contact"
                                className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition"
                            >
                                🚀 Enroll for the Course
                            </Link>

                            <Link
                                to="/courses"
                                className="text-center bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                            >
                                ⬅ Ortga qaytish
                            </Link>
                        </div>

                        {/* small note */}
                        <p className="text-xs text-gray-500 mt-4">
                            Kurs haqida savollaringiz bo'lsa, iltimos <Link to="/contact" className="text-indigo-600 underline">bog'laning</Link>.
                        </p>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
