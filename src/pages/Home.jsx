import React, { useState } from "react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeBackground from "../assets/HomeBackground.svg";
import HomeBackground2 from "../assets/Ellipse 9.svg";
import HomeBackground3 from "../assets/Ellipse 8.svg";
import homepageicon from "../assets/homepageicon.svg";
import Arrow from "../assets/Arrow.svg";
import BottomArrow from "../assets/bottom-vector.svg";
import Child from "../assets/Child.svg";
import Location from "../assets/Location.svg";
import Search from "../assets/Search.svg";
import cities from "../components/Cities";
import Select from "react-select";
import BabyCar from "../assets/baby_car.svg";
import Baby from "../assets/Baby.svg";
import AdultAndBaby from "../assets/adult_and_baby.svg";
import group52 from "../assets/Group52.svg";
import group48 from "../assets/Group48.svg";
import group49 from "../assets/Group49.svg";
import group50 from "../assets/Group50.svg";
import group51 from "../assets/Group51.svg";
import kaydolİcon from "../assets/kaydol-icon.svg";
import testİcon from "../assets/test-icon.svg";
import kurdelaİcon from "../assets/kurdela-icon.svg";
import teamİcon from "../assets/team-icon.svg";
import musteri1 from "../assets/musteri1.svg";
import musteri2 from "../assets/musteri2.svg";
import musteri3 from "../assets/musteri3.svg";
import Logo from "../assets/logo.svg";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [arrow, setArrow] = useState(Arrow);
  const [arrow2, setArrow2] = useState(Arrow);
  const [imgColor, setImgColor] = useState("");
  const [imgColor2, setImgColor2] = useState("");
  const [imgColor3, setImgColor3] = useState("");
  const [childImageSource, setChildImageSource] = useState("");
  const [changeBottom, setChangeBottom] = useState("46px");
  const filterColor =
    "  invert(48%) sepia(31%) saturate(841%) hue-rotate(155deg) brightness(90%) contrast(103%)";
  let test = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedOption);
    console.log("Location:", location);
    console.log("Date:", date);
  };

  const options = [
    {
      label: (
        <div>
          <img
            src={BabyCar}
            height="30px"
            width="30.72px"
            style={{ marginRight: "20px" }}
          />
          0-12 yas arası{" "}
        </div>
      ),
      value: "0-12 yas arasi",
    },
    {
      label: (
        <div>
          <img
            src={Baby}
            height="30px"
            width="30.72px"
            style={{ marginRight: "20px" }}
          />
          1 ve 2 yas arası{" "}
        </div>
      ),
      value: "1 ve 2 yas arasi",
      imageSrc: "path/to/image1.jpg",
    },
    {
      label: (
        <div class="image-container">
          <img
            src={AdultAndBaby}
            height="30px"
            width="30.72px"
            style={{ marginRight: "20px" }}
          />
          <img
            src={BabyCar}
            height="30px"
            width="30.72px"
            style={{ marginRight: "20px" }}
          />
          <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
            {" "}
            3 yaş ve üzeri
          </p>
        </div>
      ),
      imageSrc: "path/to/image1.jpg",
    },
  ];

  const changeColor3 = (e) => {
    setImgColor3(filterColor);

    return (e.target.type = "date");
  };

  const changeColorDefault3 = () => {
    setImgColor3("");
  };

  const customStyles = {
    control: (provided, state) => {
      if (state.selectProps.id === "first-select") {
        test = state.hasValue ? setChildImageSource("none") : "10px 50px";
        test = state.hasValue ? setChangeBottom("20px") : "10px 50px";
        test = state.isFocused ? setImgColor(filterColor) : setImgColor("");
        test = state.menuIsOpen ? setArrow(BottomArrow) : setArrow(Arrow);
      }
      if (state.selectProps.id === "second-select") {
        test = state.isFocused ? setImgColor2(filterColor) : setImgColor2("");
        test = state.menuIsOpen ? setArrow2(BottomArrow) : setArrow2(Arrow);
      }

      return {
        ...provided,
        width: "300px",
        ...(state.selectProps.id === "first-select" && {
          padding: state.hasValue ? "10px 10px" : "10px 50px",
        }),
        ...(state.selectProps.id === "second-select" && {
          padding: "10px 50px",
        }),
        height: "64px",
        margin: "11px 0 -19px 0",
        cursor: "pointer",
        textAlign: "left",
        border: state.isFocused ? "1px solid #2D83AC" : "1px solid #C7C7C7",
        borderRadius: "32px",
        boxShadow: "none",
        "&:hover": {
          border: "1px solid #2D83AC",
        },
      };
    },
    singleValue: (provided, state) => ({
      ...provided,
      color: "#2D83AC", // Set the desired color for the selected value
      filter: filterColor,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#2D83AC" : "#C7C7C7", // Set the desired color for the placeholder text
      fontWeight: state.isFocused ? "500" : "",
      ...(state.selectProps.id === "second-select" && {
        color: state.isFocused ? "white" : "#C7C7C7",
      }),
    }),
    menu: (provided) => ({
      ...provided,
      border: "1px solid #2D83AC",
      borderRadius: "17px",
      marginTop: "28px",
    }),
    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    option: (base, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        borderBottom: "1px solid rgba(69, 90, 100, 0.8)",
        borderRadius: "16px",
        textAlign: "left",
        paddingLeft: "27px",
        backgroundColor: isFocused ? "#EBEBEB" : "",
        color: isSelected ? "#EBEBEB" : "",
        color: "#455A64;",
        cursor: "pointer",
      };
    },
  };

  const getDateColor = () => {
    return date ? { color: "#2D83AC" } : null;
  };

  return (
    <div className="Home">
      <Navbar />
      <img className="HomeBackground1" src={HomeBackground} alt="" />
      <div className="Home-First">
        <div className="Home-First-Text-Form">
          <h1 className="Home-First-Text">
            Bebekleriniz için en iyi bakımı bizimle bulun
          </h1>
          <div>
            <form onSubmit={handleSubmit} className="Home-First-Form">
              <label className="Form-Label">
                Bakıcı Arıyorum
                <Select
                  id="first-select"
                  styles={customStyles}
                  options={options}
                  isSearchable={false}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  openMenuOnFocus={true}
                  value={options.find(
                    (option) => option.value === selectedOption
                  )}
                  onChange={(event) => setSelectedOption(event.value)}
                  placeholder="Çocuğum için..."
                />
                {
                  <img
                    style={{ filter: imgColor, display: childImageSource }}
                    src={Child}
                    alt="Child"
                    className="Child"
                  />
                }
                <img
                  style={{ filter: imgColor, bottom: changeBottom }}
                  src={arrow}
                  alt="Arrow"
                  className="Arrow"
                />
              </label>
              <label className="Form-Label ">
                Nerede Yaşıyorsunuz?
                <Select
                  id="second-select"
                  styles={customStyles}
                  options={cities}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  openMenuOnFocus={true}
                  value={options.find((option) => option.value === location)}
                  onChange={(event) => setLocation(event.value)}
                  placeholder="Şehir seçin..."
                />
                <img
                  style={{ filter: imgColor2 }}
                  src={Location}
                  alt="Location"
                  className="Location"
                />
                <img
                  style={{ filter: imgColor2 }}
                  src={arrow2}
                  alt="Arrow"
                  className="Arrow"
                />
              </label>
              <label className="Form-Label ">
                Başlangıç Tarihi
                <input
                  className="Form-input"
                  style={getDateColor()}
                  type="text"
                  id="Choose-date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  onFocus={changeColor3}
                  onBlur={changeColorDefault3}
                  /* style={{background:url()}}*/
                  placeholder="Tarih Secin"
                />
                {/*<img src={Calendar} alt="Calendar" className="Arrow-tarih" /> */}
              </label>
              <button type="submit" className="Home-First-Button">
                Arama Yap{" "}
                <img className="Search-Logo" src={Search} alt="CareZone" />
              </button>
            </form>
          </div>
        </div>
        <div className="Home-First-img">
          <img src={homepageicon} alt="homepage icon" />
        </div>
      </div>
      <div className="Description">
        <p className="Description-Title">CAREZONE NASIL ÇALIŞIYOR?</p>
        <hr className="Description-Hr1" />
        <p className="Description-Text">
          Hayatımızın en değerli varlıklarından biri olan bebeklerimizin
          sağlıklı ve mutlu bir şekilde büyümesi ebeveynler için çok önemlidir.
          Ancak günümüzde, iş hayatının yoğunluğu ve diğer nedenlerden dolayı
          ebeveynler bebekleriyle yeterince ilgilenemeyebilirler. İşte tam da bu
          noktada biz sizin için devreye giriyoruz. Bebeklerin güvenliği,
          sağlığı ve mutluluğu için gereken hizmetleri sağlayan bebek bakıcıları
          ile ebeveynleri buluşturuyoruz.{" "}
        </p>
        <hr className="Description-Hr2" />
      </div>
      <img className="HomeBackground2" src={HomeBackground2} alt="" />
      <div className="Bakici">
        <p className="Bakici-Text">BAKICI MI ARIYORSUNUZ? </p>
        <div className="Bakici-Box">
          <div className="Bakici-Box-Cards">
            <div className="Bakici-Box-Card">
              <p className="Bakici-Box-Card-Number">1</p>
              <img
                className=" Bakici-Box-Card-Icon"
                src={group52}
                alt="group52"
              />
              <p className="Bakici-Box-Card-Text">
                Istediginiz bakiciyi websitemizden secin
              </p>
            </div>
            <hr className="Bakici-Box-Card-Hr" />

            <div className="Bakici-Box-Card">
              <p className="Bakici-Box-Card-Number">2</p>
              <img
                className=" Bakici-Box-Card-Icon"
                src={group48}
                alt="group48"
              />
              <p className="Bakici-Box-Card-Text">Gorusme icin randevu alin</p>
            </div>
            <hr className="Bakici-Box-Card-Hr" />

            <div className="Bakici-Box-Card">
              <p className="Bakici-Box-Card-Number">3</p>
              <img
                className=" Bakici-Box-Card-Icon"
                src={group49}
                alt="group49"
              />
              <p className="Bakici-Box-Card-Text">
                Bakiciniz ile gerekli gorusmelerinizi yapin
              </p>
            </div>
            <hr className="Bakici-Box-Card-Hr" />

            <div className="Bakici-Box-Card">
              <p className="Bakici-Box-Card-Number">4</p>
              <img
                className=" Bakici-Box-Card-Icon"
                src={group50}
                alt="group50"
              />
              <p className="Bakici-Box-Card-Text">
                Anlasmanizi ekibimize bildirin
              </p>
            </div>
            <hr className="Bakici-Box-Card-Hr" />

            <div className="Bakici-Box-Card">
              <p className="Bakici-Box-Card-Number">5</p>
              <img
                className=" Bakici-Box-Card-Icon"
                src={group51}
                alt="group51"
              />
              <p className="Bakici-Box-Card-Text">
                Guvenli sekilde bakim servisimizin tadini cikarin.
              </p>
            </div>
          </div>
          <button className="Bakici-Button">BAKICI ARA</button>
        </div>
      </div>
      <img className="HomeBackground3" src={HomeBackground3} alt="" />

      <div className="BakiciOlma">
        <p className="BakiciOlma-Text">İŞ Mİ ARIYORSUNUZ? </p>
        <div className="BakiciOlma-Box">
          <div className="BakiciOlma-Box-Cards">
            <div className="BakiciOlma-Box-Card">
              <p className="BakiciOlma-Box-Card-Number">1</p>
              <img
                className=" BakiciOlma-Box-Card-Icon"
                src={kaydolİcon}
                alt="Kaydolİcon"
              />
              <p className="BakiciOlma-Box-Card-Text">
                Sisteme Kaydinizi yapin
              </p>
            </div>
            <hr className="BakiciOlma-Box-Card-Hr" />

            <div className="BakiciOlma-Box-Card">
              <p className="BakiciOlma-Box-Card-Number">2</p>
              <img
                className=" BakiciOlma-Box-Card-Icon"
                src={testİcon}
                alt="Testİcon"
              />
              <p className="BakiciOlma-Box-Card-Text">
                Online bakici yeterlilik testini yapin
              </p>
            </div>
            <hr className="BakiciOlma-Box-Card-Hr" />

            <div className="BakiciOlma-Box-Card">
              <p className="BakiciOlma-Box-Card-Number">3</p>
              <img
                className=" BakiciOlma-Box-Card-Icon"
                src={kurdelaİcon}
                alt="Kurdelaİcon"
              />
              <p className="BakiciOlma-Box-Card-Text">
                Yeterlilik bilgilerinizi sistemimize girin
              </p>
            </div>
            <hr className="BakiciOlma-Box-Card-Hr" />

            <div className="BakiciOlma-Box-Card">
              <p className="BakiciOlma-Box-Card-Number">4</p>
              <img
                className=" BakiciOlma-Box-Card-Icon"
                src={teamİcon}
                alt="teamİcon"
              />
              <p className="BakiciOlma-Box-Card-Text">Ekibe hosgeldiniz</p>
            </div>
          </div>
          <button className="BakiciOlma-Button">İŞE BAŞVUR</button>
        </div>
      </div>
      <div className="Carouselx">
        <p className="Carouselx-Text">" KULLANICILARIMIZ NELER DİYOR "</p>
        <div className="Carouselx-Box">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={musteri2}
                  className="d-block w-50 mustericarousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={musteri1}
                  className="d-block w-50 mustericarousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={musteri3}
                  className="d-block w-50 mustericarousel"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev Carouselx-Button"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="button-span-left" aria-hidden="true"></span>
            </button>
            <button
              className="carousel-control-next Carouselx-Button"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className=" button-span-right " aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="HomeLastComp">
        <img src={Logo} alt="Logo" className="HomeLastCompLogo" />
        <p className="HomeLastCompText">
          “ Bebekleriniz için en iyi bakımı bizimle bulun “
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
