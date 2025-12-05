import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { Navbar, Footer } from "./newComponent";

// Pages/Sections
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "./newSection";
import { NavbarProvider } from "./newContext";

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter basename="/my-portofolio">
        <Navbar />

        <main className="pt-24 px-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
