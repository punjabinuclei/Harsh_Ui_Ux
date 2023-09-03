import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import AboutHarsh from './AboutHarsh/AboutHarsh'
import Gallery from './Gallery/Gallery'
import LeverageDesign from '../LeverageDesign/LeverageDesign'

const AboutPage = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <HeroSection />
            </div>
            <AboutHarsh />
            <Gallery />
            <LeverageDesign />
            <div className='mt-[16rem]'>
                <Footer />
            </div>

        </>
    )
}

export default AboutPage