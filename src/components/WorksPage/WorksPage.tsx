import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import WorkGallery from '../HomePage/WorkGallery/WorkGallery'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import Footer from '../HomePage/Footer/Footer'

const WorksPage = () => {
    return (
        <>
            <div className='nav_bg'>
                <Navbar />
                <HeroSection />
            </div>
            <WorkGallery />
            <ContactForm />
            <div className='mt-[16rem]'>
                <Footer />
            </div>
        </>
    )
}

export default WorksPage