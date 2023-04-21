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
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="my-4  ">
        <p className="text-3xl tracking-wider font-semibold font-kaushan">
          <span className="text-green">Toufiqul </span>
          <span>Isalm</span>
        </p>

        <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
          Frontend Web Developer
        </p>
        {/* download resume */}
        <button
         className="flex w-full focus:outline-none focus:text-white focus:bg-green items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full"
         onClick={() => handleDownload(PDF_FILE_URL)}
        >
          {" "}
          <GiTie className="w-6 h-6" /> Download Resume
        </button>
      </div>
      {/* social icon */}
      <div className="flex justify-around my-5 text-green md:w-full w-9/12 ">
        <Link href="">
          {" "}
          <AiFillGithub className="w-6 h-6" />{" "}
        </Link>
        <Link href="">
          {" "}
          <AiFillLinkedin className="w-6 h-6" />{" "}
        </Link>
        <Link href="">
          {" "}
          <AiFillInstagram className="w-6 h-6" />{" "}
        </Link>
        <Link href="">
          {" "}
          <AiFillFacebook className="w-6 h-6" />{" "}
        </Link>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span className="">Rajshahi, Dhaka, Bangladesh</span>
        </div>
        <p className="my-2 ">bdtoufiqtech@gmail.com</p>
        <p className="my-2">+8801893-976533</p>
        {/* button */}
      </div>
      {/* email button */}
      <button
        className="bg-gradient-to-r from-green to-blue-400  w-8/12 py-2 px-5 rounded-full text-white my-2 outline-none "
        onClick={() => window.open("mailto:bdtoufiqtech@gmail.com")}
      >
        Email Me
      </button>
      {/* theme change button */}
      <button onClick={changeTheme} className="bg-gradient-to-r from-green to-blue-400 w-8/12 py-2 px-5 rounded-full text-white my-2 outline-none ">
        Theme
      </button>
    </div>
  );
};

export default Sidebar;
