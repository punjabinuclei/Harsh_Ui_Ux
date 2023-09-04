import React from 'react'
import Image from 'next/image'

interface Props {
    logo: string,
    head: string,
    description: string,
    items1: string[];
    items2: string[];
}

const AnalysisContainer = ({ logo, head, description, items1, items2 }: Props) => {
    return (
        <div className='lg:w-[30rem] my-[1rem] lg:my-0'>
            <Image src={logo} alt="logo" />
            <h1 className='text-[1.1225rem] font-bold leading-[1.875rem] pt-[1.5rem]'>{head}</h1>
            <p className='leading-[1.687rem] pt-[1rem] text-[0.9rem] lg:text-[1rem]'>{description}</p>
            <h1 className='pt-[1.56rem] pb-[1rem] text-[1.125rem] font-bold leading-[1.875rem]'>Pros</h1>
            {/* list item component */}
            <ul className='list-disc'>
                {items1.map((item, index) => (
                    <li className='ml-[1rem] leading-[1.687rem] text-[0.9rem] lg:text-[1rem]' key={index}>{item}</li>
                ))}
            </ul>
            <h1 className='pt-[1.56rem] pb-[1rem] text-[1.125rem] font-bold leading-[1.875rem]'>Cons</h1>
            {/* list item component */}
            <ul className='list-disc'>
                {items2.map((item, index) => (
                    <li className='ml-[1rem] leading-[1.687rem] text-[0.9rem] lg:text-[1rem]' key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default AnalysisContainer