import React from 'react'
import "./Layout.css"
import domeUrl from "./dome-background.svg";
import Navbar from '../components/Navbar';
import "./dome-background.css";
import { Outlet } from "react-router-dom";
import AnimatedOutlet from '../components/AnimatedOutlet';

export default function Layout() {
  return (
    <div className="app-shell" style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <img src={domeUrl} className="dome-background" />
        <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <AnimatedOutlet />
      </main>
    </div>
  );
}