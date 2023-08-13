import React from 'react'
import Carousel1 from './components/Carousal1/Carousal'
import Carousal2 from "./components/Carousal2/Carousal2"


const WorkGallery = () => {
    return (
        <div className='h-screen'>
            <div className=''>
                <h1 className='pt-[3rem] text-center'>WorkGallery</h1>
            </div>
            <div className='my-[6rem]'>
                <Carousel1 />
                <Carousal2 />
            </div>
        </div>
    )
}

export default WorkGallery