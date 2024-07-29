import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import watch from "../../assets/light-watch.png";
import darkWatch from "../../assets/dark-watch.png";
import SunIcon from "../../assets/svgIcons/SunIcon";
import MoonIcon from "../../assets/svgIcons/MoonIcon";
import "../../styles/LightTech.css";

const LightTechWatch = () => {
  const [selectedIcon, setSelectedIcon] = useState("sun");

  useGSAP(() => {
    if (selectedIcon === "sun") {
      gsap.to(".lightTech-darkWatch", {
        opacity: 0,
        duration: 3,
        ease: "power1.out",
      });
    } else {
      gsap.to(".lightTech-darkWatch", {
        opacity: 1,
        duration: 3,
        ease: "power1.out",
      });
    }
  }, { dependencies: [selectedIcon] });

  const handleIconClick = () => {
    setSelectedIcon((prevIcon) => (prevIcon === "sun" ? "moon" : "sun"));
  };

  const renderIcons = () => {
    return (
      <>
        <SunIcon color={selectedIcon === "sun" ? "blue" : "black"} className="lightTech-icon" />
        <MoonIcon color={selectedIcon === "moon" ? "blue" : "black"} className="lightTech-icon" />
      </>
    );
  };

  return (
    <div className="lightTech-watch-container">
      <div
        className="lightTech-icons z-10"
        onClick={handleIconClick}
      >
        {renderIcons()}
      </div>
      <div className="lightTech-watch-wrapper">
        <img src={watch} className="lightTech-watch" alt="Light watch" />
        <img src={darkWatch} className="lightTech-darkWatch" alt="Dark watch" />
      </div>
    </div>
  );
};

export default LightTechWatch;