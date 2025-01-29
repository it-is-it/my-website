import WP from "../assets/portfolio/wealthPandit.png";
import YTClone from "../assets/portfolio/youtube_clone.png";
import PRB from "../assets/portfolio/pacific.png";
import movie from "../assets/portfolio/movie.png";
import Abroad from "../assets/portfolio/abroadInstitute.png";
import kumari from "../assets/portfolio/kumari.png";

export const menu = [
  { title: "#home", icon: "fa-solid fa-house-user" },
  { title: "#about", icon: "fa-solid fa-circle-info" },
  { title: "#skills", icon: "fa-solid fa-screwdriver-wrench" },
  { title: "#portffolio", icon: "fa-solid fa-briefcase" },
  { title: "#certificates", icon: "fa-solid fa-receipt" },
  { title: "#contact", icon: "fa-solid fa-address-book" },
];

export const data = [
  {
    id: 1,
    Image: Abroad,
    title: "Abroad Institute",
    demo: "http://abroadinst.com",
    description:
      "An informative website about studying abroad, providing courses and consultancy services.",
    imgs: [Abroad, Abroad, Abroad],
    tools: ["React", "CSS", "HTML"],
    urlgh: "https://github.com/username/abroad-institute", // Example GitHub URL
  },
  {
    id: 2,
    Image: PRB,
    title: "Pacific Regional Bank",
    demo: "https://pacificbank.peacenepal.com",
    description:
      "A banking website with features such as account management and loan applications.",
    imgs: [PRB, PRB, PRB],
    tools: ["React", "Bootstrap", "CSS"],
    urlgh: "https://github.com/username/pacific-bank", // Example GitHub URL
  },
  {
    id: 3,
    Image: WP,
    title: "Wealth Pandit",
    demo: "https://uat.wealthpandit.com",
    description:
      "An investment platform offering advisory services and wealth management tools.",
    imgs: ["/img/wealth1.png", "/img/wealth2.png", "/img/wealth3.png"],
    tools: ["Angular", "CSS", "HTML"],
    urlgh: "https://github.com/username/wealth-pandit", // Example GitHub URL
  },
  {
    id: 4,
    Image: kumari,
    title: "Kumari Bank",
    demo: "https://www.kumaribank.com/en",
    description:
      "A digital banking website providing online banking services to customers.",
    imgs: ["/img/kumari1.png", "/img/kumari2.png", "/img/kumari3.png"],
    tools: ["HTML", "CSS", "JavaScript"],
    urlgh: "https://github.com/username/kumari-bank", // Example GitHub URL
  },
  {
    id: 5,
    Image: YTClone,
    title: "Youtube Clone",
    github: "https://github.com/Prashant8Khatiwada/youtube-app",
    demo: "https://p-youtube-clone.netlify.app",
    description:
      "A clone of YouTube with features like video playback, search, and a comment section.",
    imgs: ["/img/ytclone1.png", "/img/ytclone2.png"],
    tools: ["React", "CSS", "HTML"],
    urlgh: "https://github.com/Prashant8Khatiwada/youtube-app", // Example GitHub URL
  },
  {
    id: 6,
    Image: movie,
    title: "Movie App",
    github: "git@github.com:Prashant8Khatiwada/movie.git",
    demo: "https://web-movie-app.netlify.app/",
    description:
      "An app to search and view movie details using the MovieDB API.",
    imgs: ["/img/movie1.png", "/img/movie2.png", "/img/movie3.png"],
    tools: ["React", "CSS", "JavaScript"],
    urlgh: "https://github.com/Prashant8Khatiwada/movie", // Example GitHub URL
  },
  {
    id: 7,
    Image:movie,
    title: "E-Commerce Store",
    github: "https://github.com/username/ecommerce-store",
    demo: "https://ecommerce-store.netlify.app/",
    description:
      "A fully functional e-commerce website built with React and styled-components. It features a shopping cart and payment gateway.",
    imgs: [
      "https://loremflickr.com/json/g/320/240/paris,girl/all",
      "https://loremflickr.com/json/g/320/240/paris,girl/all",
      "https://loremflickr.com/json/g/320/240/paris,girl/all",
    ],
    tools: ["React", "Styled Components", "Node.js", "Express"],
    urlgh: "https://github.com/username/ecommerce-store",
  },
  {
    id: 8,
    Image: movie,
    title: "Task Manager",
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager.netlify.app/",
    description:
      "A web app for managing tasks with features such as adding, editing, deleting tasks, and marking them as complete.",
    imgs: [
      "https://via.placeholder.com/400x300.png?text=Task+1",
      "https://via.placeholder.com/400x300.png?text=Task+2",
    ],
    tools: ["React", "CSS", "Firebase"],
    urlgh: "https://github.com/username/task-manager",
  },
  {
    id: 9,
    Image: movie,
    title: "Weather App",
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app.netlify.app/",
    description:
      "A weather forecasting app that allows users to check weather details for any city using the OpenWeather API.",
    imgs: [
      "https://via.placeholder.com/400x300.png?text=Weather+1",
      "https://via.placeholder.com/400x300.png?text=Weather+2",
    ],
    tools: ["React", "CSS", "OpenWeather API"],
    urlgh: "https://github.com/username/weather-app",
  },
  {
    id: 10,
    Image: movie,
    title: "Personal Blog",
    github: "https://github.com/username/personal-blog",
    demo: "https://personal-blog.netlify.app/",
    description:
      "A personal blog website built with React, where users can post articles, view past posts, and leave comments.",
    imgs: [
      "https://via.placeholder.com/400x300.png?text=Blog+1",
      "https://via.placeholder.com/400x300.png?text=Blog+2",
    ],
    tools: ["React", "CSS", "Markdown", "Firebase"],
    urlgh: "https://github.com/username/personal-blog",
  },
  {
    id: 11,
    Image: movie,
    title: "Chat Application",
    github: "https://github.com/username/chat-app",
    demo: "https://chat-app.netlify.app/",
    description:
      "A real-time chat application using WebSocket for communication and Firebase for authentication and storage.",
    imgs: [
      "https://via.placeholder.com/400x300.png?text=Chat+1",
      "https://via.placeholder.com/400x300.png?text=Chat+2",
    ],
    tools: ["React", "Firebase", "WebSocket"],
    urlgh: "https://github.com/username/chat-app",
  },
  {
    id: 12,
    Image: movie,
    title: "Portfolio Website",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.netlify.app/",
    description:
      "A personal portfolio website to showcase projects and skills. It includes animations, smooth scroll, and dark mode toggle.",
    imgs: [
      "https://via.placeholder.com/400x300.png?text=Portfolio+1",
      "https://via.placeholder.com/400x300.png?text=Portfolio+2",
    ],
    tools: ["React", "CSS", "JavaScript", "Netlify"],
    urlgh: "https://github.com/username/portfolio",
  },
];

export const CertificatesCards = [
  {
    year: "2022-2026",
    edu: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY (BSc CSIT)",
    university: "Tribhuvan University",
  }
];

export const contactBox = [
  {
    img: "fa-solid fa-circle-user",
    title1: "Full Name",
    title2: "Ishwor Timalsina",
  },
  {
    img: "fa-regular fa-envelope",
    title1: "Email",
    title2: "ishwortimalsina39@gmail.com",
  },
  {
    img: "fa-brands fa-whatsapp",
    title1: "Mobile Number",
    title2: "+9800000000",
  },
];
