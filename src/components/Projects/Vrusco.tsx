import React from 'react'
import Layout from './Layout/Layout'
import hero_img from "../../assets/Projects/Vrusco/Vrusco_img.png";
import content_img from "../../assets/Projects/Vrusco/Vrusco_content.png";

const Vrusco = () => {
  return (
    <div>
      <Layout heroSection={hero_img} title='Vrusco' about='Strategy - Design - Developmet' description='Vrusco is surat based startup of pure milk and spices product and they specialize for producing this products inhouse since 15 years using pure and trusted ingredients. After offline success, by means of vrusco we gave them online platform to share their product and 300% hike in sales were observed after implementation. ' image={content_img} />
    </div>
  )
}

export default Vrusco