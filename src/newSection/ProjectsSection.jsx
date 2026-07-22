import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { projectsData } from '../newData';
import { StoryBlock, InfoPill } from '../newComponent';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="space-y-8">
      <StoryBlock
        eyebrow="Case studies"
        title="Each project was designed around a specific operational need: reduce friction, preserve evidence, and support better decisions."
        description="The stories below focus less on visual novelty and more on the way the workflow behaves under real operational pressure."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoPill label="Primary context" value="Warehouse operations" tone="accent" />
          <InfoPill label="Core method" value="Structured workflow design" tone="default" />
          <InfoPill label="Result" value="Cleaner handoffs and faster follow-up" tone="success" />
        </div>
      </StoryBlock>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projectsData.map((project, idx) => (
          <article
            key={idx}
            className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
          >
            <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-7 text-slate-600">{project.desc}</p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Operational focus</p>
                <p className="mt-2 text-sm text-slate-700">{project.achievements?.[0] || 'Built for practical use in everyday operations.'}</p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
                <span className="text-xs font-mono text-slate-400">{project.stack}</span>
                <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
                  View story <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
              <X size={18} />
            </button>

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{selectedProject.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{selectedProject.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{selectedProject.desc}</p>

            <div className="mt-8 space-y-4">
              {selectedProject.walkthrough?.map((step, idx) => (
                <div key={idx} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
                  <h4 className="text-sm font-semibold text-slate-900">{step.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.desc}</p>
                  {step.images?.length ? (
                    <div className={`mt-4 grid gap-4 ${step.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                      {step.images.map((img, imgIdx) => (
                        <img key={imgIdx} src={img} alt={`${step.title} ${imgIdx + 1}`} className="h-auto w-full rounded-2xl border border-slate-200 object-cover" loading="lazy" />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Stack</p>
              <p className="mt-2 text-sm font-mono text-slate-700">{selectedProject.stack}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
