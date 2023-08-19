import React from 'react'
import logo_home from "../../../../assets/CaseStudy/Depo/logo_home.svg"
import Image from "next/image"

const StudyIntro = () => {
    return (
        <div className='pt-[3.4rem] px-[7rem]'>
            <div className='flex justify-center'>
                <div>
                    <Image className='relative top-6 right-2' src={logo_home} alt="logo_home" />
                    <h1 className='text-[3.5rem] font-bold leading-[6.007rem] tracking-[0.0625rem]'>Depodeposit</h1>
                    <p className='text-[#6f6f71] text-[1.25rem] tracking-[-0.015rem] leading-[2.5rem] relative bottom-4'>AI based NFT platform -2022</p>
                </div>
                <div className='pt-[6.8rem] pl-[4.5rem] w-[42rem]'>
                    <p className='text-[#b8b8b8] text-[1rem] leading-[1.3rem]'>
                        Depodeposit is an NFT trading app that allows users to buy, bid, create,
                        sell, and collect NFTs from all over the world. It provides two modes of
                        NFT creation – direct upload and AI-generated NFTs through user-provided
                        prompts and descriptions.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default StudyIntro