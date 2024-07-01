import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import '../styles/Services.css'
import { useGSAP } from '@gsap/react'

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
    <span onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false)} className='text-container'>
    <a className='text-electric-blue serviceTitleLink'> {word}</a> 
    {/* <svg className='servicesIcon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.00781 17.1816H14.1733M8.43039 20.0618H12.7159" stroke="#006EEB" stroke-width="1.8"/>
      <path d="M7.76809 14.9559C7.76809 12.952 3.96875 12.041 3.96875 7.95543C3.96875 3.86986 7.3003 1.18945 10.5489 1.18945M13.3265 14.956C13.3265 12.952 17.1258 12.041 17.1258 7.95543C17.1258 3.86986 13.7943 1.18945 10.5457 1.18945" stroke="#006EEB" stroke-width="1.8"/>
    </svg> */}
    <div className='servicesIcon' ref={servicesIcon}>
    {icon}
    </div>
  </span>
  )
}

export default ServicesLinkWord