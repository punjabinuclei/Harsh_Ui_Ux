import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
    image: StaticImageData,
    title: string,
    title2: string,
    category: string,
    project_link: string
}

const Card = ({ image, title, title2, category, project_link }: Props) => {
    return (
        <div className='rounded-[0.5rem] bg-[#dfdfdf] w-[17rem] h-[23.5rem] p-[0.62rem]'>
            <div>
                <Image src={image} alt={title} />
            </div>
            <div className='pt-[1rem] pb-[1rem]'>
                <h1 className='text-[1.425rem] font-bold text-[#232323]'>{title} <span className='text-[0.875rem]'>{title2}</span></h1>
            </div>
            <div className='flex justify-between border-t border-[#edecec]  text-[0.75rem] text-[#1c51fe] '>
                <p className='mt-[0.48rem] px-4 bg-[#E3DAFF] py-[0.4rem] rounded-[4.13rem]'>{category}</p>
                <Link className=' pt-[0.88rem]' href={project_link}> {/* Use Link component with the passed project_link */}
                    <button className="font-bold">View Project</button>
                </Link>
            </div>
        </div>
    )
}

export default Card