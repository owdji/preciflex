import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";
import RightArrow from "../assets/svgIcons/RightArrow";
import PreciflexLogo from "../assets/svgIcons/PreciflexLogo";
import BurgerMenu from "./BurgerMenu";

const Header = ({ backgroundColor = "headerBackgroundWhite" }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  //Check if mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Open dropdown
  const handleMenuClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setOpenDropdown(null);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${backgroundColor}`}>
      <Link to="/">
        <PreciflexLogo />
      </Link>
      {isMobile ? (
        <BurgerMenu backgroundColor={backgroundColor} />
      ) : (
        <nav className="headerLinks">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "navigationLink"
            }
          >
            Home
          </NavLink>
          <div>
            <div className="linkWithButton">
              <NavLink
                to="/luxury"
                className={({ isActive }) =>
                  isActive
                    ? "active-link linkWithDropDown"
                    : "navigationLink linkWithDropDown"
                }
              >
                Luxury
              </NavLink>
              <span
                className={`arrow ${openDropdown === "luxury" ? "open" : ""}`}
              >
                <RightArrow onClick={() => handleMenuClick("luxury")} />
              </span>
            </div>
            {openDropdown === "luxury" && (
              <div className="dropdown">
                <NavLink
                  to="/luxury/hyt"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  HYT
                </NavLink>
                <NavLink
                  to="/luxury/light-tech"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Light Technologies
                </NavLink>
                <NavLink
                  to="/luxury/fluidic-tech"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Fluidic Technologies
                </NavLink>
                <NavLink
                  to="/luxury/hulecos"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Hulecos
                </NavLink>
              </div>
            )}
          </div>
          <div>
            <div className="linkWithButton">
              <NavLink
                to="/medtech"
                className={({ isActive }) =>
                  isActive
                    ? "active-link linkWithDropDown"
                    : "navigationLink linkWithDropDown"
                }
              >
                Medtech
              </NavLink>
              <span
                className={`arrow ${openDropdown === "medtech" ? "open" : ""}`}
              >
                <RightArrow onClick={() => handleMenuClick("medtech")} />
              </span>
            </div>
            {openDropdown === "medtech" && (
              <div className="dropdown">
                <NavLink
                  to="/medtech/3"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Preci-Health
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active-link" : "navigationLink"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/competences"
            className={({ isActive }) =>
              isActive ? "active-link" : "navigationLink"
            }
          >
            Competences
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : "navigationLink"
            }
          >
            About
          </NavLink>
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

export default Header;
