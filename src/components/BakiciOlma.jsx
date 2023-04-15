import React from "react";
import kaydolİcon from "../assets/kaydol-icon.svg";
import testİcon from "../assets/test-icon.svg";
import kurdelaİcon from "../assets/kurdela-icon.svg";
import teamİcon from "../assets/team-icon.svg";
import "../styles/BakiciOlma.css";

const BakiciOlma = () => {
  return (
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
            <p className="BakiciOlma-Box-Card-Text">Sisteme Kaydinizi yapin</p>
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
  );
};

export default BakiciOlma;
