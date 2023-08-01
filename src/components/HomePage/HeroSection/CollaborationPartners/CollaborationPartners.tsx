import React from 'react'
import mulya_logo from "../../../../assets/mulya_logo.svg"
import Image from 'next/image'
import insync_logo from "../../../../assets/insync_logo.svg"
import maui_logo from "../../../../assets/maui_logo.svg"
import estella_logo from "../../../../assets/estalla_logo.svg"
import traed_logo from "../../../../assets/traed_logo.svg"
import tedx_logo from "../../../../assets/tedx_logo.svg"

const CollaborationParnters = () => {
    return (
        <div className='px-[7rem] py-10 border-t border-b border-[] collaboration_bg mb-4'>
            <div className='flex justify-between'>
                <div>
                    <Image src={mulya_logo} alt="mulya_logo" />
                </div>
                <div>
                    <Image className='relative top-3' src={insync_logo} alt="insync_logo" />
                </div>
                <div>
                    <Image src={maui_logo} alt="maui_logo" />
                </div>
                <div>
                    <Image src={estella_logo} alt="estella_logo" />
                </div>
                <div>
                    <Image className='relative top-2' src={traed_logo} alt="traed_logo" />
                </div>
                <div>
                    <Image className='relative top-1' src={tedx_logo} alt="tedx_logo" />
                </div>

            </div>
        </div>
    )
}

export default CollaborationParnters