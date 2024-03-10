import {
  FaBootstrap,
  FaChrome,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDesktop,
  FaGithub,
  FaHtml5,
  FaMobile,
  FaNodeJs,
  FaReact,
  FaSass,
  FaShieldAlt,
  FaJira,
  FaShopify,
  FaWordpress,
  FaSlack,
} from "react-icons/fa";
import {
  BiLogoFigma,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
  BiLogoFirebase,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandReactNative, TbSeo } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import {
  SiExpress,
  SiNetlify,
  SiPrisma,
  SiSupabase,
  SiTypescript,
  SiAlgolia,
  SiGoogletagmanager,
  SiStrapi,
  SiGoogleanalytics,
  SiLinear,
  SiTrpc,
  SiMacos,
  SiPostman,
} from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import Nysaa from "@/public/assets/images/portfolio/nysaa.png";
import Longines from "@/public/assets/images/portfolio/longines.png";
import BrandsForLess from "@/public/assets/images/portfolio/brands-for-less.png";
import BrandsForLessIos from "@/public/assets/images/portfolio/bfl-ios.png";
import BrandsForLessAndroid from "@/public/assets/images/portfolio/bfl-android.png";
import BrandsForLessLogistics from "@/public/assets/images/portfolio/bfl-logistics.png";
import Syook from "@/public/assets/images/portfolio/syook.png";
import Jld from "@/public/assets/images/portfolio/jld.png";
import PraveenJewels from "@/public/assets/images/portfolio/praveen-jewels.png";
import Jpd from "@/public/assets/images/portfolio/jpd.png";

import TestimonalImg from "@/public/assets/images/testimonial-img-dimention.jpg";

export const navItems = [
  {
    text: "Home",
    link: "home",
  },
  {
    text: "About Me",
    link: "about",
  },
  {
    text: "Service",
    link: "services",
  },
  {
    text: "Portfolio",
    link: "portfolio",
  },
  // {
  //   text: "Pricing",
  //   link: "pricing",
  // },
  {
    text: "Contact",
    link: "contact",
  },
];

export const skillData = [
  {
    id: 1,
    name: "Html5",
    icon: FaHtml5,
    color: "#dd4b25",
  },
  {
    id: 2,
    name: "Css3",
    icon: FaCss3Alt,
    color: "#254bdd",
  },
  {
    id: 3,
    name: "Sass",
    icon: FaSass,
    color: "#c76494",
  },
  {
    id: 4,
    name: "TailwindCSS",
    icon: BiLogoTailwindCss,
    color: "#38bdf8",
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "#8311fc",
  },
  {
    id: 6,
    name: "JavaScript",
    icon: BiLogoJavascript,
    color: "#efd81d",
  },
  {
    id: 7,
    name: "ReactJs",
    icon: FaReact,
    color: "#5ed3f3",
  },
  {
    id: 8,
    name: "NextJs",
    icon: TbBrandNextjs,
    color: "#ffffff",
  },
  {
    id: 9,
    name: "ReduxJs",
    icon: BiLogoRedux,
    color: "#7248b6",
  },
  {
    id: 10,
    name: "MongoDB",
    icon: BiLogoMongodb,
    color: "#409331",
  },
  {
    id: 11,
    name: "NodeJs",
    icon: FaNodeJs,
    color: "#689E59",
  },
  {
    id: 12,
    name: "ExpressJs",
    icon: SiExpress,
    color: "#ffffff",
  },
  {
    id: 13,
    name: "Prisma",
    icon: SiPrisma,
    color: "#ffffff",
  },
  {
    id: 14,
    name: "Typescipt",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    id: 15,
    name: "Firebase",
    icon: BiLogoFirebase,
    color: "#ffcb2d",
  },
  {
    id: 16,
    name: "Algolia",
    icon: SiAlgolia,
    color: "#4c82e9",
  },
  {
    id: 17,
    name: "GCP",
    icon: DiGoogleCloudPlatform,
    color: "#FBBC04",
  },
  {
    id: 18,
    name: "GTM",
    icon: SiGoogletagmanager,
    color: "#246fdb",
  },
  {
    id: 19,
    name: "Strapi",
    icon: SiStrapi,
    color: "#246fdb",
  },
  {
    id: 20,
    name: "RN",
    icon: TbBrandReactNative,
    color: "#61dafb",
  },
  {
    id: 21,
    name: "GA",
    icon: SiGoogleanalytics,
    color: "#faab00",
  },
  {
    id: 22,
    name: "SEO",
    icon: TbSeo,
    color: "#fff",
  },
  {
    id: 23,
    name: "tRPC",
    icon: SiTrpc,
    color: "#3688c5",
  },
  {
    id: 24,
    name: "Shopify",
    icon: FaShopify,
    color: "#7eba36",
  },
  {
    id: 25,
    name: "WordPress",
    icon: FaWordpress,
    color: "#207195",
  },
];

export const toolsData = [
  {
    id: 1,
    name: "VS Code",
    icon: BiLogoVisualStudio,
    color: "#1883CB",
  },
  {
    id: 4,
    name: "Git",
    icon: BiLogoGit,
    color: "#E84D31",
  },
  {
    id: 5,
    name: "Github",
    icon: FaGithub,
    color: "#ffffff",
  },
  {
    id: 2,
    name: "Chrome",
    icon: FaChrome,
    color: "#ffffff",
  },
  {
    id: 3,
    name: "Figma",
    icon: BiLogoFigma,
    color: "#EA4C1D",
  },
  {
    id: 6,
    name: "Slack",
    icon: FaSlack,
    color: "#da1c57",
  },
  {
    id: 6,
    name: "Jira",
    icon: FaJira,
    color: "#136ae7",
  },
  {
    id: 6,
    name: "Linear",
    icon: SiLinear,
    color: "#4e55b6",
  },
  {
    id: 6,
    name: "macOS",
    icon: SiMacos,
    color: "#05a6e4",
  },
  {
    id: 6,
    name: "Postman",
    icon: SiPostman,
    color: "#f76836",
  },
];

export const servicesData = [
  {
    title: "Web App Development",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    icon: <FaDesktop />,
  },
  {
    title: "Responsive Design",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    icon: <FaMobile />,
  },
  {
    title: "Front-End Development",
    description:
      "Building user-friendly interfaces and experiences using modern front-end technologies.",
    icon: <FaCode />,
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side solutions to handle data storage, authentication, and more.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Database Design",
    description:
      "Designing and optimizing databases to ensure efficient data storage and retrieval.",
    icon: <FaDatabase />,
  },
  {
    title: "API Development",
    description:
      "Creating APIs for seamless communication between front-end and back-end systems.",
    icon: <AiFillApi />,
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Nysaa",
    category: "Web App",
    description: "NextJS Ecommerce Webapp",
    image: Nysaa,
    link: "https://nysaa.com/",
  },
  {
    id: 2,
    title: "Longines",
    category: "Web App",
    description: "NextJS Ecommerce Webapp",
    image: Longines,
    link: "https://www.longines.com/",
  },
  {
    id: 3,
    title: "Brands for less",
    category: "Web App",
    description: "NextJS Ecommerce Webapp",
    image: BrandsForLess,
    link: "https://www.brandsforless.com/en-ae/",
  },
  {
    id: 4,
    title: "Brands For less",
    category: "Mobile App",
    description: "React Native Ecommerce iOS app",
    image: BrandsForLessIos,
    link: "https://apps.apple.com/ae/app/brands-for-less-shopping-app/id1039840915",
  },
  {
    id: 5,
    title: "Brands For less",
    category: "Mobile App",
    description: "React Native Ecommerce android app",
    image: BrandsForLessAndroid,
    link: "https://play.google.com/store/apps/details?id=ae.brandsforless.android&pli=1",
  },
  {
    id: 6,
    title: "Brands For less",
    category: "Mobile App",
    description: "React Native internal logistics android app",
    image: BrandsForLessLogistics,
    link: "https://www.youtube.com/watch?v=DGtpIWC0mgM",
  },
  {
    id: 7,
    title: "Syook",
    category: "Web App",
    description: "React Web App",
    image: Syook,
    link: "https://www.syook.com/",
  },
  {
    id: 8,
    title: "JLDevelop",
    category: "Web App",
    description: "React Web App",
    image: Jld,
    link: "https://jldevelop.com/",
  },
  {
    id: 9,
    title: "Praveen Jewels",
    category: "Websites",
    description: "React Web App",
    image: PraveenJewels,
    link: "https://praveenjewels.com/",
  },
  {
    id: 10,
    title: "Jpd Agency",
    category: "Websites",
    description: "React Web App",
    image: Jpd,
    link: "https://www.jpd.agency/",
  }
];

export const testimonialData = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id convallis tellus. Pellentesque sollicitudin velit vel.",
    image: TestimonalImg,
    position: "CEO, Company A",
  },
  {
    name: "Jane Smith",
    text: "Praesent vel vehicula tortor. Ut suscipit augue ut auctor malesuada. Proin in ex ut dui facilisis ultrices. Vivamus vel suscipit orci.",
    image: TestimonalImg,
    position: "CEO, Company B",
  },
  {
    name: "Alice Johnson",
    text: "Sed a libero nec lectus hendrerit scelerisque. Duis eu risus eget ligula vulputate rhoncus. Fusce ut massa velit. Vestibulum id lectus.",
    image: TestimonalImg,
    position: "CEO, Company C",
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id convallis tellus. Pellentesque sollicitudin velit vel..",
    image: TestimonalImg,
    position: "CEO, Company D",
  },
];

export const pricingData = [
  {
    id: 1,
    title: "Basic Package",
    price: "$99",
    description: "Essential web features for small businesses.",
    features: [
      "Website Design",
      "Website Development",
      "Content Integration",
      "Contact Form",
      "Responsive Design",
      "Clean Code",
    ],
  },
  {
    id: 2,
    title: "Standard Package",
    price: "$199",
    description: "Comprehensive web features for growing businesses.",
    features: [
      "Website Design",
      "Website Development",
      "Content Integration",
      "Contact Form",
      "Google Analytics Integration",
      "API Development",
    ],
  },
  {
    id: 3,
    title: "Premium Package",
    price: "$499",
    description: "Advanced web features for large enterprises.",
    features: [
      "Website Design",
      "Website Development",
      "E-commerce Solution",
      "Search Engine Optimization (SEO)",
      "Maintenance and Support",
      "API Development",
    ],
  },
];
