import React, { useState }  from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // input kontrol etmek için kullanılıyor
import usePasswordToggle1, { usePasswordToggle2 }
from "../components/usePasswordToggle";

import "../styles/MusteriKayit.css";
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg";
import { NavLink } from "react-router-dom";
import logoBeyaz2 from "../assets/logoBeyaz2.svg";
import logoBeyaz1 from "../assets/logoBeyaz1.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";


library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash);

// const initialValues = {
//   email: "",
//   password: "",
// };
// const onSubmit = (values) => {
//   console.log(values);
// };

//Yup ı burada kullanıyoruz
// const validationSchema = Yup.object({
//   email: Yup.string().email("Geçersiz Email Adresi!").required("Gerekli!"),
//   password: Yup.string().required("Gerekli!"),
// });


const MusteriKayit = () => {

  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1();
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle2();

  // const [isOpen, setisOpen] = useState(true);

  // const handleClick = () => {
  //   setisOpen(false);
  // };


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


      {/* <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    > */}
        
        <div className="MusteriKayit-FormContainer">
          <h1 className="MusteriKayit-Form-Title">BİLGİLERİNİZİ GİRİN</h1>
          <form className="MusteriKayit-Form-Form">
            <label htmlFor="name" className="MusteriKayit-Form-Label label-isim">
              isim ve Soyisim
            </label>
            <br />
            <input
              type="text"
              placeholder="isim ve soyisim"
              className="MusteriKayit-Form-Input input-isim"
            />
            <br />
            <label htmlFor="email" className="MusteriKayit-Form-Label label-mail">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="mail@gmail.com"
              className="MusteriKayit-Form-Input input-mail"
            />
            <br />
            <label htmlFor="tel" className="MusteriKayit-Form-Label label-tel">
              Telefon Numaranız
            </label>
            <br />
            <input
              type="tel"
              placeholder="5XX XXX XX XX"
              className="MusteriKayit-Form-Input input-tel"
            />
            <br />
            <label htmlFor="password" className="MusteriKayit-Form-Label label-sifre">
              Şifre
            </label>
            <br />
            <input
              // type="password"
              type={PasswordInputType1}
              placeholder="Min. 6 karakter"
              className="MusteriKayit-Form-Input input-sifre"
            />
            <div className="password-toogle-icon1">{ToggleIcon1}</div>
            <br />
            <p className="MusteriKayit-Form-Text-1">
            Sifreniz en az 6 karakterden olusmalidir
            </p>
            <p className="MusteriKayit-Form-Text-2">
            Sifrenizde en az bir sembol bulunmalidir. ornegin: @, !
            </p>
            <label htmlFor="password" className="MusteriKayit-Form-Label label-sifreTekrar">
              Şifre Tekrar
            </label>
            <br />
            <input
              // type="password"
              type={PasswordInputType2}
              placeholder="Min. 6 karakter"
              className="MusteriKayit-Form-Input input-sifreTekrar"
            />
            <div className="password-toogle-icon2">{ToggleIcon2}</div>
            <br />
            <label htmlFor="select" className="MusteriKayit-Form-Label label-sehir">
              Şehir Girin
            </label>
            <br />
            <select
              name="select"
              id="select"
              className="MusteriKayit-Form-Input input-sehir"
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
            
              <p className="MusteriKayit-Form-TextLink-Text">Hesabınız varmı?</p>
              <NavLink to="/login" className="MusteriKayit-Form-TextLink-Link">
                Oturum Açın
              </NavLink>
            
          </form>
        </div>
        {/* </Formik> */}
      <div className="MusteriKayit-İmgContainer">
        
    </div>
    <img src={logoBeyaz2} alt="" className="MusteriKayit-İmg" />
        <p className="MusteriKayit-İmg-Title">“ Bebekleriniz için en iyi bakımı bizimle bulun ”</p>
    </div>
    </div>
  );
};

export default MusteriKayit;
