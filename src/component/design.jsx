import { useState, useEffect, useRef } from "react";
import {
  User,
  Layers,
  Briefcase,
  FileText,
  Send,
  ChevronRight,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Code,
  Terminal,
  Cpu,
  Globe,
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  CheckCircle,
  CircleUserRound,
  Route,
  GitPullRequestCreate,
  ArrowDown,
  ChevronDown,
} from "lucide-react";
import me from "../assets/Me.jpg";

const Design = () => {
  const [activePage, setActivePage] = useState("home");

  // Navigasi Utama - Menambahkan 'Contact'
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Get to know me" },
    { id: "projects", label: "My Projects" },
    { id: "contact", label: "Contact Me", isButton: true }, // Spesial untuk tombol kontak
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileRef = useRef(null);
  const buttonRef = useRef(null);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Render halaman berdasarkan state
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <HomeSection changePage={setActivePage} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection changePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur shadow-md border-slate-200"
            : "bg-transparent border-transparent"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setActivePage("home")}
          >
            My Portfolio
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.isButton ? (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all
                  ${
                    activePage === link.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }
                `}
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  className={`relative text-sm font-medium py-2 transition
                  ${
                    activePage === link.id
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-slate-900"
                  }
                `}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="font-bold text-sm">MENU</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            ref={mobileRef}
            className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg"
          >
            {navLinks.map((link) =>
              link.isButton ? (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setMobileOpen(false);
                  }}
                  className="block w-full text-center px-5 py-2 rounded-full bg-slate-900 text-white font-semibold"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-2 text-slate-700 hover:text-blue-700"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)]">
        <div className="animate-fade-in">{renderContent()}</div>
      </main>
      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm mt-12">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-blue-600">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Mail size={20} />
          </a>
        </div>
        <p>&copy; 2024 Alex Developer. Building digital future.</p>
      </footer>
    </div>
  );
};

// --- HALAMAN 1: HOME  ---
const HomeSection = ({ changePage }) => {
  return (
    <div className="space-y-24 pb-10">
      {/* ===========================
          1. HERO SECTION (Updated)
      ============================ */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 py-10 md:py-20">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 text-xs rounded-full text-blue-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-700 mr-2 animate-pulse"></span>
            Ready to work — January 2026
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ahmad Pijar
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">
            In this portfolio website, you can explore my training experience,
            digital skills, and readiness to start working in January 2026.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => changePage("about")}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition shadow-xl hover:-translate-y-1"
            >
              See My Profile
            </button>

            <button
              onClick={() => changePage("contact")}
              className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition hover:-translate-y-1"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side : Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm mx-auto rounded-2xl p-6 bg-gradient-to-tr from-slate-100 to-blue-50 border border-white shadow-xl">
            <div className="flex flex-col items-center gap-4">
              {/* Photo */}
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={me}
                  alt="Ahmad Pijar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-xl shadow p-4 text-center w-full">
                <div className="text-sm text-slate-600 font-mono">
                  Digital Office Administration • BBPVP
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Practical experience in document management & Google Workspace
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          2. DISCOVER SECTION (Updated)
      ================================ */}
      <section className="border-t border-slate-200 pt-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            What Will You Discover on This Portfolio?
          </h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto">
            A quick overview of my journey, the skills I’ve learned, and the
            work I’ve created during my digital training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Background */}
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <CircleUserRound className="text-cyan-700" />
            </div>
            <h3 className="font-bold mb-2">My Background</h3>
            <p className="text-sm text-slate-500">
              A brief look at who I am and where I come from.
            </p>
          </div>

          {/* Experience */}
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Route className="text-blue-700" />
            </div>
            <h3 className="font-bold mb-2">My Experience</h3>
            <p className="text-sm text-slate-500">
              The work and activities I’ve been involved in so far.
            </p>
          </div>

          {/* Skills */}
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-indigo-600" />
            </div>
            <h3 className="font-bold mb-2">My Skills</h3>
            <p className="text-sm text-slate-500">
              The abilities and tools I’m familiar with.
            </p>
          </div>

          {/* Projects */}
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <GitPullRequestCreate className="text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">My Projects</h3>
            <p className="text-sm text-slate-500">
              A showcase of the work I’ve created.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          3. STATS SECTION (Updated)
      ============================ */}
      <section className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Professional Highlights</h2>

          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            A quick look at my progress, learning journey, and readiness to
            begin my professional career.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <div className="text-4xl font-bold">6+</div>
              <p className="text-sm text-slate-400">Months of Training</p>
            </div>

            <div>
              <div className="text-4xl font-bold">10+</div>
              <p className="text-sm text-slate-400">Tools Learned</p>
            </div>

            <div>
              <div className="text-4xl font-bold">5+</div>
              <p className="text-sm text-slate-400">Projects & Assignments</p>
            </div>

            <div>
              <div className="text-4xl font-bold">2026</div>
              <p className="text-sm text-slate-400">Ready to Work</p>
            </div>
          </div>
        </div>

        {/* Background lights */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </div>
  );
};

// --- HALAMAN 2: ABOUT (Update Layout) ---
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
                className="w-full aspect-[4/5] object-cover rounded-xl"
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
            My goal is to start building my professional experience in 2025,
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
              <Download size={18} /> Download CV
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

// --- Sub-komponen About (Sama seperti sebelumnya) ---
const RoadmapTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const roadmapData = [
    {
      year: "2026 (Target)",
      title: "Ready for Full-Time Role",
      desc: "Target tahun mulai bekerja penuh waktu setelah menyelesaikan pelatihan dan membangun portofolio profesional.",
      details: [
        "Mempersiapkan dokumen kerja",
        "Menyempurnakan portofolio",
        "Aktif mencari peluang kerja",
      ],
      current: false,
      future: true,
    },
    {
      year: "Nov 2025 - Dec 2025",
      title: "Digital Office Administration Training",
      desc: "Pelatihan intensif Digital Office Administration (BBPVP). Meningkatkan kemampuan administrasi, manajemen dokumen, dan penguasaan aplikasi digital.",
      details: [
        "Administrasi perkantoran digital",
        "Google Workspace & Microsoft Office",
        "Project-based learning 2 bulan",
      ],
      current: true,
      future: false,
    },
    {
      year: "Octo 2025 - Octo 2025",
      title: "Operator Produksi",
      desc: "PT SINAR MASKING LESTARI - Bekasi",
      details: ["Assembly Part Barang", "Packing part", "Checking part"],
      current: false,
      future: false,
    },
    {
      year: "Sept 2025 - Sept 2025",
      title: "Barista",
      desc: "Bliss Social Space - Bekasi",
      details: [
        "Membuat Espresso",
        "Meracik minuman",
        "Melayani Customer",
        "Membantu Kasir",
      ],
      current: false,
      future: false,
    },
    {
      year: "Sept 2023 - Agst 2025",
      title: "Staff Gudang",
      desc: "PT CHARGEURS PCC INDONESIA - KBN, Jakarta",
      details: [
        "Checking incoming and outgoing goods",
        "Prepare outgoing goods using the FIFO system",
        "Receive and arrange the placement of incoming goods",
        "Stock takes",
      ],
      current: false,
      future: false,
    },
    {
      year: "June 2023 - July 2023",
      title: "Staff Toko Komputer",
      desc: "Virago Technicom - BCP mall, Bekasi",
      details: [
        "Melayani customer dan Melakukan Transaksi Penjualan",
        "Mendata Stock dan merapikan display barang",
        "Membuat Laporan Harian",
      ],
      current: false,
      future: false,
    },
    {
      year: "Sept 2022 - Feb 2023",
      title: "Logistics Operator",
      desc: "PT TOYOTA MOTOR MANUFACTURING INDONESIA - Sunter, Jakarta",
      details: [
        "Supply chain and distribution of goods",
        "Checking goods and using hand scanners",
        "Operating conveyors",
      ],
      current: false,
      future: false,
    },
  ];

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

const SkillsTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const skillsGroups = [
    {
      title: "Office & Administration",
      skills: [
        "Document Processing",
        "Scheduling & Coordination",
        "File & Folder Management",
        "Data Entry",
      ],
    },
    {
      title: "Digital Tools",
      skills: [
        "Google Workspace (Docs, Sheets, Drive, Gmail)",
        "Microsoft Office (Word, Excel)",
        "Canva",
        "Email Communication",
      ],
    },
    {
      title: "Web Basics",
      skills: [
        "HTML & CSS Basics",
        "Building simple web layouts",
        "Understanding responsive design",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Attention to Detail",
        "Communication",
        "Critical Thinking",
        "Adaptability",
      ],
    },
  ];

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
              className={`mt-3 overflow-hidden transition-all duration-300 ${
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

const CertificationsTab = () => (
  <div className="grid grid-cols-1 gap-4">
    {[
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      {
        name: "Google UX Design Professional",
        issuer: "Coursera",
        date: "2022",
      },
      { name: "Meta Frontend Developer", issuer: "Meta", date: "2022" },
    ].map((cert, idx) => (
      <div
        key={idx}
        className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
      >
        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
          <Award size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-sm">{cert.name}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span>{cert.issuer}</span>
            <span>•</span>
            <span>{cert.date}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- HALAMAN 3: PROJECTS (Tetap sama, hanya formatting) ---
const ProjectsSection = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web App",
      stack: "React, Recharts",
      desc: "Dashboard analitik keuangan dengan visualisasi data real-time.",
    },
    {
      title: "HealthCare Mobile",
      category: "Mobile",
      stack: "React Native",
      desc: "Aplikasi telemedisin untuk konsultasi dokter jarak jauh.",
    },
    {
      title: "E-Learning Platform",
      category: "Fullstack",
      stack: "Next.js, Supabase",
      desc: "LMS lengkap dengan fitur video streaming dan kuis interaktif.",
    },
    {
      title: "Corporate Landing",
      category: "Website",
      stack: "Tailwind, Astro",
      desc: "Website profil perusahaan energi dengan performa tinggi.",
    },
  ];

  return (
    <div>
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-500">
          Kumpulan studi kasus dimana saya menerapkan solusi teknis untuk
          masalah bisnis nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
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
                <button className="text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium">
                  Lihat Detail <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- HALAMAN 4: SERVICES ---
const ServicesSection = ({ changePage }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Layanan Profesional
        </h2>
        <p className="text-slate-500">
          Spesialisasi teknis yang saya tawarkan untuk membantu pertumbuhan
          bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <ServiceCard
          icon={<Globe size={28} />}
          title="Web Development"
          desc="Pembuatan website responsif dari Landing Page hingga Web Apps kompleks."
        />
        <ServiceCard
          icon={<Cpu size={28} />}
          title="System Architecture"
          desc="Merancang struktur database dan backend yang aman dan scalable."
          highlight={true}
        />
        <ServiceCard
          icon={<Terminal size={28} />}
          title="Tech Consultation"
          desc="Konsultasi transformasi digital, audit kode, dan optimasi performa."
        />
      </div>

      <div className="bg-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white md:w-2/3">
          <h3 className="text-2xl font-bold mb-2">Punya ide proyek?</h3>
          <p className="text-slate-400">
            Jangan ragu untuk berkonsultasi. Saya akan memberikan penawaran
            terbaik sesuai kebutuhan Anda.
          </p>
        </div>
        <button
          onClick={() => changePage("contact")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
        >
          Hubungi Saya
        </button>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, highlight }) => (
  <div
    className={`p-8 rounded-2xl border transition-all text-center h-full flex flex-col items-center
    ${
      highlight
        ? "bg-slate-900 border-slate-800 text-white transform md:-translate-y-4 shadow-xl"
        : "bg-white border-slate-200 text-slate-900 hover:border-blue-300"
    }
  `}
  >
    <div
      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
      ${highlight ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}
    `}
    >
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-3">{title}</h3>
    <p
      className={`text-sm leading-relaxed ${
        highlight ? "text-slate-300" : "text-slate-500"
      }`}
    >
      {desc}
    </p>
  </div>
);

// --- HALAMAN 5: CONTACT (Halaman Baru) ---
const ContactSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
        {/* Left Side: Info */}
        <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Mari Bicara.</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Apakah Anda tertarik dengan kolaborasi proyek, atau sekadar ingin
              bertanya tentang teknologi? Isi formulir di samping atau hubungi
              saya melalui platform ini.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    Email
                  </div>
                  <div className="text-sm font-medium">
                    alex.dev@example.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    LinkedIn
                  </div>
                  <div className="text-sm font-medium">
                    linkedin.com/in/alexdev
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    Lokasi
                  </div>
                  <div className="text-sm font-medium">
                    Jakarta Selatan, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Pesan
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Ceritakan tentang proyek Anda..."
              ></textarea>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              <Send size={18} /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Design;
