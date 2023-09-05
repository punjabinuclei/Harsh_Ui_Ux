import React from 'react'
import MulyaPage from '@/components/CaseStudy\'s/Mulya/MulyaPage'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Mulya = () => {
    return (
        <>
          <div className='flex md:hidden'><HamburgerMenu /></div>
            <MulyaPage />
        </>
    )
}

export default Mulya