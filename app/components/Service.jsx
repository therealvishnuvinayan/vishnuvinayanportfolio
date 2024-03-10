const Service = ({ service }) => {
  return (
    <li className="border border-solid border-primary border-opacity-20 xl:py-12 py-8 xl:px-8 px-6 w-full h-full hover:bg-gray-100 dark:hover:bg-dark hover:scale-105 transition-all duration-500 rounded-md">
      <div className="grid place-items-center gap-3 text-center ">
        <div className="text-4xl text-white bg-primary w-16 h-16 rounded-2xl rounded-br-none p-2 grid place-items-center mb-4 ">
          <span>{service.icon}</span>
        </div>
        <h3 className="xl:text-2xl text-xl font-medium">{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </li>
  );
};

export default Service;
