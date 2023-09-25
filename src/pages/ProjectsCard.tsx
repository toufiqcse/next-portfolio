/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, lazy, useState } from "react";
import { Category, IProjects } from "../../types";
import Link from "next/link";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ProjectNavbar from "./components/ProjectNavbar";
import { useSelector } from "react-redux";

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
  const Modal: FunctionComponent<{ isOpen: any; onClose: any }> = ({
    isOpen,
    onClose,
  }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white w-full max-w-2xl p-1 rounded-lg shadow-lg z-40">
              <div className="flex justify-end">
                <button
                  className="text-red-600 hover:text-red-800 "
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-1">
                {/* content */}
                <div className="flex justify-start md:flex-row flex-col items-center gap-x-4 text-black bg-green dark:text-white dark:bg-dark-100 xs:p-[0.5px]">
                  <div
                    style={{
                      height: "280px",
                    }}
                  >
                    <Image
                      src={image_path}
                      alt={name}
                      className="mx-auto"
                      width={280}
                      height={150}
                      priority={true}
                      style={{
                        objectFit: "cover",
                        height: "280px",
                      }}
                    />
                    <div className="flex justify-center space-x-2 xs:space-x-1 my-[0.5em]">
                      <Link
                        href={github_url}
                        className="flex items-center px-[1em] py-[0.5em] space-x-3 xs:space-x-1  xs:text-[0.9rem] bg-gray-200 dark:bg-dark-200"
                      >
                        <AiFillGithub />
                        <span>Github</span>
                      </Link>
                      <Link
                        href={deployed_url}
                        className="flex items-center px-[1em] py-[0.5em] space-x-3 xs:space-x-1  xs:text-[0.9rem] bg-gray-200 dark:bg-dark-200"
                      >
                        <AiFillProject />
                        <span>Projects</span>
                      </Link>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="pl-2 md:pl-0">
                    <h2 className="mb-[0.75em] text-[1.25rem] font-medium  ">
                      {name}
                    </h2>
                    <h3 className="mb-[0.75em] font-medium text-justify pr-[1.5em] xs:pr-[0.5em]">
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
                    onClick={closeModal}
                    className="absolute p-[0.25em] rounded-full top-[-30px] right-3 focus:outline-none dark:bg-dark-200"
                  >
                    <IoMdClose size={30} color="red"></IoMdClose>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        height: "280px",
      }}
      className=""
    >
      <div className="flex justify-center items-center gap-2 ">
        <button className=" font-bold  rounded" onClick={openModal}>
          <Image
            src={image_path}
            alt={name}
            className="cursor-pointer rounded-sm py-2 mx-auto"
            width={300}
            height={240}
            priority={true}
            onClick={openModal}
            style={{
              objectFit: "cover",
              height: "240px",
              width: "auto",
            }}
          />
          <p className="my-[0.5em] text-center">{name}</p>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <></>
    </div>
  );
};

export default ProjectsCard;
