import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../src/index.css'; // we'll add keyframe styles here

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 overflow-hidden">
      {/* Animated Icons */}
      <div className="absolute top-10 left-10 animate-float-slow text-4xl opacity-30">🎓</div>
      <div className="absolute bottom-20 right-16 animate-float text-3xl opacity-30">📚</div>
      <div className="absolute top-40 right-40 animate-float-delay text-5xl opacity-20">🧑‍🏫</div>
      <div className="absolute bottom-10 left-32 animate-float-slower text-3xl opacity-25">✏️</div>

      {/* Main Content */}
      <div className="text-center max-w-4xl space-y-6 z-10" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">
          Welcome to <span className="text-blue-500">ZarifaTeacher</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Transforming education with passion and innovation. Learn with the best instructors and reach your goals.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Courses
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
