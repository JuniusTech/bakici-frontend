import React from 'react'
import Footer from '../components/Footer'
import { useState } from 'react'
import "./../styles/OfflineYardim.css"
import reservation_date from "./../assets/reservation_date.svg"
import soruIsareti from "./../assets/soru-isareti.svg"
import { Link } from 'react-router-dom'

const OfflineYardim = () => {
const accordion = {backgroundColor: "#EFEFEF",
color: "#000",
lineHeight: "40px",
fontWeight: "300",};
  const handleClick = (e) =>{
    if(e.target.classList.contains("collapsed")){
        
        accordion.backgroundColor = "grey";
        accordion.color = "#333";
        accordion.fontWeight = "600";
       
        
        e.target.style.backgroundColor=accordion.backgroundColor;
        e.target.style.color=accordion.color;
        e.target.style.fontWeight=accordion.fontWeight;
    
    }else{
        accordion.backgroundColor = "#EFEFEF";
        accordion.color = "#000";
        accordion.fontWeight = "300";
        
        e.target.style.backgroundColor=accordion.backgroundColor;
        e.target.style.color=accordion.color;
        e.target.style.fontWeight=accordion.fontWeight;
    }
  }
  return (
    <>
    {
        // <Navbar />
    }
    
    <div className='yardim'>
        <h3 className='yardim-h3'>SIKÇA SORULAN SORULAR</h3>
        <hr className='yardim-hr'/>
        <img src={soruIsareti} alt="" className='yardim-img'/>
        <div className='yardim__accordions container'>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    CareZone Nasıl Çalışıyor?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Hayatımızın en değerli varlıklarından biri olan bebeklerimizin sağlıklı ve mutlu bir şekilde büyümesi ebeveynler için çok önemlidir. Ancak günümüzde, iş hayatının yoğunluğu ve diğer nedenlerden dolayı ebeveynler bebekleriyle yeterince ilgilenemeyebilirler. İşte tam da bu noktada biz sizin için devreye giriyoruz. Bebeklerin güvenliği, sağlığı ve mutluluğu için gereken hizmetleri sağlayan bebek bakıcıları ile ebeveynleri buluşturuyoruz.
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bakıcı Nasıl Bulabilirim?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                        1) www.carezone.com adresine gidin ve arama alanına yaşadığınız yeri girin.
                        <br />
                        <br />
                        2) İstediğiniz hizmeti seçin.
                        <br />
                        <br />
                        3) Başlangıç ​​ve bitiş tarihinizi seçin (Veya henüz emin değilseniz yaklaşık bir tarih).
                        <br />
                        <br />
                        4) Bir bakıcı araya basın.
                        <br />
                        <br />
                        5) Karşınıza çıkan bakıcı profillerine göz atın ve pembe renkli iletişim butonuna basarak beğendiklerinizle iletişime geçerek görüşme ayarlayabilirsiniz.
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Sadece 1 gün için rezervasyon yapabilirmiyim?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div  className="accordion-body">
                        <p>
                        Elbette! Rezervasyon için tarih seçerken takvimde ardisik gun secme tusunu aktif etmeniz yeterli. Ardindan istediginiz tarihe iki kere tiklayabilirsiniz. Bu şekilde, rezervasyonun başlangıç ​​ve bitişiyle aynı tarihi alırsınız.
                       
                        </p>
                         <img src={reservation_date} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Rezervasyon iptal olursa ne yapmalıyım?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                        İptal politikanıza ve rezervasyon tarihine ne kadar yakın olduğuna bağlı olarak,tam veya kısmi geri ödeme. İkinci durumda, size kısmen ödeme yapılacaktır. 
                        <br />
                        <br />
                        Carezone bakıcıları aşağıdaki iptal koşulları arasından seçim yapabilir: 
                        <br />
                        <br />

                        <strong>Esnek iptal politikası:</strong> Ebeveyn rezervasyonun başlamasından önceki gün saat 12:00'ye kadar iptal ederse tam para iadesi. Rezervasyonun başlangıç ​​gününden önceki gün saat 12:00'den sonra yapılan iptallerde %50 iade. 
                        <br />
                        <br />

                        <strong>Orta düzeyde iptal politikası:</strong> Ebeveyn rezervasyonun başlamasından yedi (7) gün önce saat 12:00'ye kadar iptal ederse tam para iadesi. Rezervasyonun başlamasından yedi (7) gün önce saat 12:00'den sonra yapılan iptallerde %50 para iadesi. 
                        <br />
                        <br />
                        Rezervasyon başladıktan sonra ücret iadesi mümkün değildir.
                        <br />
                        <br />
                        <span style={{color:"red",fontWeight:'bold'}}>DIP NOT:</span> Ebeveynler ve Bakicilar Hizmet kismindan “ IPTAL ET” secenegine basarak ucretli reservasyonlarini kendileri iptal edebilirler</div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    CareZone Gizlilik Politikası nasıl?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div  className="accordion-body">
                        Sizinle ilgili bazı kişisel bilgilere ihtiyacımız olsa da, gizliliğinizi korumak için elimizden gelen her şeyi yapıyoruz. Tanımlama ve sicil kaydi kontrolu nedenleriyle adınıza ve soyadınıza, yeni mesajları size bildirmek için cep telefonu numaranıza ihtiyacımız var. Ancak, ebeveyn tarafından görülebilen tek şeyin ilk adınız olduğunu vurgulamak önemlidir. Aranızdaki mesajlarda yoldan geçen kişiye tam adınızı, cep telefonu numaranızı veya adresinizi vermek isteyip istemediğiniz size kalmış.
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='d-flex gap-5 justify-content-center'>
            <Link to="/bakyardim">Bakici Yardim</Link>
            <Link to="/misafir">Misafir Yönlendir</Link>
            <Link to="/kontakt">Kontakt</Link>
            </div>
            
        </div>
    </div>
    <Footer className="footer"/>
    
    </>
  )
}

export default OfflineYardim;