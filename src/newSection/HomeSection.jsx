import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileSearch, Layers3, Sparkles } from 'lucide-react';
import { StoryBlock, InfoPill } from '../newComponent';

const HomeSection = () => {
  const navigate = useNavigate();

  const focusAreas = [
    { label: 'Operational problem', value: 'Manual handoffs, inconsistent records, delayed approvals' },
    { label: 'Design approach', value: 'Structured workflow, controlled input, traceable evidence' },
    { label: 'Outcome', value: 'Less rework, faster decisions, clearer accountability' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <StoryBlock
        eyebrow="Warehouse Process Improvement Suite"
        title="Practical systems for warehouse operations, approvals, and reporting."
        description="This portfolio presents a focused body of work built around operational reliability: reducing manual work, tightening record quality, and giving warehouse teams a clearer path from request to resolution."
        className="bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_36%),linear-gradient(135deg,_#f8fbff_0%,_#f5f7fb_100%)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 rounded-[24px] border border-slate-200 bg-white/80 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              <Sparkles size={14} className="text-sky-600" />
              Operational mindset
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">The work is built around one principle: remove friction without removing accountability.</h3>
            <p className="text-base leading-7 text-slate-600">
              Each solution was designed to make daily work easier to follow, easier to verify, and easier to scale. The emphasis is on clear process logic, controlled data entry, and dependable reporting rather than decorative complexity.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explore the cases <ArrowRight size={16} />
              </button>
              <button onClick={() => navigate('/about')} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Read the approach
              </button>
            </div>
          </div>

          <div className="grid gap-3">
            {focusAreas.map((item) => (
              <InfoPill key={item.label} label={item.label} value={item.value} tone={item.label === 'Outcome' ? 'success' : item.label === 'Design approach' ? 'accent' : 'default'} />
            ))}
          </div>
        </div>
      </StoryBlock>

      <StoryBlock eyebrow="Three operational stories" title="The work follows a consistent pattern: identify the gap, reduce the manual effort, and create a reliable workflow.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <FileSearch size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Requisition Worksheet</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A structured ordering flow that turned scattered requests into a managed process with visible status and fewer handoff mistakes.</p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <Layers3 size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Input Ledger</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A ledger-based approach that standardized entry, improved traceability, and reduced the risk of incomplete reporting.</p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Compare Automation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A comparison workflow that replaced repetitive checks with a system that highlights variance and supports faster investigation.</p>
          </div>
        </div>
      </StoryBlock>
    </div>
  );
};

export default HomeSection;
