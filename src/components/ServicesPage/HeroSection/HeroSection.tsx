import React from 'react'
import Image from 'next/image'
import Cube from "../../../assets/Services/Cube.svg"
import Paint from "../../../assets/Services/Paint.svg"

const HeroSection = () => {
    return (
        <div className='py-[7rem] lg:px-[7rem] h-full px-[2rem]'>
            <div className='flex justify-center lg:justify-start'>
                <div>
                    <p className='text-[1.25rem] font-medium leading-[2.5rem] tracking-[-0.015rem]'>Our Services</p>
                    <h1 className='text-[2.93rem] font-bold tracking-[-0.015rem] leading-[2.8rem] lg:leading-[3.36rem]'>The List of Everything</h1>
                    <p className='text-[#bfbfbf] text-[1rem] lg:leading-[1.71875] lg:w-[32rem] pt-4 lg:pt-0'>
                        Each delivery is a succession of cycles through Strategy
                        ,Design, and Testing. And it's the stir-up of all these elements
                        that create interfaces that people will love.
                    </p>
                </div>
            </div>

            <div className=''>
                <div className='flex justify-between lg:w-[50rem]'>
                    <h1 className='text-[1.875rem] font-bold leading-[2.1rem] pt-[4rem]'>Define.</h1>
                    <Image className='relative top-10 lg:top-0' src={Cube} alt='Cube' />
                </div>
                
                <div className='lg:grid lg:grid-cols-5 lg:gap-4 pt-[2.6rem]'>
                    {/* row-1 */}
                    <div className='col-span-1'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>Concept & Vision</h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>Consultancy</p>
                            <p>Business Analysis</p>
                            <p>User Research</p>
                        </div>
                    </div>
                    <div className='col-span-1 py-4 lg:py-0'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>UX Research</h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>Current Market</p>
                            <p>User Journey</p>
                            <p>Competitor Analysis</p>
                        </div>
                    </div>
                    <div className='col-span-1 py-4 lg:py-0'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>Product Roadmap</h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>Current Market</p>
                            <p>Personas</p>
                            <p>User Journey</p>
                            <p>Competitive Analysis</p>
                        </div>
                    </div>
                    <div className='col-span-2'>

                    </div>
                </div>

                <div className='flex-row-reverse flex lg:flex-row justify-between lg:w-[29rem]'>
                    <h1 className='text-[1.875rem] font-bold leading-[2.1rem] pt-[4rem] pb-[2.8rem]'>Design.</h1>
                    <Image src={Paint} alt='Paint' />
                </div>

                <div className='lg:grid grid-cols-5 gap-4'>
                    <div className='col-span-1'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>UI/UX</h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>User Expereince Design</p>
                            <p>User Interface Design</p>
                            <p>Prototyping</p>
                            <p>Wireframing</p>
                        </div>
                    </div>
                    <div className='col-span-1 py-4 lg:py-0'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>Brand</h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>Brand Strategy</p>
                            <p>Logo Design</p>
                            <p>Brand Guidelines</p>
                            <p>Marketing Material</p>
                        </div>
                    </div>
                    <div className='col-span-1 py-4 lg:py-0'>
                        <h1 className='text-[#ac6bff] text-[1.125rem] font-semibold leading-[1.75rem]'>Multimedia <span>(soon)</span></h1>
                        <div className='text-[#6c757d] text-[1rem] leading-[1.75rem]'>
                            <p>Video</p>
                            <p>Motion Design</p>
                            <p>Graphics</p>
                        </div>
                    </div>
                    <div className='col-span-1 py-4'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection