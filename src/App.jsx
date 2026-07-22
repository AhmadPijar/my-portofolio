import { HashRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './newComponent';
import { HomeSection, AboutSection, ProjectsSection, ContactSection } from './newSection';
import { NavbarProvider } from './newContext';

function App() {
  return (
    <NavbarProvider>
      <HashRouter>
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </NavbarProvider>
  );
}

export default App;
