import React, { useState } from "react";
import { projectsData } from "../../data";
import ProjectsCard from "./ProjectsCard";
import ProjectNavbar from "./components/ProjectNavbar";
import { Category } from "../../types";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [upComing, setUpComing] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    } 

    else {
      const newArray = projectsData.filter((projects) =>
        projects.category.includes(category)
      );
      setProjects(newArray);
      setActive(category);
    }
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectNavbar handleFilterCategory={handleFilterCategory} active={active} />

      <div className="grid grid-cols-12 gap-4 my-2 relative p-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 sm:col-span-6 lg:col-span-4  bg-gray-200 dark:bg-dark-200 rounded-lg"
          >
            <ProjectsCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
