import { ChevronRight } from "lucide-react";
import { projectsData } from "../newData";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();
  navigate(`/projects`);
  return (
    <div>
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-500">
          Kumpulan studi kasus dimana saya menerapkan solusi teknis untuk
          masalah nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
          >
            {/* Mockup Window Header */}
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                {project.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <span className="text-xs font-mono text-slate-400">
                  {project.stack}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  Lihat Detail <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
