import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SeoHeader from "../../components/SEOheader";

const mentorImages = {
    math: "/mentors/dilshod.JPG",
    mentalarithmetic: "/mentors/shoira.JPG",
    frontend: "/mentors/zilola.JPG",
    russian: "/mentors/nigina.JPG",
    arabic: "/mentors/gulmira.JPG",
    englishkids: "/mentors/jalilova.JPG",
    english: "/mentors/maftuna.JPG",
};

export default function MentorDetailPage() {
    const { id } = useParams();
    const { t } = useTranslation();

    const image = mentorImages[id];
    const title = t(`courses.${id}.title`);
    const description = t(`courses.${id}.description`);
    const mentor = t(`courses.${id}.mentor`);
    const experience = t(`courses.${id}.experience`);
    const education = t(`courses.${id}.education`);
    const skills = t(`courses.${id}.skills`, { returnObjects: true });
    const features = t(`courses.${id}.features`, { returnObjects: true });

    return (
        <section className="pt-20   bg-gradient-to-br from-indigo-50 to-white min-h-screen">
            <SeoHeader
                title={`${mentor} - ZarifaTeacher`}
                description={`${mentor} haqida batafsil ma'lumot`}
                keywords={`${mentor}, ustoz, ZarifaTeacher, ${title}`}
            />
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 md:p-12"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <motion.img
                            src={image}
                            alt={mentor}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-lg border-4 border-indigo-200"
                        />
                        <div className="text-center lg:text-left w-full">
                            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700">{mentor}</h2>
                            <p className="text-gray-600 mt-2 text-lg sm:text-xl">{title}</p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg"
                            >
                                {description}
                            </motion.p>

                            <div className="mt-6 space-y-6 text-left">
                                <div>
                                    <h4 className="text-xl font-semibold text-indigo-600">🎓 Ta’lim:</h4>
                                    <p className="text-gray-700">{education}</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-indigo-600">💼 Tajriba:</h4>
                                    <p className="text-gray-700">{experience}</p>
                                </div>
                                {Array.isArray(skills) && (
                                    <div>
                                        <h4 className="text-xl font-semibold text-indigo-600">🛠️ Ko‘nikmalar:</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            {skills.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {Array.isArray(features) && (
                                    <div>
                                        <h4 className="text-xl font-semibold text-indigo-600">🌟 Ustunlik jihatlari:</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            {features.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="mt-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link to="/contact">
                        <button className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-full shadow hover:bg-indigo-700 transition duration-300">
                            Bog‘lanish
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
