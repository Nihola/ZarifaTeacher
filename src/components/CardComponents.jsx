import React from 'react';

export default function CardComponents() {
    const courses = [
        { image: "./frontend.png", title: "Frontend", description: "Web dasturlashda dastalabki qadamlar", mentor: "Habibulloh Nuriddinov", mentorImage: "https://i.pravatar.cc/32?img=1" },
        { image: "./backend.png", title: "Backend", description: "Server dasturlash asoslari", mentor: "Shoxrux Abduraxmonov", mentorImage: "https://i.pravatar.cc/32?img=2" },
        { image: "./math.png", title: "Mathematics", description: "Mantiqiy fikrlash va dasturlash asoslari", mentor: "Baxodir Isroilov", mentorImage: "https://i.pravatar.cc/32?img=3" },
        { image: "./english.png", title: "English", description: "Tilni o'rganish asoslari", mentor: "Asilbek Mamadaliev", mentorImage: "https://i.pravatar.cc/32?img=4" },
        { image: "./russian.png", title: "Russian", description: "Rus tili o'qitish kursi", mentor: "Shoxrux Abduraxmonov", mentorImage: "https://i.pravatar.cc/32?img=5" },
        { image: "./arabic.png", title: "Arabic", description: "Arabcha tilni o'qish kursi", mentor: "Baxodir Isroilov", mentorImage: "https://i.pravatar.cc/32?img=6" },
        { image: "./itbasics.png", title: "IT Basics", description: "IT sohasiga kirish asoslari", mentor: "Habibulloh Nuriddinov", mentorImage: "https://i.pravatar.cc/32?img=7" },
        { image: "./mentalarithmetic.png", title: "Mental Arithmetic", description: "Aqliy hisoblash texnikasi", mentor: "Asilbek Mamadaliev", mentorImage: "https://i.pravatar.cc/32?img=8" },
    ];

    return (
        <div className='bg-gray-100'>
            <div className="max-w-7xl mx-auto p-4 xl:p-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Bizning kurslar</h2>

                {/* Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[30px] py-5 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start h-auto sm:h-[300px] gap-4 hover:shadow-lg transition-shadow duration-300 relative group p-4"
                        >
                            {/* Image Section */}
                            <div className="w-full sm:w-[220px] md:w-[260px] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-[18px] flex items-center justify-center h-[200px] sm:h-full transition-all duration-300 relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-32 sm:w-40 md:w-44 object-contain duration-300 group-hover:translate-x-[-5px] group-hover:translate-y-[-10px]"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col justify-center gap-2 text-center sm:text-left w-full">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold">{course.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{course.description}</p>

                                <div className="flex items-center justify-center sm:justify-start mt-3">
                                    <img
                                        src={course.mentorImage}
                                        alt={course.mentor}
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-yellow-500 text-sm">Kurs mentori</span>
                                        <span className="text-gray-800 text-sm md:text-base">{course.mentor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
