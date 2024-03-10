import React, { useState } from "react";
import { motion } from "framer-motion";

const Tabs = ({ tabs, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex justify-center mb-12 items-center flex-wrap gap-5">
      {tabs.map((tab, index) => (
        <motion.button
          key={index}
          className={`px-4 py-2 dark:text-white text-black ${
            selectedTab === tab
              ? "bg-primary text-white"
              : "dark:bg-secondary bg-gray-100"
          } text-2xl transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white focus:outline-none focus:bg-primary focus:text-white rounded-md`}
          onClick={() => handleTabClick(tab)}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
};

export default Tabs;
