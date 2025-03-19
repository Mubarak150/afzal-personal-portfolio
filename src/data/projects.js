// THIS IS TO BE USED IN PROJECT CARDS COMPONENTS.... mubarak
export const projects = [
  {
    id: 1,
    title: "Celebrita POS",
    duration: "05/06/2024 – 01/07/2024",
    description:
      "A Point of Sale system for Celebrita Pharmacy, enabling vendors to sell medicines via a POS e-portal.",
    role: "Designed database structure and developed backend APIs using Node.js, Express, and Sequelize.",
    technologies: [
      "Node.js",
      "Express",
      "Sequelize",
      "Zod Auth",
      "JWT",
      "QR Codes",
    ],
    features: [
      "QR Code-based auto-login for staff",
      "Barcode scanner integration for product addition",
      "Dynamic bill calculation with discounts",
      "Detailed sales, returns, and profit reports",
      "Local server setup with 4-hour database sync",
    ],
    achievements: [
      "Implemented role-based access control",
      "Developed real-time sales tracking",
    ],
    stack: ["Backend", "Database Design", "Authentication"],
  },
  {
    id: 2,
    title: "Paperless Clinic",
    duration: "03/07/2024 – 11/09/2024",
    description:
      "A system to digitize clinic operations, enabling real-time updates between receptionists and doctors.",
    role: "Designed database structure and developed backend APIs using Node.js, Express, and Sequelize.",
    technologies: [
      "Node.js",
      "Express",
      "Sequelize",
      "Socket.io",
      "Zod Auth",
      "JWT",
    ],
    features: [
      "Real-time patient status updates (waiting, in-progress, in-payment, examined)",
      "Paperless prescriptions and patient records",
      "Daily patient tracking and future appointment scheduling",
      "Local server setup with 4-hour database sync",
    ],
    stack: ["Full Stack", "Real-time Systems"],
  },
  {
    id: 3,
    title: "E-Commerce Shop Web Template",
    duration: "08/2024 – CURRENT",
    description:
      "A customizable e-commerce template enabling online shopping and admin management.",
    role: "Designed database structure and developed backend APIs using Node.js, Express, and Sequelize.",
    technologies: [
      "Node.js",
      "Express",
      "Sequelize",
      "Socket.io",
      "Zod Auth",
      "JWT",
    ],
    features: [
      "User profiles and shopping carts",
      "Real-time notifications for admins and users",
      "Order tracking and returns management",
      "Printable invoices and reports",
      "Staff activation/deactivation by admins",
    ],
    stack: ["Full Stack", "E-commerce"],
  },
  {
    id: 4,
    title: "PDA Land Records Maintenance Site",
    duration: "01/12/2024 – CURRENT",
    description:
      "Web solution for Peshawar Developmental Authority to manage real estate records digitally.",
    role: "Designed database structure and developed backend APIs using Node.js, Express, and Sequelize.",
    technologies: ["Node.js", "Express", "Sequelize", "Zod Auth", "JWT"],
    features: [
      "Record management for societies, plots, and residents",
      "Audit logs for all CRUD operations",
      "Printable reports for transfers, active plots, and auctions",
      "Staff activation/deactivation by admins",
    ],
    achievements: [
      "Implemented comprehensive audit trail system",
      "Developed complex report generation features",
    ],
    stack: ["Backend", "Government Systems"],
  },
];
