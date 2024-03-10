import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const SocialButton = ({ href, name, classNames }) => {
  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          `w-[52px] h-[52px] grid place-items-center dark:bg-dark bg-gray-50 rounded-full text-3xl transition-all duration-500 hover:text-white dark:hover:text-white hover:scale-110 hover:-translate-y-2 relative border border-solid dark:border-gray-700 border-gray-300`,
          name === "linkedin" &&
            "text-[#0a66c2] hover:bg-[#0a66c2] dark:text-[#0a66c2] dark:hover:bg-[#0a66c2]",
          name === "facebook" &&
            "text-[#2374E1] hover:bg-[#2374E1] dark:text-[#2374E1] dark:hover:bg-[#2374E1]",
          name === "twitter" &&
            "text-[#03a9f5] hover:bg-[#03a9f5] dark:text-[#03a9f5] dark:hover:bg-[#03a9f5]",
          name === "youtube" &&
            "text-[#fe0000] hover:bg-[#fe0000] dark:text-[#fe0000] dark:hover:bg-[#fe0000]",
          name === "instagram" &&
            "text-[#c134a8] hover:bg-[#fe0000] dark:text-[#c134a8] dark:hover:bg-[#fe0000]",
          classNames
        )}
      >
        {name === "linkedin" && <FaLinkedinIn />}
        {name === "facebook" && <FaFacebook />}
        {name === "twitter" && <FaTwitter />}
        {name === "youtube" && <FaYoutube />}
        {name === "instagram" && <FaInstagram />}
      </Link>
    </li>
  );
};

export default SocialButton;
