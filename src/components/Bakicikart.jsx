import React from "react"
import Bakici from "../images/Bakıcı1.png"
import Yıldız from "../images/yıldız.png"
import Location from "../images/location.png"
import Clock from "../images/clock.png"
import Money from "../images/money.png"
import Kalp from "../images/kalp.png"
import "../styles/bakiciara.css"
import { Link, useNavigate } from "react-router-dom"

function Bakicikart({ bakici }) {
  const navigate = useNavigate()

  return (
    <div className="card-body mx-lg-auto mx-md-3 mx-sm-3 py-lg-0 py-md-0">
      <div className="position-relative">
        <img src={Bakici} className="card-img-top" alt="..." />
        <div className="heart_container position-absolute">
          <img src={Kalp} alt="" className="kalp_image position-absolute" />
        </div>
      </div>
      <div className="bakicikart-info-text-container">
        <div className="px-3">
          <div className="bakici_name_container d-flex justify-content-between align-items-center m-1">
            <div className="d-flex justify-content-center align-items-center">
              <h5 className="card-title text-start ">{bakici?.name}</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center m-1 px-1">
              4.7 <img src={Yıldız} alt="" className="mx-1" /> (4)
            </div>
          </div>
          <hr className="hr" />
          <div className="bakici_info_container">
            <div className="d-flex">
              <img className="bakici_location_icon" src={Location} alt="" />
              <p>
                {bakici?.district}, {bakici?.city}
              </p>
            </div>
            <div className="d-flex">
              <img className="bakici_clock_icon" src={Clock} alt="" />
              <p>3 Yıl Deneyimli</p>
            </div>
            <div className="d-flex">
              <img className="bakici_money_icon" src={Money} alt="" />
              <p>{bakici?.price_range}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end px-3">
          <Link
            to={`/singlebakici/${bakici?._id}`}
            onClick={() => navigate(`/singlebakici`)}
            className="card-link"
          >
            İncele
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bakicikart
