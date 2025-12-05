import { useState } from "react";
import me from "../assets/Me2.jpg";
import { Download } from "lucide-react";
import { RoadmapTab, SkillsTab, CertificationsTab } from "./SubComponents";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("roadmap");

  return (
    <div className="space-y-16">
      {/* --- TOP SECTION: PROFILE CARD --- */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT — PROFILE IMAGE */}
        <div className="w-full lg:w-1/3">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform opacity-70"></div>

            <div className="relative bg-white p-2 rounded-2xl">
              <img
                src={me}
                alt="Ahmad Pijar"
                className="w-full aspect-[2/2] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — BIO TEXT */}
        <div className="w-full lg:w-2/3 space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">
            Hello, I'm Ahmad.
          </h2>

          <p className="text-slate-600 leading-relaxed text-sm">
            I'm currently completing my Digital Office Administration program at
            BBPVP, developing strong administration, digital tools, and workflow
            management skills.
          </p>

          <p className="text-slate-600 leading-relaxed text-sm">
            My goal is to start building my professional experience in 2026,
            focusing on office operations, document processing, and workplace
            technology. I'm dedicated to improving my digital capabilities while
            preparing for full-time opportunities.
          </p>

          {/* DOWNLOAD CV BUTTON — FIXED */}
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1O_nE2o03LsG9_EYpk9hIDTtW9efspyWU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-100 transition-all"
            >
              <Download size={18} /> Download My CV
            </a>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: TABS --- */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[600px] flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-slate-100 p-2 gap-1 overflow-x-auto">
          {["roadmap", "skills", "certifications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg text-sm font-bold capitalize transition
                ${
                  activeTab === tab
                    ? "bg-slate-50 text-blue-700"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 flex-1">
          {activeTab === "roadmap" && <RoadmapTab />}
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "certifications" && <CertificationsTab />}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
