import "../styles/BakiciFiltre.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeicon from "../assets/homeicon.svg"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import right from "../assets/right.svg"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Select from "react-select"
import useSelectOptions from "./select/useSelectOptions"
import {
  sehirler,
  ilceler,
  calismaSekli,
  cinsiyet,
  deneyim,
  egitimSev,
  medeniDurum,
  yabanciDil,
} from "../helper/options"

const Filtre = () => {
  const [calisma, setCalisma] = useState([])
  const [yasOpen, setYasOpen] = useState(false)
  const [ucretOpen, setUcretOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions()

  const handleChange = (e) => {
    setCalisma(e)
  }

  window.onclick = function (e) {
    if (!e.target.matches(".ucretclose")) {
      setUcretOpen(false)
    }

    if (!e.target.matches(".yasclose")) {
      setYasOpen(false)
    }
  }

  return (
    <div className="m-4">
      <div className="bakici-filtre__path d-flex align-items-center gap-2 ">
        <img src={homeicon} alt="" />
        <p className="text-black-50 m-0">Anasayfa</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-black-50" />
        <p className="fw-semibold m-0">Bakıcılar</p>
      </div>

      <div className="bakici-filtre__formcontainer ">
        <p className="bakici-filtre__formbaslik">GELİŞTİRİLMİŞ ARAMA</p>

        <div
          className={`bakici-filtre__form  ${filterOpen ? "active" : "close"} `}
        >
          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={sehirler}
              placeholder="Şehir"
              styles={selectStyles}
            />
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={ilceler}
              placeholder="İlçe"
              styles={selectStyles}
            />
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              options={calismaSekli}
              isSearchable={false}
              placeholder={
                calisma.length
                  ? `${calisma.length} Çalışma Şekli Seçildi`
                  : "Çalışma Şekli"
              }
              components={{
                Option: CheckboxOption,
                ClearIndicator: null,
              }}
              styles={selectStyles}
              onChange={handleChange}
            />
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={cinsiyet}
              placeholder="Cinsiyet"
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={egitimSev}
              placeholder="Eğitim Seviyesi"
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <div className="bakici-filtre__select-container w-100 position-relative yasclose">
            <div
              className="bakici-filtre__selectdiv ucret-yas d-flex justify-content-between align-items-center px-4 pb-2 yasclose"
              onClick={() => setYasOpen(!yasOpen)}
            >
              <p className="yasclose m-0">Yaş Aralığı</p>
              <img
                src={right}
                className="bakici-filtre__arrow yasclose"
                alt="arrow"
                style={{
                  rotate: yasOpen ? "90deg" : "0deg",
                }}
              />
            </div>

            {yasOpen && (
              <div className="bakici-filtre__yas d-flex gap-5 p-3 border border-1 rounded-3 mt-2 position-absolute z-2 bg-white yasclose">
                <div className="yasclose">
                  <p className="fs-6 yasclose">En az</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-100 border-1 rounded-1 yasclose"
                  />
                </div>
                <div className="yasclose">
                  <p className="fs-6 yasclose">En fazla</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-100 border-1 rounded-1 yasclose"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={medeniDurum}
              placeholder="Medeni Durum"
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              options={yabanciDil}
              isSearchable={false}
              placeholder="Yabancı Dil"
              components={{
                Option: CheckboxOption,
                ClearIndicator: null,
              }}
              styles={selectStyles}
            />
          </div>

          <div className="w-100 position-relative ucretclose bakici-filtre__select-container">
            <div
              className="bakici-filtre__selectdiv ucret-yas d-flex justify-content-between align-items-center px-4 pb-2 ucretclose"
              onClick={() => setUcretOpen(!ucretOpen)}
            >
              <p className="ucretclose m-0">Ücret</p>
              <img
                src={right}
                className="bakici-filtre__arrow ucretclose"
                alt="arrow"
                style={{
                  rotate: ucretOpen ? "90deg" : "0deg",
                }}
              />
            </div>

            {ucretOpen && (
              <div className="bakici-filtre__yas d-flex gap-5 p-3 border border-1 rounded-3 mt-2 position-absolute z-2 bg-white ucretclose">
                <div className="ucretclose">
                  <p className="fs-6 ucretclose">En az</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-100 border-1 rounded-1 ucretclose"
                  />
                </div>
                <div className="ucretclose">
                  <p className="fs-6 ucretclose">En fazla</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-100 border-1 rounded-1 ucretclose"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="bakici-filtre__selectdiv">
            <Select
              className="bakici-filtre__select"
              options={deneyim}
              placeholder="Deneyim"
              components={{ Option: RadioOption, ClearIndicator: null }}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>

          <button className="bakici-filtre__button">FİLTRELE</button>
        </div>
        <div className="text-center d-block d-lg-none mb-2">
          <FontAwesomeIcon
            icon={faChevronDown}
            className=""
            style={{
              cursor: "pointer",
              rotate: filterOpen ? "180deg" : "0deg",
              width: "20px",
              height: "20px",
              transition: "all 0.3s ease",
            }}
            onClick={() => setFilterOpen(!filterOpen)}
          />
        </div>
      </div>
    </div>
  )
}

export default Filtre
