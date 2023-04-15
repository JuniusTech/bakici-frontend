import React from "react";
import "../styles/Footer.css";
import logoFooter from "../assets/logoFooter.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import klarna from "../assets/klarna.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Fİrst">
        <div className="Footer-Fİrst-First">
          <img src={logoFooter} alt="
          " className="Footer-Fİrst-First-Logo" />
        </div>
        <div className="Footer-Fİrst-Second">
          <h3 className="Footer-Fİrst-Second-Title"
          >Populer Aramalar</h3>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
           <p>CareZone nasıl çalışıyor</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
           <p>En çok sorulan sorular</p> 
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Çocuk bakımı</p>            
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
           <p>Ödeme yapma yöntemleri</p> 
          </NavLink>
        </div>
        <div className="Footer-Fİrst-Third">
          <h3 className="Footer-Fİrst-Third-Title"
          >Hakkımızda</h3>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Hakkımızda</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>İletişim</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Çalışan gizlilik hakları</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Yardım</p>
          </NavLink>
        </div>
        <div className="Footer-Fİrst-Fourth">
          <h3 className="Footer-Fİrst-Fourth-Title"
          >İletişim</h3>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Brazil Green Way</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>(+90) 111 565 999</p>
          </NavLink>
          <NavLink to="#" className="Footer-Fİrst-Second-Link">
            <p>Carezone@carezone.com.tr</p>
          </NavLink>
        </div>
        <div className="Footer-Fİrst-Fifth">
          <div className="Footer-Fİrst-Fifth-First">
            <img src={visa} alt="" className="Footer-Fİrst-Fifth-img1" />
          </div>
          <div className="Footer-Fİrst-Fifth-Second">
            <img src={klarna} alt="" className="Footer-Fİrst-Fifth-img2" />
            <p className="klarna">Klarna</p>
          </div>
          <div className="Footer-Fİrst-Fifth-Third">
            <img src={mastercard} alt="" className="Footer-Fİrst-Fifth-img3" />
            <p className="mastercard">Mastercard</p>
          </div>
        </div>
      </div>
      <div className="Footer-Second">
        <p className="Footer-Second-Text">
          © {new Date().getFullYear()} CareZone, Inc. Tüm Hakları Saklıdır. Şartlar, Gizlilik ve Erişilebilirlik
        </p>
      </div>
    </div>
  );
};

export default Footer;
