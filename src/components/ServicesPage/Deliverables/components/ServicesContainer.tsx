import React from 'react';
import Image from 'next/image';

interface ServicesAppProps {
    src: string;
    title: string;
    description: string;
}

const Services: React.FC<ServicesAppProps> = ({ src, title, description }) => {
    return (
        <div className='py-6 lg:py-0'>
            <Image className='pb-[1rem]' src={src} alt="img" />
            <h1 className='text-[1.125rem] font-semibold leading-[1.75rem]'>{title}</h1>
            <p className='w-[14rem] text-[1rem] text-[#6c757d] leading-[1.75rem]'>{description}</p>
        </div>
    );
};

export default Services;
