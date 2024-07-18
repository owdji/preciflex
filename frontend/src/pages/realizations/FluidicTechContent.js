import React, { useState, useRef, useEffect } from 'react';
import flower1 from '../../assets/flower-1.png';
import flower2 from '../../assets/flower-2.png';
import flower3 from '../../assets/flower-3.png';
import flower4 from '../../assets/flower-4.png';
import flower5 from '../../assets/flower-5.png';
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
  const [isInitialized, setIsInitialized] = useState(false);
  const flowerPositions = useRef([]);
  const flowerMovementFactors = useRef([]);
  const watchContainerRef = useRef(null);

  const handleMove = (event) => {
    const watchRect = watchContainerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - watchRect.left,
      y: event.clientY - watchRect.top
    });
  };

  useEffect(() => {
    if (flowerPositions.current.length === 0) {
      flowerPositions.current = flowers.map(() => ({
        right: `${Math.floor(Math.random() * 100)}%`,
        top: `${Math.floor(Math.random() * 50) + 10}%`,
        rotate: `${Math.floor(Math.random() * 361)}deg`,
        zIndex: Math.floor(Math.random() * 10 + 1),
      }));
      flowerMovementFactors.current = flowers.map(() => ({
        duration: Math.floor((Math.random() * 2 + 2) * 100) / 100,
        xDivider: Math.floor((Math.random() * 3 + 3) * 100) / 100,
        yDivider: Math.floor((Math.random() * 3 + 3) * 100) / 100,
        rotate: Math.floor(Math.random() * 46),
        delay: Math.random() * 0.2 + 0.1,
      }));
      setIsInitialized(true);
    }
  }, []);

  useGSAP(() => {
    if (!isInitialized || mousePosition === null) return;

    const randomSlightRotation = Math.floor(Math.random() * 46);
    const watchRect = watchContainerRef.current.getBoundingClientRect();
    const centerX = watchRect.width / 2;
    const centerY = watchRect.height / 2;
    const maxDistance = Math.min(centerX, centerY) * 0.3; // Limit movement to 80% of the watch radius

    gsap.utils.toArray('.flowerOnWatch').forEach((flower, index) => {
      const { duration, xDivider, yDivider, delay } = flowerMovementFactors.current[index];
      
      const dx = (mousePosition.x - centerX) / xDivider;
      const dy = (mousePosition.y - centerY) / yDivider;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      let x = dx;
      let y = dy;

      if (distance > maxDistance) {
        const scale = maxDistance / distance;
        x *= scale;
        y *= scale;
      }

      gsap.to(flower, {
        x: x,
        y: y,
        rotation: randomSlightRotation,
        ease: 'power1.out',
        duration,
        delay,
      });
    });
  }, { dependencies: [mousePosition, isInitialized] });

  const flowersOnWatch = () => {
    return flowers.map((flower, index) => (
      <img
        key={index}
        src={flower}
        className={`flowerOnWatch`}
        style={{
          position: 'absolute',
          ...flowerPositions.current[index],
        }}
      />
    ));
  };

  return (
    <div className='grid grid-cols-6 homePage' onMouseMove={handleMove}>
      <div ref={watchContainerRef} className='col-start-3 col-end-5 watch-container' style={{ position: 'relative' }}>
        <img src={watch} className='watch'/>
        <img src={watchHands} className='watchHands'/>
        {flowersOnWatch()}
      </div>
      <div className='col-span-2'>
        <p>Services</p>
      </div>
      <div className='col-span-2'>
        <div className='firstSection h-screen'>
          <p>Nulla amet facilisi sagittis faucibus. Odio ipsum pharetra feugiat viverra mi. Ut quis elementum pretium condimentum ac consequat senectus gravida sit. Aliquam ullamcorper ipsum convallis quam senectus nec vitae leo vitae. Laoreet duis vel fermentum habitasse in at. </p>
        </div>
        <div className='secondSection h-20'>
          <p>bonjour</p>
        </div>
        <div className='thirdSections h-20'>
          <p>au revoir</p>
        </div>
      </div>
    </div>
  );
};

export default FluidicTechContent;