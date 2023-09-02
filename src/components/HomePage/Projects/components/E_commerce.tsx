import React from 'react'
import Card from './Card'
import Depodeposit from "../../../../assets/project1.png"
import Lohawalla from "../../../../assets/project2.png"
import Mulya from "../../../../assets/project3.png"
import Traed from "../../../../assets/project4.png"
import Estella from "../../../../assets/project5.png"
import UV_Connect from "../../../../assets/project6.png"
import Vrusco from "../../../../assets/project7.png"
import Tedx from "../../../../assets/project8.png"


const E_commerce = () => {
  return (
    <div>
      <div className='flex justify-center space-x-4 pt-[2rem]'>
        <Card image={Lohawalla} title='Lohawalla' title2='(study)' category='UX-UI- Statergy' project_link='/Works' />
        <Card image={Vrusco} title='Vrusco' title2='' category='UX-UI-Statergy' project_link='/Vrusco' />
      </div>
    </div>
  )
}

export default E_commerce