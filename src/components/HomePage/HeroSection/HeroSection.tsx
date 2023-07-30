import React from 'react'
import Image from 'next/image'
import HeroSectionStar from "../../../assets/herosection_star.svg"
import hero_image from "../../../assets/hero_image.png"
import hello from "../../../assets/hello_im_Harsh.png"

const HeroSection = () => {
    return (
        <div className='mt-[5rem] text-white pl-[7rem] h-screen'>
            <div className='flex justify-between'>
                <div>
                    <div>
                        <p className='text-[1rem] tracking-[0.11rem]'>A designer who</p>
                        <h1 className='relative bottom-4 text-[5.875rem] font-[800] tracking-[-0.125rem]'>
                            Judges a book<span className='relative bottom-10'>
                                <br />by its <span className='text-[#1C51FE]'>Cover</span>..</span></h1>
                        <div className='flex justify-between'>
                            <div>
                                <p className='tracking-[0.11rem] relative bottom-14'>
                                    Because if the cover does not impress<br />you what else can??</p>
                            </div>
                            <div className='relative bottom-16'>
                                <Image src={HeroSectionStar} alt="HeroSectionStart" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <button className='rounded-full bg-gradient-to-r from-[#8D1CFE] to-[#0038ED] 
                            px-[2rem] py-[1rem]'>Discover Me</button>
                        </div>
                        <div className='relative left-[16rem] bottom-[3rem]'>
                            <Image src={hello} alt="hello" />
                        </div>
                    </div>
                </div>
                <div className='w-[28.9rem] h-[27.9rem] mr-[30px]'>
                    <Image src={hero_image} alt="hero_image" />
                </div>
            </div>
            <div className='mt-[1.5rem] flex '>
                <div className='pr-[3.5rem]'>
                    <p>Doing this since</p>
                    <h1 className='text-[1.75rem] font-bold'>3+ years</h1>
                </div>
                <div className='pr-[3.5rem]'>
                    <p>Projects</p>
                    <h1 className='text-[1.75rem] font-bold'>6+</h1>
                </div>
                <div className='pr-[3.5rem]'>
                    <p>Customer Enjoyed</p>
                    <h1 className='text-[1.75rem] font-bold'>10/10</h1>
                </div>


            </div>

        </div>
    )
}

export default HeroSection