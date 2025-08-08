import React, { useContext } from "react";
import socialImage1 from "../../assets/github-dark.svg";
import socialImage2 from "../../assets/linkedin-dark.svg";
import socialImage3 from "../../assets/whatsapp-dark.svg";

const Home = () => {
  return (
    <section
      id="home"
      className={`home w-full min-h-screen flex items-center justify-center relative`}
    >
      <div className="flex flex-col flex-wrap items-center justify-center w-full px-3 md:text-center">
        <h1 className="my-hero-heading">Ahmad Pijar Maulana</h1>
        <p className="text-info dark:text-gray-300 self-start mb-10 md:self-center md:text-xl">
          Front-end Web Developer
        </p>
        <p className="my-info text-justify md:text-center md:w-[43rem]">
          In this website you will find what i can do as a web developer,
          Checkout my project website if you want to see more interesthing
          websites that i already made.
        </p>
        <a href="" className="my-button my-4 rounded-md ">
          Projects
        </a>
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
