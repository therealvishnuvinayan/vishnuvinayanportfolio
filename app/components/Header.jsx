"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import useSticky from "../hooks/useSticky";
import Reveal from "./Reveal";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";

const Header = () => {
  const { sticky } = useSticky(150);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`shadow-md absolute left-0 ${
        sticky
          ? "is-sticky dark:bg-secondary bg-gray-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
          : ""
      }  w-full top-0 z-[100]`}
    >
      <div className="container">
        <Reveal from={20}>
          <div className="flex items-center justify-between gap-12 w-full py-5 lg:py-0">
            <Link href="#home" className="w-44">
              <Image src={Logo} alt="Logo" />
            </Link>

            <button
              className="block lg:hidden text-4xl text-gray"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* LOGO END */}

            {/* NAVBAR START */}
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {/* NAVBAR END */}
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Header;
