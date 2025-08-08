import React, { useRef, useState } from "react";
import { aboutSkill, aboutSkillPopover } from "../data/aboutData";
import { UseClickOutside } from "../../hook/UseClickOutside";

const About = () => {
  const [isOpen, setIsOpen] = useState(null);
  const popoverRef = useRef(null);

  UseClickOutside(popoverRef, (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
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
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="flex flex-col gap-9 items-start justify-center md:flex-row">
        <div className="w-full h-full md:w-1/2">
          <h3 className="my-heading-2">Get to know me</h3>
          <p className="my-info text-justify px-3 md:px-5">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I'm open to Job opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="my-button">
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <div className="w-full h-full md:w-1/2">
          <h3 className="my-heading-2">Tools and Framework</h3>
          <div className="skills space-x-2 space-y-2 px-3 md:px-5">
            {aboutSkill.map((skill) => (
              <button
                onClick={() => {
                  setIsOpen(skill.id);
                }}
                key={skill.id}
                className="my-button-skill cursor-pointer"
              >
                {skill.title}
              </button>
            ))}
            {aboutSkillPopover.map((popover) =>
              isOpen === popover.id ? (
                <div
                  ref={popoverRef}
                  key={popover.id}
                  class={`w-[22rem] fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-52%] transform overflow-hidden rounded-lg  bg-white px-4 pt-5 pb-4 text-left shadow-xl inset-ring-1 inset-ring-slate-400 dark:bg-gray-900 transition duration-300 z-10 relative${
                    isOpen === popover.id
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 pointer-events-none"
                  }
               `}
                >
                  <div class="text-justify">
                    <h5 class="text-center dark:text-gray-50">
                      {popover.title}
                    </h5>
                    <div class="mt-5">
                      <p class="text-sm text-gray-500 dark:text-gray-200">
                        {popover.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsOpen(null)}
                      className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white rounded-bl-lg cursor-pointer"
                    >
                      X
                    </button>
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
