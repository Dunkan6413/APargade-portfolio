import React from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/About.css";
import separation from "../assets/Rectangle 82.svg";
import AnimatedLayout from "../components/AnimatedLayout";

// Cadre à remplir : passer une image importée dans `src`, sinon un cadre gris s'affiche.
// ex: import illu1 from "../assets/about-1.png";  puis  const storyImages = [illu1, ...]
function Frame({ src, alt = "", className = "" }) {
  return (
    <div className={`about-frame${src ? "" : " is-empty"} ${className}`}>
      {src && <img src={src} alt={alt} />}
    </div>
  );
}

// Collage du 1er et 2e ruban
const storyImage = null;
const approachImage = null;

// Illustrations de "Mon univers"
const universeImage = null; // personnage violet
const graphismImage = null; // illustration rose

const diplomas = [
  {
    years: "2023-2025",
    title: "Bachelor Animation 2D/3D/VFX,",
    school: "(Bac +3) - Strudi",
  },
  {
    years: "2022-2023",
    title: "Webdesign - Graphiste multimédia",
    school: "(Bac +2) - Strudi",
  },
  {
    years: "2018-2021",
    title: "Communication visuelle et plurimédia",
    school: "Bac professionnel - Lycée Toulouse-Lautrec [ Bordeaux ]",
  },
];

export default function About() {
  return (
    <AnimatedLayout>
      <div>
        <section className="about-hero">
          <h1 className="about-catchphrase">
            "Je ne cherche pas le beau, je cherche le vivant"
          </h1>

          <p className="about-tagline">À propos...</p>
          <span className="about-arrow" aria-hidden="true" />
        </section>

        <section className="about-separator">
          <img
            src={separation}
            alt="Separation Line"
            className="about-separate"
          />
        </section>

        <p className="about-pseudo">
          Ang-Hell est un nom d'artiste, un pseudonyme duquel je signe tout mes
          dessins.
        </p>

        {/* Ruban 1 : histoire */}
        <section className="about-story">
          <span className="about-ribbon" aria-hidden="true" />
          <div className="about-story-inner">
            <Frame src={storyImage} className="about-bg" />

            <div className="about-story-text">
              <p>
                J'ai toujours eu des facilités en ce qui concerne
                l'illustration et la créativité.
              </p>
              <p>
                Ma première ambition était de devenir dessinatrice, puis cette
                envie a muté vers l'envie de réaliser mes propres dessins
                animés.
              </p>
              <p>
                Aujourd'hui, j'ai toujours l'espoir de pouvoir un jour
                présenter ma propre série animée.
              </p>
            </div>
          </div>
        </section>

        <section className="about-diplomas">
          <h2 className="about-title">Diplômes</h2>

          <ul className="about-diplomas-list">
            {diplomas.map(({ years, title, school }) => (
              <li key={years}>
                <span className="about-diploma-years">{years}</span>
                <strong>{title}</strong>
                <span>{school}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-approach">
          <span className="about-ribbon" aria-hidden="true" />
          <div className="about-approach-inner">
            <Frame src={approachImage} className="about-bg" />

            <p className="about-approach-text">
              Au travers d'univers vivants et authentiques, j'ai le désir
              d'offrir à mes clients une adaptation de leurs idées en projet
              clair et concret.
              <br />
              Où il s'agit de transmettre une émotion, un message, les
              possibilités sont nombreuses à l'aide d'un trait spontané.
            </p>

            <Link to="/prestation" className="about-button">
              Prestations
            </Link>
          </div>
        </section>

        <section className="about-universe">
          <header className="about-universe-head">
            <h2 className="about-title">Mon univers</h2>
            <Link to="/portfolio" className="about-button">
              Portfolio
            </Link>
          </header>

          <article className="about-feature">
            <div className="about-figure">
              <Frame src={universeImage} alt="Personnage violet" />
              <Link to="/prestation" className="about-button">
                Animation et illustration
              </Link>
            </div>

            <div className="about-feature-text">
              <p>
                Mon style s'inspire initialement du semi-réalisme et des
                cartoons des années 40 et 80. Une fusion grotesque entre un
                Looney Tunes, Don Bluth et Disney obscure.
              </p>
              <p>
                <strong>
                  Ayant une appétence pour les croquis rapides et les
                  personnages, je produis régulièrement de nouvelles poses et
                  idées. Ma spontanéité artistique, mon trait expressif, saisis
                  sur le vif et sans prétention de perfection.
                </strong>
              </p>
              <p>Je ne cherche pas le beau, je cherche le vivant.</p>
            </div>
          </article>

          <article className="about-feature is-reversed">
            <div className="about-feature-text">
              <p>
                Comme dit plus tôt, j'ai également des compétences en{" "}
                <strong>graphismes</strong>, appliquées à mes illustrations,
                elles donnent un aspect plus abouti et recherché.
              </p>
              <p>
                J'aime mes croquis et travaux finalisés, j'informe sur
                l'envers du décor de mes prestations. J'attache beaucoup
                d'importance à ce rapprochement avec le public qui rend le tout
                authentique et identifiable.
              </p>
            </div>

            <div className="about-figure">
              <Frame src={graphismImage} alt="Illustration rose" />
              <Link to="/prestation" className="about-button">
                Graphisme
              </Link>
            </div>
          </article>
        </section>
      </div>
    </AnimatedLayout>
  );
}