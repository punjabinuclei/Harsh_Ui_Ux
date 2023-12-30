import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Carousel from './Carousal/Carousal'
import HeroSection from './HeroSection/HeroSection'
import WorkGallery from '../HomePage/WorkGallery/WorkGallery'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import Footer from '../HomePage/Footer/Footer'

const WorksPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Carousel />
            <WorkGallery />
            <ContactForm />
            <div className='mt-[16rem]'>
                <Footer />
            </div>
        </>
    )
}

export default WorksPage