import React from 'react'
import contact_form_icon from '../../../assets/contact_form_icon1.svg'
import Image from 'next/image'
import attachmentIcon from "../../../assets/contact_form_attachment.svg"
import sendMessage from "../../../assets/sendMessage.svg"

const ContactForm = () => {
    return (
        <div className='px-[7.31rem] my-[4rem]'>
            <div className='contact_form_bg rounded-[1.5rem] pt-[2.6rem] px-[2rem]'>
                <div className=''>
                    <div className=''>
                        <Image className="mb-[1.5rem]" src={contact_form_icon} alt="contact_form_icon" />
                        <div className='text-[2.187rem] leading-[2.52rem] pb-[1.25rem]'>
                            <h1>How can I help?</h1>
                            <h1>Lets work together.</h1>
                        </div>
                        <div className='text-[1rem] font-[300] text-[#e3daff]'>
                            <p>Working together takes some practice to get in</p>
                            <p>sync, but once we find our rhythm, the result </p>
                            <p>can be magical!</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className='pt-[1.9rem]'>
                    <form>
                        <div className='flex mb-[1rem]'>
                            <input type="text" placeholder='Name'
                                className='pl-[1.25rem] text-[1rem] text-[#6C757D] w-[35rem] h-[3.5rem] rounded-[0.5rem] bg-transparent mr-[1rem] border border-[#ffffff1a]' />
                            <input type="text" placeholder='Email address'
                                className='pl-[1.25rem] text-[1rem] text-[#6C757D] w-[35rem] h-[3.5rem] rounded-[0.5rem] bg-transparent border border-[#ffffff1a]' />
                        </div>
                        <input type='text' placeholder='Message'
                            className='pl-[1.25rem] text-[1rem] text-[#6C757D] w-full pb-[5rem] pt-[1rem] rounded-[0.5rem] bg-transparent mb-[1rem] border border-[#ffffff1a]' />
                        <input type="text" placeholder='Budget range'
                            className='pl-[1.25rem] text-[1rem] text-[#6C757D] w-full h-[3.5rem] rounded-[0.5rem] bg-transparent mb-[1rem] border border-[#ffffff1a]' />

                        <button className='pl-[1.25rem] pt-[1rem] w-full rounded-[0.5rem] border border-[#ffffff1a]  flex  h-[3.5rem] text-[1rem] text-[#6C757D]'>
                            <Image className='mr-2 relative top-1' src={attachmentIcon} alt='attachment' />
                            Relevant documents
                        </button>

                        <div className='flex justify-between pb-[2rem] text-[1rem] text-[#6F6F71] mt-[2rem]'>
                            <div className=' text-[0.75rem] ml-4 relative top-6'>
                                <p>Hate contact forms?</p>
                                <button className='relative top-[0.13rem] left-[6rem]'>(click me)</button>
                            </div>
                            <button className='rounded-[0.75rem] font-[500] button_style_form text-white w-[11.6rem] py-[0.95rem]  justify-center my-[auto]'>Send Message<Image className='ml-2 inline-block' src={sendMessage}
                                alt='arrow' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm