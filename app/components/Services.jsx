import React from "react";
import Title from "./Title";
import Reveal from "./Reveal";
import Service from "./Service";
import { servicesData } from "../data";

const Services = () => {
  return (
    <section id="services" className="services lg:py-20 py-12">
      <div className="container">
        {/* TITLE */}
        <Title
          title="Expertise That Powers Your Web Success"
          subTitle="My Services"
        />
        {/* TITLE */}
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {servicesData?.map((service, i) => (
            <Reveal from={100} key={i}>
              <Service service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
