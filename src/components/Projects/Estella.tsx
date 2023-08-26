import React from 'react'
import Layout from './Layout/Layout'
import hero_img from "../../assets/Projects/Estella/hero_img.png";
import estella_img from "../../assets/Projects/Estella/content_img.png";

const Estella = () => {
  return (
    <div>
      <Layout heroSection={hero_img} title='Estella' about='In Development' description='Estella is a digital platform that takes activist approach to responsible investing. The platform enables users customers to build wealth while making positive impact on society.' image={estella_img} />
    </div>
  )
}

export default Estella
