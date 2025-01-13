"use client";

import React, { useState } from 'react'
import CtaButton from './CtaButton'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'

const accordionData = [
    {
        title: "What services do you offer exactly?",
        content: 
            "My primary focus is on design & development of marketing websites. As part of our process, I usually include strategy, branding, design, and development."
    },
    {
        title: "How long does it take to complete a project?",
        content: 
            "Typically, a landing takes 1-2 weeks, and Success as a Service 3-4 weeks, depending on the complexity and scope. I'll provide a detailed timeline during the initial consultation."
    },
    {
        title: "What if I don't like the design?",
        content: 
            "I offer revisions to ensure the design meets your expectations. Your feedback is crucial for me to deliver the best results."
    },
    {
        title: "Are there any refunds if I don't like the service?",
        content: 
            "Customer satisfaction is my priority. If you're not happy with my service, please reach out, and i will work to address your concerns. Refunds may be available based on specific circumstances."
    },
    {
        title: "Do I need a domain?",
        content: 
            "Yes, you need a domain to launch your website. If you don't currently have one, you'll need to purchase it. I can assist you with the purchase process, and then integrate it with your site for free. The cost of the domain will be your responsibility."
    }
];


const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className=" bg-slate-200/10 backdrop-blur-lg rounded-lg  ">
            <button
                className="flex items-center justify-between w-full py-4 px-6 text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-[#f8f8ff]">{title}</span>
                <BiChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 py-4 text-[#DFDCDC]">{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="flex md:flex-row flex-col  w-full items-start pb-5 md:gap-0 gap-6" id='faq'>
            <div className="flex-col w-full justify-between items-start">
                <h3 className="text-[5vw] font-moderniz mt-[4vw] mb-[4vw] uppercase leading-[0]">
                    FAQ'S
                </h3>
                <div className="flex flex-col gap-[1.3vw] items-start w-fit justify-start ">
                    <p className="leading-[1.3vw] text-[1.3vw] text-[#f8f8ff]">
                    We've gathered the most common questions <br/>to make things simple.
                    If you don't find your <br/>answer here, feel free to reach out!
                    </p>
                    <div className="flex">
                        <CtaButton />
                    </div>
                </div>
            </div>
            <div className="accordion flex flex-col gap-3 w-full md:max-w-[75%]  mx-auto overflow-hidden ">
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FaqSection
