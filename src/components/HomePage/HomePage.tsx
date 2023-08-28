import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CollaborationPartners from './CollaborationPartners/CollaborationPartners'
import CreativeUI from './CreativeUI/CreativeUi'
import Projects from './Projects/Projects'
import Services from './Services/Services'
import Clients from './Clients/Clients'
import FindMe from './FindMe/FindMe'
import WorkGallery from './WorkGallery/WorkGallery'
import ContactForm from './ContactForm/ContactForm'
import DayChallenge from './30DayChallenge/DayChallenge'
import Footer from './Footer/Footer'



const HomePage = () => {
    return (
        <>
            <div className='nav_hero_bg'>
                <Navbar />
                <HeroSection />
            </div>
            <CollaborationPartners />
            <CreativeUI />
            <div className="hidden lg:block">
            <Projects />
                <Services />
                <Clients />
                <FindMe />
                <div className='bg_form_thirty'>
                    <WorkGallery />
                    <ContactForm />
                    <DayChallenge />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage