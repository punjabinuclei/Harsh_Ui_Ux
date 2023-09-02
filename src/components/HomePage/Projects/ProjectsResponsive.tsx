import React from 'react'
import Card from './components/Card'
import Depodeposit from "../../../assets/project1.png"
import Mulya from "../../../assets/project3.png"
import Estella from "../../../assets/project5.png"
import UV_Connect from "../../../assets/project6.png"

import { useRouter } from 'next/router';


const ProjectsResponsive = () => {

    const router = useRouter();
    const handleViewMoreClick = () => {
        router.push('/Works');
    };


    return (
        <div className='px-[1rem] lg:hidden'>
            <h1 className='text-center pb-[1rem] text-[2rem] font-bold'>Super Hot Drop</h1>
            <div className='flex justify-center'>
                <div>
                    <div className='py-4'>
                        <Card image={Depodeposit} title='Depodeposit' title2='(study)' category='UX-UI- Statergy' project_link='/Depo' />
                    </div>
                    <div className='py-4'>
                        <Card image={Estella} title='Estella' title2='' category='UX-UI' project_link='/Estella' />
                    </div>
                    <div className='py-4'>
                        <Card image={Mulya} title='Mulya' title2='(study)' category='UX-UI- Statergy' project_link='/Mulya' />
                    </div>
                    <div className='py-4'>
                            <Card image={UV_Connect} title='UV Connect' title2='(study)' category='UX-UI' project_link='/UVConnect' />
                    </div>
                    
                </div>
            </div>
            <div className="text-center my-[1rem]">
                <button className="rounded-[0.75rem] w-full py-3 nav_btn_bg" onClick={handleViewMoreClick}>
                    View More
                </button>
            </div>
        </div>
    )
}

export default ProjectsResponsive