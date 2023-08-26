import React from 'react'
import Image, {StaticImageData} from 'next/image';
import Projects from "../../HomePage/Projects/Projects"
import ContactForm from '@/components/HomePage/ContactForm/ContactForm';
import Footer from '@/components/HomePage/Footer/Footer';

interface LayoutProps {
    heroSection: StaticImageData,
    title: string,
    about: string,
    description: string,
    image: StaticImageData,
}


const Layout = ({ heroSection, title, about, description, image }: LayoutProps) => {
    return (
        <div>
            <Image src={heroSection} alt="heroSection" />
            <div className='px-[7rem] py-[4rem]'>
                <div className='py-[3rem]'>
                    <h3 className='text-[#6f6f71] text-[1.25rem]  leading-[0.2rem]'>About</h3>
                    <h1 className='text-[3.5rem]'>{title}</h1>
                    <div className='flex justify-between pb-[6rem]'>
                        <h3 className='text-[#6f6f71]  leading-[0.2rem]'>{about}</h3>
                        <p className='w-[42rem]'>{description}</p>
                    </div>
                    <Image src={image} alt="image" />
                </div>
            </div>
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Layout