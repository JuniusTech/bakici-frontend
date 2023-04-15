import React from "react";
import "../styles/Bakici.css";
import group52 from "../assets/Group52.svg";
import group48 from "../assets/Group48.svg";
import group49 from "../assets/Group49.svg";
import group50 from "../assets/Group50.svg";
import group51 from "../assets/Group51.svg";



const Bakici = () => {
  return (
    <div className="Bakici">
      <p className="Bakici-Text">BAKICI MI ARIYORSUNUZ? </p>
      <div className="Bakici-Box">
        <div className="Bakici-Box-Cards">

          <div className="Bakici-Box-Card">
            <p className="Bakici-Box-Card-Number">1</p>
            <img className=" Bakici-Box-Card-Icon" src={group52} alt="group52" />
            <p className="Bakici-Box-Card-Text">Istediginiz bakiciyi 
websitemizden secin</p>
          </div>
          <hr className="Bakici-Box-Card-Hr" />

          <div className="Bakici-Box-Card">
            <p className="Bakici-Box-Card-Number">2</p>
            <img className=" Bakici-Box-Card-Icon" src={group48} alt="group48" />
            <p className="Bakici-Box-Card-Text">Gorusme icin randevu alin</p>
          </div>
          <hr className="Bakici-Box-Card-Hr" />

          <div className="Bakici-Box-Card">
            <p className="Bakici-Box-Card-Number">3</p>
            <img className=" Bakici-Box-Card-Icon" src={group49} alt="group49" />
            <p className="Bakici-Box-Card-Text">Bakiciniz ile gerekli
gorusmelerinizi yapin</p>
          </div>
          <hr className="Bakici-Box-Card-Hr" />

          <div className="Bakici-Box-Card">
            <p className="Bakici-Box-Card-Number">4</p>
            <img className=" Bakici-Box-Card-Icon" src={group50} alt="group50" />
            <p className="Bakici-Box-Card-Text">Anlasmanizi ekibimize 
bildirin</p>
          </div>
          <hr className="Bakici-Box-Card-Hr" />

          <div className="Bakici-Box-Card">
            <p className="Bakici-Box-Card-Number">5</p>
            <img className=" Bakici-Box-Card-Icon" src={group51} alt="group51" />
            <p className="Bakici-Box-Card-Text">Guvenli sekilde bakim 
servisimizin 
tadini cikarin.</p>
          </div>

          


        </div>
        <button className="Bakici-Button">BAKICI ARA</button>
      </div>
    </div>
  );
};

export default Bakici;
