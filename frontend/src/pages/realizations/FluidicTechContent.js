import React, { useState, useRef, useEffect } from 'react';
import flower1 from '../../assets/flower-1.png';
import flower2 from '../../assets/flower-2.png';
import flower3 from '../../assets/flower-3.png';
import flower4 from '../../assets/flower-4.png';
import watch from '../../assets/watch-without-flowers.png';
import watchHands from '../../assets/watch-hands.png';
import '../../styles/FluidicTech.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FluidicTechContent = () => {
  const flowers = [flower1, flower2, flower3, flower4];
  const [mousePosition, setMousePosition] = useState(null);
  const [isInitialized, setIsInitialized] = useState(true);
  const flowerPositions = useRef([]);
  const flowerMovementFactors = useRef([]);
  const watchContainerRef = useRef(null);
  const [ticTac, setTicTac] = useState(false);

  // Every 2 seconds, toggle ticTac value
  useEffect(() => {
    const interval = setInterval(() => {
      setTicTac((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMove = (event) => {
    const watchRect = watchContainerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - watchRect.left,
      y: event.clientY - watchRect.top,
    });
  };

  // useEffect(() => {
  //   if (flowerPositions.current.length === 0) {
  //     flowerPositions.current = flowers.map(() => ({
  //       zIndex: Math.floor(Math.random() * 10 + 1),
  //     }));
  //     setIsInitialized(true);
  //   }
  // }, []);

  useGSAP(() => {
    if (!isInitialized || mousePosition === null) return;

    gsap.utils.toArray('.flowerOnWatch').forEach((flower, index) => {
      console.log(index, gsap.getProperty(flower, 'x'))
      const currentX = gsap.getProperty(flower, 'x');
      const currentY = gsap.getProperty(flower, 'y');
      //random value between -10 and 10 rounded to the nearest integer
      const x = -40;
      const y = 40; 

      gsap.to(flower, {
        x: getRandomRoundedValue(-40, 40),
        y: getRandomRoundedValue(-40, 40),
        delay: Math.random() * 1,
        duration: 3,
        ease: 'power1.inOut',
      });
    });
  }, [ticTac]);

  const getRandomRoundedValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const flowersOnWatch = () => {
    return flowers.map((flower, index) => (
      <img
        key={index}
        src={flower}
        className="flowerOnWatch"
        style={{
          ...flowerPositions.current[index],
        }}
      />
    ));
  };

  return (
    <div className="grid grid-cols-6 homePage" onMouseMove={handleMove}>
      <div
        ref={watchContainerRef}
        className="col-start-3 col-end-5 watch-container"
        style={{ position: 'relative' }}
      >
        <img src={watch} className="watch" />
        <img src={watchHands} className="watchHands" />
        {flowersOnWatch()}
      </div>
      <div className="col-span-2">
        <p>Services</p>
      </div>
      <div className="col-span-2">
        <div className="firstSection h-screen">
          <p>
            Nulla amet facilisi sagittis faucibus. Odio ipsum pharetra feugiat
            viverra mi. Ut quis elementum pretium condimentum ac consequat
            senectus gravida sit. Aliquam ullamcorper ipsum convallis quam
            senectus nec vitae leo vitae. Laoreet duis vel fermentum habitasse
            in at.
          </p>
        </div>
        <div className="secondSection h-20">
          <p>bonjour</p>
        </div>
        <div className="thirdSections h-20">
          <p>au revoir</p>
        </div>
      </div>
    </div>
  );
};

export default FluidicTechContent;
