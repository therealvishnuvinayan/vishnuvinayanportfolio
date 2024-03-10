import Reveal from "./Reveal";

const Title = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center mb-16 relative max-w-3xl mx-auto">
      <Reveal from={100}>
        <h5 className="md:text-2xl text-xl font-medium tracking-widest capitalize">
          {subTitle}
        </h5>
      </Reveal>
      <Reveal from={100} delay={0.5}>
        <h2 className="md:text-5xl text-3xl font-bold text-primary capitalize">
          {title}
        </h2>
      </Reveal>

      {/* <span className="w-5 h-5 rounded-full bg-white animate-shake animate-infinite animate-ease-linear animate-duration-[3000ms]"></span> */}
    </div>
  );
};

export default Title;
