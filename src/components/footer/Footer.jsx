import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { data } from "../../data/data.jsx";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-4 bg-gray-100 mb-12 md:mb-0">
      {/* First Row - Navigation Links */}
      <div className="flex justify-center gap-8 mb-6">
        <a
          href="#about"
          className="text-sm font-medium text-text hover:text-title transition-opacity"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-text hover:text-title transition-opacity"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="text-sm font-medium text-text hover:text-title transition-opacity"
        >
          Skills
        </a>
      </div>

      {/* Second Row - Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href={data.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl hover:scale-110 transition-transform"
          style={{ backgroundColor: "var(--color-title)" }}
        >
          <FaGithub className="text-white text-xl" />
        </a>

        <a
          href={data.contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl hover:scale-110 transition-transform"
          style={{ backgroundColor: "var(--color-title)" }}
        >
          <FaLinkedin className="text-white text-xl" />
        </a>

        <a
          href={`https://api.whatsapp.com/send?phone=${data.contacts.whatsapp.link}&text=Hello, ${data.home.fullName}!`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl hover:scale-110 transition-transform"
          style={{ backgroundColor: "var(--color-title)" }}
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>

      {/* Third Row - Copyright */}
      <div className="text-center">
        <p className="text-xs" style={{ color: "var(--color-text)" }}>
          {` © ${new Date().getFullYear()} ${
            data.home.fullName
          }. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
