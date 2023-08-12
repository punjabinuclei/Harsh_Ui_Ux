import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Footer/Footer'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import HeroSection from './HeroSection/HeroSection'

const Services = () => {
  return (
    <div>
      <div className='nav_bg'>
        <Navbar />
        <HeroSection />
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Services