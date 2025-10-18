import Image from "next/image";
import HeroImg from "@/public/assets/images/hero-img-dimention.jpg";
import Button from "./Button";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full grid place-items-center overflow-hidden"
    >
      <div className="container h-full flex flex-col-reverse lg:flex-row items-center xl:gap-24 lg:gap-12 gap-16 lg:py-[185px] pt-[185px] pb-20">
        {/* HERO CONTENT START */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <Reveal from={100}>
            <h2 className="xl:text-6xl text-3xl font-semibold mb-4 tracking-widest">
              Hi, I’m Vishnu Vinayan —{" "}
              <span className="text-primary">Senior Software Engineer</span>
            </h2>
          </Reveal>

          <Reveal from={50} delay={0.5}>
            <p className="xl:text-2xl text-xl text-justify mb-5">
              I build fast, scalable web apps with React, Next.js, Node.js, and Python.
              With 10+ years of experience (7+ in the UAE), I ship production-ready
              products end-to-end — clean, accessible UIs, reliable APIs, and performance
              that holds up at scale. I’m currently applying AI to create smarter,
              more intuitive user experiences.
            </p>
          </Reveal>

          <Reveal from={50} delay={0.6}>
            <p className="xl:text-xl text-lg text-justify mb-5 text-gray-600">
              Previously delivered for: <strong>Apparel Group</strong> · <strong>Nykaa (Nysaa)</strong> ·{" "}
              <strong>BFL Group</strong> · <strong>Transguard Group</strong>
            </p>
          </Reveal>

          {/* BUTTON */}
          <Reveal from={50} delay={0.8}>
            <Button text="Get in Touch" link="#contact" className="btn-primary" />
          </Reveal>
        </div>
        {/* HERO CONTENT END */}

        {/* HERO IMAGE START */}
        <div className="lg:w-1/2 relative mx-5">
          <Reveal from={100}>
            <Image
              src={HeroImg}
              alt="Hero Image"
              priority
              className="w-full h-full object-cover object-top max-h-[600px] rounded-md border border-gray-200"
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
