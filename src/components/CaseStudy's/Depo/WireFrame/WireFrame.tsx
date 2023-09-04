import React from 'react'
import wireframe from "../../../../assets/CaseStudy/Depo/wireframe.svg";
import Image from 'next/image';
import architecture from "../../../../assets/CaseStudy/Depo/architecture1.svg"
import execution_chapter_bg from "../../../../assets/CaseStudy/Depo/execution_chapter_bg.svg"

const WireFrame = () => {
    return (
        <div>
            <div className='pt-[6rem] lg:px-[7rem] px-[1.5rem]'>
                <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ Low fidelity designs</h2>
                <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Wireframe and interactions</h1>
                <div>
                    <h1 className='mt-[6rem] text-[#f0f4f6] text-[1.125rem] font-semibold leading-[1.875rem]'>Wireframes</h1>
                    <p className='text-[#9BA3A3] lg:w-[60rem] leading-[1.687rem] pt-[1rem]'>During the interaction design phase, I created wireframes for each screen of the app, focusing on user flows, navigation, and key interactions. This step allowed them to visualize the app's structure and functionalities before moving to the final design phase.</p>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[2rem]' src={wireframe} alt="wireframe" />
                    </div>
                </div>
                <div>
                    <h1 className='mt-[6rem] text-[#f0f4f6] text-[1.125rem] font-semibold leading-[1.875rem]'>Architecture(tour)</h1>
                    <p className='text-[#9BA3A3] lg:w-[60rem] leading-[1.687rem] pt-[1rem]'>App established a clear information architecture that guided users seamlessly through the app's various sections. They ensured that the navigation menus and interactions were intuitive and user-friendly for both trading and AI-based NFT creation.</p>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[2rem]' src={architecture} alt="architecture" />
                    </div>
                </div>
            </div>
            <Image  src={execution_chapter_bg} alt="execution_chapter_bg" />
        </div>
    )
}

export default WireFrame