import Image from "next/image";
import AboutImg from "@/public/assets/images/about-img-dimention.jpg";
import Button from "./Button";
import Title from "./Title";
import { HiFolderDownload } from "react-icons/hi";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="lg:pb-20 pb-12">
      <div className="container">
        {/* TITLE START */}
        <Title subTitle="About Me" title="I am here to help your next project!" />
        {/* TITLE END */}

        <div className="grid lg:grid-cols-2 xl:gap-20 gap-12">
          {/* IMAGE */}
          <Reveal from={100}>
            <div className="w-full h-full relative px-10">
              <Image
                src={AboutImg}
                alt="About Image"
                className="w-full h-full object-cover z-10 relative"
                priority
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[80%] w-full border-[10px] border-primary z-0"></div>
            </div>
          </Reveal>
          {/* IMAGE */}

          {/* CONTENT START */}
          <div className="flex flex-col justify-center gap-5 xl:text-2xl text-xl tracking-widest text-justify dark:text-gray-200 text-black">
            <Reveal from={100}>
              <p>
                <span className="text-3xl text-primary font-medium">
                  Welcome! I’m Vishnu Vinayan,
                </span>{" "}
                a dedicated Senior Software Engineer with over 10 years of
                professional experience, including 7+ years in the UAE.
              </p>
            </Reveal>

            <Reveal from={100}>
              <p>
                I specialize in building scalable, high-performance web
                applications using <b>React</b>, <b>Next.js</b>, <b>Node.js</b>,
                and <b>Python</b>, with a focus on clean architecture and
                seamless user experiences.
              </p>
            </Reveal>

            <Reveal from={100}>
              <p>
                Throughout my career, I’ve contributed to projects across
                e-commerce, digital gifting, and enterprise platforms, delivering
                solutions that are both technically sound and user-focused. I’m
                passionate about integrating AI-driven innovation into modern
                web systems to make digital experiences more intelligent and
                impactful.
              </p>
            </Reveal>

            <Reveal from={100}>
              <p>
                Driven by curiosity and precision, I thrive on transforming
                complex ideas into functional, efficient, and beautifully
                crafted web products.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:items-center">
              <Reveal from={100}>
                <a
                  href="/assets/images/Vishnu's-Resume.pdf"
                  className="btn-primary btn flex items-center gap-2"
                  download
                >
                  Download CV
                  <HiFolderDownload className="text-3xl" />
                </a>
              </Reveal>
              <Reveal from={100}>
                <Button text="Get In Touch" link="#contact" className="btn-secondary" />
              </Reveal>
            </div>
          </div>
          {/* CONTENT END */}
        </div>
      </div>
    </section>
  );
};

export default About;
