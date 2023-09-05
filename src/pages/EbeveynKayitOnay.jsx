import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/EbeveynKayitOnay.css";
import LogoBeyaz from "../assets/LogoBeyaz.svg";
import ilustration from "../assets/ilustration.svg";
import logo from "../assets/logo.svg";

const EbeveynKayitOnay = () => {
  return (
    <div className="MusteriKayitOnay">
      <h1 className="MusteriKayitOnay-h1">KAYDINIZ TAMAMLANDI</h1>
      <img src={LogoBeyaz} alt="LogoBeyaz" className="LogoBeyaz" />
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <img src={ilustration} alt="ilustration" className="ilustration" />
      <NavLink to="/login">
        <button className="MusteriKayitOnay-btn">Oturum Aç</button>
      </NavLink>
    </div>
  );
};

export default EbeveynKayitOnay;
