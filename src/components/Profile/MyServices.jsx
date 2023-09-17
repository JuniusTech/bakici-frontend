import React from 'react';
import services_img from "../../assets/services_img.svg";
import "../../styles/Profile/MyServices.css";
import Form from 'react-bootstrap/Form';

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
<div className='work_content'>
        <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Sadece gündüz bakıcılığı
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Sadece haftasonu gündüz bakıcılığı
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Sadece haftaiçi yatılı bakıcılık
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Sadece haftasonu yatılı bakıcılık
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Pazar dahil tüm günler yatılı bakıcılık
            </label>
            </div>
      <button className="kaydet_work_btn"><span>Kaydet</span></button>
        </div>
        <div className='other_services_container'>
        <div className='other_services_header'><span>Diğer Hizmetler</span></div>
<div className='other_services_content'>
        <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Aynı anda birden fazla bebeğe-çocuğa bakıcılık
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Okuldan alma ve okula gönderme, birlikte gezintiye (park vb.) çıkma
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Bakıcılık yanında ev işleri (yemek, çamaşır, temizlik vb.) hizmeti de verebilme
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Bebeğin-çocuğun öz bakımını yapabilme ya da yapabilmesine yardımcı olma
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Tatil dolayısıyla aile ile birlikte seyahat edebilme
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Engelli bebek-çocuk bakabilme ve bu alanda bilgi sahibi olma
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Yabancı dil, matematik gibi okul derslerinde ödevlere yardımcı olma
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Uygulamalı ilk yardım bilgisine sahip olma
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />İşaret dili biliyorum
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Montesori eğitim /aktivite biliyorum
            </label>
            <label className="custom-checkbox">
              <Form.Check
                aria-label="option 1"
                type="checkbox"
              />Ebeveyn işyerinden çocuğu almak / bırakmak
            </label>
            </div>
      <button className="kaydet_services_btn"><span>Kaydet</span></button>
        </div>
        </div>
        
    </>
  )
}

export default MyServices;

