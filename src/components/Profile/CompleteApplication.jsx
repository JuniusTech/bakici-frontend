import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import complete_application from "../../assets/complete_application.svg";
import "../../styles/Profile/CompleteApplication.css";

const CompleteApplication = () => {
  return (
    <div>
        <div className="complete_application_container">
          <div className="complete_application">
           <div className="complete_application_text">
             <span>BAKICI BAŞVURUSUNU TAMAMLA</span><img src={complete_application} alt="" />
             </div>
             <div class="complete_application_content">
               <div class="number">1<span >Lütfen ayrıntılarıyla geçmiş deneyimlerinizi ve verdiğiniz hizmetleri ekleyin.</span></div>
               <div class="number_line"></div>
              <div class="number">2<span >Lütfen bir profil fotoğrafı ekleyin.</span></div>
              <div class="number_line"></div>
              <div class="number">3<span >Lütfen galerinize size ait olan en az 5 fotoğraf yükleyin.</span></div>
               <div class="number_line"></div>
              <div class="number">4<span >Lütfen ödeme alma metodunuzu seçin.</span></div>
               <div class="number_line"></div>
               <div class="number">5<span >Lütfen telefon numarınızı doğrulayın.</span></div>
               <div class="number_line"></div>
               <div class="number">6<span >Dikkat çekici bir profil başlığı yazın.</span></div>
               <div class="number_line"></div>
               <div class="number_tick"><span>Lütfen adres bilgilerinizi girin.</span>
               <FontAwesomeIcon icon={faCheck} style={{ color: "#00C38A" }} />
              </div>
               <button className="onay_btn"><span>Onaya Gönder</span></button>
            </div>
           
           </div>
          </div>
    </div>
  )
}

export default CompleteApplication;
