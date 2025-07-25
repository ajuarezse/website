import WTWRImage from "../assets/images/WTWR.png";
import SonImage from "../assets/images/SonJarocho.png";

const projectsData = [
  {
    title: "WTWR (What to Wear)",
    description:
      "A React-based application that helps users select suitable clothing based on real-time weather data. Users can securely sign up and sign in to access the app's features, including uploading and managing their clothing items.",
    image: WTWRImage,
    technologies: [
      "React",
      "API Integration",
      "Vite",
      "Javascript (ES6+)",
      "GCS",
      "Certbot",
      "Winston",
      "Jest",
      "Vercel",
    ],
    github: "https://github.com/ajuarezse/se_project_react",
    link: "https://wtwr.angeljuarez.dev",
    featured: true,
  },
  {
    title: "Son Jarocho SongBook",
    description:
      "A Full-stack application that connects users to the lyrics and sounds of a folk music tradition. It renders these resources into a simple interface for users to view, hear and enjoy. This is an ongoing project so stay tuned for more updates and features!",
    image: SonImage,
    technologies: [
      "React",
      "Javascript (ES6+)",
      "Vite",
      "Github",
      "Spotify API Integration",
    ],
    github: "https://github.com/ajuarezse/tripleTenFinalProject_React",
    link: "https://ajuarezse.github.io/tripleTenFinalProject_React/",
    featured: false,
  },
  {
    title: "Around the US",
    description:
      "The Around the U.S., Project is a social web platform where users can document and share their journeys around the world.",
    image: "",
    technologies: [
      "Javascript (ES6+)",
      "HTML5",
      "CSS3",
      "OOP Principles",
      "BEM",
      "Github",
    ],
    github: "https://github.com/ajuarezse/se_project_aroundtheus",
    link: "https://ajuarezse.github.io/se_project_aroundtheus/",
    featured: false,
  },
  {
    title: "Triple Peaks Library Page",
    description:
      "This project is a simple landing page designed to welcome visitors and provide essential information about a fictional library called Triple Peaks Library.",
    image: "",
    technologies: ["HTML5", "CSS3", "Github", "BEM", "Flexbox"],
    github: "https://github.com/ajuarezse/se_project_library",
    link: "https://ajuarezse.github.io/se_project_library/",
    featured: false,
  },
  {
    title: "New Year Countdown",
    description:
      "This is a simple web application that displays a countdown timer to the year 2026 . It also allows users to select a specific U.S. time zone to view the countdown in their local time.",
    image: "",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Github"],
    github: "https://github.com/ajuarezse/NewYearCountdown",
    link: "https://ajuarezse.github.io/NewYearCountdown/",
    featured: false,
  },
];

export default projectsData;
