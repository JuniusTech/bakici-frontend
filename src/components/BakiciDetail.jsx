import React from "react";
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

// import { baseUrl } from "./config";

function BakiciDetail() {
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
          <div className="d-flex justify-content-between bg-warning">
            <div className="d-block">
              <img src={LanguageIcon} alt="" className="mw-100 float-start m-auto"/>
              <p className="">İyi seviye Ingilizce konusabiliyorum</p>
            </div>
            <div className="d-block">
              <img src={DeneyimIcon} alt="" className="float-start m-auto"/>
              <p className="" >+ 2 yil deneyim</p>
            </div>
            <div className="d-block">
              <img src={EngelliIcon} alt="" className="float-start m-auto" />
              <p className="">Engelli cocuk bakimi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BakiciDetail;
