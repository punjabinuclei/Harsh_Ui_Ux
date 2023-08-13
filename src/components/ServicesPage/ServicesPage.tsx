import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Footer/Footer'
import ContactForm from '../HomePage/ContactForm/ContactForm'
import HeroSection from './HeroSection/HeroSection'
import Deliverables from './Deliverables/Deliverables'

const Services = () => {
  return (
    <div>
      <div className='nav_bg'>
        <Navbar />
        <HeroSection />
      </div>
      <Deliverables />
      <div className='pb-[10rem]'>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Services