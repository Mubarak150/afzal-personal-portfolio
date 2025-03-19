"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { data } from "../../data/data.jsx";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const projects = data.projects;
export const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
