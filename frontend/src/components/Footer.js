/* Footer.js */

import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div id="footer">
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
            <a href='www.linkedin.com'><p>Linkedin</p></a>
        </div>

    </div>
  )
}

export default Footer