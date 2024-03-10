"use client";

import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { BiSolidMoon } from "react-icons/bi";

export default function Switcher() {
  // Initialize state to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Get the theme from local storage on component mount
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme === "dark") {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle the theme and update local storage
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => {
      const newIsDarkTheme = !prevIsDarkTheme;
      const newTheme = newIsDarkTheme ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      if (newIsDarkTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newIsDarkTheme;
    });
  };

  return (
    <button
      className="fixed top-32 right-0 z-50 p-2 dark:bg-black bg-gray-200 rounded-l-md inline-block text-4xl"
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <span>
          <MdSunny className="transition-all duration-500" />
        </span>
      ) : (
        <span>
          <BiSolidMoon className="transition-all duration-500" />
        </span>
      )}
    </button>
  );
}
