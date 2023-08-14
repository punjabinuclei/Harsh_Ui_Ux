import React from 'react'
import Image from 'next/image'
import harsh_img from "../../../assets/harsh_img.png"

const CreativeUi = () => {
    return (
        <div className='mt-[8rem] px-[7rem]'>
            <div className='flex justify-between'>
                <div>
                    <div>
                        <h1 className='text-1.125rem font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#8D1CFE] to-[#3B2CF4]'>Harsh Vesuwala</h1>
                    </div>
                    <div className=''>
                        <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffffff00] text-[3rem] font-bold leading-[3rem]'>Creative UI <span className=''><br />UX Designer</span></h1>
                        <Image className='relative left-[12rem] bottom-[6rem]' src={harsh_img} alt='Harsh Vesuwala' />

                    </div>
                </div>
                <div className='w-[41rem]'>
                    <p className='text-[1.5rem]'>
                        Welcome, make yourself at home. I am a multidisciplinary designer, designing and building beautiful digital products, brands, and ui/ux solutions from India.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CreativeUi