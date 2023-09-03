import React from 'react'
import Image from 'next/image'
import Section_content from "../../assets/About/section_content.svg"
import about_design from "../../assets/Responsive/about_design2.svg";
const LeverageDesign = () => {
    return (
        <div className='lg:px-[7rem] lg:mt-[20rem] px-[1rem] relative top-[8rem]'>
            <div className='section_content_bg'>
                <div>
                    <h1 className='lg:text-[2.1875rem] text-[2rem] font-bold leading-[3.1rem] text-center '>How I leverage design as a business tool</h1>
                </div>
                <div className='flex justify-center mt-[4rem] hidden lg:block'>
                    <Image src={Section_content} alt="Section_content" />
                </div>
                <div className='lg:hidden flex justify-center mt-6'>
                    <Image src={about_design} alt="about_design" />
                </div>
            </div>
        </div>
    )

}

export default LeverageDesign