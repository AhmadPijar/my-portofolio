import bcImg from '../assets/project_compare/bc.png';
import tsvImg from '../assets/project_compare/tsv.png';
import compareImg from '../assets/project_compare/compare.png';
import sheetsImg from '../assets/project_compare/Sheets.png';
import reportMinImg from '../assets/project_compare/ReportMin.png';
import outomationImg from '../assets/project_compare/Outomation.png';
import trackingMinImg from '../assets/project_compare/Tracking-min.png';
import rwForm from '../assets/project_RW/form.png';
import rwStatus from '../assets/project_RW/status.png';
import rwGateway from '../assets/project_RW/gateway.png';
import rwApproval from '../assets/project_RW/approval.png';
import rwDatabase from '../assets/project_RW/database.png';

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
    stack: 'Google Apps Script, HTML/CSS, Bootstrap, Google Sheets API',
    desc: 'A centralized web application designed to streamline the internal ordering process, bridging the gap between unstructured sales requests and warehouse fulfillment.',
    achievements: [
      'Standardized chaotic email-based orders into a unified digital system, preventing data loss and communication bottlenecks.',
      'Developed a dynamic front-end UI with auto-complete functionality synced directly to a centralized Master Data sheet.',
      'Built a secure, PIN-protected "Storekeeper Gateway" for real-time order verification, approval, and rejection workflows.',
      'Optimized backend performance by bypassing Google Sheets latency, ensuring real-time status updates without heavy database loads.',
    ],
    walkthrough: [
      {
        title: '1. Dynamic Order Request Form',
        desc: 'Sales teams can seamlessly request multiple items in a single transaction. The form features an auto-complete input directly linked to the warehouse Master Data, ensuring accurate item codes and completely eliminating manual typing errors.',
        images: [rwForm],
      },
      {
        title: '2. Real-Time Status Tracking',
        desc: 'A dedicated dashboard allows users to track the exact status of their requests (Pending, Approved, Rejected) in real-time. It includes a live search and filter functionality, significantly reducing repetitive follow-up questions to the warehouse team.',
        images: [rwStatus],
      },
      {
        title: '3. Secure Storekeeper Gateway',
        desc: 'Warehouse managers access a hidden, PIN-protected portal within the same app. This gateway filters out all pending requests, allowing the storekeeper to review requested quantities, verify physical stock, and execute approvals or rejections with mandatory reasoning.',
        images: [rwGateway, rwApproval],
      },
      {
        title: '4. Automated Database Formatting',
        desc: 'The backend Google Apps Script strictly parses and formats timestamp data and arrays before writing to the Google Sheets database. This eliminates auto-formatting issues and maintains a clean, export-ready log for supplier procurement.',
        images: [rwDatabase],
      },
    ],
  },
  {
    title: 'Daily Report System',
    category: 'operations System',
    stack: 'Google Sheets, Apps Script, Javascript',
    desc: 'A digital daily reporting system built using Google Apps Script, designed to replace manual paper-based reports from each branch or outlet.',
    achievements: [
      'Digitized paper-based reporting across multiple branches.',
      'Centralized daily data collection into a single, real-time Google Sheets dashboard.',
      'Eliminated physical document loss and accelerated daily reporting turnaround time.',
    ],
  },
  {
    title: 'Inventory Operational Dashboard',
    category: 'Web App',
    stack: 'Excel Macro VBA, Apps Script',
    desc: 'An automated dashboard that records incoming and outgoing goods data to generate daily stock reports and support operational needs.',
    achievements: [
      'Developed an automated data entry macro to speed up daily inventory logging.',
      'Maintained strict data accuracy during monthly stock opname activities.',
      'Generated instant daily stock reports to support fast operational decision-making.',
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
