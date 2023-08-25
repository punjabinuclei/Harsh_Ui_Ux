import Navbar from '@/components/HomePage/Navbar/Navbar'
import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import StudyIntro from './StudyIntro/StudyIntro'
import ProjectTags from './ProjectTags/ProjectTags'
import Goals from './Goals/Goals'
import ReserachChapter from './ReserachChapter/ReserachChapter'
import Understanding from './Understanding/Understanding'
import Questions from './Questions/Questions'
import Analysis from './Analysis/Analysis'
import PersonaDetails from './PersonaDetails/PersonaDetails'
import BrandGuidelines from './BrandGuidelines/BrandGuidelines'
import Architecture from './Architecture/Architecture'
import Execution from './Execution/Execution'
import KeyFindings from './KeyFindings/KeyFindings'
import Projects from '@/components/HomePage/Projects/Projects'
import ContactForm from '@/components/HomePage/ContactForm/ContactForm'
import Footer from '@/components/HomePage/Footer/Footer'

const UVConnectPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <StudyIntro />
            <ProjectTags />
            <Goals />
            <ReserachChapter />
            <Understanding />
            <Questions />
            <Analysis />
            <PersonaDetails />
            <BrandGuidelines />
            <Architecture />
            <Execution />
            <KeyFindings />
            <Projects/>
            <ContactForm />
            <Footer />


        </div>
    )
}

export default UVConnectPage