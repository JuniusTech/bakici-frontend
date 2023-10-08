import usePasswordToggle1, {
  usePasswordToggle2,
} from "../components/usePasswordToggle"
import "../styles/EbeveynKayit.css"
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg"
import { NavLink, useNavigate } from "react-router-dom"
import logoBeyaz2 from "../assets/logoBeyaz2.svg"
import logoBeyaz1 from "../assets/logoBeyaz1.svg"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import axios from "axios"

library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash)

const EbeveynKayit = () => {
  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1()
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle2()
  const [ebeveynInfo, setEbeveynInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    city: "",
  })
  console.log(ebeveynInfo)

  const navigate = useNavigate()

  // const [isOpen, setisOpen] = useState(true);

  // const handleClick = () => {
  //   setisOpen(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const BASE_URL = "https://carezone.onrender.com" //! Duruma Göre global değişken tanımlanabilir
    try {
      const res = await axios.post(`${BASE_URL}/user/signup`, ebeveynInfo)
      console.log("Kullanıcı Başarıyla Kayıt Edildi", res)
      navigate("/ebeveynkayitonay")
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setEbeveynInfo({ ...ebeveynInfo, [e.target.name]: e.target.value })
  }

  return (
    <div className="MusteriKayit">
      <nav className="position-absolute d-flex w-100 justify-content-between align-items-center py-3 px-5">
        <img
          src={MusteriKayitLogo}
          alt="MusteriKayitLogo"
          className="MusteriKayit-Logo"
        />
        <img
          src={logoBeyaz1}
          alt="logoBeyaz2 "
          className="MusteriKayit-Logo2"
        />
        <NavLink to="/" className="MusteriKayit-Link fs-4">
          Anasayfa
        </NavLink>
      </nav>

      <div className="MusteriKayit-Container row w-100 mx-0">
        {/* <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    > */}

        <div className="MusteriKayit-FormContainer col">
          <h1 className="MusteriKayit-Form-Title text-center">
            BİLGİLERİNİZİ GİRİN
          </h1>
          <form className="MusteriKayit-Form-Form mx-auto pb-4">
            <label
              htmlFor="name"
              className="MusteriKayit-Form-Label label-isim"
            >
              İsim ve Soyisim
            </label>
            <br />
            <input
              type="text"
              placeholder="İsim ve soyisim"
              className="MusteriKayit-Form-Input input-isim"
              name="name"
              onChange={handleChange}
              value={ebeveynInfo.name || ""}
            />
            <br />
            <label
              htmlFor="email"
              className="MusteriKayit-Form-Label label-mail"
            >
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="mail@gmail.com"
              className="MusteriKayit-Form-Input input-mail"
              name="email"
              onChange={handleChange}
              value={ebeveynInfo.email || ""}
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
              name="phoneNumber"
              onChange={handleChange}
              value={ebeveynInfo.phoneNumber || ""}
            />
            <br />
            <label
              htmlFor="password"
              className="MusteriKayit-Form-Label label-sifre"
            >
              Şifre
            </label>
            <br />
            <div className="position-relative">
              <input
                // type="password"
                type={PasswordInputType1}
                placeholder="Min. 6 karakter"
                className="MusteriKayit-Form-Input input-sifre position-relative"
                name="password"
                onChange={handleChange}
                value={ebeveynInfo.password || ""}
              />
              <div className="password-toogle-icon1">{ToggleIcon1}</div>
            </div>
            <p className="MusteriKayit-Form-Text-1 mt-2">
              Sifreniz en az 6 karakterden olusmalidir
            </p>
            <p className="MusteriKayit-Form-Text-2">
              Sifrenizde en az bir sembol bulunmalidir. ornegin: @, !
            </p>
            <label
              htmlFor="password"
              className="MusteriKayit-Form-Label label-sifreTekrar"
            >
              Şifre Tekrar
            </label>
            <br />
            <div className="position-relative">
              <input
                // type="password"
                type={PasswordInputType2}
                placeholder="Min. 6 karakter"
                className="MusteriKayit-Form-Input input-sifreTekrar"
                name="confirmPassword"
                onChange={handleChange}
                value={ebeveynInfo.confirmPassword || ""}
              />
              <div className="password-toogle-icon2">{ToggleIcon2}</div>
            </div>

            <label
              htmlFor="select"
              className="MusteriKayit-Form-Label label-sehir"
            >
              Şehir Girin
            </label>
            <br />
            <div className="MusteriKayit-select-div">
              <select
                name="city"
                id="select"
                className="MusteriKayit-Form-Input input-sehir"
                onChange={handleChange}
                value={ebeveynInfo.city || ""}
              >
                <option value="İstanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="İzmir">İzmir</option>
                <option value="Adana">Adana</option>
                <option value="Adıyaman">Adıyaman</option>
                <option value="Afyonkarahisar">Afyonkarahisar</option>
                <option value="Ağrı">Ağrı</option>
              </select>
            </div>
            <button className="MusteriKayit-Form-Submit" onClick={handleSubmit}>
              Kayıt Ol
            </button>
            <div className="d-flex justify-content-around">
              <p className="MusteriKayit-Form-TextLink-Text fw-medium text-black-50">
                Hesabınız var mı?
              </p>
              <NavLink to="/login" className="MusteriKayit-Form-TextLink-Link">
                Oturum Açın
              </NavLink>
            </div>
          </form>
        </div>
        {/* </Formik> */}
        <div className="MusteriKayit-İmgContainer col position-relative d-none d-xl-flex align-items-center justify-content-center">
          <img
            src={logoBeyaz2}
            alt=""
            className="MusteriKayit-İmg w-100 px-4"
          />
          <p className="MusteriKayit-İmg-Title">
            “ BEBEKLERİNİZ İÇİN EN İYİ BAKIMI BİZİMLE BULUN ”
          </p>
        </div>
      </div>
    </div>
  )
}

export default EbeveynKayit
