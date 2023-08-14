import React from 'react'
import Image from 'next/image'
import NavLogo from "../../../assets/nav_logo.svg"
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='pt-[1.53rem] px-[8rem] text-white'>
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
    )
}

export default Navbar