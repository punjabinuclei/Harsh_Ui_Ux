import React from 'react'
import Image from 'next/image'
import NavLogo from "../../../assets/nav_logo.svg"
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='pt-[1.53rem] px-[8rem] text-white'>
            <div className='flex justify-between'>
                <div>
                    <Image src={NavLogo} alt="Logo" />
                </div>
                <div>
                    <Link className='pr-[2.5rem] text-[1rem]' href="/">About UX.Harsh</Link>
                    <Link className='text-[1rem]' href="/">Works</Link>
                    <Link className='pl-[2.5rem] text-[1rem]' href="/">Services</Link>
                </div>
                <div>
                    <button className='rounded-[4rem] bg-gradient-to-r from-[#8D1CFE] to-[#0038ED] py-[0.6rem] px-[2rem] relative bottom-2'><Link href="/">Connect</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar