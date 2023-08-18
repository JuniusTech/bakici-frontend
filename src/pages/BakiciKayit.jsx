import React from "react";
import { Link, NavLink } from "react-router-dom";
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg";
import "../styles/BakiciKayit.css";
import profileImg from "../assets/Ellipse54.svg";
import sifreIcon from "../assets/sifre-icon.svg";
import plus from "../assets/plus.svg";
import pen from "../assets/pen.svg";
import docIcon from "../assets/doc.svg";
import homeIcon from "../assets/home-icon.svg";
import usePasswordToggle1 from "../components/usePasswordToggle";
import Select, { components } from "react-select";
import useSelectOptions from "../components/select/useSelectOptions";

const cinsiyet = [
  { value: "kadın", label: "Kadın" },
  { value: "erkek", label: "Erkek" },
];

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

const medeniDurum = [
  { value: "bekar", label: "Bekar" },
  { value: "evli", label: "Evli" },
];

const yabanciDil = [
  { value: "ingilizce", label: "İngilizce" },
  { value: "almanca", label: "Almanca" },
  { value: "fransizca", label: "Fransızca" },
  { value: "rusca", label: "Rusça" },
  { value: "arapca", label: "Arapça" },
];

const BakiciKayit = () => {
  const [PasswordInputType1, ToggleIcon1] = usePasswordToggle1();
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle1();
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions();

  return (
    <div className="bakici-kayit">
      <nav className="p-4" style={{ height: "155px" }}>
        <Link to="/">
          <img
            src={MusteriKayitLogo}
            alt="MusteriKayitLogo"
            className="MusteriKayit-Logo"
          />
        </Link>
      </nav>
      <div className="bakici-kayit__profile">
        <h1 className="text-center">GENEL BİLGİLERİNİZİ GİRİN</h1>
        <form
          className="bakici-kayit__profile-form d-flex align-items-center align-items-xl-start flex-column flex-xl-row"
          action=""
        >
          <div className="bakici-kayit__profile-form-sol ms-0 ms-xl-5 ps-xl-5">
            <h3 className="bakici-kayit__profile-baslik">Profil Bilgileri</h3>
            <div className="bakici-kayit__profile-info">
              <div className="bakici-kayit__avatar">
                <img className="img" src={profileImg} alt="" />
                <div className="add-img">
                  <span className="plus1"></span>
                  <span className="plus2"></span>
                </div>
              </div>
              <div className="bakici-kayit__description">
                <label className="bakici-kayit__desc-label" htmlFor="">
                  Kendinizi kısaca müşterilerimize tanıtın
                </label>
                <textarea
                  className="bakici-kayit__textarea"
                  name=""
                  id=""
                ></textarea>
                {/* <div className="bakici-kayit__desc-edit">
                  <span>Tekrar düzenle</span>
                  <button>Kaydet</button>
                </div> */}
              </div>
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                İsim ve Soyisim
              </label>
              <input className="bakici-kayit__input" type="text" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Email adresiniz
              </label>
              <input className="bakici-kayit__input" type="email" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Telefon numaraniz
              </label>
              <input className="bakici-kayit__input" type="tel" />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Sifrenizi girin <img src={sifreIcon} alt="" />
              </label>
              <input
                className="bakici-kayit__input"
                type={PasswordInputType1}
              />
              <div className="bakici-kayit__sifre-icon">{ToggleIcon1}</div>
            </div>

            <p className="bakici-kayit__sifre-bilgi">
              Sifreniz en az 8 karakterden olusmalidir
            </p>
            <p className="bakici-kayit__sifre-bilgi">
              Sifrenizde en az bir sembol bulunmalidir. ornegin: @, !
            </p>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Sifrenizi tekrarlayin <img src={sifreIcon} alt="" />
              </label>
              <input
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
              <input id="date" className="bakici-kayit__input" type="date" />
            </div>

            <p className="bakici-kayit__input-label">Cinsiyetiniz</p>
            <div className="bakici-kayit__select-div">
              <Select
                className="bakici-kayit__select"
                options={cinsiyet}
                placeholder="Cinsiyet"
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
                placeholder="Yabancı Dil Seviyesi"
                components={{
                  Option: CheckboxOption,
                  ClearIndicator: null,
                }}
                styles={selectStyles}
              />
            </div>

            <h3 className="bakici-kayit__profile-baslik my-4">
              Adres Bilgileri
            </h3>

            <p className="bakici-kayit__input-label">Şehir Giriniz</p>
            <div className="bakici-kayit__select-div">
              <Select
                className="bakici-kayit__select"
                options={sehirler}
                placeholder="Şehir"
                styles={selectStyles}
              />
            </div>

            <p className="bakici-kayit__input-label">İlçe Giriniz</p>
            <div className="bakici-kayit__select-div">
              <Select
                className="bakici-kayit__select"
                options={ilceler}
                placeholder="İlçe"
                styles={selectStyles}
              />
            </div>

            <div className="bakici-kayit__input-div">
              <label className="bakici-kayit__input-label" htmlFor="">
                Ev Adresiniz
              </label>
              <input className="bakici-kayit__input" type="text" />
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
                Carezone gizlilik haklarini okudum ve onayliyorum
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
                Bakicilik haklariyla ilgili kurallari okudum onayliyorum
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Mesai --------------- */}

      <div className="bakici-kayit__mesai text-center my-5">
        <h1 className="text-uppercase ">
          Calismak istediginiz Mesai SEKLINIZI SECINIZ
        </h1>

        <div className="bakici-kayit__mesai-div d-flex flex-column m-auto  my-5">
          <div className="d-flex gap-3 align-items-center ">
            <input
              type="checkbox"
              name=""
              id="sgündüz"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="bakici-kayit__mesai-label" htmlFor="sgündüz">
              Sadece gündüz bakıcılığı
            </label>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name=""
              id="hsonugündüz"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="bakici-kayit__mesai-label" htmlFor="hsonugündüz">
              Sadece haftasonu gunduz bakıcılığı
            </label>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name=""
              id="haiciyatili"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="bakici-kayit__mesai-label" htmlFor="haiciyatili">
              Sadece haftaiçi yatılı bakıcılık
            </label>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name=""
              id="hsonuyatili"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="bakici-kayit__mesai-label" htmlFor="hsonuyatili">
              Sadece haftasonu yatılı bakıcılık
            </label>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name=""
              id="tümyatili"
              style={{ width: "20px", height: "20px" }}
            />
            <label className="bakici-kayit__mesai-label" htmlFor="tümyatili">
              Pazar dahil tüm günler yatılı bakıcılık
            </label>
          </div>
        </div>
      </div>

      {/* Mesai son ----------------------  */}

      <div className="bakici-kayit__calisma-deneyim position-relative py-4">
        <div className="d-flex w-75 m-auto">
          <div className="flex-grow-1">
            <h1>Çalışma Detayları</h1>
            <p className="bakici-kayit__input-label mt-5">
              Ücret beklentinizi belirtin
            </p>
            <div className="bakici-kayit__select-div">
              <Select
                className="bakici-kayit__select"
                options={ilceler}
                placeholder="İlçe"
                styles={selectStyles}
              />
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex-grow-1 ms-5">
            <h1>Deneyim</h1>
            <div className="bakici-kayit__deneyim mt-5">
              <h6 className="" style={{ textDecoration: "underline" }}>
                Bakıcı
              </h6>
              <h6>Abc Kreşi</h6>
              <p className="">Oca 2022 - Oca 2023 - 1 yıl</p>
            </div>
            <div className="bakici-kayit__buttons d-flex justify-content-around align-items-center mt-5">
              <p
                className="my-0 d-flex align-items-center gap-2"
                style={{ textDecoration: "underline" }}
              >
                Tekrar Düzenle{" "}
                <img className="" src={pen} alt="pen" width={14} />
              </p>
              <button className="">
                {" "}
                <img src={plus} alt="plus" width={24} /> Deneyim Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakiciKayit;
