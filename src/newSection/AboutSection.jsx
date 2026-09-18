import { useState } from 'react';
import me from '../assets/Profile-Photo.jpg';
import { Download, BriefcaseBusiness, Workflow } from 'lucide-react';
import { RoadmapTab, SkillsTab, CertificationsTab } from './SubComponents';
import { StoryBlock, InfoPill } from '../newComponent';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('roadmap');

  return (
    <div className="space-y-8">
      <StoryBlock
        eyebrow="ABOUT ME"
        title="From hands-on operations to digital tools."
        description="My background started in technical and logistics work before moving into warehouse administration. Along the way, I became interested in the small problems behind everyday work — how information is recorded, how requests move between people, and how simple digital tools can make those processes easier to manage."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 p-2">
            <img src={me} alt="Ahmad Pijar" className="h-full w-full rounded-[20px] object-cover" />
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                <BriefcaseBusiness size={16} className="text-sky-700" /> Warehouse & Administration
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                <Workflow size={16} className="text-sky-700" /> Digital Tools & Practical Automation
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              I started with a technical background and then worked in logistics and warehouse operations before moving closer to the administrative side of warehouse work. In those roles, I learned how much daily work depends on
              documentation, accuracy, coordination, and follow-up.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              The more I worked in that environment, the more I became interested in the gap between operational work and the data that supports it. At the same time, I started using Excel, Google Sheets, Apps Script, and simple web tools
              to make some of the repetitive tasks more structured and easier to manage.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <InfoPill label="BACKGROUND" value="Technical & Logistics" tone="accent" />
              <InfoPill label="EXPERIENCE" value="Warehouse & Administration" tone="default" />
              <InfoPill label="INTEREST" value="Digital Tools & Problem Solving" tone="success" />
            </div>
            <a
              href="https://drive.google.com/file/d/1O_nE2o03LsG9_EYpk9hIDTtW9efspyWU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </StoryBlock>

      <div className="rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.28)]">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 p-3">
          {['roadmap', 'skills', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${activeTab === tab ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'roadmap' && <RoadmapTab />}
          {activeTab === 'skills' && <SkillsTab />}
          {activeTab === 'certifications' && <CertificationsTab />}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
