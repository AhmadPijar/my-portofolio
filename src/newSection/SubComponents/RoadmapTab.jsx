import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { roadmapData } from "../../newData";

const RoadmapTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-8 pl-4 border-l-2 border-slate-100">
      {roadmapData.map((item, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            className="relative pl-8 group cursor-pointer"
            onClick={() => toggleActive(idx)}
          >
            {/* Dot */}
            <div
              className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-white transition-all
                ${
                  item.future
                    ? "border-purple-400 border-dashed"
                    : item.current
                    ? "border-blue-600 bg-blue-600"
                    : isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-300 group-hover:border-blue-400"
                }
              `}
            />

            {/* Title + Year + Arrow */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <span
                  className={`font-bold text-lg transition
                    ${
                      item.current
                        ? "text-blue-700"
                        : isActive
                        ? "text-blue-600"
                        : "text-slate-800"
                    }
                  `}
                >
                  {item.title}
                </span>

                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded transition
                    ${
                      item.future
                        ? "bg-purple-100 text-purple-700"
                        : "bg-slate-100 text-slate-600"
                    }
                  `}
                >
                  {item.year}
                </span>
              </div>

              {/* Arrow Down */}
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300
                  ${isActive ? "rotate-180 text-blue-600" : "rotate-0"}
                `}
              />
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              {item.desc}
            </p>

            {/* Expandable Details */}
            <div
              className={`mt-3 overflow-hidden transition-all duration-300
                ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <ul className="text-slate-500 text-sm space-y-1 ml-4 list-disc">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoadmapTab;
