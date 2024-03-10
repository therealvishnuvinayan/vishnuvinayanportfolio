"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tabs from "./Tabs";
import PortfolioItem from "./PortfolioItem";
import { projectsData } from "../data";
import Title from "./Title";
import Reveal from "./Reveal";

const Portfolio = () => {
  const categories = ["All", "Web App", "Mobile App", "Websites"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio lg:py-20 py-12">
      <div className="container">
        {/* TITLE START */}
        <Title
          subTitle="My Portfolio"
          title="Check out my work in various categories"
        />
        {/* TITLE END */}

        {/* Use the Tabs component and pass categories and handleCategorySelect as props */}
        <Tabs tabs={categories} onSelect={handleCategorySelect} />

        {/* PORTFOLIO ITEMS START */}

        <ul className="portfolio-items grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Reveal from={50} key={project.id}>
              <PortfolioItem project={project} />
            </Reveal>
          ))}
        </ul>
        {/* PORTFOLIO ITEMS END */}
      </div>
    </section>
  );
};

export default Portfolio;
