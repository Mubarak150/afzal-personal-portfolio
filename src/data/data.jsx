/* 
-------------- :FOR FUTURE DEVELOPERS/VISITORS/USERS: ---------------
Hello! MUBARAK HERE... 

IF you are not intending to enhancing the UI, and just wanna
make the portfolio your own. Then this document only is gonna
fullfill all your needs. just follow the INSTRUCTIONS given 
with each section of the const data and THAT'S IT!!!

ALSO ADD 
i.   a CV file, 
ii.  a Banner Section image, 
iii. an About section Image
IN /public/ folder. the rest is handled below :)

*/

/* 
-------------- :A. IMPORTING ICONS FROM REACT ICONS: ---------------
YOU might not need to change this portion BUT IF you need any further icons 
then add thier names from REACT ICONS site here in the relevent section. 

*/
import React from "react";
import {
  FaLaravel,
  FaBootstrap,
  FaVuejs,
  FaPhp,
  FaAws,
  FaDigitalOcean,
  FaJira,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaSlack,
  FaServer,
  FaCode,
  FaClipboardList,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiPostman,
  SiTailwindcss,
  SiLivewire,
  SiInertia,
  SiGitlab,
  SiAsana,
} from "react-icons/si";

import { VscTools } from "react-icons/vsc";
// ---------- REACT ICONS IMPORTS [END HERE] --------------

// THE DATA OBJECT I.E. THE BACK BONE OF THIS PROJECT
export const data = {
  /* 
                            -------------- :1. HOME/BANNER: ---------------
                THIS home object is responsible for the data in your BannerMain.jsx component. 

*/
  home: {
    fullName: "Afzal Haq",
    shortName: "Afzal", //------------------------------------- for use in webpage title, navbar [header]
    bannerImage: "/image-square.jpeg", //---------------------- image used as banner in home.
    intro:
      "Experienced Laravel/Vue.js dev with 4-year track record. Designs secure cloud architectures (AWS/DigitalOcean). Advocates test-driven development and DevOps practices.",
  },

  /* 
                               -------------- :2. ABOUT: ---------------
                THIS about object is responsible for the data in your About.jsx component....
                 i.  cards: in here add your experience, number of projects, and availability.
                 ** dont change the card.icon... if you are not interested in code tweeking. 
                 ii. rest: your about image, bio, and link to your CV from /public/ folder. 

*/
  about: {
    cards: [
      {
        id: 1,
        title: "Experience",
        icon: "award",
        text: "4 Years Working",
      },

      {
        id: 2,
        title: "Completed",
        icon: "briefcase-alt-2",
        text: "30+ Projects",
      },

      {
        id: 3,
        title: "Support",
        icon: "support",
        text: "Online 24/7",
      },
    ],

    aboutImage: "/image-square.jpeg",
    bio: "4-year tech journey mastering Laravel, Vue.js, and cloud solutions. Contributed to 5 orgs’ success via adaptable development and a relentless learning mindset.",
    CV: "/afzal-cv.pdf",
  },

  /* 
                               -------------- :3. SKILLS: ---------------
                THIS skills object is responsible for the data in your skills.jsx component....
                 i.  icons: in here are all the icons that are rendered in the said component. 
                 ** dont change the .icon... if you are not interested in code tweeking.
                    else note that the icons.[key] should be EXACTLY MATCHING skills.cards[].technologies 
                    else they will not be rendered. 

                 ii. cards: each card contain: 
                     a. a title, 
                     b. a title icon [from react icon, imported in section 1], and
                     c. a list of technologies. [array] 


*/
  skills: {
    icons: {
      // ------------------ LARAVEL/VUE ONLY icons
      Laravel: <FaLaravel className="text-lg" />,
      Bootstrap: <FaBootstrap className="text-lg" />,
      PHP: <FaPhp className="text-lg" />,
      "Vue.Js": <FaVuejs className="text-lg" />,

      Livewire: <SiLivewire className="text-lg" />,
      Inertia: <SiInertia className="text-lg" />,

      GitLab: <SiGitlab className="text-lg" />,
      "CI/CD": <VscTools className="text-lg" />,
      AWS: <FaAws className="text-lg" />,
      "Digital Ocean": <FaDigitalOcean className="text-lg" />,
      ASANA: <SiAsana className="text-lg" />,
      JIRA: <FaJira className="text-lg" />,

      // ------------------ LARAVEL/VUE ONLY icons  [end here]

      MERN: <FaReact className="text-lg" />,
      TypeScript: <SiTypescript className="text-lg" />,
      JavaScript: <SiJavascript className="text-lg" />,
      "Node.js": <FaNodeJs className="text-lg" />,
      Express: <SiExpress className="text-lg" />,
      "REST APIs": <VscTools className="text-lg" />,
      "MySQL/MongoDB": <FaDatabase className="text-lg" />,
      Prisma: <SiPrisma className="text-lg" />,
      Sequelize: <SiMysql className="text-lg" />,
      Mongoose: <SiMongodb className="text-lg" />,
      React: <FaReact className="text-lg" />,
      "Tailwind CSS": <SiTailwindcss className="text-lg" />,
      "Responsive Design": <VscTools className="text-lg" />,
      "Git/GitHub": <FaGitAlt className="text-lg" />,
      "VS Code": <VscTools className="text-lg" />,
      Postman: <SiPostman className="text-lg" />,
      TablePlus: <FaDatabase className="text-lg" />,
      "MongoDB Compass": <SiMongodb className="text-lg" />,
      "Prisma Studio": <SiPrisma className="text-lg" />,
      Slack: <FaSlack className="text-lg" />,
    },

    cards: [
      {
        id: 1,
        title: {
          icon: <FaReact />,
          text: "Frontend",
        },
        technologies: [
          "HTML",
          "CSS",
          "Bootstrap",
          "Tailwind CSS",

          "JavaScript",
          "Vue.Js",
          "Livewire",
          "Inertia",

          "Responsive Design",
        ],
      },
      {
        id: 2,
        title: {
          icon: <FaNodeJs />,
          text: "Backend and Databases",
        },
        technologies: ["Laravel", "PHP", "REST APIs", "MySQL"],
      },
      {
        id: 3,
        title: {
          icon: <VscTools />,
          text: "Tools",
        },
        technologies: [
          "Git/GitHub",
          "GitLab",
          "CI/CD",
          "AWS",
          "Digital Ocean",
          "VS Code",
          "Postman",
          "TablePlus",
          "Slack",
          "ASANA",
          "JIRA",
        ],
      },
    ],
  },

  /* 
                                        -------------- :4. PROJECTS: ---------------
                THIS projects array is responsible for the data of all the components in /src/projects folder.... 

                 i.  Objects: each object contain: 
                     a. a title of your project, 
                     b. a link of your project
                     c. a text that would appear in place of the actual  link to the user. 
                     d. description of your project, 
                     e. technologies used in it. 
                     f. key features of your project
                     e. and in which stack your project was built. 
                     ** NOTE that the link to your project will not appear if any of the link or linkText is either empty or null. 
*/
  projects: [
    {
      id: 1,
      title: "Easy QR Code",
      link: "https://www.easyqrcode.co",
      linkText: "easyqrcode.io",
      description:
        "This website generates QR Codes and Bar Codes for numerous uses like Wi-fi connection, emails, events information, contacts and many more. This website provides the said services based on subscription-based plans via PayPal, Stripe, and RazorPay. I completed this project in Laravel, Blade, and Bootstrap.",
      technologies: ["Laravel", "Blade", "Bootstrap", "QR Codes"],
      features: [
        "QR Code generation for Wi-fi connection, emails, events information, contacts and many more.",
        "Subscription-based plans.",
        " Payments with PayPal, Stripe, and RazorPay.",
      ],
      stack: [
        "Backend",
        "Database Design",
        "Authentication",
        "Online Payments",
      ],
    },
    {
      id: 2,
      title: "QR Code",
      link: "https://github.com/AfzalHaq61/qrcode-trustech",
      linkText: "github.com",
      description:
        "Made possible with the help of Laravel, Vue, Inertia, and Tailwind, this website generates bar codes and QR codes that ranges from emails to event information. The website provides the said services on subscription-based plans via PayPal, Stripe, and RazorPay.",
      technologies: ["Laravel", "Vue", "Inertia", "Tailwind", "QR Codes"],
      features: [
        "QR Code generation for Wi-fi connection, emails, events information, contacts and many more.",
        "Subscription-based plans.",
        " Payments with PayPal, Stripe, and RazorPay.",
      ],
      stack: [
        "Full Stack",
        "Database Design",
        "Authentication",
        "Online Payments, etc.",
      ],
    },
    {
      id: 3,
      title: "GigToDo",
      link: "https://www.gigtodo.co",
      linkText: "gigtodo.co",
      description:
        "This website is a clone of Fiverr, providing facilities of chat, notifications, wallet system, and payment systems i.e. PayPal, Stripe etc., making it a suitable environment for services providers and tentative purchasers thereof.",
      technologies: ["Laravel", "Vue", "Inertia", "Tailwind"],
      features: [
        "Fiverr Clone",
        "facilities of chat, notifications, wallet system, and payment systems",
        "Payments with PayPal, Stripe etc.",
      ],
      stack: ["Full Stack", "E-commerce", "MarketPlace"],
    },
    {
      id: 4,
      title: "Jackom",
      link: "https://github.com/AfzalHaq61/jackom-ontracx",
      linkText: "github.com",
      description:
        "In this project, I solely worked out the front end of this app, named Jackom, with Vue JS and its backend with Laravel. This app provides for the sale, repairing, maintenance, home delivery etc. of vehicles and other procedures ancillary to the aforementioned tasks like payments, customer care, and chat.",

      technologies: ["Vue.js", "Laravel", "Tailwind"],
      features: [
        "Made for sale, repairing, maintenance, home delivery etc. of vehicles",
        "Other services related to aforementioned like: payments, customer care, and chat.",
      ],
      stack: ["Full Stack", "Auto-mobiles"],
    },
    {
      id: 5,
      title: "R.I.Q.S.",
      link: "https://github.com/AfzalHaq61/riqs-purecodes",
      linkText: "github.com",
      description:
        "It was the database of an educational institute, based in Lahore, named Rahimia Institute of Quranic Sciences. We worked on this database, which included the data of all its members across the state, classes’ schedules, class’s reports, etc. I did this project in the collaboration with PureCodes, a software company based in Peshawar.",

      technologies: ["Vue.js", "Laravel", "Tailwind"],
      features: [
        "Made for educational institute",
        "classes schedules, reports etc.",
      ],
      stack: ["Full Stack", "Education"],
    },
  ],

  /* 
                                        -------------- :5. PROJECTS: ---------------
                THIS SERVICES array is responsible for the data IN services.jsx component.... 

                 i.  Objects: each object contain: 
                     a. an icon [added in section A above.], 
                     b. and the rest...
*/
  services: [
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust server-side solutions using modern technologies",
      features: [
        "Laravel  REST API development",
        "Authentication systems (JWT, Cookies)",
        "Role-based access control",
        "Payment gateway integration",
      ],
      tech: ["Node.js", "Express", "Sequelize", "Prisma", "JWT"],
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      description: "Reliable data management systems architecture",
      features: [
        "SQL/NoSQL database design",
        "ORM implementation",
        "Data modeling & migration",
        "Query optimization",
      ],
      tech: ["MySQL", "MongoDB", "Sequelize", "Mongoose", "Prisma"],
    },
    {
      icon: <FaCode />,
      title: "API Development",
      description: "Secure and scalable API solutions",
      features: [
        "RESTful API development",
        "Real-time features with Socket.io",
        "Third-party API integration",
        "Comprehensive documentation",
      ],
      tech: ["Express", "Postman", "Swagger", "WebSockets"],
    },
    {
      icon: <FaClipboardList />,
      title: "System Digitization",
      description: "Legacy system modernization",
      features: [
        "Process automation",
        "Digital record management",
        "Report generation systems",
        "Workflow optimization",
      ],
      tech: ["Node.js", "React", "PDF Generation", "CSV Processing"],
    },
  ],

  /* 
                                 -------------- :5. QUALIFICATIONS: ---------------
                THIS QUALIFICATIONS array is responsible for the data IN qualifications.jsx component.... 

                 i.  cards: each card contain: 
                     a. org:   name of organization you worked, had internship with, or studied at.
                     b. title: represents your degree, role etc.  
                     ** NOTE that in case of internship include the word "Intern" in the title. 
                     c. tenure: means for how much time you were engaged with this org. 
*/
  qualifications: {
    cards: [
      {
        id: 1,
        org: "IPlex (Pvt.) Ltd., Islamabad",
        title: "Sr. Laravel Vue Dev", // ------------------ this line will be shown as your title on Home/banner.jsx
        tenure: "Mar 2024 — Present",
      },
      {
        id: 2,
        org: "Trustech Solution, Peshawar",
        title: "Associate Laravel Vue Dev",
        tenure: "Dec 2022 — Mar 2024",
      },
      {
        id: 3,
        org: "Culyte, Peshawar",
        title: "Jr. Laravel Vue Dev",
        tenure: "May 2022 — Dec 2022",
      },
      {
        id: 4,
        org: "PureCodes, Peshawar",
        title: "Intern/Jnr Laravel Vue Dev",
        tenure: "Mar 2021 — May 2022",
      },
      {
        id: 5,
        org: "Reboot Interactive, Peshawar",
        title: "Intern (Gaming Dev)",
        tenure: "Aug 2020 — Mar 2021",
      },
    ],
  },

  /* 
                                 -------------- :5. CONTACTS: ---------------
                THIS CONTACTS array is responsible for the data IN CONTACTS.jsx component.... 

                 i.  place your linkedin link, whatsapp number, and email here. 
                 ii. go to formsfree website and generate a key for your form with your own Email
                     and paste it in here in forms.key in "", else you wont recieve the mails from
                     your visitors
*/
  contacts: {
    linkedIn: "https://www.linkedin.com/in/afzal-haq-2720a822b",
    github: "https://github.com/AfzalHaq61",
    whatsapp: {
      title: "whatsapp",
      link: "+923419243170",
    },
    email: {
      title: "Email",
      link: "afzaldev6@gmail.com",
    },
    form: {
      key: "", // please CHANGE THIS KEY... get your own from formsfree, or else you wont recieve your mails.
    },
  },
};

/* 
                                 -------------- :now you are good to go..: ---------------
                                  FOR ANY QUERY: Reach me at: 

                                                muhammadmubarak.netlify.app 
                                                           OR
                                                  mkmubarak2347@gmail.com
*/
