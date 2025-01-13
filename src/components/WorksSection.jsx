import React from 'react'

function WorksSection() {
    const works = [
        {
            id: 1,
            title: 'Project One',
            description: 'Description for project one',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Description for project two',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Description for project three',
        }
    ];
    return (
        <div id='works' name='works' className='mt-[4vw] mb-[6vw]'>
            <div className="work-heading-wrapper w-full text-end flex flex-col items-end">
                <h3 className="works heading uppercase md:text-[5vw] text-[9vw] font-moderniz md:leading-none leading-[8vw]">My Projects</h3>
                <p className='md:text-[1.3vw] text-[3.5vw] font-normal md:w-1/2 w-[95%] text-right mb-[7vw] text-[#f8f8ff] md:leading-[1.3vw] leading-[3vw]'>Here are some of the projects I've worked on recently. Each project showcases my skills in web and mobile UX/UI design and development.</p>
            </div>
            <div className='flex flex-col md:gap-9 gap-14'>
                {works.map(work => (
                    <div key={work.id} className={`flex flex-col w-full ${work.id % 2 === 0 ? 'md:items-end' : 'md:items-start'
                        } items-center`}>
                        <div className={`w-fit ${work.id % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-${work.id % 2 === 0 ? 'right' : 'left'}`}>
                            <h3 className='md:text-xl font-bold text-[6.5vw] underline underline-offset-[3px] decoration-[1px]  font-moderniz mb-[.5vw] w-full'><a href="#">{work.title}</a></h3>
                            <div className='md:w-[38vw] md:h-[26vw] w-[90vw] h-[60vw] bg-lime-500'></div>
                            <p className='mt-[.5vw] text-[#DFDCDC]'>Web development, Designing</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorksSection