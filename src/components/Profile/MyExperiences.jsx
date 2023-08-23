import React from 'react';
import experiences_img from  "../../assets/experiences_img.svg";
import "../../styles/Profile/MyExperiences.css";

const MyExperiences = () => {
   
  return (
    <>
        <div className="my_experiences_container">
        <div className="my_experiences">
          <div className="my_experiences_text">
            <span>DENEYİMLERİM</span>
            <img src={experiences_img} alt="" />
          </div>
        </div>
        <div className='experience_container'>
        <div className='experience_header'><span>Deneyim</span></div>
        <select className='experience_time'>
        <option value="" disabled selected hidden >Deneyim Sürem</option>
          <option value="option1"></option>
          <option value="option2"></option>
          <option value="option3"></option>
        </select>
        <div className='experience_content'>
        <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
       Özel gereksinimli bireylerle çalıştım.
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
      Davranış bozukluğu gösteren bebeklerle çalıştım.
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
       Daha önce ilk yardım yaptım.
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
      Çocuk eğitimi konusunda sertifikam var.
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
     Çocuk eğitimi konusunda birden fazla yönteme hakimim.
      </label>
      <button className="kaydet_experience_btn"><span>Kaydet</span></button>
        </div>
        </div>
  </div>
        
    </>
  )
}

export default MyExperiences;