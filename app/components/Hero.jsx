import Image from "next/image";
import HeroImg from "@/public/assets/images/hero-img-dimention.jpg";
import Button from "./Button";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screenn w-full grid place-items-center overflow-hidden"
    >
      <div className="container h-full flex flex-col-reverse lg:flex-row items-center xl:gap-24 lg:gap-12 gap-16 lg:py-[185px] pt-[185px] pb-20">
        {/* HERO CONTENT START */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <Reveal from={100}>
            <h2 className="xl:text-6xl text-3xl font-semibold mb-4 tracking-widest">
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              Hello I'm Vishnu Vinayan a{" "}
              <span className="text-primary">Senior Software Engineer</span>
            </h2>
          </Reveal>
          <Reveal from={50} delay={0.5}>
            <p className="xl:text-2xl text-xl text-justify mb-5">
            I am dedicated to developing exceptional digital experiences. My expertise in full-stack development enables me to create robust, pixel-perfect websites and interactive applications that enhance user engagement and drive technological innovation. I take a detail-oriented approach to ensure that every aspect of the software I build functions flawlessly. Let&apos;s connect to discuss how my technical skills can contribute to the success of your next project.
            </p>
          </Reveal>
          {/* BUTTON */}
          <Reveal from={50} delay={0.8}>
            <Button
              text="Get In Touch"
              link="#contact"
              className="btn-primary"
            />
          </Reveal>
        </div>
        {/* HERO CONTENT END */}

        {/* HERO IMAGE START */}
        <div className="lg:w-1/2 relative mx-5">
          <Reveal from={100}>
            <Image
              src={HeroImg}
              alt="Hero Image"
              // width={550}
              // height={550}
              priority
              className=" w-full h-full object-cover object-top max-h-[600px] rounded-md border border-gray-200"
            />
            <div className="absolute inset-5 w-full h-full bg-primary rounded-md -z-10"></div>
            <div className="absolute -inset-5 w-full h-full bg-primary rounded-md -z-10"></div>
          </Reveal>
        </div>
        {/* HERO IMAGE END */}
      </div>
    </section>
  );
};

export default Hero;
