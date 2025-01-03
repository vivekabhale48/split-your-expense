import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BillPageSection } from './components/BillPageSection'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/bill-page-section' element={<BillPageSection/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
