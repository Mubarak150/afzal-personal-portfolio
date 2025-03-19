/* 
ADVAOCATE MUHAMMAD MUBARAK AZAD
STUDENT OF: KHYBER LAW COLLEGE, UNIVERSITY OF PESHAWAR 
FEBRUARY 27, 2025 | 03:22 AM
*/

import React from "react";
import { data } from "../../data/data.jsx";

// Skill Icons Mapping
const icons = data.skills.icons;

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-2xl mx-auto px-4 py-12 font-[var(--font-poppins)]"
      style={{ color: "var(--color-title)" }}
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Arsenal</span>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {data.skills.cards.map((card) => {
          return (
            <div
              key={card.id}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-container"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center md:justify-center gap-2">
                {card.title.icon} {card.title.text}
              </h3>
              <div className="flex md:justify-center flex-wrap gap-2">
                {card.technologies.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm flex items-center gap-2 bg-body border-1 border-gray-400"
                  >
                    {icons[skill]} {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
