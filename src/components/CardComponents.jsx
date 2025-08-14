import React from 'react';

export default function CardComponents() {
    const courses = [
        { image: "./frontend.png", title: "     Frontend    ", description: "Web dasturlashda dastalabki qadamlar", mentor: "Habibulloh Nuriddinov", mentorImage: "https://i.pravatar.cc/32?img=1" },
        { image: "./backend.png", title: "     Backend      ", description: "Server dasturlash asoslari", mentor: "Shoxrux Abduraxmonov", mentorImage: "https://i.pravatar.cc/32?img=2" },
        { image: "./math.png", title: "    Mathematics   ", description: "Mantiqiy fikrlash va dasturlash asoslari", mentor: "Baxodir Isroilov", mentorImage: "https://i.pravatar.cc/32?img=3" },
        { image: "./english.png", title: "    English      ", description: "Tilni o'rganish asoslari", mentor: "Asilbek Mamadaliev", mentorImage: "https://i.pravatar.cc/32?img=4" },
        { image: "https://cdn-icons-png.flaticon.com/512/2942/2942939.png", title: "    Russian      ", description: "Rus tili o'qitish kursi", mentor: "Shoxrux Abduraxmonov", mentorImage: "https://i.pravatar.cc/32?img=5" },
        { image: "https://cdn-icons-png.flaticon.com/512/2942/2942940.png", title: "    Arabic       ", description: "Arabcha tilni o'qish kursi", mentor: "Baxodir Isroilov", mentorImage: "https://i.pravatar.cc/32?img=6" },
        { image: "https://cdn-icons-png.flaticon.com/512/3061/3061218.png", title: "    IT Basics    ", description: "IT sohasiga kirish asoslari", mentor: "Habibulloh Nuriddinov", mentorImage: "https://i.pravatar.cc/32?img=7" },
        { image: "https://cdn-icons-png.flaticon.com/512/2910/2910967.png", title: "Mental Arithmetic", description: "Aqliy hisoblash texnikasi", mentor: "Asilbek Mamadaliev", mentorImage: "https://i.pravatar.cc/32?img=8" },
    ];

    return (
         <div className='bg-gray-100'>
            <div className="max-w-7xl mx-auto p-4 ">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Bizning kurslar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-[50px] justify-center py-5  flex h-[300px] items-center gap-4  hover:shadow-lg transition-shadow duration-300 relative group">
                            <div className="w-[280px] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-[18px] flex items-center justify-center h-full transition-all duration-300 relative">
                                <img src={course.image} alt={course.title} className="w-124 h-44 object-contain p-2 duration-300 group-hover:translate-x-[-50px]  group-hover:translate-y-[-50px] absolute -bottom-2 -right-15" />
                            </div>
                            <div className="max-w-1/2 h-50 shadow-none flex flex-col justify-center gap-1.5">
                                <h3 className="text-4xl text-gray-800 font-semibold w-[250px]">{course.title}</h3>
                                <p className="text-gray-600 text-sm">{course.description}</p>
                                <div className="flex items-center mt-2 ">
                                    <img src={course.mentorImage} alt={course.mentor} className="w-14 h-14 rounded-full mr-2  " />
                                    <div className='flex flex-col'>
                                        <span className="text-yellow-500 text-sm">Kurs mentori</span>
                                        <div>
                                            {course.mentor}
                                        </div>
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