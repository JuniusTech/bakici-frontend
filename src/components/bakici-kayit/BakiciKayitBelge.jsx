import React from "react"
import BakiciKayitFilePicker from "./BakiciKayitFilePicker"
import { belgeler } from "../../helper/options"

function BakiciKayitBelge({
  setBakiciInfo,
  setKayitRoute,
  handleSubmit,
  isLoading,
}) {
  const handleBelgeChange = (belgeId, belgeName) => {
    // Sadece ilgili belgeyi güncelle
    setBakiciInfo((prevInfo) => ({
      ...prevInfo,
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
        <button
          onClick={handleSubmit}
          disabled={isLoading ? true : false}
          className="bakici-kayit__form-button ms-3"
        >
          Kaydı Tamamla
        </button>
      </div>
    </div>
  )
}

export default BakiciKayitBelge
