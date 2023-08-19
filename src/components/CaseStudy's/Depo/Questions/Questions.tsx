import React from 'react'
import QuestionContainer from './components/questionContainer'


const Questions = () => {
    return (
        <div className='px-[7rem] pt-[3rem]'>
            <h1 className='text-[1.125rem] text-[#f0f4f6] font-semibold leading-[1.875rem]'>Question areas</h1>
            <p className='text-[#9ba3a3] leading-[1.687rem]'>I would frequently strike conversations with random individuals at Bart, coffee shops, restaurants etc. to discover patterns
                and reveal unknown insights and preferences from the people who use similar platforms. Doing this provided a deeper
                understanding of context for our design-thinking meetings. During the research phase, I focused on answering the following questions:</p>
            <div className='pt-[2.88rem]'>
                <QuestionContainer content1='What are the main pain points for users in existing NFT trading platforms?' content2='How can AI technology be effectively integrated into NFT creation without compromising quality and user control?' />
                <QuestionContainer content1='How can the app provide comprehensive NFT statistics and activity insights to users?' content2='What features and functionalities are essential for the onboarding process to encourage user registration and profile creation?' />
                <QuestionContainer content1='What are the best practices for ensuring security and privacy in wallet integration?' content2='What are the target demographics and preferences of potential users?' />
            </div>
        </div>
    )
}

export default Questions