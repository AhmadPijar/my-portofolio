import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavbarContext } from "../../context/NavbarContext";

const Navbar = () => {
  const {
    isScroll,
    menuOpen,
    setMenuOpen,
    menuRef,
    hamburgerRef,
    toggleHamburger,
  } = useContext(NavbarContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  ${
        isScroll ? "navbar-scroll" : ""
      }`}
    >
      <div className="container relative flex items-center justify-between mx-auto px-10 py-4">
        <a href="" className="font-bold text-lg text-primary ">
          Ahmad Pijar Maulana
        </a>

        {/* Hamburger menu -- hidden saat display lg */}
        <button
          ref={hamburgerRef}
          onClick={toggleHamburger}
          className={`lg:hidden space-y-2 hamburger ${
            menuOpen ? "hamburger-active" : ""
          } `}
        >
          <span className="my-hamburger-line transition origin-top-left duration-300 ease-in"></span>
          <span className="my-hamburger-line transition delay-300 ease-in"></span>
          <span className="my-hamburger-line transition origin-bottom-left duration-300 ease-in"></span>
        </button>

        {/* NavBar -- hidden saat display sm & md*/}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="#home"
            className="text-base text-head dark:text-white font-medium hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-head dark:text-white font-medium hover:text-primary"
          >
            About
          </a>
          <a
            href="#project"
            className="text-base text-head dark:text-white font-medium hover:text-primary"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-base text-head dark:text-white font-medium hover:text-primary"
          >
            Contact
          </a>

          {/* Theme selector on lg*/}
          <div className="hidden lg:block ">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="text-center text-base font-semibold px-1 cursor-pointer focus:outline-none dark:text-gray-100 bg-slate-200/90 shadow-md shadow-gray-500/20 inset-ring-0.5 inset-ring-gray-500 rounded-lg dark:bg-gray-700 "
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
        </nav>
      </div>

      {/* sidenav -- only on sm and md*/}
      <div
        ref={menuRef}
        className={`absolute top-full right-4 w-64 px-2 py-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-80"
        } bg-white rounded-xl shadow-md dark:bg-slate-800 dark:shadow-gray-60 transition-transform duration-300 lg:hidden`}
      >
        <nav className="flex flex-col space-y-6 px-2 ">
          {/* Theme selector only inside sidenav*/}
          <div className="lg:hidden block">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full text-center text-base font-semibold px-1 cursor-pointer focus:outline-none dark:text-gray-100 bg-slate-200/90 shadow-md shadow-gray-600/20 inset-ring-0.5 inset-ring-gray-500 rounded-lg dark:bg-gray-700 "
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
          <div className="flex flex-col space-y-6 px-5">
            <a
              href="#home"
              className="text-base text-head dark:text-white font-medium hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-head dark:text-white font-medium hover:text-primary"
            >
              About
            </a>
            <a
              href="#project"
              className="text-base text-head dark:text-white font-medium hover:text-primary"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-base text-head dark:text-white font-medium hover:text-primary"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
