import React from 'react'
import Link from 'next/link'

function ContactSection() {
  return (
    <div id='contact' name='contact' className="flex flex-col mb-6">
      <h3 className='text-[5vw] font-moderniz mt-[4vw] mb-[4vw]'>Contact Us</h3>
      <div className="flex flex-row">
        <form action="" className='flex flex-col w-1/2 gap-[2vw]'>
          <h4 className='text-[2vw] font-semibold'>Want To Discuss Your Project?</h4>
          <div className='flex flex-col gap-[1.3vw]'>
            <input type="text" placeholder='Full name' className='w-[60%]  pl-[1vw] text-[#f8f8ff] text-[2vw] outline-none border-b-[1px] border-solid border-b-[#f8f8ff] bg-transparent placeholder:text-[1vw]' />
            <input type="email" placeholder='Email' className='w-[60%]  pl-[1vw] text-[#f8f8ff] text-[2vw] outline-none border-b-[1px] border-solid border-b-[#f8f8ff] bg-transparent placeholder:text-[1vw]' />
            <input type="text" placeholder='Message' className='w-[60%]  pl-[1vw] text-[#f8f8ff] text-[2vw] outline-none border-b-[1px] border-solid border-b-[#f8f8ff] bg-transparent placeholder:text-[1vw]' />

            <div>

              <button className="inline-flex py-[.7vw] gap-1 animate-shimmer items-center justify-center rounded-3xl bg-gradient-to-r from-lime-400 to-blue-500 bg-[length:200%_100%] mix-blend-hard-light px-5 font-semibold text-[#f8f8ff] transition-colors uppercase text-[1vw] ">
                Send Message
                <svg className='w-[1vw] h-[.9vw] rotate-12' viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L6.5 16L14 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-row gap-[7vw]">
          <div className='flex flex-col gap-[2vw]'>
            <div className='flex flex-col'>
              <h5 className="uppercase  font-medium text-[.9vw] text-[#F8F8FF]">Location</h5>
              <p className='uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC]'>Delhi, INDIA <br />
                Shastri Park <br />
                Delhi - 110053</p>
            </div>
            <div className='flex flex-col'>
              <h5 className="uppercase  font-medium text-[.9vw] text-[#F8F8FF]">Phone</h5>
              <p className='uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC]'>+91 9311899048
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-[4vw]'>
            <div className='flex flex-col'>
              <h5 className="uppercase  font-medium text-[.9vw] text-[#F8F8FF]">Email</h5>
              <p className='uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC]'>shahnawazdevin@gmail.com</p>
            </div>
            <div className='flex flex-col items-start'>
              <h5 className="uppercase  font-medium text-[.9vw] text-[#F8F8FF]">Social</h5>
              <div className="flex gap-2">
                <Link href="https://www.instagram.com/shahnawazdevdesign/" className="uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC] underline">Instagram</Link>
                <Link href="https://x.com/shahnawaz132007" className="uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC] underline">Twitter</Link>
                <Link href="https://www.linkedin.com/in/shahnawazdevdesign/" className="uppercase  leading-tight text-[.8vw] font-normal text-[#DFDCDC] underline">Linkedin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection