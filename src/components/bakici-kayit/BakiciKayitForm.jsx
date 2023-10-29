import React, { useEffect, useRef, useState } from "react"
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
  educationLevel,
} from "../../helper/options"
import { useFormik } from "formik"
import { babySitterSchema } from "../../validations/validations"

const BakiciKayitForm = ({ setKayitRoute, bakiciInfo, setBakiciInfo }) => {
  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1()
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle1()
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions()

  const [selectedAvatar, setSelectedAvatar] = useState("")

  const handleChanges = (e) => {
    setBakiciInfo({ ...bakiciInfo, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    setKayitRoute("mesai")
  }

  const { values, errors, handleBlur, touched, handleChange } = useFormik({
    initialValues: {
      name: bakiciInfo?.name,
      email: bakiciInfo?.email,
      phone: bakiciInfo?.phone,
      avatar: bakiciInfo?.avatar,
      description: bakiciInfo?.description,
      city: bakiciInfo?.city,
      district: bakiciInfo?.district,
      address: bakiciInfo?.address,
      gender: bakiciInfo?.gender,
      birthDate: bakiciInfo?.birthDate,
      educationLevel: bakiciInfo?.educationLevel,
      marialStatus: bakiciInfo?.marialStatus,
      employmentType: bakiciInfo?.employmentType,
      password: bakiciInfo?.password,
      confirmPassword: bakiciInfo?.confirmPassword,
    },
    validationSchema: babySitterSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    setBakiciInfo({ ...bakiciInfo, ...values })
  }, [values])

  console.log(bakiciInfo)

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

  return (
    <div className="bakici-kayit__profile">
      <h1 className="text-center">GENEL BİLGİLERİNİZİ GİRİN</h1>
      <form
        onSubmit={handleSubmit}
        className="bakici-kayit__profile-form d-flex align-items-center align-items-xl-start flex-column flex-xl-row"
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
                    onChange={handleAvatarChange}
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
                className={
                  errors.description && touched.description
                    ? "input-error-desc"
                    : "bakici-kayit__textarea"
                }
                name="description"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description || ""}
                id=""
              ></textarea>
              {errors.description && touched.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              İsim ve Soyisim
            </label>
            <input
              className={
                errors.name && touched.name
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              type="text"
              name="name"
              value={values.name || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Email adresiniz
            </label>
            <input
              className={
                errors.email && touched.email
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              type="email"
              name="email"
              value={values.email || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Telefon numaranız
            </label>
            <input
              name="phone"
              type="tel"
              className={
                errors.phone && touched.phone
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              value={values.phone || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.phone && touched.phone && (
              <p className="error">{errors.phone}</p>
            )}
          </div>

          <div className="bakici-kayit__input-div">
            <label className="bakici-kayit__input-label" htmlFor="">
              Sifrenizi girin <img src={sifreIcon} alt="" />
            </label>
            <input
              name="password"
              type={PasswordInputType1}
              className={
                errors.password && touched.password
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              value={values.password || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="bakici-kayit__sifre-icon">{ToggleIcon1}</div>
          </div>
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

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
              name="confirmPassword"
              type={PasswordInputType2}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              value={values.confirmPassword || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="bakici-kayit__sifre-icon">{ToggleIcon2}</div>
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
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
              name="birthDate"
              id="date"
              type="date"
              className={
                errors.birthDate && touched.birthDate
                  ? "input-error"
                  : "bakici-kayit__input"
              }
              value={values.birthDate || ""}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.birthDate && touched.birthDate && (
              <p className="error">{errors.birthDate}</p>
            )}
          </div>

          <p className="bakici-kayit__input-label">Cinsiyetiniz</p>
          <div className="bakici-kayit__select-div">
            <Select
              options={cinsiyet}
              placeholder="Cinsiyet"
              onChange={(selectedOption) => {
                handleChange("gender")(selectedOption?.value)
                console.log(selectedOption.value)
              }}
              value={{ value: values?.gender, label: values.gender }}
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
              className={
                errors.gender && touched.gender
                  ? "input-error bakici-kayit__select"
                  : "bakici-kayit__select"
              }
              onBlur={handleBlur}
            />
            {errors.gender && touched.gender && (
              <p className="error">{errors.gender}</p>
            )}
          </div>

          <p className="bakici-kayit__input-label">Medeni Durum</p>
          <div className="bakici-kayit__select-div">
            <Select
              options={medeniDurum}
              placeholder="Medeni Durum"
              name="marialStatus"
              onChange={(selectedOption) => {
                handleChange("marialStatus")(selectedOption?.value)
              }}
              value={{
                value: values?.marialStatus,
                label: values?.marialStatus,
              }}
              className={
                errors.marialStatus && touched.marialStatus
                  ? "input-error-desc bakici-kayit__select"
                  : "bakici-kayit__select"
              }
              onBlur={handleBlur}
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
            {errors.marialStatus && touched.marialStatus && (
              <p className="error">{errors.marialStatus}</p>
            )}
          </div>

          <p className="bakici-kayit__input-label">Eğitim Durumu</p>
          <div className="bakici-kayit__select-div">
            <Select
              options={educationLevel}
              placeholder="Eğitim Durumu"
              name="gender"
              onChange={(selectedOption) => {
                handleChange("educationLevel")(selectedOption?.value)
                console.log(selectedOption.value)
              }}
              value={{
                value: values?.educationLevel,
                label: values?.educationLevel,
              }}
              className={
                errors.educationLevel && touched.educationLevel
                  ? "input-error bakici-kayit__select"
                  : "bakici-kayit__select"
              }
              onBlur={handleBlur}
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
            {errors.educationLevel && touched.educationLevel && (
              <p className="error">{errors.educationLevel}</p>
            )}
          </div>

          <p className="bakici-kayit__input-label">Yabancı Dil</p>
          <div className="bakici-kayit__select-div">
            <Select
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
              className={"bakici-kayit__select"}
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
              options={sehirler}
              placeholder="Şehir"
              id="city"
              name="city"
              onChange={(selectedOption) => {
                handleChange("city")(selectedOption?.value)
              }}
              value={{ label: values?.city, value: values.city }}
              className={
                errors.city && touched.city
                  ? "input-error bakici-kayit__select"
                  : "bakici-kayit__select"
              }
              onBlur={handleBlur}
              styles={selectStyles}
            />

            {errors.city && <p className="error">{console.log(errors)}</p>}
          </div>

          <p className="bakici-kayit__input-label">İlçe Giriniz</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              options={ilceler}
              placeholder="İlçe"
              name="ilce"
              onChange={(selectedOption) =>
                setBakiciInfo({
                  ...bakiciInfo,
                  district: selectedOption.value,
                })
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
          onClick={handleSubmit}
          className="bakici-kayit__form-button"
          type="submit"
        >
          Devam et
        </button>
      </div>
    </div>
  )
}

export default BakiciKayitForm
