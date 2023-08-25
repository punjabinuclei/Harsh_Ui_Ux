import React from 'react'
import InfoContainer from './components/InfoContainer';

// NFT ENTHIUSIAST EMILY
import persona_image1 from "../../../../assets/CaseStudy/Depo/persona-image_1.svg"
const head = 'NFT Enthusiast Emily';
const Age = '28';
const Occupation = ' Marketing Manager at a tech company';
const Status = 'Single';
const Location = 'San Francisco, California, USA';
const Tier = 'High-income-earner';
const description = "“As an NFT enthusiast, I love exploring and collecting unique digital assets. I'm always on the lookout for a diverse and user-friendly platform that allows me to discover and acquire NFTs from various creators and collections. I value a seamless and engaging experience that enables me to explore new trends in the NFT market and stay updated with the latest releases.”";
const PainPointsNft = ['Difficulty in finding a platform with a broad range of high-quality NFTs.', 'Frustration with complex interfaces and poor navigation on some platforms.', 'Concerns about the legitimacy and security of NFT transactions.']
const GoalsNft = ['Discover and collect NFTs from various categories and artists.', 'Engage with a user-friendly platform that provides a smooth trading experience.', 'Stay informed about trending NFTs and upcoming releases in the market.']



const PersonaDetails = () => {
    return (
        <div className='pt-[6rem] px-[7rem]'>
            <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ PERSONA DETAILS</h2>
            <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Synthesizing user research.</h1>
            <div className='pt-[4rem]'>
                <InfoContainer head={head} Age={Age} Occupation={Occupation} Status={Status} Location={Location} Tier={Tier} description={description} PainPoints={PainPointsNft} Goals={GoalsNft} Pic={persona_image1} />
            </div>

            <div className='pt-[4rem]'>
                <InfoContainer head={head} Age={Age} Occupation={Occupation} Status={Status} Location={Location} Tier={Tier} description={description} PainPoints={PainPointsNft} Goals={GoalsNft} Pic={persona_image1} />
            </div>

            <div className='pt-[4rem]'>
                <InfoContainer head={head} Age={Age} Occupation={Occupation} Status={Status} Location={Location} Tier={Tier} description={description} PainPoints={PainPointsNft} Goals={GoalsNft} Pic={persona_image1} />
            </div>
        </div>
    )
}

export default PersonaDetails