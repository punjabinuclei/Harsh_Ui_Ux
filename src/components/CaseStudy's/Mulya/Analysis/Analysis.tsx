import React from 'react'
import Image from 'next/image'
import AnalysisContainer from "./components/AnalysisContainer"
import analysis from "../../../../assets/CaseStudy/Mulya/analysis.png"
import interaction_chapter_bg from "../../../../assets/CaseStudy/Depo/interaction_chapter_bg.svg"
import { paymentGateways } from './AnalysisData';

const Analysis = () => {
    return (
        <div>
            <div className='px-[7rem] pt-[6rem]'>
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ COMPETITIVE ANALYSIS</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Understanding the competition.</h1>

                <div className='pt-[5rem]'>
                    <div className='flex justify-between'>
                        {/* NFT Platforms */}
                        <AnalysisContainer
                            logo={paymentGateways[0].logo}
                            head={paymentGateways[0].head}
                            description={paymentGateways[0].description}
                            items1={paymentGateways[0].cons}
                            items2={paymentGateways[0].pros}
                        />

                        {/* Payment Gateways */}
                        <AnalysisContainer
                            logo={paymentGateways[1].logo}
                            head={paymentGateways[1].head}
                            description={paymentGateways[1].description}
                            items1={paymentGateways[1].cons}
                            items2={paymentGateways[1].pros}
                        />
                    </div>
                    <AnalysisContainer
                        logo={paymentGateways[2].logo}
                        head={paymentGateways[2].head}
                        description={paymentGateways[2].description}
                        items1={paymentGateways[2].cons}
                        items2={paymentGateways[2].pros}
                    />
                    <div className='h-screen mt-[10rem] mb-[6rem]'>
                        <Image src={analysis} alt="AI_bg" />
                    </div>
                </div>
            </div>
            <Image src={interaction_chapter_bg} alt="interaction_chapter_bg" />

        </div>
    )
}

export default Analysis