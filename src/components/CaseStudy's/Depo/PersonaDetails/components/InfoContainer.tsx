import React from 'react'
import Image from 'next/image'

interface Props {

    head: string,
    Age: string,
    Occupation: string,
    Status: string,
    Location: string,
    Tier: string,
    description: string,
    PainPoints: string[],
    Goals: string[],
    Pic: string,

}

const InfoContainer = ({ head, Age, Occupation, Status, Location, Tier, description, PainPoints, Goals, Pic }: Props) => {
    return (
        <div className='lg:flex flex-row-reverse justify-around '>

            <div className='mt-[4rem]'>
                <Image src={Pic} alt="Pic" />
            </div>
            <div className='pt-[4rem] pb-[1rem] lg:w-[39rem]'>
                <h1 className='pb-[2rem] text-[2.375rem] font-semibold leading-[3.0625rem]'>{head}</h1>
                <h2 className='leading-[1.687rem] font-bold'>Age: <span className='font-[400]'>{Age}</span></h2>
                <h2 className='leading-[1.687rem] font-bold'>Occupation:<span className='font-[400]'>{Occupation}</span> </h2>
                <h2 className='leading-[1.687rem] font-bold'>Status: <span className='font-[400]'>{Status}</span></h2>
                <h2 className='leading-[1.687rem] font-bold'>Location: <span className='font-[400]'>{Location}</span></h2>
                <h2 className='leading-[1.687rem] font-bold'>Tier: <span className='font-[400]'>{Tier}</span></h2>

                <p className='my-[2rem] py-[1rem] border-l-[5px] border-[#9747ff] pl-[1rem] font-bold lg:text-[1.25rem] lg:leading-[2.5rem]'>{description}</p>
                <h2 className='mt-[1rem] font-semibold leading-[1.875rem] text-[1.125rem]'>Pain points:</h2>
                <ul className='list-disc'>
                    {PainPoints.map((point, index) => (
                        <li className='ml-[1rem] leading-[1.687rem] text-[0.9rem] lg:text-[1rem]' key={index}>{point}</li>
                    ))}
                </ul>
                <h2 className='mt-[1rem] font-semibold leading-[1.875rem] text-[1.125rem]'>Goals</h2>
                <ul className='list-disc'>
                    {Goals.map((goal, index) => (
                        <li className='ml-[1rem] leading-[1.687rem] text-[0.9rem] lg:text-[1rem]' key={index}>{goal}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default InfoContainer