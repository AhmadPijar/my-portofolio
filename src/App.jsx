import React from "react";
import Navbar from "./component/section/navbar";
import NavbarProvider from "./context/NavbarContext";
import DarkMode from "./component/DarkMode";
import ThemeProvider from "./context/ThemeContext";
import Home from "./component/section/home";
import About from "./component/section/about";
import Project from "./component/section/project";
import Contact from "./component/section/contact";
import Footer from "./component/section/footer";
import ErrorBoundary from "./component/errorBoundary";
import Design from "./component/design";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NavbarProvider>
          <Navbar />
          <DarkMode />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />
        </NavbarProvider>
      </ThemeProvider>
    </ErrorBoundary>
    // <Design />
  );
};

export default App;
