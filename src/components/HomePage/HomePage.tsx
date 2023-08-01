import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CollaborationPartners from './HeroSection/CollaborationPartners/CollaborationPartners'
import CreativeUI from './CreativeUI/CreativeUi'



const HomePage = () => {
    return (
        <>
            <div className='nav_hero_bg'>
                <Navbar />
                <HeroSection />
            </div>
            <CollaborationPartners />
            <CreativeUI />
        </>
    )
}

export default HomePage