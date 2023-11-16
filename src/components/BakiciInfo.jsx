import React from "react"

import Kalp from "../images/kalp.png"
import Bakici from "../images/Bakıcı1-single.png"
import "../styles/BakiciInfo.css"
import Child from "../assets/Child.svg"
import { Button } from "react-bootstrap"
import Visa from "../images/visa 1.png"
import Vector from "../images/Vector.png"
import Group from "../images/Group.png"

function BakiciInfo({ babysitterInfo }) {
  return (
    <>
      <div className="info-section-container">
        <div className="info-section-contents">
          <div className="bakici-info-container">
            <div className="bakici-info-first d-flex flex-column justify-content-center align-items-center text-center d-sm-flex flex-sm-row justify-content-sm-between text-sm-start px-sm-2">
              <div className="bakici-info-first-image-container d-flex justify-content-center align-items-center">
                <img
                  src={Bakici}
                  className="bakici-info-first-image rounded-circle mw-100 h-auto"
                  alt="..."
                />
              </div>
              <div className="">
                <h5>{babysitterInfo?.name}</h5>
                <p>Aktif Bakici</p>
                <p>{babysitterInfo?.city}</p>
              </div>
              <div className="">
                <img src={Kalp} alt="" className="" />
              </div>
            </div>
            <hr className="bakici-info-first-hr" />
            <div className="d-flex flex-column">
              <div className="d-flex flex-column justify-content-center align-items-center my-2  text-center  text-sm-start  d-sm-flex flex-sm-row justify-content-sm-between align-items-sm-center px-sm-2 my-sm-4">
                <img src={Child} alt="" className="me-1" />
                <p className="mx-0 my-0">
                  Yeni dogan veya kres donemi cocuk bakimi
                </p>
              </div>
              <div className="d-flex flex-column justify-content-evenly align-items-center d-sm-flex flex-sm-row justify-content-sm-evenly align-items-sm-center">
                <div className="w-75 d-flex flex-column justify-content-center align-items-center d-sm-flex flex-sm-column justify-content-sm-start align-items-sm-start text-center">
                  <h5 className="">Haftalık</h5>
                  <p className="text-center text-sm-start">
                    {babysitterInfo?.employmentType}
                  </p>
                </div>
                <div className="w-25 d-flex justify-content-center align-items-center d-sm-flex justify-content-sm-start align-items-sm-start">
                  <h5 className="">1000 TL</h5>
                </div>
              </div>
              <div className="text-center text-sm-start">
                <p>Ekstra servis ve fiyatlar</p>
              </div>
              <hr className="bakici-info-first-hr" />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <Button className="kontakt-button">Kontakt Tuğba</Button>
            </div>
            <hr className="bakici-info-first-hr" />
            <div>
              <h5 className="text-center text-sm-left">İPTAL POLİTİKASI</h5>
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
              <div className="bakici-info-icons w-25 mx-auto d-flex justify-content-around align-items-center">
                <img src={Visa} alt="" className="mw-100 mx-1" />
                <img src={Vector} alt="" className="mw-100 mx-1" />
                <img src={Group} alt="" className="klarna-icon mw-100 mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BakiciInfo
