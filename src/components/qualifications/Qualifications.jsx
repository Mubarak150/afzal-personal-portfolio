import {
  FaUniversity,
  FaBriefcase,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { data } from "../../data/data.jsx";
import React from "react";

const qualifications = data.qualifications.cards;

export const Qualifications = () => {
  const getIcon = (title) => {
    switch (true) {
      case title.includes("Intern"):
        return <FaLaptopCode className="text-xl" />;
      case title.includes("Bachelors"):
        return <FaUniversity className="text-xl" />;
      case title.includes("Intermediate"):
        return <FaGraduationCap className="text-xl" />;
      default:
        return <FaBriefcase className="text-xl" />;
    }
  };

  return (
    <section id="portfolio" className="max-w-3xl mx-auto px-4 py-12 relative">
      <h2 className="section__title ">Qualifications</h2>
      <span className="section__subtitle ">My Personal Journey</span>
      <div className="relative">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-0 gap-y-0 items-center">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-1/2 top-8 -translate-x-1/2 w-0.5 h-[calc(100%-4rem)]"
            style={{
              backgroundColor: "var(--color-title)",
              background:
                "linear-gradient(to bottom, transparent 0%, var(--color-title) 10%, var(--color-title) 90%, transparent 100%)",
            }}
          />
          {qualifications.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Left Side Items (even indexes) */}
              {index % 2 !== 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="col-start-1 col-end-2 pr-2 text-right"
                >
                  <div className="p-4 pl-0 inline-block text-right">
                    <h3 className="text-md font-semibold text-title">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mt-2"
                      style={{ color: "var(--color-text))" }}
                    >
                      {item.org}
                    </p>
                    <p
                      className="text-xs mt-0.5 opacity-75"
                      style={{ color: "var(--color-text))" }}
                    >
                      {item.tenure}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Timeline Dots */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="col-start-2 col-end-3 relative z"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mx-auto border-gray-400 border-1 p-4"
                  style={{
                    backgroundColor: "var(--color-container)",
                    border: "2px solid var(--color-title))",
                  }}
                >
                  <span style={{ color: "var(--color-title))" }}>
                    {getIcon(item.title)}
                  </span>
                </div>

                {/* Connector Lines */}
                {index < qualifications.length - 1 && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12"
                    style={{ backgroundColor: "var(--color-title))" }}
                  />
                )}
              </motion.div>

              {/* Right Side Items (odd indexes) */}
              {index % 2 === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="col-start-3 col-end-4 pl-2 text-left"
                >
                  <div className="p-4 pr-0  inline-block text-left">
                    <h3 className="text-md  font-semibold  text-title">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mt-2"
                      style={{ color: "var(--color-text))" }}
                    >
                      {item.org}
                    </p>
                    <p
                      className="text-xs mt-0.5 opacity-75"
                      style={{ color: "var(--color-text))" }}
                    >
                      {item.tenure}
                    </p>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
