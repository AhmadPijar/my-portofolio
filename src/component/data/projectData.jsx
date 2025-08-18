import projectInventory from "../../../public/INVENTORY-APP.pdf";
const images = import.meta.glob("../../assets/*.png", { eager: true });

const contentData = [
  {
    id: 1,
    image: images["../../assets/portofolio-website.png"].default,
    title: "Personal Portofolio website",
    description:
      "Portfolio Website is a dynamically designed platform built with React and Tailwind CSS, powered by Vite. It serves as both a personal introduction and professional showcase, featuring skills, projects, contact, and a downloadable CV. This site highlights a broad range of my abilities — presented through interactive components and a clean responsive design. The site reflects not only what I’ve done, but also my dedication to continuous learning and adaptable growth.",
    link: "https://ahmadpijar.github.io/my-portofolio",
    buttonTitle: "Visit Website",
  },
  {
    id: 2,
    image: images["../../assets/Inventory-app.png"].default,
    title: "Inventory Management App",
    description:
      "Inventory Management App is a macro-enabled Excel tool built with VBA to track warehouse operations. It automates the recording of inbound and outbound transactions, dynamically calculates stock balances, and generates reports at the click of a button. Designed for small businesses or teams without access to advanced ERP systems, this project highlights my ability to combine administrative experience with technical problem-solving — delivering practical, user-friendly solutions.",
    link: projectInventory,
    buttonTitle: "View Presentation",
  },
];

export default contentData;
