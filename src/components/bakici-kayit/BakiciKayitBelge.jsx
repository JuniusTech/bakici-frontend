import React, { useState } from "react"
import BakiciKayitFilePicker from "./BakiciKayitFilePicker"
import { belgeler } from "../../helper/options"
import { Link } from "react-router-dom"

function BakiciKayitBelge({ setBakiciInfo, setKayitRoute, handleSubmit }) {
  const [belgelerState, setBelgelerState] = useState({})

  const handleBelgeChange = (belgeId, belgeName) => {
    // Sadece ilgili belgeyi güncelle
    setBakiciInfo((prevInfo) => ({
      ...prevInfo,
      [belgeId]: belgeName,
    }))

    setBelgelerState((prevState) => ({
      ...prevState,
      [belgeId]: belgeName,
    }))
  }

  return (
    <div className="text-center">
      <h2>RESMİ DÖKÜMALARINIZI EKLEYIN</h2>
      <div>
        {belgeler.map((belge) => (
          <BakiciKayitFilePicker
            key={belge.id}
            id={belge.id}
            desc={belge.desc}
            belgeData={belgelerState[belge.id]}
            onBelgeChange={handleBelgeChange}
          />
        ))}
      </div>
      <div className="text-center py-5">
        <button
          className="bakici-kayit__form-button me-3"
          onClick={() => setKayitRoute("deneyim")}
        >
          Geri
        </button>
        <Link to="/bakicikayitonay">
          <button
            onClick={handleSubmit}
            className="bakici-kayit__form-button ms-3"
          >
            Kaydı Tamamla
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BakiciKayitBelge
