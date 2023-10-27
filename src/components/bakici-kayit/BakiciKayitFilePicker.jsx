import React, { useRef, useState } from "react"
import dosyaekle from "../../assets/dosyaekle.svg"
import trash from "../../assets/trash.svg"

const BakiciKayitFilePicker = ({ id, desc, onBelgeChange }) => {
  const [selectedBelge, setSelectedBelge] = useState(null)
  const fileInputRef = useRef(null)

  const handleBelgeChange = (e) => {
    const selectedFile = e?.target?.files[0]

    if (selectedFile) {
      const belgeName = selectedFile.name
      setSelectedBelge(belgeName)
      onBelgeChange(id, belgeName)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="bakici-kayit__belge-container mt-5 pt-5 pb-4">
      <div className="bakici-kayit__belge-ekle-container">
        <div onClick={triggerFileInput}>
          <label className="bakici-kayit__belge-ekle" htmlFor={id}>
            <img
              src={
                selectedBelge
                  ? URL.createObjectURL(fileInputRef.current.files[0])
                  : dosyaekle
              }
              alt=""
              className="bakici-kayit__belge-ekle-image w-100"
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
