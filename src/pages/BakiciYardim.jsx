import React from 'react'
import Footer from '../components/Footer'
import { useState } from 'react'
import "./../styles/OfflineYardim.css"
import reservation_date from "./../assets/reservation_date.svg"
import soruIsareti from "./../assets/soru-isareti.svg"

import date1 from "./../assets/date1.svg"
import date2 from "./../assets/date2.svg"
import date3 from "./../assets/date3.svg"
import date4 from "./../assets/date4.svg"
import leftArrow from "./../assets/leftArrow.svg"

const OfflineEbeveynYardim = () => {
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
    
    <div className='yardim text-center'>
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
                        <div div className="accordion-body">
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
                        <div div className="accordion-body">
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
                        <div div className="accordion-body">
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
                        <div div className="accordion-body">
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
                        <div div className="accordion-body">
                        Sizinle ilgili bazı kişisel bilgilere ihtiyacımız olsa da, gizliliğinizi korumak için elimizden gelen her şeyi yapıyoruz. Tanımlama ve sicil kaydi kontrolu nedenleriyle adınıza ve soyadınıza, yeni mesajları size bildirmek için cep telefonu numaranıza ihtiyacımız var. Ancak, ebeveyn tarafından görülebilen tek şeyin ilk adınız olduğunu vurgulamak önemlidir. Aranızdaki mesajlarda yoldan geçen kişiye tam adınızı, cep telefonu numaranızı veya adresinizi vermek isteyip istemediğiniz size kalmış.
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Fiyatlarımı değiştirebilir miyim?
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div div className="accordion-body">
                        Evet, fiyatlarınızı istediğiniz zaman değiştirebilirsiniz. Bu değişikliğin elbette bir etkisi olmayacak zaten onaylanmış rezervasyonlar, ancak tüm yeni istekleri etkileyecek 
                        <br />
                        <span  style={{color:"red",fontWeight:'bold'}}>Lütfen fiyatlarınızın belirli bir seviyede olması gerektiğini unutmayın. Fiyatiniz belli bi seviye icerisinde olmasinda fayda bulunmaktadir. </span></div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    CareZone da kaliteli bir profil nasıl oluşturulur?
                    </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div div className="accordion-body">
                        Ebeveynler güvenilir ve erişilebilir bakıcılar arıyor.Onlar icin cocuklari ile mukkemmel uyumu saglayan bakici bulmaktan daha onemli birsey yoktur. Bu nedenle profilinizde dogru bilgileri vermeniz onemlidir. Diger detaylari daha sonra ebeveyn ile mesajlarda gorusebilirsiniz. CareZone a oturum actiktan sonra Profilinize girerek butun adimlari takip ederek guzel bir profil olusturunuz. 
                        <br />
                        <br />
                        <h4 className='profil'>PROFIL </h4>
                        Profil resminiz, bir Ebeveynin arama sonuçlarında gezinirken gördüğü ilk şeylerden biridir, bu nedenle iyi bir izlenim bıraktığınızdan emin olun! Profilde yuzunuzun net olarak gozuktugunden emin olun. Uzakta olan resimler yerine daha yakin profilden cekildiginiz resimlerinizi koymanizi tavsiye ediyoruz. 
                        <br />
                        <br />
                        <h4 className='profil'>PROFIL ACIKLAMASI </h4>
                        Bu gösteriş yapma şansın! Bir Ebeveyn neden sizi seçmeli? Bize tercihlerinizden, özelliklerinizden ve kapasitenizden bahsedin. Açıklamanızda en az 220 kelime bulunmalıdır. 
                        <br />
                        <br />
                        <h4 className='profil'>RESIM GALERISI </h4>
                        Harika bir fotoğraf galerisi, açıklamanızı detaylandırır. Açıklamanızı tamamlayan resimler seçmeye çalışın ve unutmayın; daha sonra istediğiniz zaman daha fazla fotoğraf yükleyebilirsiniz. Ancak 5 fotoğraf bir başlangıç ​​şartıdır. </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Takvimi nasil kullanabilirim?
                    </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div div className="accordion-body">
                        <h4 className='profil'>ADIM 1: ARDISIK GUN SECME  </h4>
                        <p> Takvimde baslamak istediginiz tarihe bir kere tiklayiniz. ardindan bitirmek istediginiz tarihe bir kere tiklayiniz. Boylelikle baslangic ve bitis tarihiniz takvim uzerinde belirecektir.
                        </p>
                        <div className="date-arrow-cls">
                        <img src={date1} alt="" className="dateImg"/>
                        <img src={leftArrow} alt="" className="leftArrowClass"/>
                        </div>
                        
                        <h4 className='profil'>ADIM 2 : ARDISIK OLMAYAN GUNLER SECMEK   </h4>
                        Takvimin alt kisminda bulunan ardisik gun secme sekmesini aktif hale getiriniz. Bu sekme aktif olduktan sonra secmek istediginiz tarihe 2 kere tiklayiniz ve ayni durumu birden fazla farkli gunler icin de yapip sec tusu ile onaylayiniz.
                        <div className="date-arrow-cls">
                        <img src={date2} alt="" className="dateImg"/>
                        <img src={leftArrow} alt="" className="leftArrowClass"/>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed"  onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    Takvim de musait gunlerimi nasil ayarlayabilirim?
                    </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                        <div div className="accordion-body">
                        <p><span className='profil'>ADIM 1:</span> Profil sayfanizdan takvim sayfasina gidin. Takviminizde musait oldugunuz gune 1 kere tiklayiniz.
                        </p>
                        <br />
                        <img src={date3} alt="" className="bottomDateImg"/>
                        <br />
                        <p><span className='profil'>ADIM 2:</span> Tikladiginizda karsinizacikan sayfa da musait oldugunuzu belirtebilirsiniz. Musait degilseniz sectiginiz gunu <span style={{ textDecoration: 'underline' }}>"SECILI GUNLERI MUSAIT DEGIL OLARAK KAYDET"</span> sekmesini kullanabilirsiniz
                        </p>
                        <br />
                         <img src={date4} alt="" className="bottomDateImg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer className="footer"/>
    
    </>
  )
}

export default OfflineEbeveynYardim