"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MobileNavbar.css";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`py-4 flex justify-between font-moderniz`}>
      <h2 className="text-[4vw]">Shahnawaz.</h2>
      {/* <div id="nav-icon4" className={isOpen ? "open" : ""}
      onClick={toggleOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    <label htmlFor="check">
      <input type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
    </header>
  );
}

export default MobileNavbar;