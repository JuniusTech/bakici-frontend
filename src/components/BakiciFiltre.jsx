import "../styles/BakiciFiltre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeicon from "../assets/homeicon.svg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import right from "../assets/right.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Select, { components } from "react-select";

const Filtre = () => {
  const [calisma, setCalisma] = useState([]);
  const [yasOpen, setYasOpen] = useState(false);
  const [ucretOpen, setUcretOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleChange = (e) => {
    setCalisma(e);
  };

  window.onclick = function (e) {
    if (!e.target.matches(".ucretclose")) {
      setUcretOpen(false);
    }

    if (!e.target.matches(".yasclose")) {
      setYasOpen(false);
    }
  };

  const sehirler = [
    { value: "istanbul", label: "İstanbul" },
    { value: "ankara", label: "Ankara" },
    { value: "izmir", label: "İzmir" },
    { value: "bursa", label: "Bursa" },
    { value: "adana", label: "Adana" },
    { value: "adıyaman", label: "Adıyaman" },
    { value: "afyonkarahisar", label: "Afyonkarahisar" },
    { value: "ağrı", label: "Ağrı" },
  ];

  const ilceler = [
    { value: "beyoglu", label: "Beyoğlu" },
    { value: "cubuk", label: "Çubuk" },
    { value: "urla", label: "Urla" },
    { value: "nilufer", label: "Nilüfer" },
    { value: "ceyhan", label: "Ceyhan" },
    { value: "besni", label: "Besni" },
  ];
  const calismaSekli = [
    { value: "gunduz", label: "Sadece gündüz bakıcılığı" },
    { value: "hsoGunduz", label: "Sadece haftasonu gündüz" },
    { value: "hici", label: "Sadece hafta içi yatılı" },
    { value: "hso", label: "Sadece hafta sonu yatılı" },
    { value: "tum", label: "Pazar dahil tüm günler" },
  ];

  const cinsiyet = [
    { value: "kadın", label: "Kadın" },
    { value: "erkek", label: "Erkek" },
    { value: "tümü", label: "Tümü" },
  ];

  const deneyim = [
    { value: "deneyim0", label: "0-12 Ay Deneyimli" },
    { value: "deneyim1", label: "1 yıl" },
    { value: "deneyim2", label: "2 yıl" },
    { value: "deneyim3", label: "3 yıl" },
    { value: "deneyim4", label: "4 yıl" },
    { value: "deneyim5", label: "+5 yıl" },
  ];

  const egitimSev = [
    { value: "doktora", label: "Doktora" },
    { value: "yuksekLi", label: "Yüksek Lisans" },
    { value: "lisans", label: "Lisans" },
    { value: "uni", label: "Universite" },
    { value: "lise", label: "Lise" },
  ];

  const medeniDurum = [
    { value: "bekar", label: "Bekar" },
    { value: "evli", label: "Evli" },
    { value: "tümü", label: "Tümü" },
  ];

  const yabanciDil = [
    { value: "ingilizce", label: "İngilizce" },
    { value: "almanca", label: "Almanca" },
    { value: "fransizca", label: "Fransızca" },
    { value: "rusca", label: "Rusça" },
    { value: "arapca", label: "Arapça" },
  ];

  // const NumInputDiv = ({ open, setOpen, label }) => {
  //   return (
  // <div className="w-100 position-relative">
  //   <div
  //     className="bakici-filtre__selectdiv d-flex justify-content-between align-items-center px-4 pb-2"
  //     onClick={() => setOpen(!open)}
  //   >
  //     <p className="">{label}</p>
  //     <img
  //       src={right}
  //       className="bakici-filtre__arrow"
  //       alt="arrow"
  //       style={{ rotate: open ? "90deg" : "0deg", transition: "all .2s" }}
  //     />
  //   </div>

  //   {open && (
  //     <div className="bakici-filtre__yas d-flex gap-5 p-3 border border-1 rounded-3 mt-2 position-absolute z-2 bg-white">
  //       <div>
  //         <p className="fs-6">En az</p>
  //         <input
  //           type="number"
  //           name=""
  //           id=""
  //           className="w-100 border-1 rounded-1 "
  //         />
  //       </div>
  //       <div>
  //         <p className="fs-6">En fazla</p>
  //         <input
  //           type="number"
  //           name=""
  //           id=""
  //           className="w-100 border-1 rounded-1 "
  //         />
  //       </div>
  //     </div>
  //   )}
  // </div>
  //   );
  // };

  // const SelectComp = ({ options, placeholder }) => {
  //   return (
  //     <div className="bakici-filtre__selectdiv">
  //       <Select
  //         className="bakici-filtre__select"
  //         options={options}
  //         placeholder={placeholder}
  //         components={{ Option: RadioOption, ClearIndicator: null }}
  //         styles={selectStyles}
  //         isSearchable={false}
  //       />
  //     </div>
  //   );
  // };

  const selectStyles = {
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? "#f5f5f5" : "white",
      color: "black",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        color: "black",
      },
      cursor: "pointer",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "white",
      boxShadow: "none",
      "&:hover": {
        borderColor: "white",
      },
      cursor: "pointer",
    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      transform: state.selectProps.menuIsOpen ? "" : "rotate(-90deg)",
      transition: "all .2s ease",
      "& svg": {
        width: "24px",
        height: "24px",
      },
    }),
    indicatorSeparator: () => null,
    menu: (baseStyles) => ({
      ...baseStyles,
      "& span": { backgroundColor: "red" },
    }),
  };

  const CheckboxOption = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <input
          className="me-3"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        {children}
      </components.Option>
    );
  };

  const RadioOption = ({ children, ...props }) => {
    return (
      <components.Option {...props}>
        <input
          className="me-3"
          type="radio"
          checked={props.isSelected}
          onChange={() => null}
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        {children}
      </components.Option>
    );
  };

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

          {/* <SelectComp options={cinsiyet} placeholder="Cinsiyet" /> */}

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

          {/* <SelectComp options={egitimSev} placeholder="Eğitim Seviyesi" /> */}

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
              placeholder="Yabancı Dil Seviyesi"
              components={{
                Option: CheckboxOption,
                ClearIndicator: null,
              }}
              styles={selectStyles}
            />
          </div>

          {/* <NumInputDiv open={ucretOpen} setOpen={setUcretOpen} label="Ücret" /> */}

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

          {/* <SelectComp options={deneyim} placeholder="Deneyim" /> */}

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
  );
};

export default Filtre;
