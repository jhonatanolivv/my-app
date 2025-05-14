"use client";

import { useEffect, useState } from "react";
import "./Hero.css";
import profileImage from "../assets/profile.jpg.jpg"; // ajuste o caminho conforme necessário

export function Hero({ name = "Jhonatan Oliveira", title = "Frontend Developer" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <section className="hero">
      <div className="content">
        <div className="profileContainer">
          <img src={profileImage} alt="Foto de Jhonatan Oliveira" className="profileImage" />
          <div>
            <h1 className="name">{name}</h1>
            <h2 className="titleHero">{title}</h2>
          </div>
        </div>
        <div className="scrollIndicator">
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
}
