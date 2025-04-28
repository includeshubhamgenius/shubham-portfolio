import { content } from "../Content";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section id="projects" className="bg-white py-20">
      <div className="md:container px-5 min-h-screen flex flex-col justify-between">
        {/* Section Title */}
        <div>
          <h2 className="text-5xl font-bold  text-center " >
            {Projects.title}
          </h2>
          
        </div>

        {/* Swiper */}
        <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000, // 3 seconds
              disableOnInteraction: false, // user can still swipe manually
            }}
            data-aos="fade-left"
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16 max-w-lg drop-shadow-primary self-start" // increased size
          >
          {Projects.project_content.map((project, i) => (
            <SwiperSlide
              key={i}
              className=" bg-opacity-80 bg-white backdrop-blur-md rounded-3xl p-8 border-b-8 border-[#FAF9FD] h-fit flex items-center flex-col gap-5"
              
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover w-full h-48"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm">{project.description || "Project description here..."}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;




//old code....................................................................


/*
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
         
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
*/

