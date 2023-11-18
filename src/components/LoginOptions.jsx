import React from "react"
import "../styles/AnaUyelik.css"
import logo from "../assets/logo.svg"
import MusteriButton from "../assets/MusteriButton.svg"
import BakiciButton from "../assets/BakiciButton.svg"
import { useNavigate } from "react-router-dom"

const LoginOptions = ({ loginOptionModal, setLoginOptionModal }) => {
  const navigate = useNavigate()

  return (
    <div className={`AnaUyelik-container ${loginOptionModal ? "active" : ""} `}>
      <div
        className={`AnaUyelik-bg ${loginOptionModal ? "active" : ""}`}
        onClick={() => setLoginOptionModal(false)}
      ></div>
      <div className={`AnaUyelik ${loginOptionModal ? "active" : ""} `}>
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
          <h1 className=" AnaUyelik-nav-logo-h1">GİRİŞ YAPMAK İÇİN TIKLAYIN</h1>
          <div className="AnaUyelik-buttons">
            <div
              role="button"
              className="AnaUyelik-main-left"
              onClick={() => navigate("/user-login")}
            >
              <img
                className="AnaUyelik-main-left-img"
                src={MusteriButton}
                alt="MusteriButton"
              />
              <p className="AnaUyelik-main-left-p">EBEVEYN OLARAK</p>
            </div>
            <div
              role="button"
              className="AnaUyelik-main-right"
              onClick={() => navigate("/babysitter-login")}
            >
              <img
                className="AnaUyelik-main-right-img"
                src={BakiciButton}
                alt="BakiciButton"
              />
              <p className="AnaUyelik-main-right-p">BAKICI OLARAK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginOptions
