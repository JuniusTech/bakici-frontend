import React from "react";
import fluent_text from "../../assets/fluent_text.svg";
import "../../styles/Profile/ProfileDescription.css";

const ProfileDescription = () => {
  return (
    <>
      <div className="profile_comment_container">
        <div className="profile_comment">
          <div className="profile_comment_text">
            <span>PROFİL AÇIKLAMASI</span>
            <img src={fluent_text} alt="" />
          </div>
        </div>
        <div className="profile_content">
          <div className="profile_header_container">
            <div className="profile_header">
              <span>Profil Başlığı</span>
               <p>
                Kısa, açıklayıcı ve kendinizi ifade eden dikkat çekici bir
                başlık yazın.
              </p>
              
              <input
              type="text"
              placeholder="Profil Başlığınız..."
              className="profile_header_text"
              style={{
                   
                fontFamily: "Georama",
                fontSize: "16px",
                lineHeight: "50px",
                letterSpacing: "0em",
                textAlign: "left",
                paddingLeft:"1rem",
                color: "#7C7C7C66"

              }}
            />
            </div>
          </div>
          <div className="comment">
            <span>Profil Açıklaması</span>
            <p>
              Kendiniz, bakıcılık hizmetleriniz ve motivasyonunuz hakkında en az
              150 kelime olacak şekilde bir açıklama yazınız. Ebeveynler sizinle
              iletişime geçmeden önce hakkınızda bilgi edinmek istemektedirler,
              bu nedenle bakıcılık hizmetlerinize dair tüm detayları paylaşın.
              Yazım ve dilbilgisi hatalarından kaçının. Telefon numaraları,
              e-posta adresleri, sosyal medya hesapları gibi iletişim
              bilgilerinin ve diğer harici bağlantıların belirtilmesine izin
              verilmez. <br />
              Bakıcılık mesleğindeki temel motivasyonunuz nedir?<br />
              Önceki deneyimleriniz nelerdir?
            </p>
          
            <input
              type="text"
              placeholder="Ayrıntılı Açıklamanız..."
              className="comment_text"
              style={{
                   
                fontFamily: "Georama",
                fontSize: "16px",
                lineHeight: "50px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#7C7C7C66",
                paddingBottom:"10rem",
                paddingLeft:"1rem"
              

                
                
              
              }}
            />
              </div>
              <button className="kaydet_btn"><span>Kaydet</span></button>
          </div>
        </div>
     
    </>
  );
};

export default ProfileDescription;

