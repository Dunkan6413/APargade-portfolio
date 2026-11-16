import React, { useState } from "react";
import "./pagesCSS/Contact.css";
import AnimatedLayout from "../components/AnimatedLayout";

export default function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // TODO : Envoyer un mail de notification PAR message reçu sur le dashboard admin
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/mailer/contact`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lastName, firstName, email, content }),
        },
      );

      console.log("STATUS:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.log("ERROR BODY:", errorText);
        throw new Error("Couldn't send mail");
      }

      setSuccess("Votre message a bien été envoyé !");
    } catch (err) {
      console.log(err);
      setError("Impossible d'envoyer le message.");
    }
  }

  return (
    <AnimatedLayout>
      <div className="contact-hero">
        <p className="contact-title">Contact</p>

        <main className="contact-main">
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="lastName">Nom</label>
            <input
              id="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="firstName">Prénom</label>
            <input
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="content">Message</label>
            <textarea
              id="content"
              type="text"
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <button type="submit">Envoyer</button>
            {error && <p className="contact-error">{error}</p>}
            {success && <p className="contact-success">{success}</p>}
          </form>
        </main>
      </div>
    </AnimatedLayout>
  );
}
