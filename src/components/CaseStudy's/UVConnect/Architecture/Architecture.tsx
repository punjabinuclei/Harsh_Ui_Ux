import React from 'react'
import Image from 'next/image';
import architecture_img from "../../../../assets/CaseStudy/UVConnect/architecture_img2.png"

const Architecture = () => {
    return (

        <div className='py-[8rem] px-[7rem]'>
            <p className='text-[#6f6f71] text-[1.25rem] font-light tracking-[-.015rem] '>Architecture</p>
            <h1 className='text-[3rem] font-bold  tracking-[0.0625rem]'>User Flow and Architecture</h1>
            <div className=' '>
                <p className='text-[#b8b8b8] pt-2'>To ensure a seamless user experience, we crafted an intuitive user flow that guides riders through the app's various functionalities
                </p>
            </div>
            <div className='mt-[4rem]'>
                <Image src={architecture_img} alt="understanding" />
            </div>
        </div>
    )
}

export default Architecture