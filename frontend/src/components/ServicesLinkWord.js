import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import '../styles/Services.css'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';

const ServicesLinkWord = ({word, icon, link}) => {
    const [hover, setHover] = useState(false)
    const servicesIcon = useRef(null)

    useGSAP(() => {
        if (hover) {
          gsap.to(servicesIcon.current, {
            x: 0,
            y: -40, 
            duration: 1, 
            ease: 'power3.out',
            // paused: true
          });
        } else {
          gsap.to(servicesIcon.current, {
            x: 0,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            // paused: true
          });
        }
      }
      , {dependencies: [hover]})
 
  return (
    <Link to={link}>
    <span onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false)} className='text-container'>
    <a className='text-electric-blue serviceTitleLink'> {word}</a> 
    <div className='servicesIcon' ref={servicesIcon}>
    {icon}
    </div>
  </span>
  </Link>
  )
}

export default ServicesLinkWord