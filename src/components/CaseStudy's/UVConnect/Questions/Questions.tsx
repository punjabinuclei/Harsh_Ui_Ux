import React from 'react'
import QuestionContainer from './components/questionContainer'


const Questions = () => {
    return (
        <div className='lg:px-[7rem] pt-[3rem] px-[1.5rem]'>
            <h1 className='text-[1.125rem] text-[#f0f4f6] font-semibold leading-[1.875rem]'>Question areas</h1>
            <p className='text-[#9ba3a3] leading-[1.687rem]'><span className='hidden lg:inline'>I would frequently strike conversations with random individuals at Bart, coffee shops, restaurants etc. to discover patterns
                and reveal unknown insights and preferences from the people who use similar platforms. Doing this provided a deeper
                understanding of context for our design-thinking meetings.</span> During the research phase, I focused on answering the following questions:</p>
            <div className='pt-[2rem]'>
                <QuestionContainer content1='How can we ensure a user-friendly and efficient interface?' content2='What are the most essential bike data points to display?' />
                <QuestionContainer content1='How can navigation be seamlessly integrated into the app?' content2='What is the optimal way to deliver safety alerts to riders?' />
                <QuestionContainer content1='How can we maintain a cohesive design throughout the app?' content2='What are the expectations and preferences of EV sports bike riders?' />
            </div>
        </div>
    )
}

export default Questions