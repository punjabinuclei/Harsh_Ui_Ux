import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'


const HomePage = () => {
    return (
        <>
            <div className='nav_hero_bg'>
                <Navbar />
                <HeroSection />
            </div>
        </>
    )
}

export default HomePage