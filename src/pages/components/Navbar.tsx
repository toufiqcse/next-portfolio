import React, { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "./Modal";
import Moda from "./Modal";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span className="hover:text-green" onClick={() => setActiveItem(name)}>
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to track loading

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true); // Show loader text when a route change starts
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false); // Hide loader text when the route change is complete
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Set the initial active item based on the current route
    if (router.asPath === "/") setActiveItem("About");
    if (router.asPath === "/projects") setActiveItem("Projects");
    if (router.asPath === "/resume") setActiveItem("Resume");

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.asPath]);

  return (
    <div className="flex justify-between px-[1.25em] my-[0.25em] py-[0.5em] ">
      {isLoading ? (
        <span className="text-green font-semibold text-2xl">Loading...</span>
      ) : (
        <span className="text-green font-semibold text-2xl border-b-4 border-green">
          {activeItem}
        </span>
      )}
      <div className="flex space-x-2">
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
      </div>
    </div>
  );
};

export default Navbar;
