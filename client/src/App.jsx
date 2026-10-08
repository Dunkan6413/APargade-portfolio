import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Prestations from './pages/Prestations'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Layout from './assets/Layout'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout/>}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/prestation' element={<Prestations/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
