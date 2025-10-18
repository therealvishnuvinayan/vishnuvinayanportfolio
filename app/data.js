// imports (icons)
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
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiAmazonaws,
  SiSentry,
} from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

// images
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
import Brainwave from "@/public/assets/images/portfolio/brainwave.png";
import TestimonalImg from "@/public/assets/images/testimonial-img-dimention.jpg";
import BambooAdminMarketPlace from "@/public/assets/images/portfolio/bamboo-admin-marketplace.png";
import GTIAdminDashboard from "@/public/assets/images/portfolio/GTI-dashboard.png";
import BambooAdminDashboard from "@/public/assets/images/portfolio/bamboo-admin-dashboard.png";
import RMKAdminDashboard from "@/public/assets/images/portfolio/RMK-admin-dashboard.png";
import ZyypherWebsite from "@/public/assets/images/portfolio/zyypher-website.png";
import TamanaAdminDashboard from "@/public/assets/images/portfolio/tamana-admin-dashboard.png";
import TamanaBinanceMiniApp from "@/public/assets/images/portfolio/tamana-binance-mini-app.png";
import RMKExpertsWebsite from "@/public/assets/images/portfolio/rmkexperts-website.png";
import ZtoiqWebsite from "@/public/assets/images/portfolio/ztoiq-website.png";
import ZtoiqShopifyWebsite from "@/public/assets/images/portfolio/ztoiq-shopify-website.png";
import IncentiWebsite from "@/public/assets/images/portfolio/incenti-website.png";
import BamboocardWebsite from "@/public/assets/images/portfolio/bamboo-card-website.png";
import MIGulfWebsite from "@/public/assets/images/portfolio/mi-gulf-website.png";
import AESGWebsite from "@/public/assets/images/portfolio/aesg-website.png";
import GlobalGatewaysWebsite from "@/public/assets/images/portfolio/global-gateways-website.png";
import AvrilsqsWebsite from "@/public/assets/images/portfolio/avrilsqs-website.png";
import AdmireDentalWebsite from "@/public/assets/images/portfolio/admire-dental-website.png";
import ArunaMusicalWebsite from "@/public/assets/images/portfolio/aruna-musical-website.png";
import EuromechanicalWebsite from "@/public/assets/images/portfolio/euromechanical-website.png";
import SigmatoWebsite from "@/public/assets/images/portfolio/sigmato-website.png";
import DCTWebsite from "@/public/assets/images/portfolio/dct-website.png";
import PyrumusWebsite from "@/public/assets/images/portfolio/pyrumus-website.png";





// -------- NAV --------
export const navItems = [
  { text: "Home", link: "home" },
  { text: "About Me", link: "about" },
  { text: "Services", link: "services" }, // plural
  { text: "Portfolio", link: "portfolio" },
  { text: "Contact", link: "contact" },
];

// -------- SKILLS (ordered) --------
export const skillData = [
  // Core & Languages
  { id: 1, name: "JavaScript", icon: BiLogoJavascript, color: "#efd81d" },
  { id: 2, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 3, name: "Python", icon: SiPython, color: "#3776AB" },

  // Front-end
  { id: 4, name: "React", icon: FaReact, color: "#5ed3f3" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#ffffff" },
  { id: 6, name: "React Native", icon: TbBrandReactNative, color: "#61dafb" },

  // Styling
  { id: 7, name: "Tailwind CSS", icon: BiLogoTailwindCss, color: "#38bdf8" },
  { id: 8, name: "Sass", icon: FaSass, color: "#c76494" },
  { id: 9, name: "CSS3", icon: FaCss3Alt, color: "#254bdd" },
  { id: 10, name: "HTML5", icon: FaHtml5, color: "#dd4b25" },
  { id: 11, name: "Bootstrap", icon: FaBootstrap, color: "#8311fc" },

  // State/Data
  { id: 12, name: "Redux Toolkit", icon: BiLogoRedux, color: "#7248b6" },
  { id: 13, name: "tRPC", icon: SiTrpc, color: "#3688c5" },

  // Backend & APIs
  { id: 14, name: "Node.js", icon: FaNodeJs, color: "#689E59" },
  { id: 15, name: "Express.js", icon: SiExpress, color: "#ffffff" },

  // Databases & ORM
  { id: 16, name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { id: 17, name: "MongoDB", icon: BiLogoMongodb, color: "#409331" },
  { id: 18, name: "Redis", icon: SiRedis, color: "#DC382D" },
  { id: 19, name: "Prisma", icon: SiPrisma, color: "#ffffff" },
  { id: 20, name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { id: 21, name: "Firebase", icon: BiLogoFirebase, color: "#ffcb2d" },

  // Search / CMS / Commerce
  { id: 22, name: "Algolia", icon: SiAlgolia, color: "#4c82e9" },
  { id: 23, name: "Strapi", icon: SiStrapi, color: "#8E75FF" },
  { id: 24, name: "Shopify", icon: FaShopify, color: "#7eba36" },
  { id: 25, name: "WordPress", icon: FaWordpress, color: "#207195" },

  // Analytics & Marketing
  { id: 26, name: "GA4", icon: SiGoogleanalytics, color: "#faab00" },
  { id: 27, name: "GTM", icon: SiGoogletagmanager, color: "#246fdb" },

  // Cloud
  { id: 28, name: "GCP", icon: DiGoogleCloudPlatform, color: "#FBBC04" },

  // SEO
  { id: 29, name: "SEO", icon: TbSeo, color: "#ffffff" },

  // --- NEW (safe) ---
  { id: 30, name: "Neon Postgres", icon: SiPostgresql, color: "#00E599" }, // NeonDB (Postgres)
  { id: 31, name: "OpenAI API", icon: FaCode, color: "#10b981" },          // AI
  { id: 32, name: "Vector DB", icon: SiPostgresql, color: "#336791" }, // AI search
  { id: 33, name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { id: 34, name: "LLM Integration", icon: FaCode, color: "#10b981" },
  { id: 36, name: "Notion", icon: SiLinear, color: "#000000" },
];


// -------- TOOLS (ordered) --------
export const toolsData = [
  { id: 1, name: "VS Code", icon: BiLogoVisualStudio, color: "#1883CB" },
  { id: 2, name: "Chrome DevTools", icon: FaChrome, color: "#ffffff" },
  { id: 3, name: "Git", icon: BiLogoGit, color: "#E84D31" },
  { id: 4, name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { id: 5, name: "Docker", icon: SiDocker, color: "#2496ED" },
  { id: 6, name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { id: 7, name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { id: 8, name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { id: 9, name: "GCP Console", icon: DiGoogleCloudPlatform, color: "#4285F4" },
  { id: 10, name: "Figma", icon: BiLogoFigma, color: "#EA4C1D" },
  { id: 11, name: "Postman", icon: SiPostman, color: "#f76836" },
  { id: 12, name: "Sentry", icon: SiSentry, color: "#FB4226" },
  { id: 13, name: "Slack", icon: FaSlack, color: "#da1c57" },
  { id: 14, name: "Jira", icon: FaJira, color: "#136ae7" },
  { id: 15, name: "Linear", icon: SiLinear, color: "#4e55b6" },
  { id: 16, name: "macOS", icon: SiMacos, color: "#05a6e4" },
];

// -------- SERVICES --------
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
  // --- NEW (safe) ---
  {
    title: "AI Integration",
    description:
      "Applying LLMs (OpenAI) and vector search (pgvector) to build smarter, more intuitive user experiences.",
    icon: <FaCode />,
  },
];


// -------- PROJECTS --------
export const projectsData = [
  // ——— High / flagship ———
  {
    id: 1,
    title: "Nysaa",
    category: "Web App",
    description: "Next.js ecommerce platform (React stack)",
    image: Nysaa,
    link: "https://nysaa.com/",
  },
  {
    id: 2,
    title: "Longines",
    category: "Web App",
    description: "React ecommerce experience for a global luxury brand",
    image: Longines,
    link: "https://www.longines.com/",
  },
  {
    id: 3,
    title: "Brands For Less (Web)",
    category: "Web App",
    description: "React ecommerce at scale for the Middle East retail leader",
    image: BrandsForLess,
    link: "https://www.brandsforless.com/en-ae/",
  },
  {
    id: 4,
    title: "Brands For Less (iOS)",
    category: "Mobile App",
    description: "React Native shopping app for iOS",
    image: BrandsForLessIos,
    link: "https://apps.apple.com/ae/app/brands-for-less-shopping-app/id1039840915",
  },
  {
    id: 5,
    title: "Zyypher Website",
    category: "Website",
    description: "Next.js + Tailwind marketing site (from scratch)",
    image: ZyypherWebsite,
    link: "https://www.zyypher.com/",
  },
  {
    id: 6,
    title: "Brainwave Landing Page",
    category: "Website",
    description: "Polished Next.js + Tailwind single-page landing",
    image: Brainwave,
    link: "https://brainwave-fawn.vercel.app/",
  },

  // ——— New admin dashboards ———
  {
    id: 7,
    title: "RMK Admin Dashboard",
    category: "Web App",
    description: "Next.js + Tailwind admin; Neon Postgres backend",
    image: RMKAdminDashboard,
    link: "https://rmk-dashboard.vercel.app/",
  },
  {
    id: 8,
    title: "Gulbahar GTI Admin Dashboard",
    category: "Web App",
    description: "Next.js + Tailwind full-stack; Vercel + NeonDB",
    image: GTIAdminDashboard,
    link: "https://gti-rho.vercel.app/",
  },
  {
    id: 9,
    title: "Bamboo Marketplace Admin Dashboard",
    category: "Web App",
    description: "Next.js + Tailwind admin for marketplace ops (.NET + AWS)",
    image: BambooAdminMarketPlace,
    link: "https://admin-mp.dev2.bamboocardportal.com/",
  },
  {
    id: 10,
    title: "Bamboo Admin Dashboard",
    category: "Web App",
    description: "React (CSS) admin dashboard (.NET + AWS backend)",
    image: BambooAdminDashboard,
    link: "https://gti-rho.vercel.app/",
  },
  {
    id: 11,
    title: "Tamana Admin Dashboard",
    category: "Web App",
    description: "React + Tailwind admin dashboard (.NET + AWS)",
    image: TamanaAdminDashboard,
    link: "https://tamana-admin.bamboocardportal.com/",
  },
  {
    id: 12,
    title: "Tamana Binance Mini App",
    category: "Web App",
    description: "React + Tailwind mini-app (.NET + AWS)",
    image: TamanaBinanceMiniApp,
    link: "https://tamana-admin.bamboocardportal.com/",
  },

  // ——— Mid / variety ———
  {
    id: 13,
    title: "BFL Logistics",
    category: "Mobile App",
    description: "React Native internal logistics Android app",
    image: BrandsForLessLogistics,
    link: "https://www.youtube.com/watch?v=DGtpIWC0mgM",
  },
  {
    id: 14,
    title: "RMK Experts Website",
    category: "Website",
    description: "Next.js corporate site (Bootstrap)",
    image: RMKExpertsWebsite,
    link: "https://www.rmkexperts.com/",
  },
  {
    id: 15,
    title: "Ztoiq Website",
    category: "Website",
    description: "React/Bootstrap marketing site",
    image: ZtoiqWebsite,
    link: "https://ztoiq.vercel.app/",
  },
  {
    id: 16,
    title: "Ztoiq Shopify Store",
    category: "Website",
    description: "Shopify ecommerce storefront",
    image: ZtoiqShopifyWebsite,
    link: "https://ztoiq.com/",
  },

  // ——— Lower priority / older ———
  {
    id: 17,
    title: "Incenti Website",
    category: "Website",
    description: "WordPress marketing site",
    image: IncentiWebsite,
    link: "https://www.incenti.me/",
  },
  {
    id: 18,
    title: "Bamboo Card Website",
    category: "Website",
    description: "WordPress corporate site",
    image: BamboocardWebsite,
    link: "https://www.bamboo-card.com/",
  },
  {
    id: 19,
    title: "Praveen Jewels",
    category: "Website",
    description: "WordPress marketing site",
    image: PraveenJewels,
    link: "https://praveenjewels.com/",
  },
  {
    id: 20,
    title: "JPD Agency",
    category: "Website",
    description: "WordPress marketing site",
    image: Jpd,
    link: "https://www.jpd.agency/",
  },
  {
    id: 21,
    title: "Syook",
    category: "Web App",
    description: "React web app (earlier contribution)",
    image: Syook,
    link: "https://www.syook.com/",
  },
  {
    id: 22,
    title: "AESG Website",
    category: "Website",
    description: "WordPress corporate site",
    image: AESGWebsite,
    link: "https://aesg.com/",
  },
  {
    id: 23,
    title: "MI Gulf Services Website",
    category: "Website",
    description: "WordPress corporate site",
    image: MIGulfWebsite,
    link: "https://www.migulfservices.com/",
  },
  {
    id: 24,
    title: "Admire Dental Website",
    category: "Website",
    description: "WordPress site",
    image: AdmireDentalWebsite,
    link: "https://admiredental.com/",
  },
  {
    id: 25,
    title: "Sigmato Website",
    category: "Website",
    description: "WordPress corporate site",
    image: SigmatoWebsite,
    link: "https://sigmato.com/",
  },
  {
    id: 26,
    title: "DCT Academy Website",
    category: "Website",
    description: "React training academy website",
    image: DCTWebsite,
    link: "https://www.dctacademy.com/",
  },
  {
    id: 27,
    title: "Pyrumas Website",
    category: "Website",
    description: "WordPress company website",
    image: PyrumusWebsite,
    link: "https://pyrumas.com/",
  },
  {
    id: 28,
    title: "Avril SQS Website",
    category: "Website",
    description: "WordPress site",
    image: AvrilsqsWebsite,
    link: "https://avrilsqs.com/",
  },
  {
    id: 29,
    title: "Global Gateways Website",
    category: "Website",
    description: "Static/HTML site (archive)",
    image: GlobalGatewaysWebsite,
    link: "https://globalgateways.co.in/",
  },
  {
    id: 30,
    title: "Aruna Musical Website",
    category: "Website",
    description: "Static/HTML site",
    image: ArunaMusicalWebsite,
    link: "https://www.arunamusicalstore.com/",
  },
  {
    id: 31,
    title: "Euromechanical Website",
    category: "Website",
    description: "WordPress site",
    image: EuromechanicalWebsite,
    link: "https://www.euromechanical.com/",
  },
  {
    id: 32,
    title: "JLDevelop",
    category: "Website",
    description: "Static/HTML site",
    image: Jld,
    link: "https://jldevelop.com/",
  },
];


// -------- TESTIMONIALS (placeholders) --------
export const testimonialData = [
  {
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id convallis tellus. Pellentesque sollicitudin velit vel.",
    image: TestimonalImg,
    position: "CEO, Company A",
  },
  {
    name: "Jane Smith",
    text:
      "Praesent vel vehicula tortor. Ut suscipit augue ut auctor malesuada. Proin in ex ut dui facilisis ultrices. Vivamus vel suscipit orci.",
    image: TestimonalImg,
    position: "CEO, Company B",
  },
  {
    name: "Alice Johnson",
    text:
      "Sed a libero nec lectus hendrerit scelerisque. Duis eu risus eget ligula vulputate rhoncus. Fusce ut massa velit.",
    image: TestimonalImg,
    position: "CEO, Company C",
  },
  {
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin velit vel.",
    image: TestimonalImg,
    position: "CEO, Company D",
  },
];

// -------- PRICING --------
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
