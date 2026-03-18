import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Productviewer from './components/Productviewer'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Productviewer />
        </main>
    )
}

export default App