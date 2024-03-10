import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const PortfolioItem = ({ project }) => {
  console.log("##project", project);
  return (
    <div className="w-full flex flex-col border border-solid dark:border-primary border-gray-300 border-opacity-20 rounded-md relative group shadow">
      <div className="absolute inset-0 rounded-md flex justify-end p-2">
        <div className="px-8 py-3 bg-gray-50 dark:bg-secondary bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm rounded-md flex flex-col justify-center text-center absolute inset-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <h3 className="text-2xl font-semibold">{project?.title}</h3>
          <p className="dark:text-gray-400 text-gray-800 line-clamp-3">
            {project?.description}
          </p>

          <Link
            href={project?.link}
            target="_blank"
            className="mt-3 text-xl flex items-center justify-center gap-1"
          >
            <span className="group-hover:text-primary transition-all duration-500">
              Visit
            </span>
            <BsArrowRightShort className="text-3xl -translate-x-4 group-hover:text-primary group-hover:translate-x-0 transition-all duration-500" />
          </Link>
        </div>
        <div className="px-5 py-3 w-full h-fit mt-auto bg-gray-50 dark:bg-secondary bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm rounded-md group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
          <h3 className="text-2xl font-semibold line-clamp-1">
            {project?.title}
          </h3>
          <p className="line-clamp-2 dark:text-gray-400 text-gray-800">
            {project?.description}
          </p>
        </div>
      </div>
      <Image
        src={project?.image}
        alt={project?.title}
        width={390}
        height={350}
        priority
        className="w-full min-h-[350px] max-h-[350px] rounded-md object-cover"
      />
    </div>
  );
};

export default PortfolioItem;
