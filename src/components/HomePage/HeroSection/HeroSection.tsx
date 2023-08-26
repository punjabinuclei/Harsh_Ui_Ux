import React from 'react'
import Image from 'next/image'
import HeroSectionStar from "../../../assets/herosection_star.svg"
import hero_image from "../../../assets/hero_img.png";
import hello from "../../../assets/hello_im_Harsh.png";
import hero_button from "../../../assets/hero_button.png";
import hero_img2 from "../../../assets/Responsive/hero_img.png"
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className='px-[2rem] mt-[5rem] text-white lg:pl-[7rem] lg:h-screen '>
            <div className='flex justify-between'>
                <div>
                    <div>
                        <p className='text-[1rem] tracking-[0.11rem]'>A designer who</p>
                        <h1 className='text-[2.5rem]  leading-[2.5rem] lg:leading-[6rem] w-[20rem] lg:text-[5.875rem] font-[800] lg:tracking-[-0.125rem] lg:w-[48rem]'>
                            Judges a book
                            by its <span className='text-[#1C51FE]'>Cover</span>..</h1>
                        <div className='justify-between lg:flex lg:mt-[5rem]'>
                            <div>
                                <p className='pt-4 leading-[1rem] lg:tracking-[0.11rem] relative lg:bottom-14 text-[0.875rem] w-[20rem] lg:w-[23rem] lg:[26rem]'>
                                    Because if the cover does not impress you what else can??</p>
                            </div>
                            {/* Small Screen Component */}

                            <div className='flex justify-center mt-4 lg:hidden'>
                                <Link href="/About">
                                    <button className='rounded-[1rem] w-[20rem] py-[0.7rem] px-[2rem] bg-[#1C51FE]'>Discover Me</button>
                                </Link>
                            </div>
                            <div className='relative hidden lg:block lg:bottom-16'>
                                <Image src={HeroSectionStar} alt="HeroSectionStart" />
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <div className='flex justify-between'>
                            <Link href="/About">
                                <Image className='relative bottom-10' src={hero_button} alt="hero_button" />
                            </Link>
                            <div className='relative left-[12rem] bottom-[4rem]'>
                                <Image src={hello} alt="hello" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block w-[28.9rem] h-[27.9rem] mr-[30px]'>
                    <Image src={hero_image} alt="hero_image" />
                </div>
            </div>

            <div className='pt-[3rem]'>
                <Image src={hero_img2} alt="hero_img2" className='lg:hidden' />
            </div>

            <div className='hidden lg:block '>
                <div className='relative flex bottom-[4rem]'>
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

            <div className='flex justify-between lg:hidden py-[6rem]'>
                <div className=''>
                    <p>Since Yrs</p>
                    <h1 className='text-[1.75rem] font-bold'>3</h1>
                </div>
                <div className=''>
                    <p>Projects</p>
                    <h1 className='text-[1.75rem] font-bold'>6+</h1>
                </div>
                <div className=''>
                    <p>Satisfaction</p>
                    <h1 className='text-[1.75rem] font-bold'>10/10</h1>
                </div>
            </div>

        </div>
    )
}

export default HeroSection