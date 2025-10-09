import React, { useContext } from "react";
import socialImage1 from "../../assets/github-dark.svg";
import socialImage2 from "../../assets/linkedin-dark.svg";
import socialImage3 from "../../assets/whatsapp-dark.svg";
import CV from "../../../public/CV_Ahmad_Pijar_Maulana.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className={`home w-full min-h-screen flex items-center justify-center relative`}
    >
      <div className="flex flex-col flex-wrap items-center justify-center w-[50rem] px-3">
        <h1 className="my-hero-heading">Ahmad Pijar Maulana</h1>
        <p className="text-info dark:text-gray-300 self-start mb-15 md:self-center md:text-xl">
          Job Seeker
        </p>
        <p className="my-info text-justify">
          Welcome to my portfolio! Here, you'll discover examples of my work,
          including projects and certifications. I’m passionate about continuous
          learning and growth, so this space will regularly feature new
          creations and achievements. Feel free to explore and get to know more
          about my journey and capabilities.
        </p>
        <div className="w-full flex flex-row space-x-4 my-info">
          <a href="#project" className="my-button rounded-md">
            See my Project
          </a>
          <h1>or</h1>
          <a
            href="https://drive.google.com/file/d/1O_nE2o03LsG9_EYpk9hIDTtW9efspyWU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="my-button rounded-md"
          >
            Download my CV
          </a>
        </div>
      </div>
      <div className="social absolute top-[50%] left-0 translate-y-[-50%] bg-white dark:bg-gray-700 shadow-xl inset-ring-1 inset-ring-gray-400 dark:inset-ring-gray-600 rounded-md py-2 px-1 hidden md:block">
        <div className="flex flex-col items-center justify-center w-[2.7rem]">
          <a
            href="https://github.com/AhmadPijar/"
            target="_blank"
            className="block w-full rounded-full p-1 my-2"
          >
            <img src={socialImage1} alt="" srcset="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-pijar-maulana-49a385279/"
            target="_blank"
            className="block w-full rounded-full p-1 my-2"
          >
            <img src={socialImage2} alt="" srcset="" />
          </a>
          <a
            href="https://wa.me/+62895618969922"
            target="_blank"
            className="block w-full rounded-full p-1 my-2"
          >
            <img src={socialImage3} alt="" srcset="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
