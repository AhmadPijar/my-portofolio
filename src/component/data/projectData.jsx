const images = import.meta.glob("../../assets/*.png", { eager: true });

const contentData = [
  {
    id: 1,
    image: images["../../assets/portofolio-website.png"].default,
    title: "Portfolio Website – React & Tailwind Project",
    description:
      "A responsive personal site built with React, Tailwind CSS, and Vite. It presents my skills, projects, CV, and contact info in a clean, interactive layout. Designed to highlight both technical ability and professional growth, it adapts smoothly across devices.",
    link: "https://ahmadpijar.github.io/my-portofolio",
    buttonTitle: "Visit Website",
  },
  {
    id: 2,
    image: images["../../assets/Inventory-app.png"].default,
    title: "Inventory Management App – Excel VBA Project",
    description:
      "A macro-enabled Excel tool created to manage warehouse stock. It records inbound and outbound items, calculates real-time balances, and uses VBA for automation and reporting. This project reflects my ability to turn hands-on warehouse experience into an efficient, user-friendly digital system.",
    link: "https://docs.google.com/presentation/d/1DfDC86xJ-q8ggxqzkwKNZ8PTxMPQngVuWrmqmoNA_FU/edit?usp=drive_link",
    buttonTitle: "View Presentation",
  },
  {
    id: 3,
    image: images["../../assets/Project3-Payroll_app.png"].default,
    title: "Payroll Management App – Excel VBA Project",
    description:
      "This project is a fully functional payroll and attendance management tool built entirely in Microsoft Excel, enhanced with VBA automation. It’s designed to simplify HR and administrative tasks for small to medium-sized teams by centralizing employee data, timesheets, and payroll calculations in one place.",
    link: "https://docs.google.com/presentation/d/16Xv_SsUE1ih-1DsLY4IFX0lwgHeaGEXO1iW4fEK3W3c/edit?usp=sharing",
    buttonTitle: "View Presentation",
  },
];

export default contentData;
