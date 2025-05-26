// src/App.jsx
import React from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SuccessCases from './components/SuccessCases'
import Technologies from './components/Technologies'
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
      <SuccessCases />
      <Technologies />

      {/* <-- aqui entra o seu FAQ */}
      <FAQ />

      <Contact />
      <Footer />
    </div>
  )
}
