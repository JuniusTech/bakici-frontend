import React, { useState } from "react";
import experiences_img from "../../assets/experiences_img.svg";
import "../../styles/Profile/MyExperiences.css";
import Form from "react-bootstrap/Form";

const MyExperiences = () => {
  const [selectedOption, setSelectedOption] = useState("");


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="my_experiences_container">
        <div className="my_experiences">
          <div className="my_experiences_text">
            <span>DENEYİMLERİM</span>
            <img src={experiences_img} alt="" />
          </div>
        </div>
        <div className="experience_container">
          <div className="experience_header">
            <span>Deneyim</span>
          </div>
          
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="select-option" 
        
          >
            <option value="" disabled>
              Deneyim Sürem
            </option>
            <option value="option1">Seçenek 1</option>
            <option value="option2">Seçenek 2</option>
            <option value="option3">Seçenek 3</option>
          </select>
          <div className="experience_content">
            <label className="custom-checkbox">
              <Form.Check aria-label="option 1" type="checkbox" />
              Özel gereksinimli bireylerle çalıştım.
            </label>

            <label className="custom-checkbox">
              <Form.Check aria-label="option 2" type="checkbox" />
              Davranış bozukluğu gösteren bebeklerle çalıştım.
            </label>
            <label className="custom-checkbox">
              <Form.Check aria-label="option 3" type="checkbox" />
              Daha önce ilk yardım yaptım.
            </label>
            <label className="custom-checkbox">
              <Form.Check aria-label="option 4" type="checkbox" />
              Çocuk eğitimi konusunda sertifikam var.
            </label>
            <label className="custom-checkbox">
              <Form.Check aria-label="option 5" type="checkbox" />
              Çocuk eğitimi konusunda birden fazla yönteme hakimim.
            </label>
          </div>
          <button className="kaydet_experience_btn">
            <span>Kaydet</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyExperiences;
