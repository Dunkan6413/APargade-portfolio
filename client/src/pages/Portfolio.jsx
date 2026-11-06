import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/Portfolio.css";
import AnimatedLayout from "../components/AnimatedLayout";

const BACK_URL = import.meta.env.VITE_BACK_URL;

function PortfolioButton({ url, children }) {
  if (url.startsWith("/")) {
    return (
      <Link to={url} className="portfolio-button">
        {children}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className="portfolio-button">
      {children}
    </a>
  );
}

function PortfolioItem({ name, url, image }) {
  return (
    <figure className="portfolio-item">
      <img
        src={`${BACK_URL}/uploads/${image}`}
        alt={name}
        className="portfolio-item-image"
      />
      <PortfolioButton url={url}>{name}</PortfolioButton>
    </figure>
  );
}

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function getPortfolios() {
      try {
        const response = await fetch(`${BACK_URL}/port/portfolios`);
        if (!response.ok) {
          throw new Error("Couldn't load portfolios");
        }
        const data = await response.json();
        if (!cancelled) setItems(data);
      } catch (err) {
        console.log(err);
        if (!cancelled) setError("Impossible de charger les portfolios.");
      }
    }

    getPortfolios();
    return () => {
      cancelled = true;
    };
  }, []);

  // 1er élément à gauche, 2e à droite, 3e à gauche, etc.
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <AnimatedLayout>
      <div>
        <section className="portfolio-hero">
          <div className="portfolio-side portfolio-side--left">
            {left.map((item) => (
              <PortfolioItem key={item._id} {...item} />
            ))}
          </div>

          <div className="portfolio-center">
            <div className="portfolio-notice">
              <h1 className="portfolio-notice-title">
                Mise à jour en cours...
                <br />
                Les nouveaux Portfolios sont en construction, voici ceux là
                pour patienter
              </h1>
              <p className="portfolio-notice-text">
                Le portfolio sur le Graphisme se trouve sur un compte dont je
                n'ai plus accès, si vous souhaitez intéragir avec mes projets,
                preferez cliquer sur le lien Behance en bas de la page (icone :
                "Bē")
              </p>
              {error && <p className="portfolio-error">{error}</p>}
            </div>

            <p className="portfolio-tagline">Portfolio</p>
          </div>

          <div className="portfolio-side portfolio-side--right">
            {right.map((item) => (
              <PortfolioItem key={item._id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </AnimatedLayout>
  );
}