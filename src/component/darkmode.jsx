import React, { useEffect, useRef, useContext } from "react";
import videoBg from "../assets/video-bg.mp4";
import { ThemeContext } from "../context/ThemeContext"; // 🔥 Import Context

const DarkMode = () => {
  const { theme } = useContext(ThemeContext); // 🔥 Gunakan theme dari Context
  const lightMode = useRef(null);
  const darkMode = useRef(null);

  useEffect(() => {
    if (lightMode.current && darkMode.current) {
      if (theme === "dark") {
        lightMode.current?.classList.add("hidden");
        darkMode.current?.classList.remove("hidden");
      } else {
        lightMode.current?.classList.remove("hidden");
        darkMode.current?.classList.add("hidden");
      }
    }
  }, [theme]);

  return (
    <>
      {/* 🔹 Background untuk Light Mode (Awalnya TIDAK tersembunyi) */}
      <div ref={lightMode} className="light-theme"></div>

      {/* 🔹 Video untuk Dark Mode (Awalnya Tersembunyi) */}
      <video
        autoPlay
        muted
        loop
        preload="true"
        ref={darkMode}
        className="dark-theme hidden"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </>
  );
};

export default DarkMode;
