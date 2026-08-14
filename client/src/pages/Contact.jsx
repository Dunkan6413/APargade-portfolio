import React, { useState } from "react";
import "./pagesCSS/Contact.css";

export default function Contact() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // TODO : Envoyer un mail de notification PAR message reçu sur le dashboard admin
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact-hero">
      <h1 className="contact-title">Contact</h1>

      <main className="contact-main">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            type="text"
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            type="email"
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
}
