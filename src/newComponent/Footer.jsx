const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t border-slate-200 bg-white/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ahmad Pijar Maulana — All Rights
          Reserved.
        </p>

        <p className="text-xs text-slate-400">Built with React & TailwindCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
