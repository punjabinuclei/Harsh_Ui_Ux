import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import Footer from '../HomePage/Footer/Footer'
import HeroSection from './HeroSection/HeroSection'

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactPage