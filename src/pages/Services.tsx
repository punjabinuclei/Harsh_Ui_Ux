import React from 'react'
import ServicesPage from '@/components/ServicesPage/ServicesPage'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Services = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <ServicesPage />
        </div>
    )
}

export default Services