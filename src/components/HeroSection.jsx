import React from 'react'
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";
import Link from "next/link";
import CtaButton from './CtaButton';

function HeroPage() {
  return (
    <div id='hero' name='hero' className="flex flex-col relative items-center sm:min-h-[100vh] w-full justify-between pt-20 sm:pt-0">
      <ResponsiveNavbar />
      <div className="hero flex flex-col items-center justify-center md:gap-0 gap-1">
        <h1 className='font-moderniz md:w-90% w-[98%] text-center text-[6.5vw] md:text-[5vw] mix-blend-normal md:mix-blend-overlay pt-[.2vw] md:pt-[5vw] md:leading-[6vw] leading-9'>Building Aesthetic, High-Performance Websites</h1>
        <p className="md:text-[1.3vw] text-[3.5vw] md:w-1/2 w-[80%] text-center text-primary font-normal mix-blend-color-dodge tracking-normal md:leading-[1.5vw] leading-[3vw]">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>
        <div className="flex flex-row md:gap-[1.5vw] gap-[2.5vw] pt-[.8vw] itmes-center justify-center h-fit">
          <CtaButton />
          <Link href={"#about"} className='text-[#DFDCDC] uppercase font-semibold md:text-[1vw] text-[3vw] md:leading-[2.5vw] leading-[5vw]'>Learn More</Link>
        </div>
      </div>
      <div className="social-links hidden md:flex  flex-col gap-[3vw] w-full ">
        <div className="hero-showcase flex flex-row justify-between items-start uppercase">
          <div className="about-showcase flex flex-col gap-[.7vw] w-fit">
            <h3 className="showcase-header text-[.9vw] font-medium text-[#F8F8FF]">WEB &amp; MOBILE UX/UI / <br />DEVELOPER</h3>
            <p className="showcase-location w-[60%] text-[.8vw] font-normal text-[#DFDCDC] capitalize">EXPERT IN BUILDING HIGH-PERFORMING WEBSITES</p>
          </div>
          <div className="about-showcase flex flex-col gap-[.7vw] w-fit ">
            <h3 className="showcase-availability hidden flex-col gap-[.7vw] text-[.9vw] font-medium text-[#F8F8FF] w-[70%] ">BASED IN INDIA</h3>
            <p className="showcase-bio text-[.8vw] font-normal text-[#DFDCDC] w-[60%] ">CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</p>
          </div>
          <svg width="8" height="77" viewBox="0 0 8 77" fill="none" xmlns="http://www.w3.org/2000/svg" className=" scroll-arrow self-end block ml-auto">
            <path d="M4.5 1L4.5 0.5L3.5 0.5L3.5 1L4.5 1ZM3.64645 76.3536C3.84171 76.5488 4.15829 76.5488 4.35356 76.3536L7.53554 73.1716C7.7308 72.9763 7.7308 72.6597 7.53554 72.4645C7.34027 72.2692 7.02369 72.2692 6.82843 72.4645L4 75.2929L1.17158 72.4645C0.976314 72.2692 0.659731 72.2692 0.464469 72.4645C0.269207 72.6597 0.269207 72.9763 0.464469 73.1716L3.64645 76.3536ZM3.5 1L3.5 76L4.5 76L4.5 1L3.5 1Z" fill="white"></path>
          </svg>

        </div>
        <div className="links-list flex gap-[1.5vw] text-[#d1d1d1] text-[1.1vw] font-normal pb-2">
          <Link href="https://www.instagram.com/shahnawazdevdesign/" className="hover:text-[#f7f7fa]">Instagram</Link>
          <Link href="https://x.com/shahnawaz132007" className="hover:text-[#f8f8ff]">Twitter/X</Link>
          <Link href="https://www.linkedin.com/in/shahnawazdevdesign/" className="hover:text-[#f8f8ff]">LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroPage