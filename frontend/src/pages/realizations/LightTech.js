import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../styles/LightTech.css';

const LightTech = () => {
  const circleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useGSAP(() => {
      gsap.to(circleRef.current, {
        x: mousePosition.x - 100,
        y: mousePosition.y -100,
        ease: 'power1.out',
      });
  }, {dependencies: [mousePosition]});

    const handleMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

  return (
    <div>
      <div className='h-screen lightTechHero' onMouseMove={handleMove}>
        <div className='lightTechCircle' ref={circleRef}></div>
        <h1 className='title1 text-white'>Light Technologies</h1>
        <p className='title4 text-white'>PRECIFLEX</p>
      </div>
    </div>
  );
};

export default LightTech;
