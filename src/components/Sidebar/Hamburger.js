import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import Image from 'next/image';
import logo from "../../assets/Responsive/nav_logo.svg";
import download_icon from "../../assets/Responsive/download_icon.svg"


const HamburgerMenu = () => (
    <div className='relative py-2 flex justify-between items-center w-full px-[1.5rem]'>
        <Image src={logo} alt="logo" />
        <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-0' >
            <Links />
        </Menu>
    </div>
)

const HamburgerIcon = () => (
    <div className='p-1/2'>
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </div>
)

export const Links = () => (
    <div className='py-[1rem] w-full'>
        <div className='border-b-2 border-[#ffffff1a] pb-[1rem] px-[1.25rem]'>
            <Image src={logo} alt="logo" />
        </div>
        <div className='text-[1.25rem] font-medium pt-[2rem] px-[1.25rem]'>
            <h2 className='text-[0.875rem] font-medium pb-[0.5rem]'>UX.HARSH</h2>
            <Link href="/"><p className=''>Home</p></Link>
            <Link href="/Works"><p className=''>Works</p></Link>
            <Link href="/Services"><p className=''>Services</p></Link>
            <Link href="/About"><p className=''>About UX.Harsh</p></Link>
            <Link href="/Contact"><p className=''>Contact</p></Link>
            <Link href="/Contact"><p className=''>Hire me</p></Link>
        </div>
        <div className='text-[1.25rem] font-medium pt-[2rem] pb-[1rem] px-[1.25rem]'>
            <h2 className='text-[0.875rem] font-medium pb-[0.5rem]'>Follow Us</h2>
            <Link href="/"><p className=''>Linkedin</p></Link>
            <Link href="/"><p className=''>Instagram</p></Link>
            <Link href="/"><p className=''>Fiverr</p></Link>
            <Link href="/"><p className=''>Dribble</p></Link>
            <Link href="/"><p className=''>Github</p></Link>
            <Link href="/"><p className=''>Behance</p></Link>
        </div>

        <div className='mt-[2rem] px-[1.25rem]'>
            <button className='block rounded-[1rem] nav_btn_bg w-full px-[2rem] py-[0.8rem]'>My resume <Image className='inline ml-2' src={download_icon} /></button>
            <button className='block rounded-[1rem] nav_btn_bg w-full px-[2rem] py-[0.8rem] mt-[1rem]'>Get a quote</button>
        </div>
    </div>
)

export default HamburgerMenu
