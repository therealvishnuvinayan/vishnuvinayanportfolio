"use client";

import Link from "next/link";
import { navItems } from "../data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setCurrentSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Delay between each link
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute top-full left-0 lg:w-fit w-full rounded-md px-[20px] lg:p-0 ${
        menuOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 -translate-y-full invisible lg:opacity-100 lg:visible lg:translate-y-0"
      } transition-all duration-500 `}
    >
      <motion.ul
        className="flex flex-col lg:flex-row items-center lg:gap-10 gap-5 dark:text-white text-white lg:text-black bg-primary lg:bg-transparent w-full lg:w-fit py-10 lg:mr-0 -mr-[40px] lg:border-opacity-100"
        variants={navVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {navItems?.map((item, i) => (
          <motion.li key={i} className="relative" variants={linkVariants}>
            <Link
              href={`/#${item.link}`}
              className={`tracking-widest lg:hover:text-primary transition-all duration-500 font-medium ${
                currentSection === item.link && "active"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
