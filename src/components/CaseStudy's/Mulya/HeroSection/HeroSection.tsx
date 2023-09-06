import React from 'react'
import homepage_img from "../../../../assets/CaseStudy/Mulya/homepage_img.png"
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='py-[7rem]'>
            <div className='flex justify-center'>
                <Image src={homepage_img} alt="homepage" />
            </div>
        </div>
    )
}

export default HeroSection