import { useContext } from "react";
import { NavbarContext } from "../newContext";
import { useNavigate } from "react-router-dom";
import me from "../assets/Me.jpg";
import {
  CircleUserRound,
  Route,
  Code,
  GitPullRequestCreate,
} from "lucide-react";

const HomeSection = () => {
  const navigate = useNavigate();

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
            Ready to work
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ahmad Pijar Maulana
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">
            I am an administrative and back-office support candidate with
            experience in data entry, document management, and digital office
            tools. This portfolio showcases my administrative projects,
            documents, and digital work to support office operations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold shadow-md hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              See My Profile
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold shadow-md hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
                  Ahmad Pijar Maulana
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  currently completed the Digital Office Administration training
                  program at BBPVP Bekasi.
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
          <a href="https://ahmadpijar.github.io/my-portofolio/#/about">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <CircleUserRound className="text-cyan-700" />
              </div>
              <h3 className="font-bold mb-2">My Background</h3>
              <p className="text-sm text-slate-500">
                A brief look at who I am and where I come from.
              </p>
            </div>
          </a>

          {/* Experience */}
          <a href="https://ahmadpijar.github.io/my-portofolio/#/about">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Route className="text-blue-700" />
              </div>
              <h3 className="font-bold mb-2">My Experience</h3>
              <p className="text-sm text-slate-500">
                The work and activities I’ve been involved in so far.
              </p>
            </div>
          </a>

          {/* Skills */}
          <a href="https://ahmadpijar.github.io/my-portofolio/#/about">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-indigo-600" />
              </div>
              <h3 className="font-bold mb-2">My Skills</h3>
              <p className="text-sm text-slate-500">
                The abilities and tools I’m familiar with.
              </p>
            </div>
          </a>

          {/* Projects */}
          <a href="https://ahmadpijar.github.io/my-portofolio/#/projects">
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <GitPullRequestCreate className="text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">My Projects</h3>
              <p className="text-sm text-slate-500">
                A showcase of the work I’ve created.
              </p>
            </div>
          </a>
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
              <div className="text-4xl font-bold">3+</div>
              <p className="text-sm text-slate-400">Year of work experience</p>
            </div>

            <div>
              <div className="text-4xl font-bold">5+</div>
              <p className="text-sm text-slate-400">Digital tool Skills</p>
            </div>

            <div>
              <div className="text-4xl font-bold">3</div>
              <p className="text-sm text-slate-400">Personal Projects</p>
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

export default HomeSection;
