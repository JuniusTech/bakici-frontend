import React from "react"
import { employmentOptions } from "../../helper/options"

const BakiciKayitMesai = ({ setBakiciInfo, setKayitRoute, bakiciInfo }) => {
  const handleCheckboxChange = (e, value) => {
    const checked = e.target.checked

    // Mevcut seçili değerlerin bir kopyasını oluşturun.
    const updatedEmploymentType = [...(bakiciInfo?.employmentType || [])]

    // Seçim yapıldıysa ekleyin, aksi takdirde çıkarın.
    if (checked) {
      updatedEmploymentType.push(value)
    } else {
      const index = updatedEmploymentType.indexOf(value)
      if (index !== -1) {
        updatedEmploymentType.splice(index, 1)
      }
    }

    // Bakıcı bilgilerini güncelleyin.
    setBakiciInfo((prevInfo) => ({
      ...prevInfo,
      employmentType: updatedEmploymentType,
    }))
  }

  return (
    <div className="bakici-kayit__mesai text-center my-5">
      <h1>ÇALIŞMAK İSTEDİĞİNİZ MESAİ ŞEKLİNİ SEÇİNİZ</h1>
      <div className="bakici-kayit__mesai-div d-flex flex-column m-auto my-5">
        {employmentOptions.map((option) => (
          <div key={option.value} className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name={option.label}
              id={option.value}
              style={{ width: "20px", height: "20px" }}
              onChange={(e) => handleCheckboxChange(e, option.value)}
              checked={
                bakiciInfo?.employmentType?.includes(option.value) || false
              }
            />
            <label className="bakici-kayit__mesai-label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="text-center py-5">
        <button
          className="bakici-kayit__form-button me-3"
          onClick={() => setKayitRoute("form")}
        >
          Geri
        </button>
        <button
          className="bakici-kayit__form-button ms-3"
          onClick={() => setKayitRoute("deneyim")}
        >
          Devam et
        </button>
      </div>
    </div>
  )
}

export default BakiciKayitMesai
