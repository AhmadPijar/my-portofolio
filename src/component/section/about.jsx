import React, { useEffect, useRef, useState } from "react";
import {
  aboutSkill,
  aboutProject,
  aboutSkillPopover,
  aboutProjectPopover,
} from "../data/aboutData";
import { UseClickOutside } from "../../hook/UseClickOutside";

const About = () => {
  const [isOpen, setIsOpen] = useState({ type: null, id: null });
  const popoverRef = useRef(false);

  useEffect(() => {
    if (isOpen.type !== null && isOpen.id !== null) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  UseClickOutside(popoverRef, (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen({ type: null, id: null });
    }
  });

  return (
    <section
      id="about"
      className="about w-full flex flex-col gap-4 items-center justify-center px-6 py-15
      bg-gray-200 relative my-pseudo-before pseudo-top my-pseudo-after pseudo-bottom min-h-[30rem] dark:bg-gray-800"
    >
      <div className="header-section">
        <h2 className="my-heading">About Me</h2>
        <div className="my-line-heading"></div>
        <p className="my-info md:w-[43rem]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of technology
        </p>
      </div>
      <div className="flex flex-col gap-9 items-start justify-center md:flex-row">
        <div className="about-left w-full h-full md:w-1/2">
          <h3 className="my-heading-2">Get to know me</h3>
          <p className="my-info text-justify px-3 md:px-5">
            I’m Ahmad Pijar Maulana, a motivated and adaptable individual with
            experience in warehouse operations and logistics. I am currently
            seeking opportunities that align with my skills and interests.{" "}
            <br /> Dedicated to continuous learning, I have earned an English
            certification and actively develop projects across different fields.
            My skill set includes logistics, programming, Microsoft Office,
            Google Workspace, and English proficiency, and I continue to expand
            this skill set through ongoing learning and practical experience. To
            demonstrate my abilities, I’ve built various projects, including
            this portfolio website using React and Tailwind CSS, as well as an
            Inventory Management App using VBA Excel — all of which you can
            explore here.
          </p>
          <button className="my-button">
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <div className="about-right w-full h-full md:w-1/2">
          <h3 className="my-heading-2">Skills and Project</h3>
          <div className="px-3 md:px-5 ">
            <div className="skill-set space-x-2 space-y-2 ">
              <p className="text-head text-xl leading-relaxed font-semibold">
                My Skills
              </p>
              {aboutSkill.map((skill) => (
                <button
                  onClick={() => {
                    setIsOpen({ type: "skill", id: skill.id });
                  }}
                  key={skill.id}
                  className="my-button-skill cursor-pointer"
                >
                  {skill.title}
                </button>
              ))}
            </div>
            <div className="project-set space-x-2 space-y-2 0">
              <p className="text-head text-xl leading-relaxed font-semibold">
                My Projects
              </p>
              {aboutProject.map((project) => (
                <button
                  onClick={() => {
                    setIsOpen({ type: "project", id: project.id });
                  }}
                  key={project.id}
                  className="my-button-skill cursor-pointer"
                >
                  {project.title}
                </button>
              ))}
            </div>
            {aboutSkillPopover.map((popover) =>
              isOpen.type === "skill" && isOpen.id === popover.id ? (
                <div className="filter fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-black/50 z-50">
                  <div
                    ref={popoverRef}
                    key={popover.id}
                    class={`w-[94%] md:w-1/2 max-h-1/2 fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transform rounded-lg  bg-white px-4 pt-5 pb-4 text-left shadow-xl inset-ring-1 inset-ring-slate-400 overflow-y-auto dark:bg-gray-900 transition duration-300 relative${
                      popover.id
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 pointer-events-none"
                    }
               `}
                  >
                    <div className="text-justify">
                      <h5 className="text-xl text-center text-head font-semibold dark:text-gray-50">
                        {popover.title}
                      </h5>
                      <div className="mt-5 space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-200">
                          {popover.description}
                        </p>
                        <a
                          href="https://cert.efset.org/en/XxHmUK"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          <img
                            src={popover.image}
                            alt=""
                            className="mt-5 border border-gray-300 shadow-2xl"
                          />
                        </a>
                        <div>
                          <h6 className="text-base text-head ">
                            {popover.sub1}
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-200">
                            {popover.sub1_description}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-base text-head ">
                            {popover.sub2}
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-200">
                            {popover.sub2_description}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-base text-head ">
                            {popover.sub3}
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-200">
                            {popover.sub3_description}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-base text-head ">
                            {popover.sub4}
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-200">
                            {popover.sub4_description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsOpen({ type: null, id: null })}
                        className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded-bl-lg cursor-pointer"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
            {aboutProjectPopover.map((popover) =>
              isOpen.type === "project" && isOpen.id === popover.id ? (
                <div className="filter fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-black/50 z-50">
                  <div
                    ref={popoverRef}
                    key={popover.id}
                    class={`w-1/2 fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-52%] transform overflow-hidden rounded-lg  bg-white px-4 pt-5 pb-4 text-left shadow-xl inset-ring-1 inset-ring-slate-400 overflow-y-auto dark:bg-gray-900 transition duration-300 z-10 relative${
                      popover.id
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 pointer-events-none"
                    }
               `}
                  >
                    <div className="text-justify">
                      <h5 className="text-xl text-center text-head font-semibold dark:text-gray-50">
                        {popover.title}
                      </h5>
                      <div className="mt-5 space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-200">
                          {popover.description}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsOpen({ type: null, id: null })}
                        className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded-bl-lg cursor-pointer"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
