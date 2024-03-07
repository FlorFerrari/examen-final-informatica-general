import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsNavExpanded(false);
      }
  };

    
  window.addEventListener("resize", handleResize);

    
  return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 


  return (

      <>
        <FontAwesomeIcon
         className="open-close" 
         icon={faBars} 
         onClick={() => {setIsNavExpanded(!isNavExpanded);}} />
        
        <div className={`navBar-container${isNavExpanded ? "expanded" : ""}`}>
      
          <ul className="navBar-content">

            <li onClick={handleNavLinkClick} >
              <NavLink to="/">Home</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/ourcrew">Our Crew</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/discography">Discography</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/showcases">Showcases</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/merch">Merch</NavLink>
            </li>

            <li onClick={handleNavLinkClick}>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </>
  );
};

export default Navbar;
