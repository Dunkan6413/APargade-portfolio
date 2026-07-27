import React from 'react'
import '../assets/Layout.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();

  return (
    <nav className='navbar'>
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
        <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>À propos</Link>
        <Link to="/prestation" className={`nav-link ${location.pathname === "/prestation" ? "active" : ""}`}>Prestations</Link>
        <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>Portfolio</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
    </nav>
  )
}
