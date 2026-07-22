const StoryBlock = ({ eyebrow, title, description, children, className = '' }) => {
  return (
    <section className={`rounded-[28px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] backdrop-blur-sm ${className}`}>
      <div className="max-w-3xl">
        {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p> : null}
        {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2> : null}
        {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
      </div>

      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
};

export default StoryBlock;
