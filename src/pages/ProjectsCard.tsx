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
      <Image
      
        src={image_path}
        alt={name}
        className="cursor-pointer rounded-sm"
        width={300}
        height={150}
       priority
        onClick={() => setShowDetails(true)}
      />
      <p className="my-[0.5em] text-center">{name}</p>

      {/* for details option   */}
      {showDetails && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2">
          <div>
            <Image
            src={image_path}
            alt={name} 
            width={300}
            height={150}
          priority
          
            />
            

            <div className="flex justify-center space-x-3 my-[0.5em]">
              <Link
                href={github_url}
                className="flex items-center px-[1em] py-[0.5em] space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </Link>
              <Link
                href={deployed_url}
                className="flex items-center px-[1em] py-[0.5em] space-x-3 text-[1.25rem] bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Projects</span>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div>
            <h2 className="mb-[0.75em] text-[1.25rem] font-medium  ">{name}</h2>
            <h3 className="mb-[0.75em] font-medium text-justify pr-[1.5em]">
              {description}
            </h3>
            <div className="flex flex-wrap mt-[1.25em] space-x-2 text-[0.875rem] tracking-wider ">
              {key_techs.map((tech) => (
                <span
                  className="px-[0.5em] py-[0.25em] my-[0.25em] bg-gray-200 dark:bg-dark-200 rounded-sm"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="absolute p-[0.25em] rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <IoMdClose size={30}></IoMdClose>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
