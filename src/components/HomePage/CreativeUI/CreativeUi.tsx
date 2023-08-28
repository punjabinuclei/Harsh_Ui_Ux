import React from 'react'
import Image from 'next/image'
import harsh_img from "../../../assets/harsh_img.png"

const CreativeUi = () => {
    return (
        <div className='my-[8rem] px-[1rem] lg:px-[7rem]'>
            <div className='justify-between lg:flex'>
                <div>
                    
                    <div className='flex justify-between '>

                        <div className=''>
                        <h1 className='text-1.125rem font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#8D1CFE] to-[#3B2CF4]'>Harsh Vesuwala</h1>
                            <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffffff00] text-[3rem] font-bold leading-[3rem]'>Creative UI UX Designer</h1>
                            <Image className='relative left-[12rem] bottom-[6rem]' src={harsh_img} alt='Harsh Vesuwala' />
                        </div>
                        {/* Desktop vErsion */}
                        <div className='hidden lg:block lg:w-[42rem] text-[1.3rem]'>
                            <p className=''>
                                Meet Harsh Vesuwala, the talented UX/UI designer and mechanical engineer from IITRAM, affectionately known as UX.Harsh! 🚀 Harsh's designs are a delightful fusion of cultural influences, adding a special touch that connects with users all over the globe. 🌏
                            </p>
                        </div>

                    </div>
                    {/* Mobile Version */}
                    <div className='lg:w-[41rem] relative bottom-20 lg:hidden'>
                        <p className=''>
                            Meet Harsh Vesuwala, the talented UX/UI designer and mechanical engineer from IITRAM, affectionately known as UX.Harsh! 🚀 Harsh's designs are a delightful fusion of cultural influences, adding a special touch that connects with users all over the globe. 🌏
                        </p>
                        <p className='pt-4'>
                            When it comes to projects, Harsh leaves no stone unturned! With unwavering dedication and a drive for excellence, he pours his heart into every endeavor, ensuring clients receive nothing less than brilliance. 💫 Your digital dreams are in safe hands with UX.Harsh! 🤝.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreativeUi