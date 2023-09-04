import React from 'react'
import QuestionContainer from './components/questionContainer'


const Questions = () => {
    return (
        <div className='lg:px-[7rem] pt-[3rem] px-[1.5rem]'>
            <h1 className='text-[1.125rem] text-[#f0f4f6] font-semibold leading-[1.875rem]'>Question areas</h1>
            <p className='text-[#9ba3a3] leading-[1.687rem]'><span className='hidden lg:inline'>I would frequently strike conversations with random individuals at Bart, coffee shops, restaurants etc. to discover patterns
                and reveal unknown insights and preferences from the people who use similar platforms. Doing this provided a deeper
                understanding of context for our design-thinking meetings.</span> During the research phase, I focused on answering the following questions:</p>
            <div className='pt-[2.88rem]'>
                <QuestionContainer content1='How can Mulya ensure compliance with RBI regulations and provide a seamless payment processing experience?' content2='How can Mulya leverage technology to offer efficient and user-friendly payment processing solutions?' />
                <QuestionContainer content1='What strategies can be employed to build trust among potential users and compete with established payment gateways like Paypal and Payoneer?' content2='How can Mulya differentiate itself from other local and international payment gateways in terms of transparency and pricing?' />
                <QuestionContainer content1='What are the specific pain points of freelancers, companies, and firms when dealing with traditional payment gateways, and how can Mulya address them?' content2='What marketing and outreach strategies will be most effective in reaching the target audience and promoting Mulya as a reliable payment gateway?' />
            </div>
        </div>
    )
}

export default Questions