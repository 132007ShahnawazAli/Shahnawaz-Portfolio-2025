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
        <div id='works' name='works' className='mt-[4vw]'>
            <div className="work-heading-wrapper w-full text-end flex flex-col items-end">
                <h3 className="works heading uppercase text-[5vw] font-moderniz">My Projects</h3>
                <p className='text-[1.3vw] font-normal w-1/2 text-right mb-[7vw] text-[#f8f8ff] leading-[1.3vw]'>Here are some of the projects I've worked on recently. Each project showcases my skills in web and mobile UX/UI design and development.</p>
            </div>
            <div className='flex flex-col gap-9'>
                {works.map(work => (
                    <div key={work.id} className={`flex flex-col w-full items-${work.id % 2 === 0 ? 'end' : 'start'}`}>
                        <div className={`w-fit text-${work.id % 2 === 0 ? 'left' : 'right'}`}>
                            <h3 className='text-xl font-bold text-[1.5vw] underline underline-offset-[3px] decoration-[1px] font-moderniz mb-[.5vw] w-full'><a href="#">{work.title}</a></h3>
                            <div className='w-[38vw] h-[26vw] bg-lime-500'></div>
                            <p className='mt-[.5vw] text-[#DFDCDC]'>Web development, Designing</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorksSection