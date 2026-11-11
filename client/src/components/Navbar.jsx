import React, { useEffect, useState } from 'react'
import '../assets/Layout.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
  let cancelled = false;

  fetch(`${import.meta.env.VITE_BACK_URL}/auth/me`, {
    credentials: "include",
    cache: "no-store",
  })
    .then((res) => {
      if (!cancelled) setIsLogged(res.ok);
    })
    .catch(() => {
      if (!cancelled) setIsLogged(false);
    });

  return () => {
    cancelled = true;
  };
}, [location]);

  async function handleLogout() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        window.location.href = '/'
      }
    } catch(err) {
      console.error("Disconnect error :", err);
    }
  }

  return (
    <nav className='navbar'>
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
        <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>À propos</Link>
        <Link to="/prestation" className={`nav-link ${location.pathname === "/prestation" ? "active" : ""}`}>Prestations</Link>
        <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>Portfolio</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
        {isLogged ? (
        <div className="nav-admin-group">
          <button className="nav-link" onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>Se déconnecter</button>
          <Link to="/admin" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>Admin</Link>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  )
}
