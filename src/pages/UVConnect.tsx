import React from 'react'
import UVConnectPage from "../components/CaseStudy's/UVConnect/UVConnectPage"
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const UVConnect = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <UVConnectPage />
        </div>
    )
}

export default UVConnect