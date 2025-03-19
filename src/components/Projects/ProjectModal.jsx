import { motion, AnimatePresence } from "framer-motion";

export const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative rounded-xl max-w-2xl w-full relative"
            style={{
              backgroundColor: "var(--color-container)",
              maxHeight: "90vh",
            }}
          >
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[85vh] ">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-opacity-10 transition-colors"
                style={{ color: "var(--color-title))" }}
              >
                ✕
              </button>

              {/* Content */}
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-title))" }}
              >
                {project.title}
              </h2>
              <div
                className="text-sm   transition-all duration-300 mb-6"
                style={{ color: "var(--color-text))" }}
              >
                {project.description}
              </div>

              {/* Grid Layout */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Features */}
                <div>
                  <h3
                    className="font-medium mb-2"
                    style={{ color: "var(--color-title))" }}
                  >
                    Key Features
                  </h3>
                  <ul
                    className="space-y-2 text-sm"
                    style={{ color: "var(--color-text))" }}
                  >
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="mr-2 mt-1">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3
                    className="font-medium mb-2"
                    style={{ color: "var(--color-title))" }}
                  >
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 ">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "hsl(var(--hue), var(--sat), 95%)",
                          color: "var(--color-title)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {project.linkText != "" &&
              project.link != "" &&
              project.linkText != null &&
              project.link != null ? (
                <div className="absolute -bottom-4 right-4 bg-text p-3 py-1 rounded-full">
                  <a
                    href={project.link}
                    className="w-full mt-12 ml-auto text-xs text-white  group"
                  >
                    visit:{" "}
                    <span className="group-hover:underline">
                      {project.linkText}
                    </span>
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
