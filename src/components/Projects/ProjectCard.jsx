import { motion } from "framer-motion";
import { FaRegClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";

export const ProjectCard = ({ project, onClick }) => {
  const isCurrent = true;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative cursor-pointer group"
      onClick={onClick}
    >
      <div
        className="p-5 rounded-xl transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: "var(--color-container)",
          border: "1px solid hsl(var(--hue), var(--sat), 90%)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        {/* Floating Status Indicator */}
        <div className="absolute -top-3 right-3 ">
          <div className="relative">
            <div
              className="absolute -inset-1.5 bg-opacity-10 rounded-full blur-sm group-hover:bg-opacity-20 transition-all"
              style={{ backgroundColor: "var(--color-title))" }}
            />
            {/* <span
              className="relative px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: isCurrent
                  ? "hsl(var(--hue), var(--sat), 95%)"
                  : "hsl(var(--hue), var(--sat), 90%)",
                color: "var(--color-title)",
              }}
            >
              {isCurrent ? (
                <>
                  <FaRegClock className="inline-block mr-1 animate-pulse" />
                  <span className="animate-pulse">In Progress</span>
                </>
              ) : (
                <>
                  <FaCheckCircle className="inline-block mr-1" />
                  Completed
                </>
              )}
            </span> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <h3
            className="text-lg font-semibold pr-8"
            style={{ color: "var(--color-title)" }}
          >
            {project.title}
            <span
              className="block w-8 h-0.5 mt-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: "var(--color-title))" }}
            />
          </h3>

          {/* Collapsible Description */}
          <motion.p
            className="text-sm line-clamp-2 group-hover:line-clamp-2 transition-all duration-300"
            style={{ color: "var(--color-text))" }}
          >
            {project.description}
          </motion.p>

          {/* Tech Bubble Cloud */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 rounded-full text-xs flex-row-center"
                style={{
                  backgroundColor: "hsl(var(--hue), var(--sat), 95%)",
                  color: "var(--color-title)",
                }}
              >
                <span className="w-2 h-2 rounded-full mr-2 border-2 border-gray-600" />
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtle Date Footer */}
        <div
          className="flex justify-between mt-3 border-t border-dashed "
          style={{
            borderColor: "hsl(var(--hue), var(--sat), 90%)",
          }}
        >
          <div
            className="mt-3 text-xs"
            style={{
              borderColor: "hsl(var(--hue), var(--sat), 90%)",
              color: "var(--color-text))",
            }}
          >
            {/* {project.link} */}
          </div>

          <div className="mt-3 text-xs flex-row-center gap-1 hover:font-semibold">
            <p
              className="  "
              style={{
                borderColor: "hsl(var(--hue), var(--sat), 90%)",
                color: "var(--color-text))",
              }}
            >
              read more
            </p>

            <MdOutlineReadMore className="inline-block mr-1 text-lg" />
          </div>
        </div>

        {/* Hover Glow */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity"
          style={{
            boxShadow: "inset 0 0 20px 0 var(--color-title)",
          }}
        />
      </div>
    </motion.div>
  );
};
