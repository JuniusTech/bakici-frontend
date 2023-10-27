import React, { useRef, useState } from "react"
import profileImg from "../../assets/Ellipse54.svg"
import sifreIcon from "../../assets/sifre-icon.svg"
import docIcon from "../../assets/doc.svg"
import homeIcon from "../../assets/home-icon.svg"
import usePasswordToggle1 from "../../components/usePasswordToggle"
import Select from "react-select"
import useSelectOptions from "../select/useSelectOptions"
import {
  cinsiyet,
  sehirler,
  ilceler,
  medeniDurum,
  yabanciDil,
} from "../../helper/options"

const BakiciKayitForm = ({ setKayitRoute, bakiciInfo, setBakiciInfo }) => {
  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1()
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle1()
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions()

  const [selectedAvatar, setSelectedAvatar] = useState("")
  console.log(selectedAvatar)

  const handleChanges = (e) => {
    setBakiciInfo({ ...bakiciInfo, [e.target.name]: e.target.value })
  }

  const fileInputRef = useRef(null)

  const openFileInput = () => {
    fileInputRef.current.click()
  }

  const handleAvatarChange = (e) => {
    const selectedAvatar = e?.target?.files[0]

    console.log(selectedAvatar)

    if (selectedAvatar) {
      const avatarName = selectedAvatar.name
      setSelectedAvatar(selectedAvatar)
      setBakiciInfo({
        ...bakiciInfo,
        avatar: avatarName,
      })
    }
  }

  console.log(bakiciInfo)

  return (
    <div className="bakici-kayit__profile">
      <h1 className="text-center">GENEL BİLGİLERİNİZİ GİRİN</h1>
      <form
        className="bakici-kayit__profile-form d-flex align-items-center align-items-xl-start flex-column flex-xl-row"
        action=""
      >
        <div className="bakici-kayit__profile-form-sol ms-0 ms-xl-5 ps-xl-5">
          <h3 className="bakici-kayit__profile-baslik">Profil Bilgileri</h3>
          <div className="bakici-kayit__profile-info">
            <div className="bakici-kayit__avatar" onClick={openFileInput}>
              {selectedAvatar ? (
                <>
                  <img
                    style={{
                      width: "212px",
                      height: "212px",
                      borderRadius: "50%",
                    }}
                    className="img"
                    src={URL.createObjectURL(selectedAvatar)}
                    onChange={handleChanges}
                    alt=""
                  />
                  <div className="add-img">
                    <span className="plus1"></span>
                    <span className="plus2"></span>
                  </div>
                </>
              ) : (
                <>
                  <img className="img" src={profileImg} alt="" />
                  <div className="add-img">
                    <span className="plus1"></span>
                    <span className="plus2"></span>
                  </div>
                </>
              )}
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
                ref={fileInputRef}
              />
            </div>
            <div className="bakici-kayit__description">
              <label className="bakici-kayit__desc-label" htmlFor="">
                Kendinizi kısaca ebeveynlerimize tanıtın
              </label>
              <textarea
                className="bakici-kayit__textarea"
                name="description"
                onChange={handleChanges}
                value={bakiciInfo.description || ""}
                id=""
              ></textarea>
            </div>
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              İsim ve Soyisim
            </label>
            <input
              className="bakici-kayit__input"
              type="text"
              name="name"
              value={bakiciInfo.name || ""}
              onChange={handleChanges}
            />
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Email adresiniz
            </label>
            <input
              className="bakici-kayit__input"
              type="email"
              name="email"
              value={bakiciInfo.email || ""}
              onChange={handleChanges}
            />
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Telefon numaranız
            </label>
            <input
              onChange={handleChanges}
              value={bakiciInfo.phone || ""}
              name="phone"
              className="bakici-kayit__input"
              type="tel"
            />
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Sifrenizi girin <img src={sifreIcon} alt="" />
            </label>
            <input
              onChange={handleChanges}
              value={bakiciInfo.password || ""}
              name="password"
              className="bakici-kayit__input"
              type={PasswordInputType1}
            />
            <div className="bakici-kayit__sifre-icon">{ToggleIcon1}</div>
          </div>

          <p className="bakici-kayit__sifre-bilgi">
            Sifreniz en az 8 karakterden oluşmalıdır
          </p>
          <p className="bakici-kayit__sifre-bilgi">
            Şifrenizde en az bir sembol bulunmalıdır. Örneğin: @, !
          </p>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Şifrenizi tekrarlayın <img src={sifreIcon} alt="" />
            </label>
            <input
              onChange={handleChanges}
              value={bakiciInfo.confirmPassword || ""}
              name="confirmPassword"
              className="bakici-kayit__input"
              type={PasswordInputType2}
            />
            <div className="bakici-kayit__sifre-icon">{ToggleIcon2}</div>
          </div>
        </div>
        <div className="bakici-kayit__divider d-none d-xl-block"></div>

        <div className="bakici-kayit__profile-form-sağ">
          <h3 className="bakici-kayit__profile-baslik mb-4">
            Kişisel Bilgileri
          </h3>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="date">
              Doğum tarihiniz
            </label>
            <input
              onChange={handleChanges}
              value={bakiciInfo.birthDate || ""}
              name="birthDate"
              id="date"
              className="bakici-kayit__input"
              type="date"
            />
          </div>

          <p className="bakici-kayit__input-label">Cinsiyetiniz</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              options={cinsiyet}
              placeholder="Cinsiyet"
              name="gender"
              onChange={(selectedOption) =>
                setBakiciInfo({ ...bakiciInfo, gender: selectedOption.value })
              }
              value={{ value: bakiciInfo.gender, label: bakiciInfo.gender }}
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <p className="bakici-kayit__input-label">Medeni Durum</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              options={medeniDurum}
              placeholder="Medeni Durum"
              name="maritalStatus"
              onChange={(selectedOption) =>
                setBakiciInfo({
                  ...bakiciInfo,
                  maritalStatus: selectedOption.value,
                })
              }
              value={{
                value: bakiciInfo.maritalStatus,
                label: bakiciInfo.maritalStatus,
              }}
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <p className="bakici-kayit__input-label">Yabancı Dil</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              options={yabanciDil}
              isSearchable={false}
              name="languages"
              onChange={(selectedOptions) => {
                const selectedLanguages = selectedOptions.map(
                  (option) => option.value
                )
                setBakiciInfo({ ...bakiciInfo, languages: selectedLanguages })
              }}
              value={yabanciDil.filter((dil) =>
                bakiciInfo.languages.includes(dil.value)
              )}
              placeholder="Yabancı Dil"
              components={{
                Option: CheckboxOption,
                ClearIndicator: null,
              }}
              styles={selectStyles}
            />
          </div>

          <h3 className="bakici-kayit__profile-baslik my-4">Adres Bilgileri</h3>

          <p className="bakici-kayit__input-label">Şehir Giriniz</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              options={sehirler}
              placeholder="Şehir"
              name="sehir"
              onChange={(selectedOption) =>
                setBakiciInfo({ ...bakiciInfo, city: selectedOption.value })
              }
              value={{
                value: bakiciInfo.city,
                label: bakiciInfo.city,
              }}
              styles={selectStyles}
            />
          </div>

          <p className="bakici-kayit__input-label">İlçe Giriniz</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              options={ilceler}
              placeholder="İlçe"
              name="ilce"
              onChange={(selectedOption) =>
                setBakiciInfo({ ...bakiciInfo, district: selectedOption.value })
              }
              value={{
                value: bakiciInfo.district,
                label: bakiciInfo.district,
              }}
              styles={selectStyles}
            />
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Ev Adresiniz
            </label>
            <input
              name="evAdresi"
              value={bakiciInfo.address}
              onChange={(e) =>
                setBakiciInfo({ ...bakiciInfo, address: e.target.value })
              }
              className="bakici-kayit__input"
              type="text"
            />
            <img
              className="bakici-kayit__sifre-icon mb-1 me-2"
              src={homeIcon}
              width={20}
              alt="home"
            />
          </div>

          <div className="my-4 d-flex align-items-center gap-3">
            <a href="" className="" style={{ textDecoration: "underline" }}>
              Çalışan hakları ve gizlilik anlaşmasını okuyunuz
            </a>
            <img src={docIcon} width={20} alt="doc" />
          </div>

          <div className="d-flex gap-3 align-items-center my-4">
            <input
              type="checkbox"
              name=""
              id="gizlilik"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="text-body-secondary" htmlFor="gizlilik">
              Carezone gizlilik haklarını okudum ve onaylıyorum
            </label>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name=""
              id="haklar"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="text-body-secondary" htmlFor="haklar">
              Bakıcılık haklarıyla ilgili kuralları okudum, onaylıyorum
            </label>
          </div>
        </div>
      </form>
      <div className="text-center py-5">
        <button
          className="bakici-kayit__form-button"
          onClick={() => setKayitRoute("mesai")}
        >
          Devam et
        </button>
      </div>
    </div>
  )
}

export default BakiciKayitForm
