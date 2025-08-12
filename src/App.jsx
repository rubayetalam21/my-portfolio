import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Skills from './Skills'
import EducationalQualification from './EducationalQualification'
import Experience from './Experience'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Introduction></Introduction>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <EducationalQualification></EducationalQualification>
      <Experience></Experience>
      <Projects></Projects>
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </section>
      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">About Me</h2>
      </section>
      <section id="skills" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl">Skills</h2>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">Projects</h2>
      </section>
      <section id="contact" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl">Contact</h2>
      </section>
    </>
  )
}

export default App
