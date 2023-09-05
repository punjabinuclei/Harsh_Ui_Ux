import ContactPage from '@/components/ContactPage/ContactPage'
import React from 'react'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Contact = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <ContactPage />
        </div>
    )
}

export default Contact