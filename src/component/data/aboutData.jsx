import englishCert from "../../../public/englishCertificate.png";

const aboutSkill = [
  {
    id: 1,
    title: "Microsoft Office",
    popoverTarget: "skill-1",
  },
  {
    id: 2,
    title: "Google Workspace",
    popoverTarget: "skill-2",
  },
  {
    id: 3,
    title: "Programming",
    popoverTarget: "skill-3",
  },
  {
    id: 4,
    title: "Warehouse",
    popoverTarget: "skill-4",
  },
  {
    id: 5,
    title: "Electro",
    popoverTarget: "skill-5",
  },
  {
    id: 6,
    title: "English",
    popoverTarget: "skill-6",
  },
];

const aboutProject = [
  {
    id: 1,
    title: "Portfolio Website",
    popoverTarget: "project-1",
  },
  {
    id: 2,
    title: "Inventory App",
    popoverTarget: "project-2",
  },
];

const aboutSkillPopover = [
  {
    id: 1,
    popover: "skill-1",
    title: "Microsoft Office",
    sub1: "Microsoft Excel",
    sub1_description:
      "I have strong proficiency in Microsoft Excel, with the ability to create efficient, user-friendly solutions for data management and analysis. My skills include using advanced formulas (Vlookup, SUMIF, etc..), functions, and pivot tables to organize and interpret data, as well as applying conditional formatting for clearer insights. I am also experienced in automating workflows with VBA, as demonstrated in my Inventory Management App project",
    sub2: "Microsoft Word",
    sub2_description:
      "Skilled in creating documents such as reports, letters, and CVs with proper structure, formatting, and styling to meet business and professional needs.",
    sub3: "Microsoft PowerPoint",
    sub3_description:
      "Experienced in designing clear, engaging, and visually appealing presentations for training, and project app.",
  },
  {
    id: 2,
    popover: "skill-2",
    title: "Google Workspace",
    sub1: "Google Sheets",
    sub1_description:
      "Proficient in building collaborative spreadsheets with formulas, data validation, conditional formatting, and dashboards. Currently using it for project planning and shared reporting.",
    sub2: "Google Docs",
    sub2_description:
      "Skilled in writing, formatting, and collaborating on professional documents, ensuring accuracy and readability for team and business use.",
    sub3: "Google Slides",
    sub3_description: "on learning...",
  },
  {
    id: 3,
    popover: "skill-3",
    title: "Proggramming",
    sub1: "Javascript",
    sub1_description:
      "Gained foundational programming knowledge from Dicoding in 2021, including DOM manipulation, problem-solving, and basic web interactivity.",
    sub2: "React",
    sub2_description:
      "Capable of building interactive, component-based web applications. Demonstrated through projects such as this portfolio website, where I applied React for structure and interactivity.",
    sub3: "Tailwind CSS",
    sub3_description:
      "Experienced in using Tailwind’s utility-first classes to create responsive and modern designs. Applied in this portfolio website to ensure clean styling and scalability.",
    sub4: "Bootstrap CSS",
    sub4_description:
      "Skilled in leveraging Bootstrap’s grid system and components to quickly build responsive layouts and functional websites.",
  },
  {
    id: 4,
    popover: "skill-4",
    title: "Warehouse",
    sub1: "Inbound & Outbound Processing",
    sub1_description:
      "Hands-on experience managing goods movement, including receiving, verification, sorting, and dispatching items accurately.",
    sub2: "Inventory Management",
    sub2_description:
      "Skilled in applying FIFO methods, conducting stock opname, and keeping precise records to ensure stock accuracy and smooth operations.",
    sub3: "Logistics Coordination",
    sub3_description:
      "Supporting the movement of goods across storage and delivery processes while maintaining efficiency and accuracy.",
  },
  {
    id: 5,
    popover: "skill-5",
    title: "Electro",
    sub1: "PLC (Programmable Logic Controller)",
    sub1_description:
      "Experienced with Omron PLCs, able to create programs for simple automation systems such as traffic light control. Previously developed a mini traffic light project using PLC and control panels as part of a school project.",
    sub2: "Panel ",
    sub2_description:
      "Skilled in assembling three-phase motor circuits, including star-delta, direct-on-line (DOL), and forward–reverse connections.",
    sub3: "Installation",
    sub3_description:
      "Able to install residential and small building electrical systems, including MCB grouping for safety and efficiency.",
  },
  {
    id: 6,
    popover: "skill-6",
    title: "English Profeciency",
    description: (
      <>
        I hold an{" "}
        <a
          href="https://www.efset.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline font-semibold"
        >
          EF SET
        </a>{" "}
        English Certificate at the B2 Upper-Intermediate level, which I display
        below for reference. While I still face challenges in producing spoken
        English during real-time conversations — as most of my learning has come
        through self-study — I have solid skills in reading, writing, and
        understanding English. I continue practicing to improve my fluency and
        confidence in professional communication.
      </>
    ),
    image: englishCert,
  },
];

const aboutProjectPopover = [
  {
    id: 1,
    popover: "project-1",
    title: "Portfolio Website",
    description:
      "Portfolio Website is a dynamically designed platform built with React and Tailwind CSS, powered by Vite. It serves as both a personal introduction and professional showcase, featuring skills, projects, contact, and a downloadable CV. This site highlights a broad range of my abilities — presented through interactive components and a clean responsive design. The site reflects not only what I’ve done, but also my dedication to continuous learning and adaptable growth.",
  },
  {
    id: 2,
    popover: "Project-2",
    title: "Inventory App Excel Based",
    description:
      "Inventory Management App is a macro-enabled Excel tool built with VBA to track warehouse operations. It automates the recording of inbound and outbound transactions, dynamically calculates stock balances, and generates reports at the click of a button. Designed for small businesses or teams without access to advanced ERP systems, this project highlights my ability to combine administrative experience with technical problem-solving — delivering practical, user-friendly solutions.",
  },
];

export { aboutSkill, aboutProject, aboutSkillPopover, aboutProjectPopover };
