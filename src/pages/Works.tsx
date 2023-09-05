import React from 'react'
import WorksPage from '@/components/WorksPage/WorksPage'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Work = () => {
    return (
        <div>
            <div className='flex md:hidden'><HamburgerMenu /></div>
            <WorksPage />
        </div>
    )
}

export default Work