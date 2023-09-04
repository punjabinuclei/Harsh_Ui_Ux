import React from 'react'
import Image from 'next/image';
import understanding_img from "../../../../assets/CaseStudy/UVConnect/understanding_img.png"

const Understanding = () => {
    return (
        <div className='lg:py-[8rem] lg:px-[7rem] px-[1.5rem]'>
            <p className='text-[#6f6f71] text-[1.25rem] font-light tracking-[-.015rem] '>Project</p>
            <h1 className='lg:text-[3rem] text-[2rem] font-bold leading-[2rem] lg:leading-[3rem] tracking-[0.0625rem]'>Understanding User and project needs</h1>
            <div className='flex justify-end pt-[1rem] lg:pt-0'>
                <p className='text-[#b8b8b8] pt-2'>In the initial stages, we conducted extensive research to understand the target audience - passionate EV sports bike enthusiasts. We gathered insights through user interviews, surveys, and competitor analysis.
                    The key user needs and project identified were
                </p>
            </div>
            <div className='hidden lg:block relative right-[2rem] mt-[4rem]'>
                <Image className='' src={understanding_img} alt="understanding" />
                <p className='text-center  text-[#9d9d9d]'>Key Identifies for Project</p>
            </div>
            <div className='mt-6 lg:hidden'>
                <div className='flex justify-center'>
                    <Image className='' src={understanding_img} alt="understanding" />
                </div>
                <p className='text-center  text-[#9d9d9d]'>Key Identifies for Project</p>
            </div>
        </div>
    )
}

export default Understanding