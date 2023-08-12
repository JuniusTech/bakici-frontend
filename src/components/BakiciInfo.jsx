import React from "react";
import homeicon from "../assets/homeicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Kalp from "../images/kalp.png";
import Bakici from "../images/Bakıcı1-single.png";
import "../styles/BakiciInfo.css";
import Child from "../assets/Child.svg";
import { Button } from "react-bootstrap";
import Visa from "../images/visa 1.png";
import Vector from "../images/Vector.png";
import Group from "../images/Group.png";

function BakiciInfo() {
  return (
    <>
      <div className="bakici-filtre__path d-flex align-items-center gap-2 mt-4">
        <img src={homeicon} alt="" />
        <p className="text-black-50 m-0">Anasayfa</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-black-50" />
        <p className="text-black-50 m-0">Bakıcılar</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-black-50" />
        <p className="fw-semibold m-0">Tuğba Aksoy</p>
      </div>
      <div className="info-section-container">
        <div className="info-section-contents">
          <div className="bakici-info-container">
            <div className="bakici-info-first d-flex justify-content-between">
              <div className="bakici-info-first-image-container d-flex justify-content-center align-items-center">
                <img
                  src={Bakici}
                  className="bakici-info-first-image rounded-circle mw-100 h-auto"
                  alt="..."
                />
              </div>
              <div className="">
                <h5>TUĞBA AKSOY</h5>
                <p>Aktif Bakici</p>
                <p>Ankara</p>
              </div>
              <div className="">
                <img src={Kalp} alt="" className="" />
              </div>
            </div>
            <hr className="bakici-info-first-hr" />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center my-4">
                <img src={Child} alt="" className="me-1" />
                <p className="mx-0 my-0">
                  Yeni dogan veya kres donemi cocuk bakimi
                </p>
              </div>
              <div className="d-flex justify-content-evenly align-items-center">
                <div className="w-75">
                  <h5 className="">Haftalık</h5>
                  <p className="">
                    6 / 24 saat cocuk bakimi Pazartesi - Cumartesi
                  </p>
                </div>
                <div className="w-25">
                  <h5>1000 TL</h5>
                </div>
              </div>
              <div>
                <p>Ekstra servis ve fiyatlar</p>
              </div>
              <hr className="bakici-info-first-hr" />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <Button className="kontakt-button">Kontakt Tuğba</Button>
            </div>
            <hr className="bakici-info-first-hr" />
            <div>
              <h5>İPTAL POLİTİKASI</h5>
              <p>
                Rezervasyondan 7 gün önce saat 12:00'ye kadar yapılan iptallerde
                tam iade, sonrasında %50 iade.
              </p>
              <p>
                Rezervasyon başlangıç ​​tarihinden önce veya başlangıç
                ​​tarihinden sonra yapılan rezervasyon iptallerinde ücret iadesi
                yapılamaz.
              </p>
              <p>
                Rezervasyondan bir gün önce saat 12:00'ye kadar yapılan
                iptallerde tam iade, sonrasında %50 iade.
              </p>
            </div>
            <hr className="bakici-info-first-hr" />
            <div>
              <div className="w-100 d-flex justify-content-around align-items-center">
                <img src={Visa} alt="" />
                <img src={Vector} alt="" />
                <img src={Group} alt="" className="klarna-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BakiciInfo;
