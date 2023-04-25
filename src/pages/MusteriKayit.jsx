import React from "react";
import "../styles/MusteriKayit.css";
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg";
import { NavLink } from "react-router-dom";
import logoBeyaz2 from "../assets/logoBeyaz2.svg";
import logoBeyaz1 from "../assets/logoBeyaz1.svg";

const MusteriKayit = () => {
  return (
    <div className="MusteriKayit">
        <img
          src={MusteriKayitLogo}
          alt="MusteriKayitLogo"
          className="MusteriKayit-Logo"
        />
        <img src={logoBeyaz1} alt="logoBeyaz2" className="MusteriKayit-Logo2" />
        <NavLink to="/" className="MusteriKayit-Link">
          Anasayfa
        </NavLink>
      
      <div className="MusteriKayit-Container">
        
        <div className="MusteriKayit-FormContainer">
          <h1 className="MusteriKayit-Form-Title">BİLGİLERİNİZİ GİRİNİZ</h1>
          <form className="MusteriKayit-Form-Form">
            <label htmlFor="name" className="MusteriKayit-Form-Label">
              isim ve Soyisim
            </label>
            <br />
            <input
              type="text"
              placeholder="isim ve soyisim"
              className="MusteriKayit-Form-Input"
            />
            <br />
            <label htmlFor="email" className="MusteriKayit-Form-Label">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="mail@gmail.com"
              className="MusteriKayit-Form-Input"
            />
            <br />
            <label htmlFor="tel" className="MusteriKayit-Form-Label">
              Telefon Numaranız
            </label>
            <br />
            <input
              type="tel"
              placeholder="5XX XXX XX XX"
              className="MusteriKayit-Form-Input"
            />
            <br />
            <label htmlFor="password" className="MusteriKayit-Form-Label">
              Şifre
            </label>
            <br />
            <input
              type="password"
              placeholder="Min. 6 karakter"
              className="MusteriKayit-Form-Input"
            />
            <br />
            <label htmlFor="password" className="MusteriKayit-Form-Label">
              Şifre Tekrar
            </label>
            <br />
            <input
              type="password"
              placeholder="Min. 6 karakter"
              className="MusteriKayit-Form-Input"
            />
            <br />
            <label htmlFor="select" className="MusteriKayit-Form-Label">
              Şehir Girin
            </label>
            <br />
            <select
              name="select"
              id="select"
              className="MusteriKayit-Form-Select"
            >
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
            </select>
            <br />
            <button className="MusteriKayit-Form-Submit">Kayıt Ol</button>
            <div className="MusteriKayit-Form-Text-Link-Container">
              <p className="MusteriKayit-Form-Text-Link">Hesabınız var mı?</p>
              <NavLink to="/login" className="MusteriKayit-Form-Text-Link">
                Oturum Açın
              </NavLink>
            </div>
          </form>
        </div>
      
      <div className="MusteriKayit-İmgContainer">
        
    </div>
    <img src={logoBeyaz2} alt="" className="MusteriKayit-İmg" />
        <p className="MusteriKayit-İmg-Title">“ Bebekleriniz için en iyi bakımı bizimle bulun ”</p>
    </div>
    </div>
  );
};

export default MusteriKayit;
