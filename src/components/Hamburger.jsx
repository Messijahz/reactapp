import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-icon">
        <FaBars size={28} />
      </button>
      {isOpen && (
        <nav className="menu-links">
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
