import ContactForm from '@/components/HomePage/ContactForm/ContactForm'
import Footer from '@/components/HomePage/Footer/Footer'
import Navbar from '@/components/HomePage/Navbar/Navbar'
import Projects from '@/components/HomePage/Projects/Projects'
import React from 'react'
import HeroSection from './HeroSection/HeroSection'

const Lohawalla = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Lohawalla