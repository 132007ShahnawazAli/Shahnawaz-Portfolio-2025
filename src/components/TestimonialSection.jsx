import React from 'react'
import CtaButton from './CtaButton'

export default function TestimonialSection() {
    const renderCards = () => {
        return Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="card bg-slate-200/10 py-4 px-4 rounded-3xl">
                <div className="flex flex-col gap-2">
                    <div className='w-12 h-12 rounded-full bg-[url("/assets/hero_img.jpeg")] bg-center bg-cover'></div>
                    <p className='leading-[1.3vw]  font-normal text-[#DFDCDC]'>Jacob Charles</p>
                </div>
            </div>
        ));
    };

    return (
        <div className='w-full h-fit flex flex-col pt-[3vw] '>  
            <div className="work-heading-wrapper w-full text-start flex flex-col items-start">
                <h3 className="works heading uppercase md:text-[5vw] text-[9vw] font-moderniz md:leading-none leading-[8vw]">My Projects</h3>
                <p className='md:text-[1.3vw] text-[3.5vw] font-normal md:w-1/2 w-[95%] text-left pb-[1.3vw] text-[#f8f8ff] md:leading-[1.3vw] leading-[3vw]'>Here are some of the projects I've worked on recently. Each project showcases my skills in web and mobile UX/UI design and development.</p>
                <CtaButton/>
            </div>
            <div className="grid grid-cols-3 pt-[3vw] gap-x-10 gap-y-6">
                {renderCards()}
            </div>
        </div>
    )
}
