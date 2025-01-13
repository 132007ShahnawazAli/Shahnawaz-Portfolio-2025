"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from 'next/link';

import "./MobileNavbar.css";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className=" w-full fixed top-0 left-0 z-50 flex justify-center items-center"
      initial={false}
      animate={{ height: isOpen ? 'auto' : '4rem' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-4  bg-slate-200/10 backdrop-blur-lg text-white w-[93%] py-3 rounded-xl">
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-bold font-moderniz">Shahnawaz.</h2>
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <HiOutlineMenuAlt2 size={24} />}
          </button>
        </div>
        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ul className="py-4">
            {links.map((link) => (
              <motion.li
                key={link.href}
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={link.href} className="block py-2  font-moderniz text-base text-secondary hover:bg-blue-500/15 hover:px-2 transition-all duration-300 hover:rounded-lg" onClick={toggleMenu}>
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default MobileNavbar;