import React from 'react'
import Depodeposit from '@/components/CaseStudy\'s/Depo/Depodeposit'
import HamburgerMenu from '@/components/Sidebar/Hamburger'

const Depo = () => {
    return (
        <div>
              <div className='flex md:hidden'><HamburgerMenu /></div>
            <Depodeposit />
        </div>
    )
}

export default Depo