import React from 'react'
import CtaButton from './CtaButton'

function FaqSection() {
    return (
        <div className="flex flex-col w-full items-start">
            <div className="flex w-full justify-between items-start">
                <h3 className='text-[5vw] font-moderniz mt-[4vw] mb-[4vw] uppercase leading-[0]'>FAQ'S</h3>
                <div className='flex flex-col gap-[1.3vw] items-end w-fit justify-start'>
                    <p className='leading-[1.3vw] text-[1.3vw] text-[#f8f8ff]'>Have questions? We have answers. <br/>Learn more about our products <br/> and services.</p>
                    <div className='flex'>
                        <CtaButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection