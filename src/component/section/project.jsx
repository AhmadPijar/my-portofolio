import React from "react";
import contentData from "../data/projectData";

const Project = () => {
  return (
    <section
      id="project"
      className="project w-full min-h-screen flex flex-col gap-4 items-center justify-center px-6 py-20 my-5 relative"
    >
      <div className="header-section">
        <h2 className="my-heading">My projects</h2>
        <div className="my-line-heading"></div>
        <p className="my-info md:w-[43rem]">
          Here you will find some of my personal projects that I created
        </p>
      </div>
      <div className="flex flex-col gap-9 items-start justify-center pb-15 relative">
        {contentData.map((content) => (
          <div
            key={content.id}
            className="content sticky top-20 flex items-start md:h-screen"
          >
            <div className="w-full flex flex-col md:gap-4 overflow-hidden bg-white shadow-lg rounded-lg md:flex-row border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
              {/* image section */}
              <div className="w-full md:w-2/3">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover md:rounded-l-lg"
                />
              </div>

              {/* info section */}
              <div className="w-full md:w-1/3 flex flex-col justify-center py-5 px-2">
                <h3 className="my-heading-2">{content.title}</h3>
                <p className="my-info text-justify mb-4 px-5">
                  {content.description}
                </p>
                <button className="my-button">
                  <a
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.buttonTitle}
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
