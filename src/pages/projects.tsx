import React, { FunctionComponent, useEffect, useState } from "react";
import { projectsData } from "../../data";
import ProjectsCard from "./ProjectsCard";
import ProjectNavbar from "./components/ProjectNavbar";
import { Category } from "../../types";
import { useDispatch, useSelector } from "react-redux";
const Projects: FunctionComponent = () => {
  const projectsInfo = useSelector((state: any) => state.projects);
  console.log(projectsInfo);

  const [projects, setProjects] = useState(projectsInfo);
  const [active, setActive] = useState("all");
  const [loadingText, setLoadingText] = useState("");

  const handleFilterCategory = async (category: Category | "all") => {
    try {
      showLoaderText();
      if (category === "all") {
        setProjects(projectsInfo);
        setActive(category);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newArray = projectsInfo.filter((project: any) =>
          project.category.includes(category)
        );
        // Hide loader text and set filtered projects
        hideLoaderText();
        setProjects(newArray);
        setActive(category);
      }
    } catch (error) {
      // console.error("Error filtering projects:", error);
    }
  };
  const showLoaderText = () => {
    setLoadingText("Loading..."); // Replace this with your actual loader text
  };
  const hideLoaderText = () => {
    setLoadingText(""); // Replace this with your actual mechanism for hiding the loader text
  };

  return (
    <div className="px-[0.5em] py-[0.5em]  ">
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <div className="grid grid-cols-12 gap-[1rem] my-[0.5em]   p-[0.5em] overflow-y-scroll">
        {projects.map((project: any) => (
          <div
            key={project.name}
            className="col-span-12 sm:col-span-6 lg:col-span-4 h-[280px]  bg-gray-200 dark:bg-dark-200 rounded-lg"
          >
            <ProjectsCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
