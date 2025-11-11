import WildOasis from "../assets/portfolio/wildoasis.png";
import Worldwise from "../assets/portfolio/worldwise.png";
import YTClone from "../assets/portfolio/youtube_clone.png";
import movie from "../assets/portfolio/movie.png";
import Pizza from "../assets/portfolio/fastReactPizza.png";
import NextEcommerce from "../assets/portfolio/nextEcommerce.png";

// NextEcom images
import nextecom1 from "../assets/portfolio/detail-image/nextecom1.png";
import nextecom2 from "../assets/portfolio/detail-image/nextecom2.png";
import nextecom3 from "../assets/portfolio/detail-image/nextecom3.png";
import nextecom4 from "../assets/portfolio/detail-image/nextecom4.png";

// Pizza images
import pizza1 from "../assets/portfolio/detail-image/pizza1.png";
import pizza2 from "../assets/portfolio/detail-image/pizza2.png";
import pizza3 from "../assets/portfolio/detail-image/pizza3.png";
import pizza4 from "../assets/portfolio/detail-image/pizza4.png";

// Wild Oasis images
import wildoasis1 from "../assets/portfolio/detail-image/wildoasis1.png";
import wildoasis2 from "../assets/portfolio/detail-image/wildoasis2.png";
import wildoasis3 from "../assets/portfolio/detail-image/wildoasis3.png";
import wildoasis4 from "../assets/portfolio/detail-image/wildoasis4.png";

// Worldwise images
import worldwise1 from "../assets/portfolio/detail-image/worldwise1.png";
import worldwise2 from "../assets/portfolio/detail-image/worldwise2.png";
import worldwise3 from "../assets/portfolio/detail-image/worldwise3.png";
import worldwise4 from "../assets/portfolio/detail-image/worldwise4.png";

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
    Image: NextEcommerce, // import this image at the top
    title: "Next-Ecommerce",
    demo: "https://nextecom-bay.vercel.app/", // replace with your live demo link
    description:
      "NextEcom is a full-featured, full-stack eCommerce web application built with Next.js 15 (App Router), MongoDB, Stripe, and NextAuth.js. It includes both user and admin functionalities, secure payment processing, and a modern UI powered by Bootstrap and Tailwind.",
    imgs: [nextecom1, nextecom2, nextecom3, nextecom4],
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "MongoDB",
      "Stripe",
      "NextAuth.js",
    ],
    github: "https://github.com/it-is-it/Ecommerce", // replace with your repo
  },
  {
    id: 2,
    Image: WildOasis,
    title: "Wild Oasis Admin System",
    demo: "https://the-wild-oasis-ishwor.netlify.app/",
    description:
      "A sleek admin dashboard for managing hotel bookings, cabins, and user roles with check-in/out system, real-time stats, dark mode, and customizable settings.",
    imgs: [wildoasis1, wildoasis2, wildoasis3, wildoasis4],
    tools: ["React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/it-is-it/the-wild-oasis",
  },
  {
    id: 3,
    Image: Pizza,
    title: "Fast React Pizza",
    demo: "https://fast-react-pizza-alpha-beryl.vercel.app/",
    description:
      "Fast React Pizza is a modern pizza-ordering app built with React and Vite. The app provides an intuitive flow for ordering pizzas, tracking orders in real-time, and even auto-fetching your location using a custom geolocation hook.",
    imgs: [pizza1, pizza2, pizza3, pizza4],
    tools: ["React", "CSS", "HTML"],
    github: "https://github.com/it-is-it/FastReactPizza",
  },
  {
    id: 4,
    Image: Worldwise,
    title: "WorldWise",
    demo: "https://worldwise-lyart.vercel.app/",
    description:
      "WorldWise is a travel companion app that allows users to explore maps, navigate locations, and track the countries and cities they have visited.",
    imgs: [worldwise1, worldwise2, worldwise3, worldwise4],
    tools: ["React", "Bootstrap", "CSS"],
    github: "https://github.com/it-is-it/Worldwise",
  },
  {
    id: 5,
    Image: YTClone,
    title: "Youtube Clone",
    demo: "https://p-youtube-clone.netlify.app",
    description:
      "A clone of YouTube with features like video playback, search, and a comment section.",
    imgs: ["/img/ytclone1.png", "/img/ytclone2.png"],
    tools: ["React", "CSS", "HTML"],
  },
  {
    id: 6,
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
