import React from 'react'

const Goals = () => {
    return (
        <div className='pt-[10rem] px-[4rem]'>
            <div className='flex justify-center'>
                <div>
                    <p className='text-[#6f6f71] text-[1.25rem] font-[300]  tracking-[-0.015rem]'>Project</p>
                    <h1 className='text-[3rem] font-bold leading-[] tracking-[0.00625rem]'>Goals & Challenges</h1>
                </div>
                <div className='w-[42.875rem] pt-[6rem] pl-[4rem]'>
                    <ul className='text-[#b8b8b8] leading-[1.34375rem] list-disc'>
                        <li className='py-2'>
                            Create an <span className='text-white'>intuitive and user-friendly</span>
                            platform for NFT enthusiasts.
                        </li>
                        <li className='py-2'>
                            Implement <span className='text-white'>AI technology to automate
                            NFT generation</span> and simplify the creation process.
                        </li>
                        <li className='py-2'>
                            Provide a <span className='text-white'>secure and efficient marketplace</span>
                            for users to trade their NFTs.
                        </li>
                        <li className='py-2'>
                            Offer a visually stunning interface with
                            a white and shades of dark blue gradient purple color theme, exuding elegance and sophistication
                        </li>
                        <li className='py-2'>
                            Use the Roboto font for body text and Ultra
                            for headlines, enhancing readability and visual appeal.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Goals