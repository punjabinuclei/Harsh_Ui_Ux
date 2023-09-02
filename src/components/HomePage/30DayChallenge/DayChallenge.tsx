import React from 'react'
import Image from 'next/image'
import thirty_day from "../../../assets/ThirtyDayChallenge.png"
import thirty_star from "../../../assets/start_thirty.png"

const DayChallenge = () => {
    return (
        <div className='lg:pb-[10rem] lg:mt-[14rem] '>

            <div className=' lg:mx-[7rem] bg-[#0D042A] rounded-[0.125rem]  lg:h-[25rem] box_shadow_thirty py-[4rem] lg:py-0'>
                <div className=' flex justify-center pt-[3.16rem]'>
                    <Image src={thirty_day} alt="thirty_day" />
                </div>
                <div className='flex justify-center'>
                    <button className='thirty_day_button w-[12rem] py-[0.8rem]'>Check Out <Image className='inline-block ml-1' src={thirty_star} alt='' /></button>
                </div>
                <div className='mt-[3rem] lg:mt-[3rem] mb-[2rem] flex justify-around lg:justify-center text-[0.8rem] font-[300] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A088C2]'>
                    <p>New concepts</p>
                    <p className='lg:px-[6rem] '>Prototyped</p>
                    <p>Full Application</p>
                </div>
            </div>
        </div>
    )
}

export default DayChallenge