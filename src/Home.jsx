import React from 'react';
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Skills from './Skills'
import EducationalQualification from './EducationalQualification'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;