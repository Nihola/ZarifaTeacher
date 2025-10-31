// import { useTranslation } from "react-i18next";
// import SeoHeader from "../../components/SEOheader";
// export default function TeamSection() {
//   const { t } = useTranslation();


//   const teachers = [
//     {
//       id: 1,
//       key: "math",
//       image: "/mentors/dilshod.JPG",
//     },
//     {
//       id: 2,
//       key: "mentalarithmetic",
//       image: "/mentors/shoira.JPG",
//     },
//     {
//       id: 3,
//       key: "frontend",
//       image: "/mentors/zilola.JPG",
//     },
//     {
//       id: 4,
//       key: "russian",
//       image: "/mentors/nigina.JPG",
//     },
//     {
//       id: 5,
//       key: "arabic",
//       image: "/mentors/gulmira.JPG",
//     },
//     {
//       id: 6,
//       key: "englishkids",
//       image: "/mentors/jalilova.JPG",
//     },
//     {
//       id: 7,
//       key: "english",
//       image: "/mentors/maftuna.JPG",
//     },
//   ];

//   return (
//     <section className="py-30 bg-gray-50 max-sm:pt-40" id="team">
//             <SeoHeader
//               title="ZarifaTeacher - O‘quv Markazi Toshkentda"
//               description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
//               keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
//             />
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Sarlavha */}
//         <h2 className="text-3xl font-bold mb-10">{t("team.title")}</h2>

//         {/* Ustozlar */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {teachers.map((teacher) => (
//             <div key={teacher.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src={teacher.image}
//                 alt={t(`courses.${teacher.key}.mentor`)}
//                 className="w-full h-65 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">
//                   {t(`courses.${teacher.key}.mentor`)}
//                 </h3>
//                 <p className="text-gray-600">
//                   {t(`courses.${teacher.key}.title`)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SeoHeader from "../../components/SEOheader";

export default function Mentors() {
  const { t } = useTranslation();

  const teachers = [
    { id: 1, key: "math", image: "/mentors/dilshod.JPG" },
    { id: 2, key: "mentalarithmetic", image: "/mentors/shoira.JPG" },
    { id: 3, key: "frontend", image: "/mentors/zilola.JPG" },
    { id: 4, key: "russian", image: "/mentors/nigina.JPG" },
    { id: 5, key: "arabic", image: "/mentors/gulmira.JPG" },
    { id: 6, key: "englishkids", image: "/mentors/jalilova.JPG" },
    { id: 7, key: "english", image: "/mentors/maftuna.JPG" },
  ];

  return (
    <section className="py-30 bg-gray-50 max-sm:pt-40" id="team">
      <SeoHeader
        title="ZarifaTeacher - O‘quv Markazi Toshkentda"
        description="IELTS va ingliz tili, IT, arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
        keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili, CEFR, IT kursi, Frontend, Python kursi"
      />
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">{t("team.title")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={teacher.image}
                alt={t(`courses.${teacher.key}.mentor`)}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {t(`courses.${teacher.key}.mentor`)}
                </h3>
                <p className="text-gray-600">{t(`courses.${teacher.key}.title`)}</p>
                <Link to={`/mentors/${teacher.key}`}>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                    Ko‘proq ma’lumot
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
