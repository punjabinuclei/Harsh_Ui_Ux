import Navbar from '@/components/HomePage/Navbar/Navbar'
import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import StudyIntro from './StudyIntro/StudyIntro'
import ProjectTags from './ProjectTags/ProjectTags'
import Goals from './Goals/Goals'
import ReserachChapter from './ReserachChapter/ReserachChapter'
import Questions from './Questions/Questions'
import Analysis from './Analysis/Analysis'
import PersonaDetails from './PersonaDetails/PersonaDetails'
import WireFrame from './WireFrame/WireFrame'
import BrandGuidelines from './BrandGuidelines/BrandGuidelines'
import KeyFindings from './KeyFindings/KeyFindings'
import Projects from '@/components/HomePage/Projects/Projects'
import ResponsiveProjects from '@/components/HomePage/Projects/ProjectsResponsive';
import ContactForm from '@/components/HomePage/ContactForm/ContactForm'
import Footer from '@/components/HomePage/Footer/Footer'

const Depodeposit = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <StudyIntro />
            <ProjectTags />
            <Goals />
            <ReserachChapter />
            <Questions />
            <Analysis />
            <PersonaDetails />
            <WireFrame />
            <BrandGuidelines />
            <KeyFindings />
            <Projects />
            <ResponsiveProjects />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Depodeposit