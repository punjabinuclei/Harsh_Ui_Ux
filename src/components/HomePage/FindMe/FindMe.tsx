import React from 'react'
import bg_find_me_1 from "../../../assets/bg_find_me_1.png"
import bg_find_me_2 from "../../../assets/bg_find_me_2.png"
import bg_find_me_3 from "../../../assets/bg_find_me_3.png"
import bg_find_me_4 from "../../../assets/bg_find_me_4.png"

import icon_find_me_1 from "../../../assets/icon_find_me_1.svg"
import icon_find_me_2 from "../../../assets/icon_find_me_2.svg"
import icon_find_me_3 from "../../../assets/icon_find_me_3.svg"
import icon_find_me_4 from "../../../assets/icon_find_me_4.svg"

import FindMeContainer from './components/FindMeContainer'


const FindMe = () => {
    return (
        <div className='px-[7rem] py-[7rem] find_me_bg'>
            <div>
                <h1 className='text-[3rem] font-bold pb-[2rem]'>Find UX.Harsh everywhere</h1>
            </div>
            <div className='flex justify-between'>
                <FindMeContainer bg={bg_find_me_1} icon={icon_find_me_1} username='Burnerbuzz' org='Instagram' />
                <FindMeContainer bg={bg_find_me_2} icon={icon_find_me_2} username='UX.Harsh' org='Behance' />
                <FindMeContainer bg={bg_find_me_3} icon={icon_find_me_3} username='Harsh Vesuwala' org='Fiverr' />
                <FindMeContainer bg={bg_find_me_4} icon={icon_find_me_4} username='Harsh Vesuwala' org='Linkedin' />
            </div>
        </div>
    )
}

export default FindMe