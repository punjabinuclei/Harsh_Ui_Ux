import React from 'react'
import ServicesContainer from './components/ServicesContainer'
import service_card1 from "../../../assets/service_card1.svg"
import service_card2 from "../../../assets/service_card2.svg"
import service_card3 from "../../../assets/service_card3.svg"


const Services = () => {
    return (
        <div className='lg:px-[6rem] my-[6rem] px-[1rem]'>
            <div>
                <h1 className='text-[3rem] text-center font-bold'>Services</h1>
            </div>
            <div className='mt-[2.13rem]  lg:flex  justify-center'>
                <ServicesContainer icon={service_card1} title='User Research and Testing' description='Expect top-notch user experiences that keep your customers happy and coming back for more! Let data guide the way to success!!' />
                <ServicesContainer icon={service_card2} title='Wireframe & Prototyping' description='Save time and avoid surprises with their detailed blueprints and interactive prototypes. Your dream project is just a step away!' />
                <ServicesContainer icon={service_card3} title='UI/UX Design' description='UX.Harsh will ensure your website or app is a joy to use, with stunning visuals and smooth interactions. ' />
            </div>
        </div>
    )
}

export default Services