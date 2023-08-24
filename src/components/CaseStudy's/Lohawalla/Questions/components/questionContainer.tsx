import React from 'react'
import Image from 'next/image'
import Img from "../../../../../assets/CaseStudy/Depo/questionContainer.png"

interface Props {
    content1: string,
    content2: string
}

const questionContainer = ({ content1, content2 }: Props) => {
    return (
        <div className='flex space-x-4 justify-center my-4 '>
            <div className='question_container_Bg py-3 px-4 w-[31rem]'>
                <Image className='pt-[1rem]' src={Img} alt="questionImg" />
                <p className='py-[0.6rem]'>{content1}</p>
            </div>
            <div className='question_container_Bg w-[36rem] py-3 px-4'>
                <Image className='pt-[1rem]' src={Img} alt="questionImg" />
                <p className='py-[0.6rem]'>{content2}</p>
            </div>
        </div>
    )
}

export default questionContainer