import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { skillsGroups } from "../../newData";

const SkillsTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleGroup = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6">
      {skillsGroups.map((group, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-xl p-5 cursor-pointer hover:bg-slate-50 transition"
            onClick={() => toggleGroup(idx)}
          >
            {/* Header Row */}
            <div className="flex justify-between items-center">
              <h3
                className={`text-lg font-semibold ${
                  isActive ? "text-blue-700" : "text-slate-800"
                }`}
              >
                {group.title}
              </h3>

              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                  isActive ? "rotate-180 text-blue-600" : "rotate-0"
                }`}
              />
            </div>

            {/* Expandable List */}
            <div
              className={`mt-3 overflow-auto transition-all duration-300 ${
                isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="list-disc ml-6 text-slate-600 text-sm space-y-1 pb-2">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsTab;
