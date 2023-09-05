import AboutPage from '@/components/AboutPage/AboutPage'
import React from 'react'
import HamburgerMenu from '@/components/Sidebar/Hamburger'

const About = () => {
    return (
        <div>
            <div className='flex md:hidden'><HamburgerMenu /></div>
            <AboutPage />
        </div>
    )
}

export default About