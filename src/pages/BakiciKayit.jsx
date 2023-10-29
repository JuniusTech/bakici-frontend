import { Link } from "react-router-dom"
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg"
import "../styles/BakiciKayit.css"
import BakiciKayitMesai from "../components/bakici-kayit/BakiciKayitMesai"
import BakiciKayitDeneyim from "../components/bakici-kayit/BakiciKayitDeneyim"
import BakiciKayitForm from "../components/bakici-kayit/BakiciKayitForm"
import { useState } from "react"
import BakiciKayitBelge from "../components/bakici-kayit/BakiciKayitBelge"
import axios from "axios"

const BakiciKayit = () => {
  const [kayitRoute, setKayitRoute] = useState("form")
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
    birthDate: "",
    educationLevel: "",
    maritalStatus: "",
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

  // console.log(bakiciInfo)

  const handleSubmit = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL
    try {
      const res = await axios.post(`${baseURL}/babysitter/signup`, bakiciInfo)
      console.log("Kullanıcı Başarıyla Kayıt Edildi", res)
    } catch (err) {
      console.log(err)
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
        />
      )}
    </div>
  )
}

export default BakiciKayit
