import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: '1px', background: '#e0dfd7' }} />
        <Services />
        <div style={{ height: '1px', background: '#e0dfd7' }} />
        <Products />
        <div style={{ height: '1px', background: '#e0dfd7' }} />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
