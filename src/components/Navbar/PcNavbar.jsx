import Link from "next/link";
import React from "react";

function PcNavbar() {
  return (
    <header className={`font-moderniz w-full flex justify-between  items-center py-[1.2vw]`}>
      <ul className={`nav-menu-1 flex gap-5 font-moderniz text-[.7vw] h-full items-center lowercase tracking-tight `}>
        <li>
          <Link
            href="#hero"
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <Link
            href="#works"
            className="cursor-pointer"
          >
            Work
          </Link>
        </li>
      </ul>
      <h2 className={`logo text-[1.5vw]`}>Shahnawaz.</h2>
      <ul className={`nav-menu-2 flex gap-5 font-moderniz text-[.7vw] h-full items-center lowercase tracking-tight`}>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <a href="/">Faq</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default PcNavbar;
