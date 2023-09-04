import React from 'react'
import Image from 'next/image'
import AnalysisContainer from "./components/AnalysisContainer"
import analysis from "../../../../assets/CaseStudy/UVConnect/analysis_img.png"
import interaction_chapter_bg from "../../../../assets/CaseStudy/Depo/interaction_chapter_bg.svg"
import { bikePlatforms } from './AnalysisData';




const Analysis = () => {
    return (
        <div>
            <div className='lg:px-[7rem] pt-[6rem] px-[1.5rem]'>
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ COMPETITIVE ANALYSIS</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Understanding the competition.</h1>

                <div className='pt-[5rem]'>
                    <div className='lg:flex justify-between pb-[4rem]'>
                        {/* NFT Platforms */}
                        <AnalysisContainer
                            logo={bikePlatforms[0].logo}
                            head={bikePlatforms[0].head}
                            description={bikePlatforms[0].description}
                            items1={bikePlatforms[0].cons}
                            items2={bikePlatforms[0].pros}
                        />

                        {/* Payment Gateways */}
                        <AnalysisContainer
                            logo={bikePlatforms[1].logo}
                            head={bikePlatforms[1].head}
                            description={bikePlatforms[1].description}
                            items1={bikePlatforms[1].cons}
                            items2={bikePlatforms[1].pros}
                        />
                    </div>
                    <AnalysisContainer
                        logo={bikePlatforms[2].logo}
                        head={bikePlatforms[2].head}
                        description={bikePlatforms[2].description}
                        items1={bikePlatforms[2].cons}
                        items2={bikePlatforms[2].pros}
                    />
                </div>
                <div className='lg:h-screen lg:mt-[10rem] lg:mb-[6rem] mt-[3rem]'>
                    <Image src={analysis} alt="AI_bg" />
                </div>
            </div>
            <Image src={interaction_chapter_bg} alt="interaction_chapter_bg" />
        </div>
    )
}

export default Analysis