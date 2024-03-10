import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo/logo.svg";
import { navItems } from "../data";
import SocialButton from "./SocialButton";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/vishnuvinayan/",
      name: "linkedin",
    },
    {
      href: "https://www.facebook.com/therealvishnuvinayan",
      name: "facebook",
    },
    {
      href: "https://www.instagram.com/therealvishnuvinayan/",
      name: "instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCdNylMy26w4UspV80PdOjPQ",
      name: "youtube",
    },
  ];

  return (
    <div className="md:pb-16 pb-12">
      <div className="container flex flex-col items-center text-center md:gap-8 gap-6">
        <div>
          <Link href="#home" className="w-44">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* NAV */}
        <nav className="">
          <ul className="flex items-center lg:gap-10 gap-5 flex-wrap justify-center">
            {navItems?.map((item, i) => (
              <li key={i}>
                <Link
                  href={`#${item?.link}`}
                  className="tracking-widest hover:text-primary transition-all duration-500 font-medium"
                >
                  {item?.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* NAV */}

        {/* SOCIAL MEDIA */}
        <ul className="flex items-center gap-3 flex-wrap ">
          {socialLinks.map((link, i) => (
            <SocialButton
              key={i}
              icon={link?.icon}
              href={link?.href}
              name={link?.name}
              i={i}
            />
          ))}
        </ul>
        {/* SOCIAL MEDIA */}

        {/* COPYRIGHT */}
        <p className="">
          Copyright © 2024 <strong>Vishnu Vinayan</strong>. All Right Reserved
        </p>
        {/* COPYRIGHT */}
      </div>
    </div>
  );
};

export default Footer;
