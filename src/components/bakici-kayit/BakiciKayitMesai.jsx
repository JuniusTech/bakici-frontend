import React from "react"
import { employmentOptions } from "../../helper/options"

const BakiciKayitMesai = ({ setBakiciInfo, setKayitRoute }) => {
  const handleCheckboxChange = (e, value) => {
    const checked = e.target.checked
    if (checked) {
      setBakiciInfo((prevInfo) => ({
        ...prevInfo,
        employmentType: [...prevInfo.employmentType, value],
      }))
    } else {
      setBakiciInfo((prevInfo) => ({
        ...prevInfo,
        employmentType: prevInfo.employmentType.filter(
          (item) => item !== value
        ),
      }))
    }
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
              value={option.value}
              onChange={(e) => handleCheckboxChange(e, option.value)}
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
