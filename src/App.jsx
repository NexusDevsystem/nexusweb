// src/App.jsx
import React from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import SuccessCases from './components/SuccessCases'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <SuccessCases />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
