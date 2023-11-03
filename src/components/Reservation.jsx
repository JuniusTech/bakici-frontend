import React from "react";
import about_img from "../images/Bakıcı1-single.png";
import "../styles/Reservation.css";
import Select from "react-select";
import useSelectOptions from "./select/useSelectOptions";
import { servis, ages } from "../helper/options";
import { useState } from "react";

const Reservation = () => {
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions();
  const [formData, setFormData] = useState({
    selectedService: null,
    selectedAgeGroup: null,
    selectedDate: null,
    message: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="reservation_container">
        <p className="title">KONTAKT TUĞBA AKSOY</p>

        <div className="reservation_photo_container">
          <img src={about_img} alt="" className="reservation_photo" />
        </div>
        <div className="line"></div>

        <div className="input_container">
          <p className="select_title">SERVİS</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              placeholder="Gündüz Tarife"
              name="gender"
              isSearchable={false}
              styles={selectStyles}
              options={servis}
              onChange={(selectedOption) =>
                handleInputChange("selectedService", selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="input_container">
          <p className="select_title">YAŞ GRUBU</p>
          <div className="bakici-kayit__select-div">
            <Select
              className="bakici-kayit__select"
              placeholder="Yaş Grubu Seçiniz"
              name="gender"
              isSearchable={false}
              styles={selectStyles}
              options={ages}
              onChange={(selectedOption) =>
                handleInputChange("selectedAgeGroup", selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="input_container">
          <p className="select_title">TARİH SEÇİNİZ</p>
          <div className="bakici-kayit__datecontainer">
            <input
              className="bakici-kayit__date"
              placeholder="Başlangıç Tarihi Seçiniz"
              type="date"
              onChange={(selectedOption) =>
                handleInputChange("selectedDate", selectedOption.target.value)
              }
            />
          </div>
        </div>

        <div className="textarea_container">
          <p className="select_title">MESAJINIZ</p>
          <textarea
            type="text"
            className="reservation_textarea"
            rows={5}
            placeholder="Bakıcıya bildirmek istediğiniz bilgileri giriniz. Örneğin çocuğunuz ve ihtiyaçlarınız..."
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div>

        <button className="reservation_button" onClick={handleSubmit}>
          GÖNDER
        </button>
        <p className="reservation_bottom_text">
          Tugba ile hiçbir yükümlülük altına girmeden tamamen ücretsiz olarak
          iletişime geçin. Carezone araciligi ile odeme yaparak rezervasyonu
          tamamlamak isteyip istemediğinize ve ne zaman tamamlayacağınıza siz
          karar verirsiniz. Site aracılığıyla yapılan tüm rezervasyonlar,
          Memnuniyet Garantisi ve Rezervasyon Garantisini içeren Kalite Sözü
          kapsamındadır.
        </p>
      </div>
    </>
  );
};

export default Reservation;
