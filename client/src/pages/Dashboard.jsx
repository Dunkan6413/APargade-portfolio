import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pagesCSS/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
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

    getAdmin();
  }, [navigate]);

  if (!authorized) return null;

  return (
    <div className="admin-page">
      <h1 className="admin-title">Dashboard</h1>

      <section className="admin-card">
        <h2 className="admin-card-title">Portfolio</h2>

        <Link to="/addPortfolio" className="admin-button">
          Ajouter un portfolio
        </Link>
      </section>
    </div>
  );
}