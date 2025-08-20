import englishCert1 from "../../../public/englishCertificate.png";
import englishCert2 from "../../../public/toefl-certification.png";
import logisticsCert from "../../../public/toyotaBnspCert.png";
import programmingCert from "../../../public/dicodingCert.png";
import ProgrammingLink from "../../../public/dicoding-certification.pdf";

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
    title: "Electrical",
    popoverTarget: "skill-5",
  },
];

const aboutCertification = [
  {
    id: 1,
    title: "English",
    popoverTarget: "cert-1",
  },
  {
    id: 2,
    title: "Logistics",
    popoverTarget: "cert-2",
  },
  {
    id: 3,
    title: "Programming",
    popoverTarget: "cert-3",
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
    sub3_description: "on progress....",
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
];

const aboutCertificationPopover = [
  {
    id: 1,
    popover: "cert-1",
    title: "English Profeciency",
    sub1: "EF SET",
    description: (
      <>
        I hold an English Certificate at the B2 Upper-Intermediate level from{" "}
        <a
          href="https://www.efset.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline font-bold"
        >
          EF SET
        </a>{" "}
        ,and another English Certificate from{" "}
        <a
          href="https://www.elskill.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline font-bold"
        >
          ELSKILL
        </a>{" "}
        which I display below for reference. While I still face challenges in
        producing spoken English during real-time conversations — as most of my
        learning has come through self-study — I have solid skills in reading,
        writing, and understanding English. I continue practicing to improve my
        fluency and confidence in professional communication.
      </>
    ),
    linkSub1: "https://cert.efset.org/en/XxHmUK",
    image1: englishCert1,
    sub2: "TOEFL",
    image2: englishCert2,
  },
  {
    id: 2,
    popover: "cert-2",
    title: "Logistics Certification",
    description:
      "I hold a BNSP Certificate of Competence in the field of Automotive Manufacturing Logistic Shop, issued by the Indonesian Professional Certification Authority in collaboration with Toyota Motor Manufacturing Indonesia (LSP TMMIN). My qualification is as a Logistics Operator for Outbound Goods Packaging Process Rank C, which certifies my competency in handling outbound logistics and packaging processes. This certificate is valid for three years (2023–2026) and is displayed below for reference.",
    image: logisticsCert,
  },
  {
    id: 3,
    popover: "cert-3",
    title: "Programming Certification",
    link: "https://www.dicoding.com/certificates/NVP718LWGPR0",
    description: (
      <>
        "I earned a Dicoding Certificate for completing the Belajar Dasar
        Pemrograman JavaScript (Basic JavaScript Programming) course in August
        2021, verified by{" "}
        <a
          href="https://www.dicoding.com/certificates/NVP718LWGPR0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline font-bold"
        >
          Dicoding Academy
        </a>{" "}
        . This course, designed with industry standards validated by AWS,
        covered JavaScript fundamentals, data structures, functions,
        object-oriented programming, functional programming, asynchronous
        processes, and automated testing. The training required around 45 hours
        of learning and practice, equipping me with a solid foundation in
        JavaScript for web and backend development.",
      </>
    ),
    image: programmingCert,
  },
];

export {
  aboutSkill,
  aboutCertification,
  aboutSkillPopover,
  aboutCertificationPopover,
};
