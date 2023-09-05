import React from 'react'
import VruscoPage from '@/components/Projects/Vrusco'
import HamburgerMenu from '@/components/Sidebar/Hamburger'


const Vrusco = () => {
  return (
    <div>
        <div className='flex md:hidden'><HamburgerMenu /></div>
      <VruscoPage />
    </div>
  )
}

export default Vrusco