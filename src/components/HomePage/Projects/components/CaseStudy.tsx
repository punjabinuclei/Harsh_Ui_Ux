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


const CaseStudy = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex space-x-4 pt-[2rem]'>
                <Card image={Depodeposit} title='Depodeposit' title2='(study)' category='UX-UI- Statergy' project_link='/Depo' />
                <Card image={Mulya} title='Mulya' title2='(study)' category='UX-UI- Statergy' project_link='/Mulya' />
                <Card image={UV_Connect} title='UV Connect' title2='(study)' category='UX-UI' project_link='/UVConnect' />
            </div>
    </div>
  )
}

export default CaseStudy