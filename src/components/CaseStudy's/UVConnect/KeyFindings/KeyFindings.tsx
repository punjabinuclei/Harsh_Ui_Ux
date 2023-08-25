import React from 'react'
import Image from 'next/image'
import success from "../../../../assets/CaseStudy/UVConnect/success.png"

const KeyFindings = () => {
    return (
        <div className=' my-[6rem]'>
            <div className=''>
                <h2 className='text-center text-[#9747ff] font-bold leading-[1.25rem]'>_____ KEY FINDINGS</h2>
                <h1 className='text-center text-[2.375rem] leading-[2.75rem] font-bold'>Measuring success.</h1>
                <div className='flex justify-center mt-[5rem]'>
                    <div className='flex justify-center py-[5rem] w-[75rem] bg-purple-900'>
                        <div className='w-[65rem] bg-purple-900  flex justify-center'>
                            <ul className='list-disc text-[#ffffffd1] leading-[2.75rem]'>
                                <li>
                                    The user-centric approach led to an intuitive app that meets the diverse needs of riders.
                                </li>
                                <li>
                                    Real-time tracking and safety alerts enhance the overall riding experience.
                                </li>
                                <li>
                                    The cohesive design ensures a visually appealing and memorable interface.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-[6rem]'>
                <Image src={success} alt="success" />
                </div>
            </div>
        </div>
    )
}

export default KeyFindings