import React from 'react'
import Image from 'next/image'
import mintable_logo from "../../../../assets/CaseStudy/Depo/mintable_logo.svg"
import AnalysisContainer from "./components/AnalysisContainer"
import Ai_bg from "../../../../assets/CaseStudy/Depo/AI_bg.png"
import interaction_chapter_bg from "../../../../assets/CaseStudy/Depo/interaction_chapter_bg.svg"


import open_sea_logo from "../../../../assets/CaseStudy/Depo/open_sea_logo.svg"
const openSeaCons = ['Largest NFT marketplace with a vast collection of NFTs', 'User-friendly interface for easy navigation.', 'Supports multiple cryptocurrencies for transactions.', 'Robust search and filtering options.', 'High liquidity due to a large user base.'];
const openSeaPros = ['Relatively high transaction fees during congestion.', 'Limited curation, risking counterfeit or low-quality NFTs.', 'No AI-generated NFT creation feature.'];
const OpenSeaDescription = "OpenSea is the largest and one of the most popular NFT marketplaces worldwide. It offers a vast collection of NFTs from various creators and collections, catering to a wide range of interests."

import rarible_logo from "../../../../assets/CaseStudy/Depo/rarible_logo.svg"
const rariblePros = ['Offers diverse payment options, including credit cards, debit cards, UPI, and wallets.', 'Strong focus on Indian merchants and businesses.', 'Provides advanced analytics and insights for businesses.'];
const raribleCons = ['Higher transaction fees for international payments.', 'Not as specialized in zero Forex Markup for international transactions.', 'Limited global reach compared to international payment gateways.'];
const RaribleDescription = 'Razorpay is a payment gateway focused on serving Indian merchants and businesses. It offers a wide range of payment options, including credit cards, debit cards, UPI, and wallets, with a strong emphasis on providing advanced analytics and insights for businesses.'

const Analysis = () => {
    return (
        <div>
            <div className='px-[7rem] pt-[6rem]'>
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ COMPETITIVE ANALYSIS</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Understanding the competition.</h1>

                <div className='pt-[5rem]'>
                    <div className='flex justify-around'>
                        <AnalysisContainer logo={open_sea_logo} head="OpenSea" description={OpenSeaDescription} items1={openSeaCons} items2={openSeaPros} />
                        <AnalysisContainer logo={rarible_logo} head="Rarible" description={RaribleDescription} items1={raribleCons} items2={rariblePros} />
                    </div>
                    <AnalysisContainer logo={rarible_logo} head="Rarible" description={RaribleDescription} items1={raribleCons} items2={rariblePros} />
                </div>
                <div className='h-screen mt-[10rem] mb-[6rem]'>
                    <Image src={Ai_bg} alt="AI_bg" />
                </div>
            </div>
            <Image src={interaction_chapter_bg} alt="interaction_chapter_bg" />
        </div>
    )
}

export default Analysis