import React, { useState } from "react";
import "../styles/BakiciDetail/BakiciDetail.css";
import Bakici1 from "../images/Bakıcı1.png";
import Bakici2 from "../images/Bakıcı2.png";
import Slider from "react-slick";
import "../styles/BakiciDetail/Slick.css";
import "../styles/BakiciDetail/Slick-theme.css";
import Star from "../images/Star.png";
import RedHeart from "../images/RedHeart.png";
import LanguageIcon from "../images/LanguageIcon.png";
import DeneyimIcon from "../images/DeneyimIcon.png";
import EngelliIcon from "../images/EngelliIcon.png";
import SaatIcon from "../images/DetayClock.png";
import GeceIcon from "../images/DetayGeceIcon.png";
import EkServisIcon1 from "../images/EkServisIcon1.png";
import EkServisIcon2 from "../images/EkServisIcon2.png";
import TarihSecimi from "./TarihSecimi";
import Select from "react-select";
import useSelectOptions from "./select/useSelectOptions";
import Kalp from "../images/RedHeart.png"
// import { baseUrl } from "./config";

function BakiciDetail() {
  const [specialDays, setspecialDays] = useState([]);
  const [tarife, setTarife] = useState([]);
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDatesSelected = (dates) => {
    setspecialDays([...specialDays, ...dates]);
  };

  const handleChange = (e) => {
    setTarife(e);
  };

  const gündüzTarife = [
    { value: "gunduz", label: "Sadece gündüz bakıcılığı" },
    { value: "hsoGunduz", label: "Sadece haftasonu gündüz" },
    { value: "hici", label: "Sadece hafta içi yatılı" },
    { value: "hso", label: "Sadece hafta sonu yatılı" },
    { value: "tum", label: "Pazar dahil tüm günler" },
  ];

  return (
    <div className="bakici-detail-container">
      <div className="bakici-detail-name-container">
        <h3>TUĞBA AKSOY</h3>
      </div>
      <div className="bakici-detail-slider-container">
        <Slider {...settings} className="w-100">
          <div>
            <img src={Bakici1} alt="" className="d-block w-100" />
          </div>
          <div>
            <img src={Bakici2} alt="" className="d-block mw-100" />
          </div>
          <div>
            <img src={Bakici1} alt="" className="d-block w-100" />
          </div>
        </Slider>
        <div className="d-flex justify-content-around w-100 mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <p className="mb-0 mx-4 bakici-detail-star-rate">4.7</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <img src={RedHeart} alt="" />
            <p className="mb-0 mx-4 bakici-detail-favorilenme">
              7 kişi favori listesine ekledi
            </p>
          </div>
        </div>
      </div>
      <hr className="slider-bottom-hr" />
      <div>
        <div className="bakici-detail-hakkinda-container">
          <h5>HAKKINDA</h5>
          <p>
            Merhaba ben Tugba Aksoy. 23 Yasindayim. 3 yillik bakicilik deneyimim
            var. Cogunlukla okul oncesi cocuklar ile calistim. Cocuklari cok
            seviyorum. Montessori egitimi aldim bu sebeble cocuklarla birlikte
            kaliteli vakit gecirmek en buyuk hedefim. Ankara da ailemle ile
            beraber yasiyorum. Universite ogrencisiyim, ek gelir kazanmak ve
            cocuklarla vakit gecirmeyi seviyorum.
          </p>
        </div>
        <div className="deneyim-container">
          <h5>DENEYİMLERİ</h5>
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex justify-content-center align-items-center">
              <img src={LanguageIcon} alt="" className="px-2" />
              <p className="">İyi seviye Ingilizce konusabiliyorum</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={DeneyimIcon} alt="" className="px-2" />
              <p className="">+ 2 yil deneyim</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={EngelliIcon} alt="" className="px-2" />
              <p className="">Engelli cocuk bakimi</p>
            </div>
          </div>
        </div>
        <div className="servisler-container">
          <h5>TUĞBANIN SERVİSLERİ</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-block">
                <img src={SaatIcon} alt="" className="float-start px-2" />
                <div className="tarife-container">
                  <h6>Gündüz Tarife</h6>
                  <p>
                    Gunduz tarifesinde ekstra calisma saatleri durumunda
                    alinacak ucret
                  </p>
                </div>
              </div>
              <div className="tarife-ücret">
                <h4>30TL/Saati</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-block">
                <img src={GeceIcon} alt="" className="float-start px-2" />
                <div className="tarife-container">
                  <h6>Gece Tarife</h6>
                  <p>Gece yatili cocuk bakimi tarifesi</p>
                </div>
              </div>
              <div className="tarife-ücret">
                <h4>200TL/Gecesi</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="ek-servisler-container">
          <h5>TUĞBANIN EK SERVİSİ</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-block">
                <img src={EkServisIcon1} alt="" className="float-start px-2" />
                <p>Montesori egitimi / aktiviteleri</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-block">
                <img src={EkServisIcon2} alt="" className="float-start px-3" />
                <p className="ek-servis-content">
                  Ebeveyn isyerinden cocugu almak/ birakmak
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="gündüz-tarife-container">
            <Select
              className="tarife-select"
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              options={gündüzTarife}
              isSearchable={false}
              placeholder={
                tarife.length
                  ? `${tarife.length} Çalışma Şekli Seçildi`
                  : "Gündüz Tarife"
              }
              components={{
                Option: CheckboxOption,
                ClearIndicator: null,
              }}
              styles={selectStyles}
              onChange={handleChange}
            />
          </div>
          <div className="tarih-container">
          <TarihSecimi onDatesSelected={handleDatesSelected}  />
          </div>
          <div>
            <h5>YORUMLAR</h5>
          </div>
          
      </div>
    </div>
  );
}

export default BakiciDetail;
