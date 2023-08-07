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


const App = () => {
    return (
        <div>
            <div className='flex space-x-4 pt-[2rem]'>
                <Card image={Depodeposit} title='Depodeposit' title2='(study)' category='UX-UI- Statergy' project_link='' />
                <Card image={Lohawalla} title='Lohawalla' title2='(study)' category='UX-UI- Statergy' project_link='' />
                <Card image={Mulya} title='Mulya' title2='(study)' category='UX-UI- Statergy' project_link='' />
                <Card image={Traed} title='Traed.Ai' title2='' category='UX-UI- Statergy' project_link='' />
            </div>
            <div className='flex space-x-4 pt-[1rem]'>
                <Card image={Estella} title='Estella' title2='' category='UX-UI' project_link='' />
                <Card image={UV_Connect} title='UV Connect' title2='(study)' category='UX-UI' project_link='' />
                <Card image={Vrusco} title='Vrusco' title2='' category='UX-UI-Statergy' project_link='' />
                <Card image={Tedx} title='TEDxIITRAM' title2='' category='UX-UI-Statergy' project_link='' />
            </div>
        </div>
    )
}

export default App