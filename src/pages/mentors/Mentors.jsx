export default function TeamSection() {
  const teachers = [
    {
      id: 1,
      name: "Dilshodbek Sadriddinov",
      subject: "Matematika",
      image: "/mentors/dilshod.JPG"
    },
    {
      id: 2,
      name: "Shoira Aliyeva",
      subject: "Mental arifmetika",
      image: "/mentors/shoira.JPG"
    },
    {
      id: 3,
      name: "Zilolaxon Absalamova",
      subject: "Frontend",
      image: "/mentors/zilola.JPG"
    },
    {
      id: 4,
      name: " Nigina Melikuziyeva  ",
      subject: "Rus tili",
      image: "/mentors/nigina.JPG"
    },
    {
      id: 5,
      name: "Gulmira Xalimova",
      subject: "Arab tili",
      image: "/mentors/gulmira.JPG"
    },
    {
      id: 6,
      name: "Nigina Jalilova",
      subject: "Ingliz tili",
      image: "./mentors/maftuna.JPG"
    },{
      id: 7,
      name: "Maftuna Nazarova",
      subject: "Ingliz tili",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section className="py-30 bg-gray-50 max-sm:pt-40" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Bizning jamoa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-60"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
