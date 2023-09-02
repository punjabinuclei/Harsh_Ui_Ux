import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
    bg: StaticImageData,
    icon: string,
    username: string,
    org: string,
}

const FindMeContainer = ({ bg, icon, username, org }: Props) => {
    return (
        <div className='px-2 my-[1rem]'>
            <div className='lg:w-[15.91575rem] h-[23.78rem] rounded-[1.71rem] bg-[#89c6ff] bg-opacity-5 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] card_border'>
                <Image className='rounded-[1.71rem]' src={bg} alt='img' />
                <div className='relative bottom-8'>
                    <Image className='rounded-full mx-auto ' src={icon} alt='icon' />
                    <h1 className='text-[1.6rem] font-medium text-center pt-4'>{username}</h1>
                    <p className=' text-transparent bg-clip-text bg-gradient-to-l from-[#ff8d8d] to-[#f7fc0e]  font-[300] text-[0.875rem] text-center'>{org}</p>
                </div>
                <div className='flex justify-center'>
                    <button className='w-[15rem] h-[3.4rem] text-[1.2rem] font-[500] rounded-[0.75rem] bg-gradient-to-r from-[#89c6ff] to-[#3633d0]'>Follow</button>
                </div>
            </div>
        </div>
    )
}

export default FindMeContainer