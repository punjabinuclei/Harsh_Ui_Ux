import React from 'react'
import TedxPage from '@/components/Projects/Tedx'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Tedx = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <TedxPage />
        </div>
    )
}

export default Tedx