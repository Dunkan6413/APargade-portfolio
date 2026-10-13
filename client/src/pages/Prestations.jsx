import React from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/Prestations.css";
import AnimatedLayout from "../components/AnimatedLayout";
import separation from "../assets/Rectangle 82.svg";
import cadre from "../assets/Rectangle 11.svg";

export default function Prestations() {
  return (
    <AnimatedLayout>
      <div>
        <section className="presta-hero">
          <p className="presta-intro">
            Pour toute commande et/ou demande
            <br />
            d'informations supplémentaires
          </p>

          <span className="presta-down" aria-hidden="true">
            ↓
          </span>

          <Link to="/contact" className="presta-button">
            Contact
          </Link>

          <p className="presta-tagline">Prestations</p>
          <span className="presta-arrow" aria-hidden="true" />
        </section>

        <section className="presta-separator">
          <img
            src={separation}
            alt="Separation Line"
            className="presta-separate"
          />
        </section>

        <section className="presta-conditions-wrap">
          <div className="presta-conditions">
            <img src={cadre} alt="" className="presta-conditions-bg" />
            <h2 className="presta-conditions-title">Conditions Générales :</h2>

            <ul className="presta-conditions-list">
              <li>
                Acompte payé en amont après la validation d'un devis client.
                (l'acompte n'est pas remboursable)
              </li>
              <li>Prix augmenté/doublé selon les demandes supplémentaires</li>
              <li>
                Maximum 3 demandes de modifications offertes, pour +, cela
                demandera un supplément de la part du client{" "}
                <small>
                  (du au temps de réalisation que cela rajoute au projet). (à
                  certaines conditions, temps, taille de la demande).
                </small>
              </li>
              <li>
                Les délais de réponses ne doivent pas dépasser + de 2 semaines,
                au dela de ces délais, la commande sera annulée.
              </li>
              <li>L'engagement doit être signé par le client</li>
              <li>
                Nature du projet, est ce un projet à but non lucratif,
                commercial, autre?
              </li>
              <li>
                Me créditer/cité (trouver une manière de mieux le formuler)
              </li>
            </ul>

            <p className="presta-conditions-note">
              (Toute coopération entre le vendeur et le prestataire dois se
              faire dans le respect et la bienveillance, dans le cas contraire
              le vendeur se verra contraint d'annuler le projet).
            </p>

            {/* lien à adapter */}
            <Link to="/contact" className="presta-conditions-button">
              En savoir +
            </Link>
          </div>
        </section>
      </div>
    </AnimatedLayout>
  );
}
