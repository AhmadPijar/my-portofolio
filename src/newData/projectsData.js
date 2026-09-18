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
    title: 'Warehouse Order Portal',
    category: 'Workplace Project',
    stack: 'Google Apps Script, HTML, CSS, JavaScript, Google Sheets',
    desc: 'I built this after seeing how difficult it could be to keep track of requests when they arrived through several different channels. The goal was to collect those requests into one workflow so they were easier to submit, review, and follow up.',
    achievements: [
      'Brings item requests from email, Google Sheets, WhatsApp, chat, and direct messages into one place.',
      'Uses warehouse master data to help users select the correct item information instead of relying on manual typing.',
      'Lets requesters check the status of their request without repeatedly asking the warehouse team for updates.',
      'Provides a separate workflow for storekeepers to review approval or rejection with a reason attached.',
      'Keeps request data in a more structured log for follow-up and procurement activities.',
    ],
    walkthrough: [
      {
        title: '1. Starting Point',
        desc: 'The problem was simple but common: requests came through several channels, and the information was not always easy to track in one place. The same item might be requested in different ways, and sometimes the status was hard to follow.',
        // images: [rwForm],
      },
      {
        title: '2. The Approach',
        desc: 'I wanted to build a single form where requests could be submitted more consistently. The workflow also needed to help users avoid mistakes when entering item information and keep the process easier to follow after submission.',
        // images: [rwForm],
      },
      {
        title: '3. How It Works',
        desc: 'The form supports multiple items in one request, uses master data for clearer input, and shows the current status as the request moves through review. This makes it much easier to see what is pending, approved, or rejected.',
        // images: [rwStatus],
      },
      {
        title: '4. Warehouse Review',
        desc: 'The warehouse side has a separate view for checking stock and approving or rejecting requests. Rejections can also include a reason, which helps keep the process more transparent and easier to follow up.',
        // images: [rwGateway, rwApproval],
      },
      {
        title: '5. What I Learned',
        desc: 'This project taught me that a lot of process problems are not only about the system itself, but about how information moves between people. If the request path is unclear, the work becomes harder even when everyone is trying to do the right thing.',
        // images: [rwDatabase],
      },
    ],
  },

  {
    title: 'Warehouse Input Ledger',
    category: 'Workplace Project',
    stack: 'Google Apps Script, HTML, CSS, JavaScript',
    desc: 'Some warehouse records still started as physical documents. I built this ledger to make those inputs easier to record, search, verify, and prepare for ERP entry.',
    achievements: [
      'Turns physical document inputs into searchable digital records.',
      'Creates a structured way to log manual document entries before they are moved into ERP data.',
      'Makes document history easier to search and review later.',
      'Helps connect physical records with their digital follow-up more clearly.',
    ],
    walkthrough: [
      {
        title: '1. Starting Point',
        desc: 'A lot of warehouse information still came from physical documents. The challenge was not only recording the data, but keeping it easy to trace later when the information had to be checked again.',
        // images: [sheetsImg],
      },
      {
        title: '2. The Approach',
        desc: 'I created a simple digital ledger so document details could be entered in a more consistent format and stored in a way that was easier to review than scattered notes or paper records.',
        // images: [sheetsImg],
      },
      {
        title: '3. How It Works',
        desc: 'Each entry can be searched and checked, which makes it easier to verify whether a document has already been processed and follow the record back to its source when needed.',
        // images: [sheetsImg],
      },
      {
        title: '4. What I Learned',
        desc: 'This project reminded me that documentation is not just admin work. The quality of the record affects what happens next, whether the data is easy to trace, or whether people have to guess and dig through files again.',
        // images: [sheetsImg],
      },
    ],
  },

  {
    title: 'Warehouse Data Comparison & Audit Tool',
    category: 'Workplace Project',
    stack: 'Google Sheets, Google Apps Script',
    desc: 'This project came from a need to compare records from two different sources and quickly identify differences that needed attention. It helped me check warehouse dispatch data against technician service records in a more structured way.',
    achievements: [
      'Compares two operational records and highlights variance for review.',
      'Generates a comparison report instead of requiring every record to be checked manually.',
      'Links differences back to the source transaction for easier investigation.',
      'Collects negative variances into a follow-up report for review and evidence.',
      'Supports an investigation workflow with photo evidence and document traceability.',
    ],
    walkthrough: [
      {
        title: '1. Starting Point',
        desc: 'The workflow involved two data sources: TSV data from technician service records and BC data from warehouse dispatch records. The challenge was comparing them without losing track of the original transaction details.',
        // images: [tsvImg, bcImg],
      },
      {
        title: '2. The Approach',
        desc: 'I built a script to prepare both data sources and compare them in one place. Instead of manually checking each row, the tool quickly points out the differences that deserve attention.',
        // images: [compareImg],
      },
      {
        title: '3. How It Works',
        desc: 'The tool generates a comparison table and groups negative variances in a separate report so they can be reviewed more efficiently. From there, the source transaction can be traced back and checked in more detail.',
        // images: [reportMinImg, trackingMinImg],
      },
      {
        title: '4. Investigation Workflow',
        desc: 'When a difference needs an explanation, the workflow can record the reason and attach supporting photo evidence. That made the review process more organized and easier to document.',
        // images: [outomationImg],
      },
      {
        title: '5. What I Learned',
        desc: 'This project showed me that automation is useful not just because it saves time. It is also valuable when it helps people investigate a problem in a clearer and more traceable way.',
      },
    ],
  },

  {
    title: 'Inventory Operational Dashboard',
    category: 'Learning Project',
    stack: 'Excel VBA, Google Apps Script',
    desc: 'An early inventory project I built to explore how incoming and outgoing goods could be recorded digitally and turned into a simple stock report.',
    achievements: [
      'Experimented with structured inbound and outbound inventory records.',
      'Used automation to reduce repetitive data-entry steps.',
      'Generated stock information from recorded transactions.',
      'Used the project to learn more about inventory logic and spreadsheet automation.',
    ],
  },

  {
    title: 'Cash Flow Report Dashboard',
    category: 'Learning Project',
    stack: 'Google Sheets, Google Apps Script, JavaScript',
    desc: 'An experiment in organizing daily cash records and turning spreadsheet data into a simple reporting view.',
    achievements: ['Experimented with structured daily cash data entry.', 'Created a centralized reporting view using Google Sheets.', 'Explored basic automation for repetitive reporting activities.'],
  },

  {
    title: 'Payroll Management System',
    category: 'Learning Project',
    stack: 'Excel VBA',
    desc: 'An Excel VBA project created to explore employee data, attendance records, and payroll calculations within a single workbook.',
    achievements: [
      'Organized employee and attendance information in one workbook.',
      'Used VBA to automate repetitive payroll calculations.',
      'Explored how administrative data can be connected across multiple worksheets.',
      'Used the project to strengthen my understanding of Excel automation.',
    ],
  },

  {
    title: 'Portfolio Website',
    category: 'Web Project',
    stack: 'React, Tailwind CSS, JavaScript',
    desc: 'A portfolio project I built to document my work, experiments, and career development as I keep learning and improving.',
    achievements: [
      'Built a responsive website using React and Tailwind CSS.',
      'Created reusable sections to organize my work, projects, and background.',
      'Used interactive tabs and project stories to present information in a clearer way.',
      'Treated the site as a place to document my learning and progression over time.',
    ],
  },
];
