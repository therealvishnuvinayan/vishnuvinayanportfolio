"use client";
import { motion } from "framer-motion";
import { skillData, toolsData } from "../data";
import Skill from "./Skill";

const Skills = () => {
  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Delay between each link
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="lg:pb-20 pb-12">
      {/* SKILLS */}
      <div className="container">
        <div className="grid lg:grid-cols-3 lg:gap-16 gap-8 items-start">
          {/* SKILLS START */}
          <div className="lg:col-span-2 w-full grid place-items-center">
            <h3 className="text-3xl mb-8 pb-1 border-b border-solid font-medium w-fit">
              Skills
            </h3>
            <motion.ul
              variants={navVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 w-full ml-10 "
            >
              {skillData?.map((skill) => (
                <motion.li key={skill?.id} variants={linkVariants}>
                  <Skill skill={skill} />
                </motion.li>
              ))}
            </motion.ul>
          </div>
          {/* SKILLS END */}

          {/* TOOLS START */}
          <div className="w-full grid place-items-center">
            <h3 className="text-3xl mb-8 pb-1 border-b border-solid font-medium  w-fit">
              Tools
            </h3>
            <motion.ul
              variants={navVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 w-full ml-10 "
            >
              {toolsData?.map((skill) => (
                <motion.li key={skill?.id} variants={linkVariants}>
                  <Skill skill={skill} />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* TOOLS END */}
        </div>
      </div>
      {/* SKILLS */}
    </div>
  );
};

export default Skills;
