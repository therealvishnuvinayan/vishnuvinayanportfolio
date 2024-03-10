"use client";

import { HiArrowUp } from "react-icons/hi";
import useSticky from "../hooks/useSticky";
import { useEffect } from "react";

export const ScrollToTop = () => {
  const { sticky } = useSticky(200);

  useEffect(() => {
    let calcScrollValue = () => {
      const scrollProgress = document.getElementById("progress");
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; // Some browsers use document.body
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round((scrollTop / calcHeight) * 100);

      scrollProgress.style.background = `conic-gradient(#00a78e ${scrollValue}%, #000 ${scrollValue}%)`;
    };

    window.addEventListener("scroll", calcScrollValue);
    window.addEventListener("load", calcScrollValue);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
    };
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Add smooth scrolling behavior
        })
      }
      id="progress"
      className={`w-12 h-12  rounded-full grid place-items-center fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        sticky ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="bg-dark w-11 h-11 rounded-full text-primary text-2xl grid place-items-center">
        <HiArrowUp />
      </div>
    </button>
  );
};
