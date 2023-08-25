import React from 'react'
import execution_bg from '../../../../assets/CaseStudy/UVConnect/execution_bg2.png';
import Image from 'next/image';
import final_img1 from "../../../../assets/CaseStudy/UVConnect/final_design1.png";
import final_img2 from "../../../../assets/CaseStudy/UVConnect/final_design2.png";
import final_img3 from "../../../../assets/CaseStudy/UVConnect/final_design3.png";
import final_img4 from "../../../../assets/CaseStudy/UVConnect/final_design4.png";

const Execution = () => {
    return (
        <div>
            <Image src={execution_bg} alt="execution_bg" />
            <div className='px-[7rem]'>
                <div className=' px-[1rem]' >
                    <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ HIGH FIDELITY DESIGNS (FULL SCREEN CONTENT & NATIVE APP)</h2>
                    <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Finalizing visual designs.</h1>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_img1} alt="final_deisgn_1" />
                    </div>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_img2} alt="final_deisgn_1" />
                    </div>
                    <div className='flex justify-center'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_img3} alt="final_img3" />
                    </div>
                    <div className='flex justify-center mb-[10rem]'>
                        <Image className='rounded-3xl mt-[5rem]' src={final_img4} alt="final_deisgn_1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Execution