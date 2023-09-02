import React from 'react'
import ClientsContainer from './components/ClientsContainer'
import client1demo from "../../../assets/client1demo.png"
import client2demo from "../../../assets/client2demo.png"
import client3demo from "../../../assets/client3demo.png"
import client4demo from "../../../assets/client4demo.png"
import client5demo from "../../../assets/client5demo.png"
import client6demo from "../../../assets/client6demo.png"


const Clients = () => {
    return (
        <div className='lg:px-[6rem] px-[1rem] py-[2rem]'>
            <div>
                <h1 className='text-[3rem] text-center font-bold pb-[2.21rem]'>Super Clients</h1>
            </div>
            <div className='lg:flex justify-center'>
                <ClientsContainer icon={client1demo} name="Ehab Aldissi" designation="Founder at Traed.ai" />
                <ClientsContainer icon={client2demo} name="Trent Keneddy" designation="Founder Estella" />
                <ClientsContainer icon={client3demo} name="Vrushabh Vakharia" designation="Founder of Vrusco" />
            </div>
            <div className='lg:flex justify-center lg:py-[0.6rem]'>
                <ClientsContainer icon={client4demo} name="Ivan Gonzalez" designation="CEO of MAUI" />
                <ClientsContainer icon={client5demo} name="Saurbh Panjwani" designation="Founder of Mulya" />
                <ClientsContainer icon={client6demo} name="Simprabh Chawla" designation="Founder of Lohawalla" />
            </div>

        </div>
    )
}

export default Clients