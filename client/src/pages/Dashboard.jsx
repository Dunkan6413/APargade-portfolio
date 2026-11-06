import React from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/Dashboard.css";
import AnimatedLayout from "../components/AnimatedLayout";

export default function Dashboard() {
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