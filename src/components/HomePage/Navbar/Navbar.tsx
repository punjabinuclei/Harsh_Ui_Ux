import React from 'react'
import Image from 'next/image'
import NavLogo from "../../../assets/nav_logo.svg"
import Link from 'next/link'

import nav_logo2 from "../../../assets/Responsive/nav_logo.svg"


const Navbar = () => {
    return (
        <div className='w-full fixed bg-[#110929] z-10'>
            <div className='hidden lg:block mt-[1.53rem] px-[8rem] text-white'>
                <div className='flex justify-between'>
                    <div>
                        <Link href="/"><Image src={NavLogo} alt="Logo" /></Link>
                    </div>
                    <div>
                        <Link className='pr-[2.5rem] text-[1rem]' href="/About">About UX.Harsh</Link>
                        <Link className='text-[1rem]' href="/Works">Works</Link>
                        <Link className='pl-[2.5rem] text-[1rem]' href="/Services">Services</Link>
                    </div>
                    <div>
                        <button className='rounded-[4rem] nav_btn_bg py-[0.8rem] px-[2rem] relative bottom-2'><Link href="/Contact">Connect</Link></button>
                    </div>
                </div>
            </div>
            <div className='hidden px-[2rem] py-[1rem] flex justify-between'>
                <Image src={nav_logo2} alt="Logo" />
                <h1>Button</h1>
            </div>
        </div>
    )
}

export default Navbar