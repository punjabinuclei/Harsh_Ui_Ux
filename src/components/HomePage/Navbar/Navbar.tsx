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
                        <Link className='text-[1rem]' href="">
                            <div className="dropdown">
                                <span>Works</span>
                                <div className="dropdown-content">
                                    <Link className='py-4' href="/Depo">
                                        <span className='flex py-2 px-4 hover:font-bold hover:text-[1.1rem]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg> Depodeposit
                                        </span>
                                    </Link>
                                    <Link className='py-4' href="/Mulya">
                                        <span className='flex py-2 px-4 hover:font-bold hover:text-[1.1rem]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg> Mulya
                                        </span>
                                    </Link>
                                    <Link className='py-4' href="/Estella">
                                        <span className='flex py-2 px-4 hover:font-bold hover:text-[1.1rem]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg> Estella
                                        </span>
                                    </Link>
                                    <Link className='py-4' href="/UVConnect">
                                        <span className='flex py-2 px-4 hover:font-bold hover:text-[1.1rem]'  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg> UV Connect
                                        </span>
                                    </Link>
                                    <Link className='py-4' href="/Vrusco">
                                        <span className='flex py-2 px-4 hover:font-bold hover:text-[1.1rem]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg>  Vrusco
                                        </span>
                                    </Link>
                                    <Link className='' href="/Tedx">
                                        <span className='flex py-4 px-4 hover:font-bold hover:text-[1.1rem]' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="blue" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886" /></svg> TEDx
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </Link>
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