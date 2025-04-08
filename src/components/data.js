import Worldwise from "../assets/portfolio/worldwise.png";
import YTClone from "../assets/portfolio/youtube_clone.png";
import movie from "../assets/portfolio/movie.png";
import Pizza from "../assets/portfolio/fastReactPizza.png";

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
    Image: Pizza,
    title: "Fast React Pizza",
    demo: "https://fast-react-pizza-alpha-beryl.vercel.app/",
    description:
      "Fast React Pizza is a modern pizza-ordering app built with React and Vite. The app provides an intuitive flow for ordering pizzas, tracking orders in real-time, and even auto-fetching your location using a custom geolocation hook.",
    imgs: [Pizza, Pizza, Pizza],
    tools: ["React", "CSS", "HTML"],
    urlgh: "https://github.com/it-is-it/FastReactPizza",
  },
  {
    id: 2,
    Image: Worldwise,
    title: "WorldWise",
    demo: "https://worldwise-lyart.vercel.app/",
    description:
      "WorldWise is a travel companion app that allows users to explore maps, navigate locations, and track the countries and cities they have visited.",
    imgs: [Worldwise, Worldwise, Worldwise],
    tools: ["React", "Bootstrap", "CSS"],
    urlgh: "https://github.com/it-is-it/Worldwise",
  },
  {
    id: 3,
    Image: YTClone,
    title: "Youtube Clone",
    demo: "https://p-youtube-clone.netlify.app",
    description:
      "A clone of YouTube with features like video playback, search, and a comment section.",
    imgs: ["/img/ytclone1.png", "/img/ytclone2.png"],
    tools: ["React", "CSS", "HTML"],
  },
  {
    id: 4,
    Image: movie,
    title: "Movie App",
    demo: "https://web-movie-app.netlify.app/",
    description:
      "An app to search and view movie details using the MovieDB API.",
    imgs: ["/img/movie1.png", "/img/movie2.png", "/img/movie3.png"],
    tools: ["React", "CSS", "JavaScript"],
  },
];

export const CertificatesCards = [
  {
    year: "2022-2026",
    edu: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY (BSc CSIT)",
    university: "Tribhuvan University",
  },
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
