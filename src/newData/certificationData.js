// --- IMPORT IMAGES ---
import englishCert1 from "../../public/englishCertificate.png";
import englishCert2 from "../../public/toefl-certification.png";
import logisticsCert from "../../public/toyotaBnspCert.png";
import programmingCert from "../../public/dicodingCert.png";
import adminCert from "../../public/serti_office-admin.png";

// --- BUTTON LIST ---
export const certificationButtons = [
  {
    id: 1,
    title: "Administration Certificate",
    popoverTarget: "cert-1",
  },
  { id: 2, title: "English Certifications", popoverTarget: "cert-2" },
  { id: 3, title: "Logistics Certification", popoverTarget: "cert-3" },
  { id: 4, title: "Programming Certification", popoverTarget: "cert-4" },
];

// --- POPOVER DATA ---
export const certificationDetails = [
  {
    id: 1,
    popover: "cert-1",
    title: "Vocational Training – BBPVP",
    sub1: "Digital Office Administration",
    description: `
    I am currently completing the Vocational Training Program at BBPVP Bekasi, specializing in Digital Office Administration.

The training focuses on developing digital office operational skills, administrative workflow, and modern productivity tools.

Training materials include:
- Computer operation (Windows & basic troubleshooting)
- Google Workspace (Docs, Sheets, Drive, Meet)
- Microsoft Office (Word, Excel, PowerPoint)
- Digital archiving & electronic filing
- Office workflow & communication procedures
- Professional email writing
    `,
    linkSub1:
      "https://drive.google.com/file/d/1XMr6HAcyRMyOJbiBltEcbozLv8_7XesO/view?usp=sharing",
    image1: adminCert,
  },

  {
    id: 2,
    popover: "cert-2",
    title: "English Proficiency",
    sub1: "EF SET",
    description:
      "I hold an English Certificate at the B2 Upper-Intermediate level from EF SET, and a second English Certificate from ELSKILL. Below are the included certificates.",
    linkSub1: "https://cert.efset.org/en/XxHmUK",
    image1: englishCert1,
    sub2: "EL Skill",
    image2: englishCert2,
  },
  {
    id: 3,
    popover: "cert-3",
    title: "Logistics Certification",
    description:
      "I hold a BNSP Certificate of Competence in the Automotive Manufacturing Logistic Shop, issued with Toyota Motor Manufacturing Indonesia (LSP TMMIN).",
    image: logisticsCert,
  },
  {
    id: 4,
    popover: "cert-4",
    title: "Programming Certification",
    link: "https://www.dicoding.com/certificates/NVP718LWGPR0",
    description:
      "I earned a Dicoding Certificate for completing the JavaScript programming course, validated by AWS.",
    image: programmingCert,
  },
];
