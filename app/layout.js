import "./globals.css";
import "./custom.css";
import Switcher from "./components/Switcher";
import CustomCursor from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";

export const metadata = {
  title: "Snapix - Modern TailwindCSS Personal Portfolio React Nextjs Template",
  description:
    "Snapix: Next.js 13+, React, TailwindCSS v3+ personal portfolio template. Light/Dark themes, responsive design, easy customization, clean code, Google Fonts, 24/7 support.",
  keywords: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Personal Portfolio",
    "Responsive Design",
    "Clean Code",
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
