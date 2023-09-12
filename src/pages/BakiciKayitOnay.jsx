import React from "react";
import "../styles/BakiciKayitOnay.css";
import { NavLink } from "react-router-dom";
import ILUSTRASYON from "../assets/ILUSTRASYON-2.svg";

const BakiciKayitOnay = () => {
  return (
    <div className="BakiciKayitOnay text-center">
      <h1 className="BakiciKayitOnay_h1">Teşekkürler! TAKIMA HOŞGELDİN</h1>
      <div>
        <img src={ILUSTRASYON} alt="ILUSTRASYON-2" className=" ILUSTRASYON-2" />
      </div>

      <NavLink to="/login">
        <button type="button" className="BakiciKayitOnay_button">
          Oturum Aç
        </button>
      </NavLink>
    </div>
  );
};

export default BakiciKayitOnay;
