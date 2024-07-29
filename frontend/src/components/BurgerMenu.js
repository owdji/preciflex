import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CloseMenu from '../assets/svgIcons/CloseMenu';
import BurgerMenuIcon from '../assets/svgIcons/BurgerMenuIcon';
import RightArrow from '../assets/svgIcons/RightArrow';

const BurgerMenu = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  return (
    <div className={`burger-menu ${backgroundColor} ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="burger-icon">
        {isOpen ? <CloseMenu/> : <BurgerMenuIcon/>}
      </button>
      {isOpen && (
        <nav className="burger-nav">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <div className="burger-dropdown">
            <button onClick={() => handleMenuClick('luxury')}>
            <Link to="/luxury" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
              Luxury
            </Link>
              <span className={`arrow ${openDropdown === 'luxury' ? 'open' : ''}`}><RightArrow/></span>
            </button>
            {openDropdown === 'luxury' && (
              <div className="dropdown-content">
                <NavLink to="/luxury/hyt" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>HYT</NavLink>
                <NavLink to="/luxury/light-tech" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Light Tech</NavLink>
                <NavLink to="/luxury/fluidic-tech" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Fluidic Tech</NavLink>
                <NavLink to="/luxury/hulecos" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Hulecos</NavLink>
              </div>
            )}
          </div>
          <div className="burger-dropdown">
            <button onClick={() => handleMenuClick('medtech')}>
              <Link to="/medtech" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
              Medtech
              </Link>
              <span className={`arrow ${openDropdown === 'medtech' ? 'open' : ''}`}><RightArrow/></span>
            </button>
            {openDropdown === 'medtech' && (
              <div className="dropdown-content">
                <NavLink to="/medtech/5" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Preci-Health</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink>
          <NavLink to="/competences" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Competences</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "active-link navigationContact"
                : "navigationLink navigationContact"
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                <p className="mr-3">Contact</p>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.39502 16.182L16.0977 1.4794M16.0977 1.4794V16.182M16.0977 1.4794H1.39502"
                    stroke={isActive ? "#006EEB" : "black"}
                    stroke-width="1.6"/>
                </svg>
              </div>
            )}
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;