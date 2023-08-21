import React from 'react';
import services_img from "../../assets/services_img.svg";
import "../../styles/Profile/MyServices.css";

const MyServices = () => {


  return (
    <>
        <div className="services_container">
        <div className="services">
          <div className="services_text">
            <span>HİZMETLERİM</span>
            <img src={services_img} alt="" />
          </div>
          
        </div>
        <div className='work_container'>
        <div className='work_header'><span>Çalışma Şekli</span></div>

        <div >
        <input
          type="checkbox" 
          className='services_checkbox'
          
        />
       Sadece gündüz bakıcılığı 
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox '
          
        />
       Sadece haftasonu gunduz bakıcılığı
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Sadece haftaiçi yatılı bakıcılık
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Sadece haftasonu yatılı bakıcılık 
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Pazar dahil tüm günler yatılı bakıcılık
      </div>
      <button className="kaydet_work_btn"><span>Kaydet</span></button>
        </div>
        <div className='other_services_container'>
        <div className='other_services_header'><span>Diğer Hizmetler</span></div>

        <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Aynı anda birden fazla bebeğe-çocuğa bakıcılık
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Okuldan alma ve okula gönderme, birlikte gezintiye (park vb.) çıkma
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Bakıcılık yanında ev işleri (yemek, çamaşır, temizlik vb.) hizmeti de verebilme
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
      Bebeğin-çocuğun öz bakımını yapabilme ya da yapabilmesine yardımcı olma
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Tatil dolayısıyla aile ile birlikte seyahat edebilme
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Engelli bebek-çocuk bakabilme ve bu alanda bilgi sahibi olma
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
       Yabancı dil, matematik gibi okul derslerinde ödevlere yardımcı olma
      </div>
      <br />
      <div> 
        <input
          type="checkbox"
          className='services_checkbox'
        />
      Uygulamalı ilk yardım bilgisine sahip olma
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
     Isaret dili biliyorum 
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
     Montesori egitim /aktivite biliyorum 
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          className='services_checkbox'
        />
      Ebeveyn isyerinden cocugu almak / birakmak
      </div>
      <button className="kaydet_services_btn"><span>Kaydet</span></button>
        </div>
        </div>
        
    </>
  )
}

export default MyServices;

