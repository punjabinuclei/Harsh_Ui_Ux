import React from 'react'
import EstellaPage from '@/components/Projects/Estella'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Estella = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <EstellaPage />
        </div>
    )
}

export default Estella