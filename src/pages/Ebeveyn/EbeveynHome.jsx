import React from "react";
import Konum from "../../assets/Konum";
import Profile from "../../assets/Profile";
import Calendar from "../../assets/Calendar";
import Warning from "../../assets/Warning";
import Clock from "../../assets/Clock";
import Hearth from "../../assets/Hearth";
import HomeMap from "../../assets/Home";
import telefonDogrula from "../../assets/telefondogrula.svg";
import adresKaydet from "../../assets/adreskaydet.svg";
import profileYukle from "../../assets/profileyukle.svg";

const BakiciHome = () => {
  return (
    <div className="bakici_content">
      <p className="bakici_hello">Merhaba, Tuğba</p>

      {/* TODO: Sonradan component haline getirilecek backend bağlandığında şimdilik böyle kalacak */}
      <div className="bakici_current_work">
        <div className="bakici_current_work_header">
          <h3>Aktif Bakıcınız</h3>
          <span>
            <Konum />
            Ankara, Demetevler
          </span>
        </div>

        <div className="bakici_current_work_sub_info">
          <span>
            <Profile />
            John Bağcılar
          </span>
          <span>
            <Calendar />
            28.06.2023 - 1.07.2023
          </span>
          <span>
            <Clock />
            Sadece hafta içi gündüz
          </span>
        </div>

        <p className="current_work_cancel">İPTAL ET</p>
      </div>

      <div className="bakici_kullanmaya_basla">
        <h3 className="title">Care Zone kullanmaya başlayın.</h3>
        <p>
          Platform genelinde güven ve güvenliği sağlamak için lütfen profilinizi
          tamamlamak üzere aşağıdaki bilgileri girmiş olduğunuzdan emin olunuz.
        </p>

        <div className="tasks">
          <span>
            <img src={telefonDogrula} alt="telefon" />
            Telefon numaranızı doğrulayın.
          </span>

          <span>
            <img src={profileYukle} alt="" />
            Profil resminizi yükleyin.
          </span>

          <span>
            <img src={adresKaydet} alt="" />
            Adresinizi kaydediniz.
          </span>
        </div>

        <div className="genel_sayfa">
          <div className="side">
            <div className="section1">
              <h2>PROFİL DURUMU</h2>
              <span>Aktif</span>
            </div>
          </div>

          <div className="divider" />

          <div className="side">
            <div className="section1 side2_section1">
              <h2>FAVORİ BAKICI LİSTESİ</h2>
              <span>
                <Hearth />7 kişi
              </span>
            </div>

            <div className="side2_section2">
              <h2>
                UYARILAR
                <Warning />
              </h2>

              {/* TODO: !! şimdilik böyle kalsın sonradan component olacak !! */}
              <div className="warnings">
                <div className="warning">
                  <HomeMap />
                  <div className="divider" />
                  <span>Adresinizi kaydediniz.</span>
                </div>

                <h3>Başka uyarınız bulunmamaktadır.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakiciHome;
