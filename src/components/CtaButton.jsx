import Link from 'next/link';
import React from 'react';

function CtaButton({ text = "Let's Talk" }) {
  return (
    <div className='w-fit'>
      <div className='w-fit'>
        <Link href={"#contact"} className="group flex flex-row gap-[.6vw] text-[#f8f8ff] text-[1vw] font-semibold py-[.7vw] px-5 rounded-3xl uppercase bg-gradient-to-l from-blue-400 to-blue-500 justify-center items-center mix-blend-hard-light">
          {text} <svg viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg" className='w-[1vw] h-[.9vw] transform transition-transform duration-450 ease-in-out group-hover:rotate-[50deg]'>
            <path d="M13.9939 0.889568C13.9329 0.340662 13.4385 -0.0548734 12.8896 0.00611593L3.94461 1C3.39571 1.06099 3.00017 1.55541 3.06116 2.10432C3.12215 2.65322 3.61657 3.04876 4.16548 2.98777L12.1165 2.10432L13 10.0554C13.061 10.6043 13.5554 10.9998 14.1043 10.9388C14.6532 10.8778 15.0488 10.3834 14.9878 9.83452L13.9939 0.889568ZM1.78087 16.6247L13.7809 1.6247L12.2191 0.375305L0.219131 15.3753L1.78087 16.6247Z" fill="#f8f8ff" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CtaButton;
