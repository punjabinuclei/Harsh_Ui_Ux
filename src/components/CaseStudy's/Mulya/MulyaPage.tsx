import ContactForm from '@/components/HomePage/ContactForm/ContactForm'
import Footer from '@/components/HomePage/Footer/Footer'
import Navbar from '@/components/HomePage/Navbar/Navbar'
import Projects from '@/components/HomePage/Projects/Projects'
import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import StudyIntro from './StudyIntro/StudyIntro'
import ProjectTags from './ProjectTags/ProjectTags'
import Goals from './Goals/Goals'
import ReserachChapter from './ReserachChapter/ReserachChapter'
import Questions from './Questions/Questions'
import Analysis from './Analysis/Analysis'
import PersonaDetails from './PersonaDetails/PersonaDetails'
import BrandGuidelines from './BrandGuidelines/BrandGuidelines'
import KeyFindings from './KeyFindings/KeyFindings'

const MulyaPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <StudyIntro />
            <ProjectTags />
            <Goals />
            <ReserachChapter />
            <Questions />
            <Analysis />
            <PersonaDetails />
            <BrandGuidelines />
            <KeyFindings/>
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default MulyaPage