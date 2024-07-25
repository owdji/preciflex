import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/ContactSection.css';
import {Link} from 'react-router-dom'

const ContactSection = ({ circleColor = 'circleGray', textColor = 'textBlue', numberOfRows = 2 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const numberOfCircles = isMobile ? Array.from({ length: 10 }) : Array.from({ length: 50 });
  const numberOfCircles2 = Array.from({ length: isMobile ? 3 : 16 });

  useGSAP(() => {

      let resetTimerId;

      gsap.utils.toArray('.circle').forEach((circle) => {
          const circleRect = circle.getBoundingClientRect();
          const circleCenter = {
              x: circleRect.left + circleRect.width / 2,
              y: circleRect.top + circleRect.height / 2,
          };

          const relativePosition = {
              x: mousePosition.x - circleCenter.x,
              y: mousePosition.y - circleCenter.y,
          };

          const distance = Math.sqrt(
              relativePosition.x ** 2 + relativePosition.y ** 2
          );

          const thershold = 70;

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

          clearTimeout(resetTimerId);

          resetTimerId = setTimeout(() => {
              gsap.utils.toArray('.circle').forEach((circle) => {
                  gsap.to(circle, {
                      x: 0,
                      y: 0,
                  });
              });
          }, 500);
      });

  }, { dependencies: [mousePosition] });

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
    <Link to='/contact'>
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
    </Link>
  );
};

export default ContactSection;
