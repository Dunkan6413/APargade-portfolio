import React from 'react'
import "./Layout.css"
import domeUrl from "./dome-background.svg";
import Navbar from '../components/Navbar';
import "./dome-background.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-shell" style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <img src={domeUrl} className="dome-background" />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}