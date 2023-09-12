import React from 'react';
import "../../styles/Profile/AboutMe.css";
import about_img from "../../assets/about_img.svg";
import hakkimda_img from "../../assets/hakkimda_img.svg";
import tabler_photo from "../../assets/tabler_photo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";


const AboutMe = () => {
  // const [email, setEmail] = useState('');
  // const [isValid, setIsValid] = useState(true);
  // const [phoneNumber, setPhoneNumber] = useState('');
 

  // const handleEmailChange = (event) => {
  //   const enteredEmail = event.target.value;
  //   setEmail(enteredEmail);

  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   setIsValid(emailPattern.test(enteredEmail));
  // };
  

  // const handlePhoneChange = (event) => {
  //   const enteredValue = event.target.value;

    
  //   if (/^\d*$/.test(enteredValue)) {
  //     setPhoneNumber(enteredValue);
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // };

  return (
    <>
      <div className="about_me_container">
        <div className="about_me">
          <div className="about_me_text">
            <span>HAKKIMDA</span>
            <img src={about_img} alt="" />
          </div>
        </div>
        </div>
        <img src={hakkimda_img} alt=""  className='about_photo'/>
        <button className="change_btn"><span>Değiştir</span> <img src={tabler_photo} alt="" /></button>
        <div className='personal_information'>
        <div className="name_surname">
              <label>İsim ve Soyisim</label>
              <br />
              <input
              type="text"
              placeholder="İsim ve Soyisim"
              className="name_surname_text"
              style={{
                paddingLeft:"1rem",
                opacity: "0.5"
                
              }}
            />
            </div>
            <div className="e_mail">
              <label>E-mail Adresiniz</label>
              <input
        type="email"
        // value={email}
        // onChange={handleEmailChange}
        className='e_mail_text'
        placeholder='isim@email.com'
        style={{
          paddingLeft:"1rem",
          opacity: "0.5"
         
        }}
        
      />
      {/* {!isValid && <p style={{ color: 'red' }}>Geçerli bir email adresi girin.</p>} */}
            </div>
            <div className="phone_number">
            <label>Telefon Numarası:</label>
      <input
        type="tel"
        // value={phoneNumber}
        // onChange={handlePhoneChange}
        className='phone_text'
        placeholder='800 2738 9700'
        style={{
          paddingLeft:"1rem",
          opacity: "0.5"
         
        }}

      />
     
    </div>
    <button className="kaydet_hakkimda_btn"><span>Kaydet</span></button>
    <div className='hakkimda_line'></div>
    <div className='new_mail_container'>
        <div className='new_mail_header'><span>Yeni E-Mail</span></div>
         <div className='new_mail_content'>
  
         <div className="password_header">
              <span>Şifrenizi Giriniz:</span>
              <input
              type="password"
              className="password_text"
              style={{
                paddingLeft:"1rem",
                marginLeft: "2.7rem",
                opacity: "0.5",
                
              }}
            />
            </div>
        
            
            <div className="again_email_header">
              <span>Yeni E-Mail:</span>
              <input
              type="email"
              className="again_email_text"
              style={{
                paddingLeft:"1rem",
                marginLeft:"4.5rem",
                opacity: "0.5"
               
              }}
            />
            </div>
           
            <div className="password_header">
              <span>Tekrar E-Mail Tekrar:</span>
              <input
              type="email"
              className="email_text"
              style={{
                paddingLeft:"1rem",
                marginLeft:"0.5rem",
                opacity: "0.5"
                
              }}
            />
            </div>
            </div>
            
            <button className="email_kaydet_btn"><span>Kaydet</span></button>
    </div>
    <div className='change_password_container'>
        <div className='change_password_header'><span>Şifremi Değiştir</span></div>
         <div className='change_password_content'>
  
         <div className="password_header">
              <span>Şifrenizi Giriniz:</span>
              <input
              type="password"
              className="password_text"
              style={{
                paddingLeft:"1rem",
                marginLeft: "2.5rem",
                opacity: "0.5"
                
              }}
            />
            </div>
        
            
            <div className="password_header">
              <span>Yeni Şifrenizi Girin:</span>
              <input
              type="password"
              className="password_text"
              style={{
                paddingLeft:"1rem",
                marginLeft:"1rem",
                opacity: "0.5"
              }}
            />
            </div>
           
            <div className="password_header">
              <span>Tekrar Yeni Şifre:</span>
              <input
              type="password"
              className="password_text"
              style={{
                paddingLeft:"1rem",
                marginLeft:"2rem",
                opacity: "0.5"
              }}
            />
            </div>
            </div>
            <p className="hakkimda_mail_recompose">Tekrar düzenle <FontAwesomeIcon icon={faPencil }/></p>
            <button className="email_kaydet_btn"><span>Kaydet</span></button>
            <div className='delete_operations'>
              <button className='delete'><span>Hesabımı Sil</span></button>
              <button className='profile_delete'><span>PROFİLİMİ SİL</span></button>
            </div>
    </div>
    </div>
        </>
   
  )
}

export default AboutMe;