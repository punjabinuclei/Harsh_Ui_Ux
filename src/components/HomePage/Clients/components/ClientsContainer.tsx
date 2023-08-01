import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface Props {
    icon: StaticImageData; 
    name: string,
    designation: string,
}


const ClientsContainer = ({ icon, name, designation }: Props) => {
    return (
        <div className='bg-[#251163] rounded-[0.875rem] w-[24.187rem] h-[6.25rem] p-[1rem]'>
            <div className='flex'>
                <div className='pr-[1rem]'>
                    <Image src={icon} alt='icon' />
                </div>
                <div>
                    <h1 className='text-[1.5rem] font-semibold'>{name}</h1>
                    <p className='pt-[0.1rem] text-[1.25rem]'>{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientsContainer