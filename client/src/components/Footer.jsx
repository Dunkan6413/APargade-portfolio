import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import separation from "../assets/Rectangle 82.svg";
import logo from "../assets/Ang-Hell logo.svg";
import SocialLinks from "./SocialLinks";
import { SiLinktree } from "react-icons/si";
import { socialLinks } from "./socialData";

const footerLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/prestation", label: "Prestations" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <img src={separation} alt="" className="footer-separate" />

      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Pied de page">
          {footerLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="footer-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href={socialLinks.linktree.url}
            target="_blank"
            rel="noreferrer"
            className="footer-linktree"
          >
            <SiLinktree aria-hidden="true" />
            Linktree
          </a>
          <SocialLinks
            names={["instagram", "behance", "youtube", "artstation"]}
            className="footer-social-list"
          />
        </div>
      </div>

      <img src={logo} alt="Ang-Hell" className="footer-logo" />
    </footer>
  );
}