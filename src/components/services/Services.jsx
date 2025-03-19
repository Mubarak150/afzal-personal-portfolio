import { FaServer, FaDatabase, FaCode, FaClipboardList } from "react-icons/fa";
import { data } from "../../data/data.jsx";

const services = data.services;
// [
//   {
//     icon: <FaServer />,
//     title: "Backend Development",
//     description: "Robust server-side solutions using modern technologies",
//     features: [
//       "Node.js & Express REST API development",
//       "Authentication systems (JWT, Cookies)",
//       "Role-based access control",
//       "Payment gateway integration",
//     ],
//     tech: ["Node.js", "Express", "Sequelize", "Prisma", "JWT"],
//   },
//   {
//     icon: <FaDatabase />,
//     title: "Database Solutions",
//     description: "Reliable data management systems architecture",
//     features: [
//       "SQL/NoSQL database design",
//       "ORM implementation",
//       "Data modeling & migration",
//       "Query optimization",
//     ],
//     tech: ["MySQL", "MongoDB", "Sequelize", "Mongoose", "Prisma"],
//   },
//   {
//     icon: <FaCode />,
//     title: "API Development",
//     description: "Secure and scalable API solutions",
//     features: [
//       "RESTful API development",
//       "Real-time features with Socket.io",
//       "Third-party API integration",
//       "Comprehensive documentation",
//     ],
//     tech: ["Express", "Postman", "Swagger", "WebSockets"],
//   },
//   {
//     icon: <FaClipboardList />,
//     title: "System Digitization",
//     description: "Legacy system modernization",
//     features: [
//       "Process automation",
//       "Digital record management",
//       "Report generation systems",
//       "Workflow optimization",
//     ],
//     tech: ["Node.js", "React", "PDF Generation", "CSV Processing"],
//   },
// ];

export const Services = () => {
  return (
    <section
      id="services"
      className="max-w-4xl mx-auto px-4 py-12"
      style={{ color: "var(--color-title-dark)" }}
    >
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I'm Good at ?</span>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg group"
            style={{
              backgroundColor: "var(--color-container)",
              border: "1px solid hsl(var(--hue), var(--sat), 90%)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-2xl p-3 rounded-lg  text-title bg-body"
                style={{
                  backgroundColor: "hsl(var(--hue), var(--sat), 95%)",
                }}
              >
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>

            <p className="mb-4 text-sm" style={{ color: "var(--color-text))" }}>
              {service.description}
            </p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start"
                    style={{ color: "var(--color-text))" }}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: "var(--color-title))" }}
                    >
                      ▹
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 border-gray-300 border-dashed pt-3 border-t">
              {service.tech.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="px-3 py-1 rounded-full text-xs"
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
        ))}
      </div>
    </section>
  );
};
