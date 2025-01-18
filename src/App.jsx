import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BillPageSection } from './components/BillPageSection'
import { Navbar } from './components/NavBarSection'
import { Footer } from './components/FooterSection'
import Features from './pages/Features'
import AboutUs from './pages/AboutUs'
import HowToUsePage from './pages/HowToUse'

function App() {

  return (
    <BrowserRouter>
      {/* NavBarSection */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/bill-page-section' element={<BillPageSection/>}/>
        <Route path='/features' element={<Features />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/howtouse' element={<HowToUsePage />}/>
      </Routes>
      {/* Footer Section */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
