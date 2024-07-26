import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ContactSection from "./ContactSection";
import "../styles/Footer.css";
import PreciflexLogo from "../assets/svgIcons/PreciflexLogo";
import RightArrow from "../assets/svgIcons/RightArrow";

const DropdownMenu = ({ title, links, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isMobile) {
    return (
      <div className="footerDropDown desktop">
        <NavLink
          to={links[0].to}
          className={({ isActive }) =>
            isActive ? "active-link-footer" : "navigationLinkFooter"
          }
        >
          {title}
        </NavLink>
        <div className="dropdownContent">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "active-link-footer" : "navigationLinkFooter"
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="footerDropDown mobile">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdownButton">
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <RightArrow color='white'/>
        </span>
      </button>
      {isOpen && (
        <div className="dropdownContent">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "active-link-footer" : "navigationLinkFooter"
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="footer">
      <div className="footerLinks">
        <nav className="footerNavigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link-footer" : "navigationLinkFooter"
            }
          >
            Home
          </NavLink>
          <DropdownMenu
            title="Luxury"
            links={[
              { to: "/luxury/HYT", text: "HYT" },
              { to: "/luxury/light-tech", text: "Light Technologies" },
              { to: "/luxury/fluidic-tech", text: "Fluidic Technologies" },
              { to: "/luxury/hulecos", text: "Hulecos" },
            ]}
            isMobile={isMobile}
          />
          <DropdownMenu
            title="Medtech"
            links={[
              { to: "/medtech", text: "Medtech" },
              { to: "/medtech/preci-health", text: "Preci-Health" },
            ]}
            isMobile={isMobile}
          />
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active-link-footer" : "navigationLinkFooter"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/competences"
            className={({ isActive }) =>
              isActive ? "active-link-footer" : "navigationLinkFooter"
            }
          >
            Competences
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link-footer" : "navigationLinkFooter"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "active-link-footer"
                : "navigationLinkFooter"
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
                    stroke="white"
                    stroke-width="1.6"/>
                </svg>
              </div>
            )}
          </NavLink>
        </nav>
        <div className="socialMedia">
          <a href="https://www.linkedin.com">
            <p>LINKEDIN</p>
          </a>
        </div>
      </div>
      <div className="bottomFooter">
        {isMobile ? null : <ContactSection circleColor={"circleBlack"} textColor={"textWhite"} numberOfRows={3}/>}
        <div className="footerLogo">
          <PreciflexLogo color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;