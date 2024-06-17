import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/ContactSection.css';

const ContactSection = ({circleColor = 'circleGray', textColor = 'textBlue', numberOfRows = 2 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const numberOfCircles = Array.from({ length: 50 });
    const numberOfCircles2 = Array.from({ length: 16 });

    useGSAP(() => {

      gsap.utils.toArray('.circle').forEach((circle) => {
        //1. calculer la distance relative entre le centre du cercle et la souris
        const circleRect = circle.getBoundingClientRect();
        const circleCenter = {
          x: circleRect.left + circleRect.width / 2,
          y: circleRect.top + circleRect.height / 2,
        };

        const relativePosition = {
          x: mousePosition.x - circleCenter.x,
          y: mousePosition.y - circleCenter.y,
        };

        //2. calculer la distance entre le centre du cercle et la souris
        const distance = Math.sqrt(
          relativePosition.x ** 2 + relativePosition.y ** 2
        );

        //3. definir un seuil
        const thershold = 70;

        //4. si la distance est inferieur au seuil, le cercle s'éloigne
        if (distance < thershold) {
          gsap.to(circle, {
            x: -relativePosition.x,
            y: -relativePosition.y,
          });
        } else {
          gsap.to(circle, {
            x: 0,
            y: 0,
          });
        }
      }
      );

    }, {dependencies: [mousePosition]})


    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
  
    const renderCircles = (numberOfLines) => {
      return (
        <>
          {Array.from({ length: numberOfLines }).map((_, outerIndex) => (
            <div key={outerIndex} className='circleContainer'>
              {numberOfCircles.map((_, innerIndex) => (
                <div className={`circle ${circleColor}`} key={innerIndex}></div>
              ))}
            </div>
          ))}
        </>
      );
    };

  return (
    <div className='contactSectionContainer' onMouseMove={handleMouseMove}>
      {renderCircles(numberOfRows)}
      <div className='textCircleContainer'>
          {numberOfCircles2.map((_, index) => (
            <div className={`circle ${circleColor}`} key={index}></div>
          ))} 
          <h2 className={`hugeContactUs ${textColor}`}>CONTACT US </h2>
          {numberOfCircles2.map((_, index) => (
            <div className={`circle ${circleColor}`} key={index}></div>
          ))}
      </div>
      {renderCircles(numberOfRows)}
    </div>
  );
};

export default ContactSection;
