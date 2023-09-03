import { disconnect } from 'process'
import React from 'react'
import gallery_about from "../../../assets/Responsive/gallery_about.png"
import Image from 'next/image';

const Gallery = () => {
    return (
        <div>
            <div className='about_bg3 mt-[18rem] pb-[5rem] hidden lg:block'>
                <div className='h-screen about_bg2  py-[10rem]'>


                </div>
            </div>
            <div className='lg:hidden'>
                <Image src={gallery_about} alt="gallery" />
            </div>
        </div>
    )
}

export default Gallery