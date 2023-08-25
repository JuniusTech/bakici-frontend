import React from 'react';
import address_book from "../../assets/address-book.svg";
import "../../styles/Profile/MyAddress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";

const MyAddress = () => {
  return (
    <>
        <div className="my_address_container">
          <div className="my_address">
           <div className="my_address_text">
             <span>ADRESİM</span><img src={address_book} alt="" />
             
           
           </div>
          </div>
          <div className='my_address_content'>
          <div className="address_header_container">
            <div className="address_header">
              <span>Adres</span>
              <input
              type="text"
              placeholder="Merkez mah. Darülaceze Cad. No:8 P.K : 34381"
              className="address_text"
              style={{
                paddingLeft:"1rem",
                opacity: "0.5",
                border:"1px solid #455a64c"
               
              }}
            />
            </div>
            <div className="town_header_container">
            <div className="town_header">
              <span>İlçe</span>
              <br />
              <input
              type="text"
              placeholder="Şişli"
              className="town_text"
              style={{
                paddingLeft:"1rem",
                opacity: "0.5",
                border:"1px solid #455a64c"
              }}
            />
            </div>
            </div>
            <div className="city_header_container">
            <div className="city_header">
              <span>Şehir</span>
              <br />
              <input
              type="text"
              placeholder="İstanbul"
              className="city_text"
              style={{
                paddingLeft:"1rem",
                opacity: "0.5",
                border:"1px solid #455a64c"
              }}
            />
            </div>
            <p className="recompose">Tekrar düzenle <FontAwesomeIcon icon={faPencil }/></p>
            <button className="kaydet_address_btn"><span>Kaydet</span></button>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default MyAddress;
