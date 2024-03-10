import { BsCheck2Square } from "react-icons/bs";
import Reveal from "./Reveal";

const PriceItem = ({ item }) => {
  return (
    <li className="lg:contents w-full">
      <div className="flex flex-col p-6 mx-auto lg:max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-600 xl:p-8 dark:bg-dark dark:text-white relative">
        {item?.id === 2 && (
          <div className="ribbon absolute -top-2 -right-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:left-0 before:border-4 before:border-primary after:absolute after:right-0 after:bottom-0 after:border-4 after:border-primary rounded-md">
            <div className="absolute -right-14 top-[43px] w-60 rotate-45 bg-primary py-2.5 text-center text-white shadow-md">
              Recommended
            </div>
          </div>
        )}

        <h3 className="mb-4 text-2xl font-semibold">{item?.title}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-[90%]">
          {item?.description}
        </p>
        <div className="my-8 flex items-center">
          <span className="mr-2 text-5xl font-extrabold text-primary">
            {item?.price}
          </span>
          {/* <span>/month</span> */}
        </div>
        {/* <!-- List --> */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          {item?.features?.map((feature, i) => (
            <li className="flex items-center space-x-3" key={i}>
              {/* <!-- Icon --> */}

              <span className="text-xl text-primary">
                <BsCheck2Square />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className={` text-xl ${
            item?.id === 2 && "bg-primary dark:text-white text-white"
          } font-medium rounded-lg px-5 py-3 text-center  border border-primary mt-auto hover:bg-primary hover:text-white transition-all duration-500`}
        >
          Get started
        </a>
      </div>
    </li>
  );
};

export default PriceItem;
