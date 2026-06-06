import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { projectsData } from '../newData';

const ProjectsSection = () => {
  // State untuk menyimpan data project yang sedang dipilih untuk pop-up
  const [selectedProject, setSelectedProject] = useState(null);

  // Fungsi untuk menutup pop-up
  const closeModal = () => setSelectedProject(null);

  return (
    <div>
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p className="text-slate-500">A collection of case studies where I applied technical solutions to real-world problems.</p>
      </div>

      {/* Grid Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <div key={idx} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
            {/* Mockup Window Header */}
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">{project.category}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">{project.desc}</p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <span className="text-xs font-mono text-slate-400 truncate max-w-[60%]">{project.stack}</span>
                <button onClick={() => setSelectedProject(project)} className="text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium focus:outline-none">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Pop-up Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          onClick={closeModal} // Menutup modal jika area luar di-klik
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam kotak agar tidak menutup modal
          >
            {/* Tombol Close (X) */}
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors focus:outline-none">
              <X size={20} />
            </button>

            {/* Konten Pop-up */}
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">{selectedProject.category}</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{selectedProject.desc}</p>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Key Achievements & Features</h4>
              <ul className="space-y-2">
                {/* Walkthrough / Detail Penjelasan & Gambar */}
                {selectedProject.walkthrough && selectedProject.walkthrough.length > 0 && (
                  <div className="mb-8 space-y-6">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">System Walkthrough</h4>

                    {selectedProject.walkthrough.map((step, idx) => (
                      <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        {/* Judul dan Teks Penjelasan */}
                        <h5 className="font-bold text-slate-800 mb-2">{step.title}</h5>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.desc}</p>

                        {/* Render Gambar (Grid Otomatis menyesuaikan jumlah foto) */}
                        <div className={`grid gap-4 ${step.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {step.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                              <img src={img} alt={`${step.title} - Preview ${imgIdx + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Technical Stack</span>
              <span className="text-sm font-mono text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block">{selectedProject.stack}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
