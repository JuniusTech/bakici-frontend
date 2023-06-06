import React from "react";
import { NavLink } from "react-router-dom";
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg";
import "../styles/BakiciKayit.css";
import profileImg from "../assets/Ellipse54.svg";
import sifreIcon from "../assets/sifre-icon.svg";
import usePasswordToggle1 from "../components/usePasswordToggle";

const BakiciKayit = () => {
  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1();
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle1();

  return (
    <div className="bakici-kayit">
      <nav className="" style={{ height: "155px" }}>
        <img
          src={MusteriKayitLogo}
          alt="MusteriKayitLogo"
          className="MusteriKayit-Logo"
        />

        <NavLink to="/" className="MusteriKayit-Link">
          Anasayfa
        </NavLink>
      </nav>
      <div className="bakici-kayit__profile">
        <h1>GENEL BİLGİLERİNİZİ GİRİN</h1>
        <form className="bakici-kayit__profile-form" action="">
          <div className="bakici-kayit__profile-form-sol">
            <h3 className="bakici-kayit__profile-baslik">Profil Bilgileri</h3>
            <div className="bakici-kayit__profile-info">
              <div className="bakici-kayit__avatar">
                <img className="img" src={profileImg} alt="" />
                <div className="add-img">
                  <span className="plus1"></span>
                  <span className="plus2"></span>
                </div>
              </div>
              <div className="bakici-kayit__description">
                <label className="bakici-kayit__desc-label" htmlFor="">
                  Kendinizi kısaca müşterilerimize tanıtın
                </label>
                <textarea
                  className="bakici-kayit__textarea"
                  name=""
                  id=""
                  cols="40"
                  rows="6"
                ></textarea>
                {/* <div className="bakici-kayit__desc-edit">
                  <span>Tekrar düzenle</span>
                  <button>Kaydet</button>
                </div> */}
              </div>
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                İsim ve Soyisim
              </label>
              <input className="bakici-kayit__input" type="text" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Email adresiniz
              </label>
              <input className="bakici-kayit__input" type="email" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Telefon numaraniz
              </label>
              <input className="bakici-kayit__input" type="tel" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Sifrenizi girin <img src={sifreIcon} alt="" />
              </label>
              <input
                className="bakici-kayit__input"
                type={PasswordInputType1}
              />
              <div className="bakici-kayit__sifre-icon">{ToggleIcon1}</div>
            </div>

            <p className="bakici-kayit__sifre-bilgi">
              Sifreniz en az 8 karakterden olusmalidir
            </p>
            <p className="bakici-kayit__sifre-bilgi">
              Sifrenizde en az bir sembol bulunmalidir. ornegin: @, !
            </p>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Sifrenizi tekrarlayin <img src={sifreIcon} alt="" />
              </label>
              <input
                className="bakici-kayit__input"
                type={PasswordInputType2}
              />
              <div className="bakici-kayit__sifre-icon">{ToggleIcon2}</div>
            </div>
          </div>
          <div className="bakici-kayit__divider"></div>

          <div className="bakici-kayit__profile-form-sağ">
            <h3 className="bakici-kayit__profile-baslik">Kişisel Bilgileri</h3>
            <div>
              <label htmlFor="">Doğum tarihiniz</label>
              <input type="date" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                İsim ve Soyisim
              </label>
              <input className="bakici-kayit__input" type="text" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                İsim ve Soyisim
              </label>
              <input className="bakici-kayit__input" type="text" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                İsim ve Soyisim
              </label>
              <input className="bakici-kayit__input" type="text" />
            </div>
          </div>
        </form>
      </div>
      <div className="bakici-kayit__evrak">
        <h1>RESMİ DOKÜMANLARINIZI EKLEYİN</h1>
      </div>
    </div>
  );
};

export default BakiciKayit;
