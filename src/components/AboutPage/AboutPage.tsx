import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import AboutHarsh from './AboutHarsh/AboutHarsh'

const AboutPage = () => {
    return (
        <>
            <div className='nav_bg'>
                <Navbar />
                <HeroSection />
            </div>
            <AboutHarsh />
            <div className='mt-[16rem]'>
                <Footer />
            </div>

        </>
    )
}

export default AboutPage