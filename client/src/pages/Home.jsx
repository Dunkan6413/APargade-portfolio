import React from 'react'
import "./pagesCSS/Home.css";
import logo from "../assets/Ang-Hell logo.svg";
import { FaInstagram, FaLinkedinIn, FaBehance, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, url: "https://instagram.com/tonprofil", label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://linkedin.com/in/tonprofil", label: "LinkedIn" },
  { icon: FaBehance, url: "https://behance.net/tonprofil", label: "Behance" },
  { icon: FaYoutube, url: "https://youtube.com/@tonprofil", label: "YouTube" },
];

export default function Home() {
  return (
    <section className="home-hero">
      <img src={logo} alt="Logo" className="home-logo" />
 
      <p className="home-tagline">Animation 2D · Illustration · Graphisme</p>
 
      <ul className="home-social">
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
