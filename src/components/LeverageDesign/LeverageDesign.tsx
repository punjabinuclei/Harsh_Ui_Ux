import React from 'react'
import Image from 'next/image'
import Section_content from "../../assets/About/section_content.svg"

const LeverageDesign = () => {
    return (
        <div className='px-[7rem] mt-[20rem] '>
            <div className='section_content_bg'>
                <div>
                    <h1 className='text-[2.1875rem] font-bold leading-[3.1rem] text-center '>How I leverage design as a business tool</h1>
                </div>
                <div className='flex justify-center mt-[4rem]'>
                    <Image src={Section_content} alt="Section_content" />
                </div>
            </div>
        </div>
    )

}

export default LeverageDesign