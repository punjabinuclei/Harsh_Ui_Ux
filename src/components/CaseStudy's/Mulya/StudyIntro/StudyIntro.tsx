import React from 'react'
import logo_home from "../../../../assets/CaseStudy/Mulya/logo_home.png"
import Image from "next/image"

const StudyIntro = () => {
    return (
        <div className='pt-[3.4rem] lg:px-[7rem] px-[1.5rem]'>
            <div className='lg:flex justify-around'>
                <div>
                    <Image className='relative top-6 right-2' src={logo_home} alt="logo_home" />
                    <h1 className='text-[3.5rem] font-bold leading-[6.007rem] tracking-[0.0625rem]'>Mulya</h1>
                    <p className='text-[#6f6f71] text-[1.25rem] tracking-[-0.015rem] leading-[2.5rem] relative bottom-4'>International payment gateway -2023</p>
                </div>
                <div className='lg:pt-[6.8rem] lg:pl-[4.5rem] lg:w-[42rem]'>
                    <p className='text-[#b8b8b8] lg:text-[1rem] text-[0.9rem] leading-[1.3rem]'>
                        Mulya is a payment gateway web application that facilitates transactions, especially
                        international payments, to India at a 1% charge, regulated by the Reserve Bank of India (RBI).
                        The platform caters to freelancers, big companies, and firms, offering Zero Forex Markup, serving
                        as an excellent alternative to Paypal and Payoneer, and guaranteeing 100% transparency.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default StudyIntro