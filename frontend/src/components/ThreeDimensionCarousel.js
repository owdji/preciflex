import React, { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ModuleFluidique } from "../3d/ModuleFluidique";
import "../styles/ThreeDimensionCarousel.css";
import HulecosModel from "../3d/HulecosModel";
import LightTechWatch from "../pages/realizations/LightTechWatch";
import FluidicTechWatch from "../assets/watch-flowers.png";
import PreciHealth from "../assets/preci-health.png";
import PreciflexButton from "./PreciflexButton";
import { Link } from "react-router-dom";

export default function ThreeDimensionCarousel({ realizations }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeCurrent = (i) => {
    if (realizations.length <= 1) return;
    if (current + i === realizations.length) {
      setCurrent(0);
    } else if (current + i === -1) {
      setCurrent(realizations.length - 1);
    } else {
      setCurrent(current + i);
    }
  };

  const getLink = useMemo(() => {
    switch (realizations[current].id) {
      case "3":
        return "luxury/hyt";
      case "4":
        return "luxury/fluidic-tech";
      case "6":
        return "luxury/hulecos";
      case "7":
        return "luxury/light-tech";
      case "5":
        return "medtech/5";
      default:
        return "";
    }
  }, [current, realizations]);

  const renderMainCarouselElement = (realization) => {
    switch (realization.id) {
      case "3":
        return (
          <Canvas>
            <Environment preset="studio" />
            <ambientLight />
            <OrbitControls enableZoom={false}/>
            <ModuleFluidique position={[0, 0, 0]} scale={[100, 100, 100]} />
          </Canvas>
        );
      case "4":
        return (
          <div className="flex justify-center items-center h-full">
            <img src={FluidicTechWatch} alt="Fluidix Tech Watch" className="w-[30%]"/>
          </div>
        );
      case "6":
        return (
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false}/>
            <HulecosModel position={[0, 3, 0]} scale={[1.4, 1.4, 1.4]} look={true} />
          </Canvas>
        );
      case "7":
        return (
          <div>
            <LightTechWatch/>
          </div>
        );
      case "5":
        return (
          <div className="flex justify-center items-center h-full">
            <img src={PreciHealth} alt="PreciHealth" className="max-h-[500px] md:max-h-[700px]"/>
          </div>
        );
      default:
        return null;
    }
  };

  const Arrow = ({ direction, onClick }) => (
    <svg
      onClick={onClick}
      className={`ThreedCarouselArrow ${direction}-arrow`}
      width="30"
      height="30"
      viewBox="0 0 26 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={direction === 'left' 
          ? "M25.2773 1.57492L1.45152 25.4007L25.2773 49.2266"
          : "M1.625 49.2259L25.4508 25.4001.625 1.57422"}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className={`threed-carousel ${isMobile ? 'mobile' : ''}`}>
      {realizations.length > 1 && (
        <div className="flex justify-center">
          {realizations.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={current === index ? "dotActive" : "dot"}
            ></div>
          ))}
        </div>
      )}

      <div className={`grid ${isMobile ? 'mobile-grid' : 'grid-cols-4'}`}>
        <div className={`sides ${isMobile ? 'mobile-sides' : ''}`}>
          <div>
            <h2 className="title3">{realizations[current].attributes.title}</h2>
            <h3 className="pBoldBlue">Description</h3>
            <p className="p">{realizations[current].attributes.description}</p>
          </div>
        </div>

        <div className={`${isMobile ? 'mobile-canvas' : 'col-start-2 col-end-4'} canvas`}>
          <div className="canvas-container">
            {realizations.length > 1 && (
              <Arrow direction="left" onClick={() => changeCurrent(-1)} />
            )}
            {renderMainCarouselElement(realizations[current])}
            {realizations.length > 1 && (
              <Arrow direction="right" onClick={() => changeCurrent(1)} />
            )}
          </div>
        </div>

        <div className={`${isMobile ? 'mobile-sides' : 'col-start-4'}`}>
          <div className="sides">
            <div>
              <h3 className="pBoldBlue">Preciflex Services</h3>
              {realizations[current].attributes.services.map(
                (service, index) => (
                  <p key={index} className="p">{service}</p>
                )
              )}
              <h3 className="pBoldBlue">Competences</h3>
              {realizations[current].attributes.competences.map(
                (competence, index) => (
                  <p key={index} className="p">{competence}</p>
                )
              )}
            </div>
          </div>
        </div>


      </div>
      <div className="w-full flex justify-center">
        <Link to={`/${getLink}`} className="z-10">
          <PreciflexButton value={'Discover more'}/>
        </Link>
      </div>
    </div>
  );
}