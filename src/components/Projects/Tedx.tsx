import React from 'react'
import Layout from './Layout/Layout';
import hero_img from "../../assets/Projects/Tedx/tedx_img.png"
import tedx_img from "../../assets/Projects/Tedx/ted_content.png"

const Tedx = () => {
    return (
        <div>
            <Layout heroSection={hero_img} title='TedxIITRAM' about='Strategy - Design - Development ' description='Traed.ai is an revolutionary applications that power financial institutions, marketplaces that accelerate industry & an open innovation platform for banks, fintechs & non-banks to connect and collaborate.' image={tedx_img} />
        </div>
    )
}

export default Tedx