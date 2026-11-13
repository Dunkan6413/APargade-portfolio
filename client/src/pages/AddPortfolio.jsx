import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pagesCSS/Dashboard.css";
import ImageDropzone from "../components/ImageDropZone";

export default function AddPortfolio() {
  const navigate = useNavigate();

  const [authorized, setAuthorized] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null); // un File, plus une URL
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function getAdmin() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/auth/admin`,
        { method: "GET", credentials: "include" }
      );
      if (!response.ok) {
        throw new Error("Access denied");
      }
      setAuthorized(true);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    getAdmin();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!image) {
      setError("Ajoute une image.");
      return;
    }

    setSending(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("url", url);
      formData.append("image", image);

      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/port/addPortfolio`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.log("ERROR BODY:", errorText);
        throw new Error("Couldn't add portfolio");
      }

      await response.json();
      navigate("/admin");
    } catch (err) {
      console.log(err);
      setError("Impossible d'ajouter cet élément.");
    } finally {
      setSending(false);
    }
  }

  if (!authorized) return null;

  return (
    <div className="admin-page">
      <h1 className="admin-title">Ajouter un portfolio</h1>

      <section className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-field">
            Nom
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="admin-field">
            Lien (URL)
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>

          <div className="admin-field">
            Image
            <ImageDropzone file={image} onChange={setImage} />
          </div>

          {error && <p className="admin-error">{error}</p>}

          <div className="admin-actions">
            <button type="submit" className="admin-button" disabled={sending}>
              {sending ? "Ajout..." : "Ajouter"}
            </button>
            <Link to="/admin" className="admin-button admin-button--ghost">
              Annuler
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}