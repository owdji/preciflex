/* Footer.js */

import React from 'react'
import '../styles/Footer.css'
import ContactSection from './ContactSection'
const Footer = () => {
  return (
    <div className="footer">
      <div className='links'>
        <div className='footerNavigation'>
              <a href="/"><p>Home</p></a>
              <a href="/luxury"><p>Luxury</p></a>
              <a href="/medtech"><p>Medtech</p></a>
              <a href="/services"><p>Services</p></a>
              <a href="/competences"><p>Competences</p></a>
              <a href="/about"><p>About</p></a>
              <a href="/contact"><p>Contact us</p></a>
          </div>
          <div className='socialMedia'>
              <a href='www.linkedin.com'><p>LINKEDIN</p></a>
          </div>
      </div>

        <ContactSection circleColor={'circleBlack'} textColor={'textWhite'}/>

    </div>
  )
}

export default Footer