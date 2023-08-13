import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import Footer from '../HomePage/Footer/Footer'
import HeroSection from './HeroSection/HeroSection'

const ContactPage = () => {
    return (
        <>
            <div className='nav_bg '>
                <Navbar />
                <HeroSection />
            </div>
            <div className='relative bottom-[10rem]'>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default ContactPage