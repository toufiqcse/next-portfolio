/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, useState } from "react";
import { IProjects } from "../../types";
import Link from "next/link";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const ProjectsCard: FunctionComponent<{
  project: IProjects;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <img
      
        src={image_path}
        alt={name}
        className="cursor-pointer rounded-sm"
        width='300'
        height="150"
       
        onClick={() => setShowDetails(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {/* for details option   */}
      {showDetails && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2">
          <div>
            <img
            width='300'
            height="150"
            
            src={image_path} alt={name} />

            <div className="flex justify-center space-x-3 my-2">
              <Link
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </Link>
              <Link
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Projects</span>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl ">{name}</h2>
            <h3 className="mb-3 font-medium text-justify pr-6">
              {description}
            </h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider ">
              {key_techs.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <IoMdClose size={30}></IoMdClose>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
