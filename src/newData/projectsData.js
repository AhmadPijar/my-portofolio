import bcImg from '../assets/bc.png';
import tsvImg from '../assets/tsv.png';
import compareImg from '../assets/compare.png';
import sheetsImg from '../assets/Sheets.png';
import reportMinImg from '../assets/ReportMin.png';
import outomationImg from '../assets/Outomation.png';
import trackingMinImg from '../assets/Tracking-min.png';

export const projectsData = [
  {
    title: 'Automated Inventory Reconciliation System',
    category: 'Warehouse Automation',
    stack: 'Google Apps Script, Google Sheets API, HTML/CSS',
    desc: 'A custom automation tool to instantly reconcile warehouse dispatch data with technician service records, eliminating manual comparison.',
    achievements: [
      'Engineered a zero-discrepancy tracking system by automatically matching TSV and BC data.',
      'Replaced complex manual SUMIFS and copy-pasting with a 1-click script execution.',
      'Built an interactive UI (Sidebar) for quick document investigation and instant photo evidence uploads.',
      'Automated evidence archiving with hierarchical folder creation directly in Google Drive.',
    ],
    // FITUR BARU: Penjelasan detail berdampingan dengan gambar
    walkthrough: [
      {
        title: '1. Raw Data Processing',
        desc: 'The system extracts and transforms daily operational data from two distinct sources: Technician Service records (TSV) and Warehouse Dispatch data (BC).',
        images: [tsvImg, bcImg], // Menampilkan 2 foto sejajar
      },
      {
        title: '2. One-Click Automated Comparison',
        desc: 'By executing a custom Google Apps Script, the system aggregates the raw data and generates a clean comparison table. Discrepancies (variances) are automatically calculated and highlighted in red.',
        images: [compareImg],
      },
      {
        title: '3. Discrepancy Tracking & Reporting',
        desc: "All negative variances are automatically pushed to a centralized 'Report Minus' sheet. The system tracks back to the raw BC data to find the exact transaction details causing the discrepancy.",
        images: [reportMinImg, trackingMinImg],
      },
      {
        title: '4. Interactive Investigation UI (Sidebar)',
        desc: 'I built a custom HTML/CSS Sidebar within Google Sheets. Users can click on any discrepancy to view the transaction history, input an investigation reason, and directly upload photo evidence (which dynamically creates organized folders in Google Drive).',
        images: [outomationImg],
      },
    ],
  },
  {
    title: 'Internal Order Management System',
    category: 'Operations System',
    stack: 'Google Workspace, Spreadsheet Automation',
    desc: 'A centralized digital platform designed to streamline and track the lifecycle of internal goods ordering to headquarters.',
    achievements: [
      'Transitioned manual procurement requests into a structured, trackable digital form.',
      'Improved transparency and real-time monitoring of stock fulfillment status.',
      'Significantly reduced missing requests and improved overall distribution efficiency.',
    ],
  },
  {
    title: 'Daily Report System',
    category: 'Web App',
    stack: 'Google Sheets, Apps Script, Javascript',
    desc: 'A digital daily reporting system built using Google Apps Script, designed to replace manual paper-based reports from each branch or outlet.',
    achievements: [
      'Digitized paper-based reporting across multiple branches.',
      'Centralized daily data collection into a single, real-time Google Sheets dashboard.',
      'Eliminated physical document loss and accelerated daily reporting turnaround time.',
    ],
  },
  {
    title: 'Cash Flow Report Dashboard',
    category: 'Web App',
    stack: 'Google Sheets, Apps Script, Javascript',
    desc: 'Automated cash administration processes to accelerate daily financial tracking and eliminate heavy reliance on manual spreadsheets.',
    achievements: ['Automated daily data entry for seamless financial tracking and reporting.', 'Created a real-time visualization of cash flow accessible via cloud.', 'Reduced administrative bottlenecks in daily cash reconciliation.'],
  },
  {
    title: 'Inventory Operational Dashboard',
    category: 'Microsoft App / Web App',
    stack: 'Excel Macro VBA, Apps Script',
    desc: 'An automated dashboard that records incoming and outgoing goods data to generate daily stock reports and support operational needs.',
    achievements: [
      'Developed an automated data entry macro to speed up daily inventory logging.',
      'Maintained strict data accuracy during monthly stock opname activities.',
      'Generated instant daily stock reports to support fast operational decision-making.',
    ],
  },
  {
    title: 'Payroll Management System',
    category: 'Microsoft App',
    stack: 'Excel Macro VBA',
    desc: 'A fully functional payroll and attendance management tool built entirely in Microsoft Excel, enhanced with VBA automation.',
    achievements: [
      'Centralized employee data, timesheets, and payroll calculations in one integrated file.',
      'Simplified HR and administrative tasks for small to medium-sized teams.',
      'Eliminated manual calculation errors through robust VBA automation.',
    ],
  },
  {
    title: 'Professional Web Portfolio',
    category: 'Web Development',
    stack: 'React, Tailwind CSS, JavaScript',
    desc: 'A modern, responsive personal portfolio website built to showcase my professional background, operational projects, and technical skills.',
    achievements: [
      'Designed a clean, user-friendly interface to present complex operational projects effectively.',
      'Implemented interactive modals and dynamic tabs using React state management.',
      'Deployed and maintained the codebase on GitHub to ensure easy access for recruiters.',
    ],
  },
];
