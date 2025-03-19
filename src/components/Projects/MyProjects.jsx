import React from "react";
import { ProjectGrid } from "./ProjectGrid";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-4 py-12 font-[var(--font-poppins)]"
      style={{ color: "var(--color-title)" }}
    >
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Prime Projects</span>

      <ProjectGrid />
    </section>
  );
};

export default MyProjects;
