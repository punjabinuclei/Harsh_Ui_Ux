import React from 'react'
import Image, {StaticImageData} from 'next/image';
import Projects from "../../HomePage/Projects/Projects";
import ProjectsReponsive from "../../HomePage/Projects/ProjectsResponsive"
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
            <div className='lg:px-[7rem] py-[4rem] px-[1.5rem]'>
                <div className='py-[3rem]'>
                    <h3 className='text-[#6f6f71] text-[1.25rem]  leading-[0.2rem]'>About</h3>
                    <h1 className='text-[3.5rem]'>{title}</h1>
                    <div className='lg:flex justify-between pb-[6rem]'>
                        <h3 className='text-[#6f6f71]  lg:leading-[0.2rem]'>{about}</h3>
                        <p className='lg:w-[42rem] pt-4 lg:pt-0'>{description}</p>
                    </div>
                    <Image src={image} alt="image" />
                </div>
            </div>
            <Projects />
            <ProjectsReponsive />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Layout