const Timeline = ({ items }) => {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">{index + 1}</div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
