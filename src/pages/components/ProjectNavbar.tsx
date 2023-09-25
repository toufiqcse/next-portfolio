import React, { FunctionComponent, useState } from "react";
import { Category } from "../../../types";
import Modal from "./Modal";
const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let activeText = "hover:text-red-800 cursor-pointer capitalize duration-300";
  let backgroundColor = "bg-green-500";

  if (active === value) {
    activeText += " text-green";
    backgroundColor = "bg-red-500"; // Set the background color when selected
  }

  return (
    <li
      className={`${activeText} ${backgroundColor} px-2 rounded-sm text-white cursor-pointer transition-all duration-500`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuAndShowContent = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="lg:flex hidden list-none space-x-3 ">
        {/* Your desktop navigation items */}
        <NavItem value="all" {...props} />
        <NavItem value="react" {...props} />
        <NavItem value="next" {...props} />
        <NavItem value="redux" {...props} />
        <NavItem value="typeScript" {...props} />
        <NavItem value="email template" {...props} />
        <NavItem value="lead generation" {...props} />
      </div>

      <div className="lg:hidden ">
        {/* Hamburger menu icon */}
        <div className="sticky top-0 bg-white z-50">
          <button onClick={toggleMenu}>
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Responsive menu */}
        {showMenu && (
          <div className="flex flex-col list-none px-4 py-2 space-y-2 transition-all duration-500">
            {/* Your responsive navigation items */}
            <NavItem onClick={closeMenuAndShowContent} value="all" {...props} />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="react"
              {...props}
            />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="next"
              {...props}
            />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="redux"
              {...props}
            />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="typeScript"
              {...props}
            />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="email template"
              {...props}
            />
            <NavItem
              onClick={closeMenuAndShowContent}
              value="lead generation"
              {...props}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default ProjectNavbar;
