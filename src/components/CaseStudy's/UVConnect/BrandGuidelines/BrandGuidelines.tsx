import React from 'react'
import Image from 'next/image';
import brand_guidelines from "../../../../assets/CaseStudy/UVConnect/brand_guidelines.png";

const BrandGuidelines = () => {
    return (
        <div className='lg:px-[5rem] pt-[1rem] px-[1.5rem]'>
            <div className='lg:flex justify-around'>
                <div>
                    <p className='text-[#6f6f71] text-[1.25rem] font-light  tracking-[-0.015rem]'>Guidelines</p>
                    <h1 className='lg:text-[3.5rem] text-[2.5em] font-bold  tracking-[0.0625rem]'>Brand Identity</h1>
                </div>
                <div className='mt-[2rem] lg:mt-[6rem] text-[#9ba3a3] leading-[1.35rem] lg:w-[42rem] text-[0.9rem] lg:text-[1rem]' >
                    <p className='pb-[1rem] '>Drawing inspiration from the thrill of EV sports biking, the design concept centers around a futuristic, dynamic, and sleek look.</p>
                    <p>The color theme of BLUE, SILVER, and MATTE BLACK reflects the sophistication of EV technology, while the "Bruno Ace SC" typography adds a touch of modernity and elegance. This truely reflect ultraviolette’s with its dream of becoming india’s first EV superbike.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image className='rounded-3xl mt-[5rem]' src={brand_guidelines} alt="brand_identity" />
            </div>
        </div>
    )
}

export default BrandGuidelines