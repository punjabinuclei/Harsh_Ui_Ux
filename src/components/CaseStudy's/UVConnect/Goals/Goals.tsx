import React from 'react'

const Goals = () => {
    return (
        <div className='lg:pt-[10rem] lg:px-[4rem] px-[1.5rem]'>
            <div className='lg:flex justify-center'>
                <div>
                    <p className='text-[#6f6f71] text-[1.25rem] font-[300]  tracking-[-0.015rem]'>Project</p>
                    <h1 className='text-[2rem] lg:text-[3rem] font-bold  tracking-[0.00625rem]'>Goals & Challenges</h1>
                </div>
                <div className='lg:w-[42.875rem] lg:pt-[6rem] lg:pl-[4rem] px-[1.5rem] pt-[1rem]'>
                    <ul className='text-[#b8b8b8] leading-[1.34375rem] list-disc text-[0.9rem] lg:text-[1rem]'>
                        <li className='py-2'>
                            Create an intuitive app that enhances the overall riding experience.
                        </li>
                        <li className='py-2'>
                            Provide easy access to crucial bike data and safety alerts.
                        </li>
                        <li className='py-2'>
                            Balancing a feature-rich interface while ensuring simplicity.
                        </li>
                        <li className='py-2'>
                            while ensuring simplicity. Incorporating real-time data without overwhelming the user.
                        </li>
                        <li className='py-2'>
                            Establishing a visually appealing and cohesive design.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Goals