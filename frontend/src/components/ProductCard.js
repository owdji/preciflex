import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ id, title, industry, services, competences, imageUrl }) => {
  const productImageRef = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const industryRef = useRef(null);
  const serviceRef = useRef(null);
  const competencesRef = useRef(null);

  const handleAnimation = (element, x, y, duration) => {
    if (!isMobile) {
      gsap.fromTo(element, 
        { x, y, opacity: 0 }, 
        { x: 0, y: 0, opacity: 1, duration, ease: 'power1.inOut' }
      );
    }
  };

  const reverseAnimation = (element, x, y, duration) => {
    if (!isMobile) {
      gsap.to(element, { x, y, opacity: 0, duration, ease: 'power1.inOut' });
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) {
      gsap.set([industryRef.current, serviceRef.current, competencesRef.current], {
        clearProps: "all"
      });
    } else if (mouseOver) {
      gsap.to(productImageRef.current, { scale: 1.1, duration: 0.5, ease: 'power1.inOut' });
      handleAnimation(industryRef.current, -100, -100, 1);
      handleAnimation(serviceRef.current, 100, -100, 1);
      handleAnimation(competencesRef.current, -100, 100, 1);
    } else {
      gsap.to(productImageRef.current, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      reverseAnimation(industryRef.current, -100, -100, 1);
      reverseAnimation(serviceRef.current, 100, -100, 1);
      reverseAnimation(competencesRef.current, -100, 100, 1);
    }
  }, [mouseOver, isMobile]);

  if (id === '3') {
    id = 'Hyt';
  }

  return (
    <Link className={`productCard`} to={`/luxury/${id}`} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      <div className='topProductCard'>
        <div ref={industryRef}>
          <h2 className='title4'>{title.toUpperCase()}</h2>
          <p className='p2'>ind. {industry}</p>
        </div>

        <div ref={serviceRef} className='p2 productCardServices'>
          {services.map((service) => (
            <p key={service}>{service}</p>
          ))}
        </div>
      </div>

      <img ref={productImageRef} src={`http://localhost:1337${imageUrl}`} />

      <div className='bottomPorductCard'>
        <p className='p2' ref={competencesRef}>{competences.join(', ')}</p>
      </div>
    </Link>
  );
};

export default ProductCard;