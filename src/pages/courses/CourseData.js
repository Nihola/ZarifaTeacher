// src/pages/courses/CourseData.js

const courses = [
  {
    id: "math",
    title: "Matematika",
    description: "Algebra, geometriya va amaliy masalalar bo‘yicha darslar.",
    duration: "6 oy",
    price: 399000,
    mentor: "Dilshod Sadriddinov",
    image: "./math.png",
    mentorImage: "./mentors/dilshod.JPG",
    content: [
      "Asosiy matematik tushunchalar",
      "Algebraik ifodalar",
      "Geometriya asoslari",
      "Amaliy mashg‘ulotlar va testlar"
    ],
    lastPrice :450000
  },
  {
    id: "english",
    title: "Ingliz tili",
    description: "Grammar, Speaking va Listening bo‘yicha darslar.",
    duration: "6 oy",
    price: 399000,
    mentor: "Nigina Jalilova",
    image: "./english.png",
    mentorImage: "./mentors/nigina.JPG",
    content: [
      "Grammar asoslari",
      "Speaking mashg‘ulotlari",
      "Listening va talaffuz",
      "Imtihonlarga tayyorgarlik"
    ],
    lastPrice :450000
  },
  {
    id: "englishkids",
    title: "English Kids",
    description: "Bolalar uchun qiziqarli ingliz tili mashg‘ulotlari.",
    duration: "6 oy",
    price: 399000,
    mentor: "Maftuna Nazarova",
    image: "./englishkids.png",
    mentorImage: "./mentors/maftuna.JPG",
    content: [
      "Alifbo va so‘z boyligi",
      "O‘yinlar orqali o‘rganish",
      "Qo‘shiqlar va hikoyalar",
      "Qiziqarli mashqlar"
    ],
    lastPrice :450000
  },
  {
    id: "arabic",
    title: "Arab tili",
    description: "Qur'on va zamonaviy arab tili asoslari.",
    duration: "6 oy",
    price: 399000,
    mentor: "Gulmira Xalimova",
    image: "./arabic.png",
    mentorImage: "./mentors/gulmira.JPG",
    content: [
      "Arab alifbosi",
      "Qur’on o‘qish asoslari",
      "So‘z boyligini kengaytirish",
      "Suhbat va yozish mashqlari"
    ],
    lastPrice :450000
  },
  {
    id: "russian",
    title: "Rus tili",
    description: "O‘qish, yozish va gapirish ko‘nikmalari.",
    duration: "6 oy",
    price: 399000,
    mentor: "Nigina Melikuziyeva",
    image: "./russian.png",
    mentorImage: "./mentors/nigina.JPG",
    content: [
      "Rus tili grammatikasi",
      "Gap tuzish mashqlari",
      "Matnlarni o‘qish va tarjima qilish",
      "Og‘zaki nutqni rivojlantirish"
    ],
    lastPrice :450000
  },
  {
    id: "pochemuchka",
    title: "Pochemuchka",
    description: "Bolalar uchun qiziqarli bilimlar olami.",
    duration: "3 oy",
    price: 399000,
    mentor: "Shoira",
    image: "./pochemuchka.png",
    mentorImage: "./mentors/shoira.JPG",
    content: [
      "Tabiat va hayvonot dunyosi",
      "Ilmiy tajribalar",
      "Rangli mashg‘ulotlar",
      "Ijodiy topshiriqlar"
    ],
    lastPrice :450000
  },
  {
    id: "itbasics",
    title: "IT asoslari",
    description: "Kompyuter savodxonligi va texnologiyalarga kirish.",
    duration: "3 oy",
    price: 399000,
    mentor: "Zilola Absalamova",
    image: "./itbasics.png",
    mentorImage: "./mentors/zilola.JPG",
    content: [
      "Kompyuter asoslari",
      "Office dasturlari",
      "Internet va xavfsizlik",
      "Oddiy dasturlash tushunchalari"
    ],
    lastPrice:450000
  },
  {
    id: "frontend",
    title: "Front-end",
    description: "HTML, CSS, JavaScript va React orqali sayt tuzish.",
    duration: "9 oy",
    price: 499000,
    mentor: "Zilola Absalamova",
    image: "./frontend.png",
    mentorImage: "./mentors/zilola.JPG",
    content: [
      "HTML & CSS",
      "JavaScript asoslari",
      "React bilan ishlash",
      "Amaliy loyihalar"
    ],
    lastPrice:550000
  },
  {
    id: "backend",
    title: "Back-end",
    description: "Server tomon dasturlash: Node.js, Python, bazalar.",
    duration: "9 oy",
    price: 499000,
    mentor: "Yaqin orada e'lon qilinadi",
    image: "./backend.png",
    mentorImage: "",
    content: [
      "Node.js asoslari",
      "Python va Django",
      "Ma’lumotlar bazalari",
      "API yaratish"
    ],
    lastPrice:550000
  },
  {
    id: "mentalarithmetic",
    title: "Mental arifmetika",
    description: "Bola miyasining chap va o‘ng qismlarini birgalikda rivojlantirish usuli.",
    duration: "4 oy",
    price: 399000,
    mentor: "Shoira",
    image: "./mentalarithmetic.png",
    mentorImage: "./mentors/shoira.JPG",
    content: [
      "Asosiy hisoblash usullari",
      "Miya mashqlari",
      "Tez fikrlash metodlari",
      "Amaliy mashg‘ulotlar"
    ],
    lastPrice :450000
  }
];

export default courses;
