import React from "react";
import "../styles/AnaUyelik.css";
import logo from "../assets/logo.svg";
import MusteriButton from "../assets/MusteriButton.svg";
import BakiciButton from "../assets/BakiciButton.svg";
import { useNavigate } from "react-router-dom";

const AnaUyelik = ({ openAnaUyelik, setOpenAnaUyelik }) => {
  const navigate = useNavigate();

  return (
    <div className={`AnaUyelik-container ${openAnaUyelik ? "active" : ""} `}>
      <div
        className={`AnaUyelik-bg ${openAnaUyelik ? "active" : ""}`}
        onClick={() => setOpenAnaUyelik(false)}
      ></div>
      <div className={`AnaUyelik ${openAnaUyelik ? "active" : ""} `}>
        <div className="AnaUyelik-nav-logo">
          <img
            src={logo}
            alt="Logo"
            width={140}
            height={120}
            className="AnaUyelik-nav-logo-img"
          />
        </div>

        <div className="AnaUyelik-main">
          <h1 className=" AnaUyelik-nav-logo-h1">UYE OLMAK ICIN TIKLAYIN</h1>
          <div className="AnaUyelik-buttons">
            <div
              role="button"
              className="AnaUyelik-main-left"
              onClick={() => navigate("/musterikayit")}
            >
              <img
                className="AnaUyelik-main-left-img"
                src={MusteriButton}
                alt="MusteriButton"
              />
              <p className="AnaUyelik-main-left-p">Musteri olarak</p>
            </div>
            <div
              role="button"
              className="AnaUyelik-main-right"
              onClick={() => navigate("/bakicikayit")}
            >
              <img
                className="AnaUyelik-main-right-img"
                src={BakiciButton}
                alt="BakiciButton"
              />
              <p className="AnaUyelik-main-right-p">BAKICI olarak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaUyelik;
