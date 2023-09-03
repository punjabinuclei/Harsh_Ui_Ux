import React from 'react'
import Image from 'next/image'
import Desktop from "../../../assets/Services/Desktop.svg"
import WebApp from "../../../assets/Services/WebApp.svg"
import E_Commerce from "../../../assets/Services/E_Commerce.svg"
import SAAS from "../../../assets/Services/SAAS.svg"
import TVApp from "../../../assets/Services/TVApp.svg"
import Android from "../../../assets/Services/Android.svg"
import IOS from "../../../assets/Services/IOS.svg"
import Watch from "../../../assets/Services/WatchApp.svg"
import Website from "../../../assets/Services/Website.svg"
import BrandAssets from "../../../asstes/Services/BrandAsstes.svg"

import Services from "../Deliverables/components/ServicesContainer"

const Deliverables = () => {
    return (
        <div className=' lg:px-[7rem] lg:py-[7rem] flex justify-center px-[1rem]'>
            <div className='contact_form_bg rounded-[1.5rem] pt-[2.6rem] px-[2rem] w-full'>
                <div className='lg:pt-[1.5rem] lg:pl-[1.81rem]'>
                    <h2 className='text-[#6f6f71] text-[1.25rem] leading-[2.5rem] tracking-[-0.015rem]'>Ux.Harsh Provides</h2>
                    <h1 className='text-[2.93rem] leading-[3.36rem] tracking-[-0.015rem]'>Deliverables</h1>
                    <p className='lg:w-[24.0625rem] text-[#6c757d] lg:leading-[1.71rem] leading-[1.4rem]'>
                        From small watch screens to big desktop screens, we make experience
                        that matches your requirements.
                    </p>
                </div>
                <div className='lg:grid grid-cols-4 gap-2 lg:px-[2rem] pt-[4rem]'>
                    <Services src={Desktop} title='Desktop App' description='The apps that runs natively on your computer' />
                    <Services src={WebApp} title='Web Application' description='The apps that runs in your browser' />
                    <Services src={E_Commerce} title='E-Commerce' description='The online place where you can sell your amazing products' />
                    <Services src={SAAS} title='SAAS Product' description='Management application for all services' />
                </div>
                <div className='lg:grid grid-cols-4 gap-2 lg:px-[2rem] lg:pt-[4rem]'>
                    <Services src={TVApp} title='TV App' description='Its true. Apps that run on your smart TV.' />
                    <Services src={Android} title='Android App' description='The apps that runs natively on your android device.' />
                    <Services src={IOS} title='IOS App' description='The apps that run natively on your apple device' />
                    <Services src={Watch} title='Watch App' description='Its true, apps that run on your smart watch.' />
                </div>
                <div className='lg:grid grid-cols-4 gap-2 lg:px-[2rem] lg:py-[4rem]'>
                    <Services src={Website} title='Website' description='Website of amy thing and on any device' />
                    <Services src={Android} title='Android App' description='Any digital assets for your brand marketing or graphics' />
                </div>
            </div>
        </div>
    )
}

export default Deliverables