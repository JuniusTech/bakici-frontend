import React, { useRef, useState } from "react"
import dosyaekle from "../../assets/dosyaekle.svg"
import trash from "../../assets/trash.svg"

const BakiciKayitFilePicker = ({ id, desc, onBelgeChange }) => {
  const [selectedBelge, setSelectedBelge] = useState(null)
  const fileInputRef = useRef(null)

  const handleBelgeChange = (e) => {
    const selectedFile = e.target.files[0]

    if (selectedFile) {
      const belgeName = selectedFile?.name
      onBelgeChange(id, belgeName)
      setSelectedBelge(URL.createObjectURL(selectedFile)) // Dosyanın URL'sini burada ayarlanıyor
    }
  }

  return (
    <div className="bakici-kayit__belge-container mt-5 pt-5 pb-4">
      <div className="bakici-kayit__belge-ekle-container">
        <div onClick={() => fileInputRef.current.click()}>
          <label className="bakici-kayit__belge-ekle" htmlFor={id}>
            <img
              src={selectedBelge ? selectedBelge : dosyaekle}
              alt=""
              className={
                selectedBelge
                  ? "bakici-kayit__belge-ekle-image w-25"
                  : "bakici-kayit__belge-ekle-image w-100"
              }
            />
          </label>

          <input
            onChange={handleBelgeChange}
            type="file"
            name={id}
            id={id}
            className="d-none"
            ref={fileInputRef}
          />

          <p>Dosyalarınızı buraya tıklayarak yükleyin</p>
          <p>Maximum dosya boyutu 50 MB</p>
        </div>
      </div>
      <div
        className="d-flex align-items-center mx-auto "
        style={{ width: "90%" }}
      >
        <div className="position-absolute">
          <button className="bakici-kayit__belge-delete-btn">
            <img src={trash} alt="" />
          </button>
          <button className="bakici-kayit__belge-kaydet-btn">Kaydet</button>
        </div>
      </div>
      <div className="bakici-kayit__belge-desc mt-4 mx-auto">
        {selectedBelge ? (
          <p>Seçilen Belge: {selectedBelge}</p>
        ) : (
          <div>{desc}</div>
        )}
      </div>
    </div>
  )
}

export default BakiciKayitFilePicker
