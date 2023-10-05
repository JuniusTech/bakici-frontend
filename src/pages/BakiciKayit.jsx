import { Link } from "react-router-dom"
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg"
import "../styles/BakiciKayit.css"
import BakiciKayitMesai from "../components/bakici-kayit/BakiciKayitMesai"
import BakiciKayitDeneyim from "../components/bakici-kayit/BakiciKayitDeneyim"
import BakiciKayitForm from "../components/bakici-kayit/BakiciKayitForm"
import { useState } from "react"
import BakiciKayitBelge from "../components/bakici-kayit/BakiciKayitBelge"

const BakiciKayit = () => {
  const [kayitRoute, setKayitRoute] = useState("form")
  const [bakiciInfo, setBakiciInfo] = useState({
    description: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    languages: "",
    address: {
      sehir: "",
      ilce: "",
      evAdresi: "",
    },
  })

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
        />
      )}
      {kayitRoute === "deneyim" && (
        <BakiciKayitDeneyim setKayitRoute={setKayitRoute} />
      )}

      {kayitRoute === "belge" && (
        <BakiciKayitBelge setKayitRoute={setKayitRoute} />
      )}
    </div>
  )
}

export default BakiciKayit
