import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
