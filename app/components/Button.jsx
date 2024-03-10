import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ text, className, link, icon }) => {
  return (
    <Link
      href={link}
      className={twMerge("btn flex items-center gap-2", className)}
    >
      {icon}
      {text}
    </Link>
  );
};

export default Button;
