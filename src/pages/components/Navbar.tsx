import React, { useState,useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const NavItem: FunctionComponent <{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
   }> =( {activeItem,name,route, setActiveItem}) => {
       return(
           activeItem !== name ? (
               <Link href={route}>
              
                   <span className="hover:text-green" onClick={() => setActiveItem(name)}>{name}
                   </span>
               
               </Link>
             ): null
       )
   }


const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>(""); // generics use here

 let router = useRouter()
//   console.log(router);
  

useEffect(() => {
    if (router.asPath === "/") setActiveItem('About')
    if (router.asPath === "/projects") setActiveItem('Projects')
    if (router.asPath === "/resume") setActiveItem('Resume')
   
},[])

// nav item TS



  return (
    <div className="flex justify-between px-5 my-1 py-2 ">
      <span className="text-green font-semibold text-2xl border-b-4 border-green  ">{activeItem}</span>
      <div className=" flex space-x-2">
       <NavItem 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="About"
        route="/"
       />
       
       <NavItem 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="Projects"
        route="/projects"
       />
       
       <NavItem 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="Resume"
        route="/resume"
       />
       <NavItem 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="Responsive"
        route="/responsive"
       />
      </div>
    </div>
  );
};

export default Navbar;
