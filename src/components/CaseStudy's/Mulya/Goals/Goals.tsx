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
                            Provide a cost-effective payment gateway for international transactions to India.
                        </li>
                        <li className='py-2'>
                            Ensure compliance with RBI regulations for legal validity.
                        </li>
                        <li className='py-2'>
                            Offer 100% transparency to build trust with users.
                        </li>
                        <li className='py-2'>
                            Obtaining regulatory approval and ensuring compliance with RBI regulations.
                        </li>
                        <li className='py-2'>
                            Building trust and establishing credibility as a new player in the market
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Goals