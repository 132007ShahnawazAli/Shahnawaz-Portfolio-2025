import React from 'react'
import CtaButton from './CtaButton'

function AboutSection() {
  return (
    <div id='about' name='about' className='w-full h-fit flex flex-col pt-[3vw] '>
      <h3 className='md:text-[5vw] text-[9vw] font-moderniz mt-[4vw] '>About Me</h3>
      <h3 className='md:w-[75%] w-[90%] md:text-[5.4vw] text-[5.4vw]  tracking-tighter md:leading-[5vw] leading-6 md:font-semibold font-normal '>One Seamless combination from creative design with Qualitative Technical development.</h3>
      <div className="flex flex-row  pt-[3vw] w-full justify-between items-start">
        <div className='md:w-3/4 flex flex-col gap-[1.3vw]'>
          <p className='md:w-1/2 md:text-[1.3vw] text-[3.5vw] tracking-normal md:leading-[1.5vw] leading-[3vw] text-secondary'>I go for an effective and aesthetic website with an collaboration 'from scratch' for each project. An accessible collaboration with short lines of communication, without noise.</p>
          <CtaButton />
        </div>
        <div className="md:flex hidden gap-3 items-start ">
          <div>
            <div className='w-[5vw] h-[5vw] rounded-full bg-[url("/assets/hero_img.jpeg")] bg-center bg-cover'></div>
          </div>
          <div className='flex flex-col'>
            <h2 className='uppercase text-[1.2vw] font-semibold leading-relaxed'>Shahnawaz</h2>
            <p className='text-[.9vw] font-medium text-[#f8f8ffb1] leading-tight'>WEB & MOBILE UX/UI /<br />
              DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection