import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import '../styles/ContactUsButton.css'



const ContactUsButton = () => {
const containerRef = useRef(null);
  const vSlide = useRef(null);

  useGSAP(() => {
    //objet qui contient les options de configuration de l'animation
    const vsOpts = {
      slides: containerRef.current.querySelectorAll('.v-slide'),
      list: containerRef.current.querySelector('.v-slides'),
      duration: 15,
      lineHeight: 30
    };

    //création d'un timeline
    vSlide.current = gsap.timeline({ paused: true, repeat: -1 });

    //parcour chaque élément de la liste
    vsOpts.slides.forEach((slide, i) => {
      vSlide.current.to(vsOpts.list, {
        delay: 2,
        duration: 2,
        y: i * -1 * vsOpts.lineHeight,
        ease: "expo.inOut"
      });
    });

    vSlide.current.play();
  }, { scope: containerRef });
    
  return (
    <Link ref={containerRef} to='/contact'>
      <div className="row mt-10 mb-10 md:mt-0 md:mb-0">
        <div className="v-slider-frame">
          <ul className="v-slides">
            <li className="v-slide bold1">Innovate trough collaboration</li>
            <li className="v-slide bold1">Let's work together</li>
            <li className="v-slide bold1">Partner with Preciflex</li>
            <li className="v-slide bold1">Build innovation together</li>
            <li className="v-slide bold1">Work with us</li>
            <li className="v-slide bold1">Start innovating together</li>
          </ul>
        </div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.42969 16.4919L16.1323 1.78931M16.1323 1.78931V16.4919M16.1323 1.78931H1.42969" stroke="#006EEB" strokeWidth="2"/>
        </svg>


      </div>
    </Link>
  )
}

export default ContactUsButton