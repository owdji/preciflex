import React, { useState, useEffect, useRef } from 'react'
import '../../styles/FluidicTech.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import flower1 from '../../assets/flower-1.png';
import flower2 from '../../assets/flower-2.png';
import flower3 from '../../assets/flower-3.png';
import flower4 from '../../assets/flower-4.png';
import flower5 from '../../assets/flower-5.png';
import flower6 from '../../assets/flower-1.png';
import flower7 from '../../assets/flower-2.png';
import flower8 from '../../assets/flower-3.png';
import flower9 from '../../assets/flower-4.png';
import flower10 from '../../assets/flower-5.png';
import watch from '../../assets/watch-without-flowers.png'
import FluidicTechContent from './FluidicTechContent';


const FluidicTech = () => {
  const [mousePosition, setMousePosition] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const flowerPositions = useRef([]);
  const flowerMovementFactors = useRef([]);
  const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9, flower10];


  useEffect(() => {
    if (flowerPositions.current.length === 0) {
      flowerPositions.current = flowers.map(() => ({
        right: `${Math.floor(Math.random() * 81)}%`,
        top: `${Math.floor(Math.random() * 81) + 10}%`,
        rotate: `${Math.floor(Math.random() * 361)}deg`,
        //zindex between 1 and 10
        zIndex: Math.floor(Math.random() * 10 + 1),
      }));
      flowerMovementFactors.current = flowers.map(() => ({
        //random duraction between 2 and 4, arrondi à 2 chiffres après la virgule
        duration: Math.floor((Math.random() * 2 + 2) * 100) / 100,
        //random between 3 and 5, arrondi à 2 chiffres après la virgule
        xDivider: Math.floor((Math.random() * 3 + 3) * 100) / 100,
        //random between 3 and 5, random y speed
        yDivider: Math.floor((Math.random() * 3 + 3) * 100) / 100,
        //rotation between 0 and 45
        rotate: Math.floor(Math.random() * 46),
        //random delay between 0.1 and 0.3
        delay: Math.random() * 0.2 + 0.1,
      }));

      setIsInitialized(true);
    }
  }, []);

  useGSAP(() => {
    if (!isInitialized || mousePosition === null) return;
    //between 0 and 45
    const randomSlightRotation = Math.floor(Math.random() * 46);

    gsap.utils.toArray('.fluidicTechFlower').forEach((flower, index) => {
      const { duration, xDivider, yDivider, delay } = flowerMovementFactors.current[index];
      
      gsap.to(flower, {
        x: ((mousePosition.x) / xDivider) - 200,
        y: ((mousePosition.y) / yDivider) - 100,
        rotation: randomSlightRotation,
        ease: 'power1.out',
        duration,
        delay,
      });
    });
  }
  , { dependencies: [mousePosition] });

  const handleMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };


  return (
    <div>
      <div className='fluidicTechHero h-screen overflow-hidden' onMouseMove={handleMove}>
        <h1 className='title1 z-[5]'>Fluidic Technologies</h1>
        <p className='title4 z-[5]'>PRECIFLEX</p>
        {isInitialized && flowers.map((flower, index) => (
          <img
            key={index}
            src={flower}
            className='fluidicTechFlower'
            style={{
              position: 'absolute',
              top: flowerPositions.current[index].top,
              right: flowerPositions.current[index].right,
              rotate: flowerPositions.current[index].rotate,
              zIndex: flowerPositions.current[index].zIndex,
            }}
          />
        ))}
        
      </div>
        <FluidicTechContent />
    </div>
  );
};

export default FluidicTech;