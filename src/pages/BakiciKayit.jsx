import { Link } from "react-router-dom"
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg"
import "../styles/BakiciKayit.css"
import BakiciKayitMesai from "../components/bakici-kayit/BakiciKayitMesai"
import BakiciKayitDeneyim from "../components/bakici-kayit/BakiciKayitDeneyim"
import BakiciKayitForm from "../components/bakici-kayit/BakiciKayitForm"
import { useState } from "react"
import BakiciKayitBelge from "../components/bakici-kayit/BakiciKayitBelge"
import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const BakiciKayit = () => {
  const [kayitRoute, setKayitRoute] = useState("form")
  const [isLoading, setIsLoading] = useState(false)
  const [bakiciInfo, setBakiciInfo] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    description: "",
    city: "",
    district: "",
    address: "",
    gender: "",
    maritalStatus: "",
    birthDate: "",
    educationLevel: "",
    languages: [],
    employmentType: [],
    price_range: "",
    nufus_on: "",
    nufus_arka: "",
    adli_sicil: "",
    experience: [],
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL
    try {
      setIsLoading(true)
      await axios.post(`${baseURL}/babysitter/signup`, bakiciInfo)
      toastSuccessNotify("Başarıyla Kayıt Yapıldı")
    } catch (err) {
      setIsLoading(false)
      const errors =
        err.response.data.message ||
        err.response.data.errors ||
        err.response.data.error
      errors instanceof Array
        ? errors.map((e) => toastErrorNotify(e))
        : toastErrorNotify(errors)
    }
  }

  return (
    <div className="bakici-kayit">
      <nav className="p-4" style={{ height: "155px" }}>
        <Link to="/">
          <img
            src={MusteriKayitLogo}
            alt="MusteriKayitLogo"
            className="MusteriKayit-Logo"
          />
        </Link>
      </nav>
      {kayitRoute === "form" && (
        <BakiciKayitForm
          bakiciInfo={bakiciInfo}
          setKayitRoute={setKayitRoute}
          setBakiciInfo={setBakiciInfo}
        />
      )}
      {kayitRoute === "mesai" && (
        <BakiciKayitMesai
          setKayitRoute={setKayitRoute}
          bakiciInfo={bakiciInfo}
          setBakiciInfo={setBakiciInfo}
        />
      )}
      {kayitRoute === "deneyim" && (
        <BakiciKayitDeneyim
          setBakiciInfo={setBakiciInfo}
          setKayitRoute={setKayitRoute}
          bakiciInfo={bakiciInfo}
        />
      )}

      {kayitRoute === "belge" && (
        <BakiciKayitBelge
          setBakiciInfo={setBakiciInfo}
          setKayitRoute={setKayitRoute}
          bakiciInfo={bakiciInfo}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

export default BakiciKayit
