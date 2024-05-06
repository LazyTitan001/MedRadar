import React, { useState, useEffect } from "react";
import Logo from "@/assets/Images/Logo.png";
import NavBar from "./NavBar";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const flexBetween = "flex items-center justify-between";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("Home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${flexBetween} ${
        isTopOfPage ? "bg-[#0461D8]" : "bg-[#aed4ff]"
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <img className="h-10 sm" src={Logo} alt="Logo" />
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Header;
