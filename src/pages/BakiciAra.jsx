import React from "react";
import Bakici from "../images/Bakıcı1.png"
import Yıldız from "../images/yıldız.png"
import Location from "../images/location.png"
import Clock from "../images/clock.png"
import Money from "../images/money.png";
import Kalp from "../images/kalp.png";
import "../styles/bakiciara.css";

const BakiciAra = () => {
  return (
    <div className="row w-75 ms-auto py-3">
      <div className="d-grid col-xl-3 col-lg-4 col-md-6 my-xl-4 my-lg-3 my-md-2 my-sm-1 ">
        <div className="card-body">
          <div className="position-relative">
            <img
              src={Bakici}
              className="card-img-top"
              alt="..."
            />
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
      </div>
    </div>
  );
};

export default BakiciAra;
