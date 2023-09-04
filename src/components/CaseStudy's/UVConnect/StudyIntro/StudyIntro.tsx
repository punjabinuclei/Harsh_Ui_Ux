import React from 'react'
import logo_home from "../../../../assets/CaseStudy/UVConnect/uv_logo.svg"
import Image from "next/image"

const StudyIntro = () => {
    return (
        <div className='pt-[3.4rem] lg:px-[7rem] px-[1.5rem]'>
            <div className='lg:flex justify-around'>
                <div>
                    <Image className='relative top-7 right-2' src={logo_home} alt="logo_home" />
                    <h1 className='text-[3.5rem] font-bold leading-[6.007rem] tracking-[0.0625rem]'>UV Connect</h1>
                    <p className='text-[#6f6f71] lg:text-[1.25rem] tracking-[-0.015rem] leading-[2.5rem] relative bottom-4'>IOT app for Ultraviolette superbike - 2022</p>
                </div>
                <div className='lg:pt-[9.8rem] lg:pl-[4.5rem] lg:w-[42rem]'>
                    <p className='text-[#b8b8b8] text-[0.9rem] lg:text-[1rem] leading-[1.3rem] '>
                        UV Connect is an innovative app designed to revolutionize the riding experience for users of EV sports bikes manufactured by a Bangalore-based company. The app aims to seamlessly connect riders to their bikes, providing them with a plethora of features and functionalities that enhance safety, convenience, and overall enjoyment.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default StudyIntro