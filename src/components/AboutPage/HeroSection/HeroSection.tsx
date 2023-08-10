import React from 'react'
import Harsh1 from "../../../assets/About/harsh.png"
import Harsh2 from "../../../assets/About/harsh2.png"
import chiku from "../../../assets/About/chiku.png"
import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            <div className='flex justify-center mt-[5.3rem] px-7rem'>
                <Image className='z-1 relative left-[3rem] rounded-[0.75rem] w-[23rem] h-[31rem] mt-[5rem]' src={chiku} alt="Picture of the author" />
                <Image className='z-10  rounded-[0.75rem] w-[30rem] h-[40rem]' src={Harsh1} alt="Picture of the author" />
                <Image className='z-1 relative right-[2.5rem] rounded-[0.75rem] w-[30rem] h-[20rem] mt-[10rem]' src={Harsh2} alt="Picture of the author" />
            </div>
        </>
    )
}

export default HeroSection