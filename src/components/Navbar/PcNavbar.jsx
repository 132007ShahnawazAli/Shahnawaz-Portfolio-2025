import Link from "next/link";
import React from "react";

function PcNavbar() {
  return (
    <header className={`fixed top-0 left-0 z-50 font-moderniz w-full  mt-3 flex justify-center`}>
      <div className="flex justify-between w-[93%]  items-center py-[1.2vw] bg-slate-200/10 backdrop-blur-md text-white rounded-xl px-4">
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
            <Link href="#faq">Faq</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

    </header>
  );
}

export default PcNavbar;
