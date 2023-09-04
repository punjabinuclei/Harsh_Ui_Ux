import React from 'react'

const ProjectTags = () => {
    return (
        <div className='lg:px-[7rem] lg:pt-[10rem] px-[1.5rem] py-[4.5rem]'>
            <h1 className='text-[1.125rem] font-semibold leading-[1.875rem]'>Project tags</h1>
            <div className='hidden lg:block'>
                <div className='flex space-x-2 pt-[0.6rem] text-[0/875rem] leading-[1.25rem]'>
                    <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Currency Exchange</p>
                    <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Payment</p>
                    <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Website</p>
                </div>
            </div>
            <div>
                <div className='flex space-x-2 pt-[0.6rem] text-[0/875rem] leading-[1.25rem]'>
                    <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Currency Exchange</p>
                    <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Payment</p>
                </div>
                <div className='flex space-x-2 pt-[0.6rem] text-[0/875rem] leading-[1.25rem]'>
                <p className='case_study_tag px-[1.25rem] py-[0.56rem]'>Website</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectTags