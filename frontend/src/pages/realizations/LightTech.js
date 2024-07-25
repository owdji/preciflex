import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../styles/LightTech.css";
import watch from "../../assets/light-watch.png";
import darkWatch from "../../assets/dark-watch.png";
import SunIcon from "../../assets/svgIcons/SunIcon";
import MoonIcon from "../../assets/svgIcons/MoonIcon";
import ContactSection from "../../components/ContactSection";
import ProductCards from "../../components/ProductCards";

const LightTech = () => {
  const circleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedIcon, setSelectedIcon] = useState("sun");

  useGSAP(
    () => {
      gsap.to(circleRef.current, {
        x: mousePosition.x - 100,
        y: mousePosition.y - 100,
        ease: "power1.out",
      });
    },
    { dependencies: [mousePosition] }
  );

  useGSAP(
    () => {
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
    },
    { dependencies: [selectedIcon] }
  );

  const handleMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleIconClick = () => {
    setSelectedIcon((prevIcon) => (prevIcon === "sun" ? "moon" : "sun"));
  };

  const renderIcons = () => {
    return (
      <>
        <SunIcon color={selectedIcon === "sun" ? "blue" : "black"}/>
        <MoonIcon color={selectedIcon === "moon" ? "blue" : "black"} />
      </>
    );
  };

  return (
    <div>
      <div className="h-screen lightTechHero" onMouseMove={handleMove}>
        <div className="lightTechCircle" ref={circleRef}></div>
        <h1 className="title1 text-white">Light Technologies</h1>
        <p className="title4 text-white">PRECIFLEX</p>
      </div>

      <div className="grid grid-cols-6 homePage">
        <div className="col-span-6 grid grid-cols-6">
          <div className="col-span-2">
            <p className="h-[50vh]">
              Nulla amet facilisi sagittis faucibus. Odio ipsum pharetra feugiat
              viverra mi. Ut quis elementum pretium condimentum ac consequat
              senectus gravida sit. Aliquam ullamcorper ipsum convallis quam
              senectus nec vitae leo vitae. Laoreet duis vel fermentum habitasse
              in at.
            </p>
            <p className="h-[50vh]">
              Nulla amet facilisi sagittis faucibus. Odio ipsum pharetra feugiat
              viverra mi. Ut quis elementum pretium condimentum ac consequat
              senectus gravida sit. Aliquam ullamcorper ipsum convallis quam
              senectus nec vitae leo vitae. Laoreet duis vel fermentum habitasse
              in at.
            </p>
          </div>

          <div className="col-start-3 col-end-5 h-full">
            <div className="lightTech-watch-container">
              <div
                className="w-full flex justify-center"
                onClick={handleIconClick}
              >
                {renderIcons()}
              </div>
              <div className="flex">
                <img src={watch} className="lightTech-watch" />
                <img src={darkWatch} className="lightTech-darkWatch" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <ContactSection />

          <div className="col-span-6 sectionSpace"></div>

          <p className="title2">More realization</p>
          <ProductCards />
        </div>
        
      </div>
    </div>
  );
};

export default LightTech;
