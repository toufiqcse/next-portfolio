import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import {useTheme} from 'next-themes'
import { GoLocation } from "react-icons/go";
const PDF_FILE_URL = "resume.pdf"
const Sidebar = () => {

  const {theme, setTheme} = useTheme()
  const changeTheme =() => {
    setTheme(theme === 'light'? "dark": "light")
  }
  // handle resume download
  const handleDownload =(url: any) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

  return (
    <div>
      <img
        src="profile.jpg"
        alt="profile image"
        className="w-[8rem] h-[8rem] rounded-full mx-auto"
      />
      <div className="my-[1em] ">
        <p className="text-[1.875rem] tracking-wider font-semibold font-kaushan">
          <span className="text-green">Toufiqul </span>
          <span>Isalm</span>
        </p>

        <p className="px-[0.5em] py-[0.25em] my-[0.75em] bg-gray-200 dark:bg-dark-200 rounded-full">
          Frontend Web Developer
        </p>
        {/* download resume */}
        <button
         className="flex w-full focus:outline-none focus:text-white focus:bg-green items-center justify-center px-[0.5em] py-[0.25em] my-[0.75em] bg-gray-200 dark:bg-dark-200 rounded-full"
         onClick={() => handleDownload(PDF_FILE_URL)}
        >
          {" "}
          <GiTie className="w-[1.5rem] h-[1.5rem]" /> Download Resume
        </button>
      </div>
      {/* social icon */}
      <div className="flex justify-around my-[1.25em] text-green md:w-full w-9/12 ">
        <Link href="https://github.com/toufiq70/">
          {" "}
          <AiFillGithub className="w-6 h-6" />{" "}
        </Link>
        <Link href="https://www.linkedin.com/in/toufiqul-isalm-b7a298247/">
          {" "}
          <AiFillLinkedin className="w-6 h-6" />{" "}
        </Link>
        <Link href="https://www.instagram.com/bdtoufiqtech/">
          {" "}
          <AiFillInstagram className="w-6 h-6" />{" "}
        </Link>
        <Link href="https://web.facebook.com/toufiqreact/">
          {" "}
          <AiFillFacebook className="w-6 h-6" />{" "}
        </Link>
      </div>
      {/* address */}
      <div
        className="py-[1em] my-[1.25em] bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1em", marginRight: "-1em" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span className="">Rajshahi, Dhaka, Bangladesh</span>
        </div>
        <p className="my-[0.5em] ">bdtoufiqtech@gmail.com</p>
        <p className="my-[0.5em]">+8801893-976533</p>
        {/* button */}
      </div>
      {/* email button */}
      <button
        className="bg-gradient-to-r from-green to-blue-400  w-8/12 py-[0.5em] px-[1.25em] rounded-full text-white my-[0.5em] outline-none "
        onClick={() => window.open("mailto:bdtoufiqtech@gmail.com")}
      >
        Email Me
      </button>
      {/* theme change button */}
      <button onClick={changeTheme} className="bg-gradient-to-r from-green to-blue-400 w-8/12 py-[0.5em] px-[0.5em] rounded-full text-white my-[0.5em] outline-none ">
        Theme
      </button>
    </div>
  );
};

export default Sidebar;
