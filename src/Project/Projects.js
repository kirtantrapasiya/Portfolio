import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectData from "./ProjectData";
import Button from "../Button/Button";
import FadeSlide from "../components/FadeSlide";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const firstThreeProjects = ProjectData.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <FadeSlide delay={0.2} direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            <span className="text-yellow-500">My </span>Projects
          </h2>
        </FadeSlide>
        <FadeSlide delay={0.4} direction="up">
          <Button onView={setViewAll} sectionName="Projects" />
        </FadeSlide>
      </div>

      <FadeSlide delay={0.6} direction="up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(viewAll ? ProjectData : firstThreeProjects).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      </FadeSlide>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
