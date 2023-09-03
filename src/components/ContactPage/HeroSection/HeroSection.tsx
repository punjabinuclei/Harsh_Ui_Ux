import React from 'react'
import Image from 'next/image'
import contact_image from "../../../assets/Responsive/ContactImg.svg"

const HeroSection = () => {
    return (
        <div className='lg:flex justify-between lg:px-[7rem] pt-[8rem] lg:h-screen px-[2rem]'>
            <div>
                <p className='tracking-[0.11rem] leading-[1.625rem]'>Connect</p>
                <h1 className='lg:text-[5.875rem] text-[4.7rem] leading-[5.6rem] tracking-[-0.125rem] font-[800]'>Lets chat</h1>
                <p className='lg:w-[25.75rem] leading-[1.625rem] tracking-[0.11rem]'>I am a tea & coffee both person. Want to buy one for me </p>
            </div>
            <div>
                <Image src={contact_image} alt="Contact Image" />
            </div>
        </div>
    )
}

export default HeroSection