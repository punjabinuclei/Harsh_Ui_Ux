import React from 'react'
import mulya_logo from "../../../assets/mulya_logo.svg"
import Image from 'next/image'
import insync_logo from "../../../assets/insync_logo.svg"
import maui_logo from "../../../assets/maui_logo.svg"
import estella_logo from "../../../assets/estalla_logo.svg"
import traed_logo from "../../../assets/traed_logo.svg"
import tedx_logo from "../../../assets/tedx_logo.svg"

const CollaborationParnters = () => {
    return (
        <div className='lg:w-full lg:my-[8rem] relative'>

            <div className='hidden lg:block px-[7rem] py-10  collaboration_bg  w-full relative bottom-20'>
                <div className='flex justify-between'>
                    <div>
                        <Image  src={mulya_logo} alt="mulya_logo" />
                    </div>
                    <div>
                        <Image className='relative top-3' src={insync_logo} alt="insync_logo" />
                    </div>
                    <div>
                        <Image src={maui_logo} alt="maui_logo" />
                    </div>
                    <div>
                        <Image src={estella_logo} alt="estella_logo" />
                    </div>
                    <div>
                        <Image className='relative top-2' src={traed_logo} alt="traed_logo" />
                    </div>
                    <div>
                        <Image className='relative top-1' src={tedx_logo} alt="tedx_logo" />
                    </div>

                </div>
            </div>
            <div className=' lg:hidden  px-[2rem] flex justify-center pb-[5rem]'>
                <div className='grid grid-cols-2 justify-items-between'>
                    <div >
                        <Image className='w-5/6' src={mulya_logo} alt="mulya_logo" />
                    </div>
                    <div>
                        <Image className='relative w-5/6 top-3' src={insync_logo} alt="insync_logo" />
                    </div>
                    
                    <div className='mt-2'>
                        <Image className='w-5/6' src={maui_logo} alt="maui_logo" />
                    </div>
                    <div className='mt-2'>
                        <Image className='w-5/6' src={estella_logo} alt="estella_logo" />
                    </div>
                    
                    <div className='mt-2'>
                        <Image className='w-4/6' src={traed_logo} alt="traed_logo" />
                    </div>
                    <div className='mt-2'>
                        <Image className='relative top-2' src={tedx_logo} alt="tedx_logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollaborationParnters