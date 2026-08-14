import React from "react";
import "./pagesCSS/Contact.css";

export default function Contact() {
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
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            onChange={(e) => setLast_name(e.target.value)}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
}
