import React from 'react';
import Image from 'next/image';
import AnalysisContainer from './components/AnalysisContainer';
import Ai_bg from '../../../../assets/CaseStudy/Depo/AI_bg.png';
import interaction_chapter_bg from '../../../../assets/CaseStudy/Depo/interaction_chapter_bg.svg';
import { analysisData } from './AnalysisData';

const Analysis = () => {
    return (
        <div>
            <div className='px-[7rem] pt-[6rem]'>
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ COMPETITIVE ANALYSIS</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Understanding the competition.</h1>

                <div className='pt-[5rem]'>
                    <div className='flex justify-between'>
                        {/* OpenSea */}
                        <AnalysisContainer
                            logo={analysisData[0].logo}
                            head={analysisData[0].head}
                            description={analysisData[0].description}
                            items1={analysisData[0].cons}
                            items2={analysisData[0].pros}
                        />

                        {/* Rarible */}
                        <AnalysisContainer
                            logo={analysisData[1].logo}
                            head={analysisData[1].head}
                            description={analysisData[1].description}
                            items1={analysisData[1].cons}
                            items2={analysisData[1].pros}
                        />
                    </div>
                    <div className='pt-[5rem]'>
                        {/* Mintable */}
                        <AnalysisContainer
                            logo={analysisData[2].logo}
                            head={analysisData[2].head}
                            description={analysisData[2].description}
                            items1={analysisData[2].cons}
                            items2={analysisData[2].pros}
                        />
                    </div>
                </div>
                <div className='h-screen mt-[10rem] mb-[6rem]'>
                    <Image src={Ai_bg} alt="AI_bg" />
                </div>
            </div>
            <Image src={interaction_chapter_bg} alt="interaction_chapter_bg" />
        </div>
    );
}

export default Analysis;
