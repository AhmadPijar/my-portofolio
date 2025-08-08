import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col items-center bg-slate-800 px-3 py-5 dark:border-t-3 dark:border-gray-600"
    >
      <div className="w-80 text-center p-3 font-light flex justify-around lg:text-lg">
        <a href="#home" className="text-white hover:text-violet-500">
          Home
        </a>
        <a href="#about" className="text-white hover:text-violet-500">
          About
        </a>
        <a href="#project" className="text-white hover:text-violet-500">
          Projects
        </a>
        <a href="contact.html" className="text-white hover:text-violet-500">
          Contact me
        </a>
      </div>
      <div className="bg-white w-2/4 h-0.5 md:w-2/10 md:-mt-1 md:mb-2"></div>
      <div className="text-center p-3 font-light">
        <p className="text-white leading-relaxed">
          &copy; Copyright{" "}
          {new Date().toLocaleString("id-ID", { month: "long" })}{" "}
          {new Date().getFullYear()} Made by Ahmad Pijar Maulana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
