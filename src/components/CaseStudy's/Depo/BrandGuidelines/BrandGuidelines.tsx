import React from 'react'
import brand_identity from "../../../../assets/CaseStudy/Depo/brand_identity.svg";
import Image from 'next/image';
import final_deisgn_1 from "../../../../assets/CaseStudy/Depo/final_design_1.svg";
import final_deisgn_2 from "../../../../assets/CaseStudy/Depo/final_design_2.svg";
import final_deisgn_3 from "../../../../assets/CaseStudy/Depo/final_design_3.svg";
import final_deisgn_4 from "../../../../assets/CaseStudy/Depo/final_design_4.svg";

const BrandGuidelines = () => {
    return (
        <div>
            <div className='lg:px-[5rem] pt-[1rem] px-[1.5rem]'>
                <div className='lg:flex justify-around'>
                    <div>
                        <p className='text-[#6f6f71] text-[1.25rem] font-light  tracking-[-0.015rem]'>Guidelines</p>
                        <h1 className='text-[3.5rem] font-bold  tracking-[0.0625rem]'>Brand Identity</h1>
                    </div>
                    <div className='mt-[2rem] lg:mt-[6rem] text-[#9ba3a3] leading-[1.35rem] lg:w-[42rem]' >
                        <p className='pb-[1rem]'>The color theme, inspired by the majestic allure of the night sky, blends shades of dark blue, gradient purple, and pristine white. This captivating combination instills a sense of wonder and sophistication in users as they explore the world of NFTs.</p>
                        <p><span className='font-bold'>Roboto</span>, known for its legibility and versatility, is chosen as the primary font for the body text. For captivating headlines that demand attention, Ultra takes the stage with its bold and expressive appearance.</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image className='rounded-3xl mt-[5rem]' src={brand_identity} alt="brand_identity" />
                </div>

                <div className='mt-[8rem] ' >
                    <h2 className='text-[#9747ff] font-bold leading-[1.25rem] text-[0.8rem] lg:text-[1rem]'>_____ HIGH FIDELITY DESIGNS (FULL SCREEN CONTENT & NATIVE APP)</h2>
                    <h1 className='text-[2.375rem] leading-[2.75rem] font-bold mt-2'>Finalizing visual designs.</h1>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_1} alt="final_deisgn_1" />
                    </div>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_2} alt="final_deisgn_1" />
                    </div>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_3} alt="final_deisgn_1" />
                    </div>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_deisgn_4} alt="final_deisgn_1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandGuidelines