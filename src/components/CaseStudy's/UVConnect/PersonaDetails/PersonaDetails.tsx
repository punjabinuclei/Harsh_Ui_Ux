import React from 'react';
import InfoContainer from './components/InfoContainer';
import { userData } from './UserData'; // Import the personas data

const PersonaDetails = () => {
    return (
        <div className='pt-[6rem] lg:px-[7rem] px-[1.5rem]'>
            <h2 className='text-[#9747ff] font-bold leading-[1.25rem]'>_____ PERSONA DETAILS</h2>
            <h1 className='text-[2.375rem] leading-[2.75rem] font-bold'>Synthesizing user research.</h1>
            {userData.map((persona, index) => (
                <div key={index} className='pt-[4rem]'>
                    <InfoContainer
                        head={persona.head}
                        Age={persona.Age}
                        Occupation={persona.Occupation}
                        Status={persona.Status}
                        Location={persona.Location}
                        Tier={persona.Tier}
                        description={persona.description}
                        PainPoints={persona.PainPointsNft}
                        Goals={persona.GoalsNft}
                        Pic={persona.Pic}
                    />
                </div>
            ))}
        </div>
    );
}

export default PersonaDetails;
