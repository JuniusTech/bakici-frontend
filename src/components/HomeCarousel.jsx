import React from "react";
import "../styles/HomeCarousel.css";
import musteri1 from "../assets/musteri1.svg";
import musteri2 from "../assets/musteri2.svg";
import musteri3 from "../assets/musteri3.svg";

const HomeCarousel = () => {
  return (
    <div className="Carouselx">
      <p className="Carouselx-Text">" KULLANICILARIMIZ NELER DİYOR "</p>
      <div className="Carouselx-Box">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img
                src={musteri2}
                className="d-block w-50 mustericarousel"
                alt="..."
              />
            </div>
            <div className="carousel-item" >
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            
          </button>
          <button
            className="carousel-control-next Carouselx-Button"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
