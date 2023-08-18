import React from "react";
import Bakici from "../images/Bakıcı1.png";
import Yıldız from "../images/yıldız.png";
import Location from "../images/location.png";
import Clock from "../images/clock.png";
import Money from "../images/money.png";
import Kalp from "../images/kalp.png";
import "../styles/bakiciara.css";

function Bakicikart() {
  return (
    <div className="card-body mx-lg-auto mx-md-3 mx-sm-3 py-lg-3 py-md-2">
      <div className="position-relative">
        <img src={Bakici} className="card-img-top" alt="..." />
        <div className="heart_container position-absolute">
          <img src={Kalp} alt="" className="kalp_image position-absolute" />
        </div>
      </div>
      <div className="px-3">
        <div className="bakici_name_container d-flex justify-content-between align-items-center m-1">
          <div className="d-flex justify-content-center align-items-center">
            <h5 className="card-title text-start ">Tuğba Aksoy</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center m-1 px-1">
            4.7 <img src={Yıldız} alt="" className="mx-1" /> (4)
          </div>
        </div>
        <hr className="hr" />
        <div className="bakici_info_container">
          <div className="d-flex">
            <img className="bakici_location_icon" src={Location} alt="" />
            <p>Yenimahalle, Ankara</p>
          </div>
          <div className="d-flex">
            <img className="bakici_clock_icon" src={Clock} alt="" />
            <p>3 Yıl Deneyimli</p>
          </div>
          <div className="d-flex">
            <img className="bakici_money_icon" src={Money} alt="" />
            <p>Ücret 1000TL/Hafta</p>
          </div>
        </div>
      </div>
      <div className="card-body d-flex justify-content-end">
        <a href="#" className="card-link">
          İncele
        </a>
      </div>
    </div>
  );
}

export default Bakicikart;
