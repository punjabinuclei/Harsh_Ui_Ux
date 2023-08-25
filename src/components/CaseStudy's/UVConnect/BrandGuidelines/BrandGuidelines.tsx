import React from 'react'
import Image from 'next/image';
import final_deisgn_1 from "../../../../assets/CaseStudy/Mulya/final_design_1.svg";
import final_deisgn_2 from "../../../../assets/CaseStudy/Mulya/final_design_2_.svg";
import final_deisgn_3 from "../../../../assets/CaseStudy/Mulya/final_design_3_.svg";
import final_deisgn_4 from "../../../../assets/CaseStudy/Mulya/final_design_4_.svg";
import brand_guidelines from "../../../../assets/CaseStudy/UVConnect/brand_guidelines.png";

const BrandGuidelines = () => {
    return (
        <div className='px-[5rem] pt-[1rem]'>
            <div className='flex justify-around'>
                <div>
                    <p className='text-[#6f6f71] text-[1.25rem] font-light  tracking-[-0.015rem]'>Guidelines</p>
                    <h1 className='text-[3.5rem] font-bold  tracking-[0.0625rem]'>Brand Identity</h1>
                </div>
                <div className='mt-[6rem] text-[#9ba3a3] leading-[1.35rem] w-[42rem]' >
                    <p className='pb-[1rem]'>Drawing inspiration from the thrill of EV sports biking, the design concept centers around a futuristic, dynamic, and sleek look.</p>
                    <p>The color theme of BLUE, SILVER, and MATTE BLACK reflects the sophistication of EV technology, while the "Bruno Ace SC" typography adds a touch of modernity and elegance. This truely reflect ultraviolette’s with its dream of becoming india’s first EV superbike.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image className='rounded-3xl mt-[5rem]' src={brand_guidelines} alt="brand_identity" />
            </div>

            {/* <div className='mt-[8rem] px-[1rem]' >
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ HIGH FIDELITY DESIGNS (FULL SCREEN CONTENT & NATIVE APP)</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Finalizing visual designs.</h1>
                <div className='flex justify-center'>
                    <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_1} alt="final_deisgn_1" />
                </div>
                <div className='flex justify-center'>
                    <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_2} alt="final_deisgn_1" />
                </div>
                <div className='flex justify-center'>
                    <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_3} alt="final_deisgn_1" />
                </div>
                <div className='flex justify-center mb-[10rem]'>
                    <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_4} alt="final_deisgn_1" />
                </div>
            </div> */}
        </div>
    )
}

export default BrandGuidelines