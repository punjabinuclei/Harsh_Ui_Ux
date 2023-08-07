import React from 'react'
import Image from 'next/image'
import FooterLogo from "../../../assets/footer_logo.svg"
import Twitter from "../../../assets/Twitter.svg"
import Facebook from "../../../assets/Facebook.svg"
import Dribble from "../../../assets/Dribble.svg"
import Linkedin from "../../../assets/Linkedin.svg"
import TwoFingers from "../../../assets/Fingers.svg"
import Github from "../../../assets/Github.svg";

const Footer = () => {
    return (
        <div className='mb-10 px-[4rem]'>
            <div className='flex justify-between '>
                <div>
                    <Image src={FooterLogo} alt="Footer Logo" />
                    <h1 className='text-[#999] text-[0.93rem] pt-2'>Inspire.Define.Design</h1>
                    <div className='flex justify-center pt-[0.5rem]'>
                        <Image className='mx-3' src={Twitter} alt="Twi" />
                        <Image className='mx-3' src={Linkedin} alt="Linkedin" />
                        <Image className='mx-3' src={Facebook} alt="Facebook" />
                        <Image className='mx-3' src={Github} alt="Github" />
                        <Image className='mx-3' src={TwoFingers} alt="Two Fingers" />
                        <Image className='mx-3' src={Dribble} alt="Dribble" />
                    </div>
                </div>
                <div>
                    <h1 className='text-[1rem] pb-4'>Quick links</h1>
                    <div className='text-[0.93rem] text-[#999]'>
                        <p className='py-1'>Home</p>
                        <p className='py-1'>About me</p>
                        <p className='py-1'>Works</p>
                        <p className='py-1'>Contact</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[1rem] pb-4'>Social Media</h1>
                    <div className='text-[0.93rem] text-[#999]'>
                        <p className='py-1'>Instagram</p>
                        <p className='py-1'>Linkedin</p>
                        <p className='py-1'>Fiverr</p>
                        <p className='py-1'>Dribble</p>
                        <p className='py-1'>Behance</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[1rem] pb-4'>Legal</h1>
                    <div className='text-[0.93rem] text-[#999]'>
                        <p className='py-1'>Terms</p>
                        <p className='py-1'>Privacy</p>
                        <p className='py-1'>Support</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[1rem] pb-4'>Contact</h1>
                    <div className='text-[0.93rem] text-[#999]'>
                        <p className='py-1'>vesuwalaharsh@gmail.com</p>
                        <p className='py-1'>+91 7600736440</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#98A2b3] px-7rem mt-[2.8rem]'>
                <p className='text-[1rem] text-[#98a2b3] pt-[2rem]  text-center'>© 2023 UX.Harsh. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer