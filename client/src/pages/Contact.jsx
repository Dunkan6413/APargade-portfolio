import React, { useState } from "react";
import "./pagesCSS/Contact.css";
import AnimatedLayout from "../components/AnimatedLayout";

// Passe à false quand le formulaire sera de nouveau disponible
const FORM_DISABLED = true;

export default function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (FORM_DISABLED) return;

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
              disabled={FORM_DISABLED}
            />
            <label htmlFor="firstName">Prénom</label>
            <input
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={FORM_DISABLED}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={FORM_DISABLED}
            />
            <label htmlFor="content">Message</label>
            <textarea
              id="content"
              onChange={(e) => setContent(e.target.value)}
              required
              disabled={FORM_DISABLED}
            />

            <button type="submit" disabled={FORM_DISABLED}>
              Envoyer
            </button>
            {error && <p className="contact-error">{error}</p>}
            {success && <p className="contact-success">{success}</p>}
          </form>
        </main>

        {FORM_DISABLED && (
          <div className="contact-info" role="status">
            <p className="contact-info-title">
              Formulaire momentanément indisponible
            </p>
            <p className="contact-info-text">
              Le formulaire de contact n'est pas accessible pour le moment.
              Merci d'envoyer un mail à l'adresse suivante pour toute demande de contact :
            </p>
            <p className="contact-info-mail">
              pargadeangelina@gmail{/* no bots pls thx */}.com
            </p>
          </div>
        )}
      </div>
    </AnimatedLayout>
  );
}