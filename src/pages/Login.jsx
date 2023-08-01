import React from "react";
import "../styles/Login.css";
import Logo from "../assets/logo.svg";
import googleicon from "../assets/google-icon.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-form-container">
        <img src={Logo} alt="" className="login-logo" />

        <div className="login-form">
          <h1 className="login-form-title">OTURUM AÇ</h1>
          <button className="login-form-btn">
            <img
              src={googleicon}
              alt="Vgoogle-icon"
              className="login-form-btn-icon"
            />
            Google hesabınız ile giriş yapın
          </button>

          <p className="login-form-text">
            <span className="login-form-text-span">•••••</span>
            &nbsp;&nbsp; Yada e-posta adresiniz ile &nbsp;&nbsp;
            <span className="login-form-text-span">•••••</span>
          </p>
          <label htmlFor="email" className="login-form-label-email">
            Email
          </label>
          <br />
          <input
            type="text"
            placeholder="mail@gmail.com"
            className="login-form-input-email"
          />
          <br />
          <label htmlFor="password" className="login-form-label-password">
            Şifre
          </label>
          <br />
          <input
            type="password"
            placeholder="Min. 6 karakter"
            className="login-form-input-password"
          />
          <br />

          <button className="login-form-submit-btn">Oturum Aç</button>
          <p className="login-form-text-span-dot">•••••••••••••••</p>
          <div className="login-form-text-link-container">
            <p className="login-form-text-link">Hesabınız yok mu?</p>
            <NavLink to="/register" className="login-form-link">
              Kayıt Ol
            </NavLink>
          </div>
        </div>
      </div>
      <div className="login-img-container"></div>
    </div>
  );
};

export default Login;
