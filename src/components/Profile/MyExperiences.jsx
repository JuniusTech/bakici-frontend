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
       Sadece haftasonu gunduz bakıcılığı
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
       Sadece haftaiçi yatılı bakıcılık
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
       Sadece haftasonu yatılı bakıcılık 
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className='experience_checkbox'
        />
       Pazar dahil tüm günler yatılı bakıcılık
      </label>
      <button className="kaydet_experience_btn"><span>Kaydet</span></button>
        </div>
        </div>
  </div>
        
    </>
  )
}

export default MyExperiences;