import React from 'react'
import Image from 'next/image'


interface Props {
    icon: string;
    title: string;
    description: string;
}

const ServicesContainer = ({ icon, title, description }: Props) => {
    return (
        <div className='bg-[#251163] rounded-[0.875rem] px-[1rem] py-[1rem] w-[23rem] h-[17rem] border border-[#693B93] mx-1'>
            <div>
                <Image src={icon} alt={title} />
            </div>
            <div className='py-[0.21rem]'>
                <h1 className='text-[1.5rem] font-semibold'>{title}</h1>
            </div>
            <div>
                <p className='text-[1.2rem] leading-[1.78rem]'>{description}</p>
            </div>
        </div>
    )
}

export default ServicesContainer