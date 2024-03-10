import "./globals.css";
import "./custom.css";
import Switcher from "./components/Switcher";
import CustomCursor from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";

export const metadata = {
  title: "Vishnu Vinayan - Portfolio",
  description:
    "Welcome to the personal portfolio of Vishnu Vinayan, showcasing a professional journey and projects. Dive into a portfolio that blends expertise in technology with a passion for innovation.",
  keywords: [
    "Vishnu Vinayan",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Technology Enthusiast",
    "Innovative Solutions",
    "Professional Journey",
    "Project Showcase",
    "Creativity",
    "Tech Industry",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`dark:bg-dark dark:text-white`}>
        {/* THEME PROVIDER */}
        {children}

        {/* SCROLL TO TOP BUTTON */}
        <ScrollToTop />

        {/* THEME SWITHER */}
        <Switcher />

        {/* CUSTOM CURSOR */}
        <CustomCursor />
      </body>
    </html>
  );
}
