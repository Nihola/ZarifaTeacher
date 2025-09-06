import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();

  const teachers = [
    {
      id: 1,
      key: "math", // translation fayldagi key
      image: "/mentors/dilshod.JPG",
    },
    {
      id: 2,
      key: "mentalarithmetic",
      image: "/mentors/shoira.JPG",
    },
    {
      id: 3,
      key: "frontend",
      image: "/mentors/zilola.JPG",
    },
    {
      id: 4,
      key: "russian",
      image: "/mentors/nigina.JPG",
    },
    {
      id: 5,
      key: "arabic",
      image: "/mentors/gulmira.JPG",
    },
    {
      id: 6,
      key: "englishkids",
      image: "./mentors/jalilova.JPG",
    },
    {
      id: 7,
      key: "english",
      image: "https://via.placeholder.com/150",
    },
   
  ];

  return (
    <section className="py-30 bg-gray-50 max-sm:pt-40" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">{t("team.title")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={teacher.image}
                alt={t(`courses.${teacher.key}.mentor`)}
                className="w-full h-70 object-cover "
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {t(`courses.${teacher.key}.mentor`)}
                </h3>
                <p className="text-gray-600">
                  {t(`courses.${teacher.key}.title`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
