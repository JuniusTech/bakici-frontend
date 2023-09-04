import React, { useEffect } from 'react'
import Navbar from "../../src/components/Navbar"
import { useState } from 'react';
import Select from 'react-select';
import Arrow from "../assets/Arrow.svg";
import BottomArrow from "../assets/bottom-vector.svg";
import Child from "../assets/Child.svg";
import Location from "../assets/Location.svg";
import Search from "../assets/Search.svg";
import cities from "../components/Cities";
import BabyCar from "../assets/baby_car.svg";
import Baby from "../assets/Baby.svg";
import AdultAndBaby from "../assets/adult_and_baby.svg";
import "./../styles/Kontakt.css"
import Time1 from "../assets/Time1.svg"
import Time2 from "../assets/Time2.svg"
import Time3 from "../assets/Time3.svg"
import kontakt_arrow from "../assets/Kontakt_Arrow.svg"
import Footer from '../components/Footer';
import Kontakt_Tuba_Photo from "../assets/Kontakt-Tuba-Photo.svg"
import { Link, NavLink } from 'react-router-dom';
import DatePicker, { DateObject } from "react-datepicker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { Controller, useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import NavbarBakici from '../components/NavbarBakici';
const Kontakt = () => {
    const [arrow, setArrow] = useState(Arrow);
    const [arrow2, setArrow2] = useState(Arrow);
    const [imgColor, setImgColor] = useState("");
    const [imgColor2, setImgColor2] = useState("");
    const [imgColor3, setImgColor3] = useState("");
    const [changeChildImg, setchangeChildImg] = useState(true);
    const [childImageSource, setChildImageSource] = useState("");
    const [changeBottom, setChangeBottom] = useState("46px");
    const [count, setcount] = useState(0);
    const [checked, setChecked] = useState(false);
    const { control, handleSubmit} = useForm()
    const [dateRange, setDateRange] = useState(checked ? "" : [null, null]);
    const [startDate, endDate] = dateRange;
    let nav = useNavigate();
    let test = "";
    
    const [arr, setarr] = useState([])
    const filterColor =
      "  invert(48%) sepia(31%) saturate(841%) hue-rotate(155deg) brightness(90%) contrast(103%)";
    
      const [formData, setformData] = useState({
        selectedOption:"",
        age:"",
        start_date:new Date(),
        end_date:"",
        message:""
      });

      
    const onSubmit = (event) => {
      
        console.log("Service:", formData.selectedOption);
        console.log("Age:", formData.age);
        console.log("Start Date:", formData.start_date);
        console.log("End Date:", formData.end_date);
        console.log("Message", formData.message);
               
        event.preventDefault();
        if(formData.message.length >=20){
   
        nav("/kontaktbas");
        }
        
      };

      const clickedButton = (e) =>{
        e.preventDefault();
      }

      const changeTextArea = (event) =>{
        const newText = event.target.value;
      setformData({...formData,message:newText})
      }

      const age_options = [
        {
          label: (
            <div>
              <img
                src={BabyCar}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              0-12 yaş arası{" "}
            </div>
          ),
          value: "0-12 yas arasi",
        },
        {
          label: (
            <div>
              <img
                src={Baby}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              1 ve 2 yaş arası{" "}
            </div>
          ),
          value: "1 ve 2 yas arasi",
          imageSrc: "path/to/image1.jpg",
        },
        {
          label: (
            <div className="image-container">
              <img
                src={AdultAndBaby}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              <img
                src={BabyCar}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
                {" "}
                3 yaş ve üzeri
              </p>
            </div>
          ),
          imageSrc: "path/to/image1.jpg",
        },
      ];


      const service_options = [
        {
          label: (
            <div>
              <img
                src={Time1}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              Sadece gündüz bakıcılığı{" "}
            </div>
          ),
          value: " Sadece Gündüz Bakiciliği",
        },
        {
          label: (
            <div>
              <img
                src={Time1}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              Sadece haftasonu gündüz bakıcılığı{" "}
            </div>
          ),
          value: "Sadece Haftasonu Gündüz Bakiciligi",
          imageSrc: "path/to/image1.jpg",
        },
        {
          label: (
            <div className="image-container">
              <img
                src={Time2}
                height="30px"
                width="30.72px"
                style={{ marginRight: "20px" }}
              />
              <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
                {" "}
                Sadece hafta içi yatılı bakıcılık
              </p>
            </div>
          ),
          value: "Sadece hafta içi yatili bakicilik",
          imageSrc: "path/to/image1.jpg",
        },
        {
            label: (
              <div className="image-container">
                <img
                  src={Time2}
                  height="30px"
                  width="30.72px"
                  style={{ marginRight: "20px" }}
                />
                <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
                  {" "}
                  Sadece hafta sonu yatılı bakıcılık
                </p>
              </div>
            ),
            value: "Sadece hafta sonu yatili bakicilik",
            imageSrc: "path/to/image1.jpg",
          },
          {
            label: (
              <div className="image-container">
                <img
                  src={Time3}
                  height="30px"
                  width="30.72px"
                  style={{ marginRight: "20px" }}
                />
                <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
                  {" "}
                  Pazar dahil tüm günler yatılı bakıcılık
                </p>
              </div>
            ),
            imageSrc: "path/to/image1.jpg",
          },
      ];

      
        if(formData.age && count==0){
          setchangeChildImg(false);
          setcount(1);
        }
      
      const customStyles = {
        control: (provided, state) => {
          if (state.selectProps.id === "second-select") {
            if(state.hasValue){
            }else{
              test="10px 50px";
            }
          }
          
          return {
            ...provided,
            width: "100%",
            ...(state.selectProps.id === "first-select" && {
              padding: state.hasValue ? "10px 10px" : "10px 10px",
            }),
            ...(state.selectProps.id === "second-select" && {
                padding: state.hasValue ? "10px 10px" : "10px 50px",
            }),
            height: "64px",
            margin: "11px 0 -19px 0",
            cursor: "pointer",
            textAlign: "left",
            border: state.isFocused ? "1px solid #2D83AC" : "1px solid #C7C7C7",
            borderRadius: "32px",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #2D83AC",
            },
          };
        },
        singleValue: (provided, state) => ({
          ...provided,
          color: "#2D83AC", // Set the desired color for the selected value
          filter: filterColor,
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: state.isFocused ? "#2D83AC" : "#C7C7C7", // Set the desired color for the placeholder text
          fontWeight: state.isFocused ? "500" : "",
          ...(state.selectProps.id === "second-select" && {
            color: state.isFocused ? "white" : "#C7C7C7",
          }),
        }),
        menu: (provided) => ({
          ...provided,
          border: "1px solid #2D83AC",
          borderRadius: "17px",
          marginTop: "28px",
        }),
        menuList: (provided, state) => ({
          ...provided,
          paddingTop: 0,
          paddingBottom: 0,
        }),
        option: (base, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...base,
            borderBottom: "1px solid rgba(69, 90, 100, 0.8)",
            borderRadius: "16px",
            textAlign: "left",
            paddingLeft: "27px",
            backgroundColor: isFocused ? "#EBEBEB" : "",
            color: isSelected ? "#EBEBEB" : "",
            color: "#455A64;",
            cursor: "pointer",
          };
        },
      };


      const changeColor3 = (e) => {
        setImgColor3(filterColor);
    
        return (e.target.type = "date");
      };
    
      const changeColorDefault3 = () => {
        setImgColor3("");
      };
      
      const getDateColor = () => {
        return formData.date ? { color: "#2D83AC" } : null;
      };

      function CustomMultipleInput({innerRef,onFocus, value, onChange}) {
        return (
          <input
          
          refs={innerRef}
          className="Kontakt-Form-Input"
          style={getDateColor()}
          type="text"
          id="Choose-date"
          value={value}
          // formData.date
          onChange={onChange}
          // (event) => setformData({...formData,date:event.target.value})
          onFocus={onFocus}
          onBlur={changeColorDefault3}
          /* style={{background:url()}}*/
          placeholder="Tarih Seçin"
        />
        )
      }
  return (
    <>
    <NavbarBakici/>
    <div className='kontakt'>
    <h1 className='text-center kontakt-h1'>KONTAKT TUĞBA AKSOY</h1>
    <img src={Kontakt_Tuba_Photo} alt="" className='kontakt-photo'/>
    <hr className='kontakt-hr'/>
    <form action="" id='external-form' onSubmit={(e) => handleSubmit(onSubmit(e))} >

  <label className="Kontakt-Form-Label" id='option-servis'>
    SERVİS
    <Select
      id="first-select"
      className='Form-Select'
      styles={customStyles}
      options={service_options}
      isSearchable={false}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      openMenuOnFocus={true}
      required
      value={service_options.find(
        (option) => option.value === formData.selectedOption
      )}
      onChange={(event) => setformData({...formData,selectedOption:event.value})}
      placeholder="Gündüz Tarife"
    />

    <img
      style={{ filter: imgColor}}
      src={kontakt_arrow}
      alt="Arrow"
      className="Kontakt-Arrow"
    />
  </label>
  
  <label className="Kontakt-Form-Label" id='option-age'>
  YAŞ GRUBU
  <Select
    id="second-select"
    className='Form-Select'
    styles={customStyles}
    options={age_options}
    isSearchable={false}
    components={{
      DropdownIndicator: () => null,
      IndicatorSeparator: () => null,
    }}
    required
    openMenuOnFocus={true}
    value={age_options.find(
      (option) => option.value === formData.age
    )}
    
    onChange={(event) => setformData({...formData,age:event.value})}
    placeholder="Yaş Grubunu Seçiniz"
  />
  {
    changeChildImg &&
    <img
      style={{ filter: imgColor, display: childImageSource }}
      src={Child}
      alt="Child"
      className="Child"
    />
  }
  <img
    style={{ filter: imgColor}}
    src={kontakt_arrow}
    alt="Arrow"
    className="Kontakt-Arrow"
  />
</label>

<label className="Kontakt-Form-Label"  id='option-date'>

                TARİH SEÇİNİZ
    
      
                <DatePicker
                customInput={<CustomMultipleInput/>}
                 wrapperClassName="datepicker"
                 
      selected={checked ? startDate : false}
      selectsRange={checked ? false : true}
      startDate={startDate}
      endDate={endDate}
      required
      form="external-form"
      onChange={(update) => {
        if(checked){
          if(arr[0]){
            setarr([...arr,update])
          }else{
            arr.push(update);
          }
          
          arr.push(null);
          console.log(arr);
          setDateRange(arr);
          
          setformData({...formData,start_date:arr[0],end_date:""})
        }else{
          setDateRange(update);
          setformData({...formData,start_date:update[0],end_date:update[1]})
        }
        
      }}
    >

    <label className=''>
                
     <input type="checkbox"
     defaultChecked={checked}
     className=' text-black'
     style={{marginLeft: "5px"}}
     onChange={() => setChecked(!checked)}
     />

     <p className=' d-inline ms-2'>
     ARDISIK GUN SECME
   </p>
    
          </label>


    </DatePicker>
             
                
                
                {/*<img src={Calendar} alt="Calendar" className="Arrow-tarih" /> */}
              </label>

              <label className="Kontakt-Form-Label"  id='option-date'>
              MESAJINIZ
              <textarea className="Kontakt-TextArea" name="w3review" rows="10" minlength={20}   value={formData.message} onChange={changeTextArea} placeholder='Bakıcıya bildirmek istediğiniz bilgileri giriniz. Örnegin çocuğunuz ve ihtiyaçlarınız.....' required />
             
              {formData.message.length > 0 && formData.message.length < 20 && (
                <p>Lütfen bu metni 20 karakter veya daha fazla olacak şekilde uzatın.(şu anda {formData.message.length} karakter kullanıyorsunuz)</p>
              
                )}
              </label>
             
              <button type="submit" className="Kontakt-Form-Button" onSubmit={(e) => clickedButton(e)}>
             
                      Gönder
              </button>
             
              
    </form>

      <p className='kontakt-bottom-info'>
      Tuğba ile hiçbir yükümlülük altına girmeden tamamen ücretsiz olarak iletişime geçin. Carezone aracılığı ile ödeme yaparak rezervasyonu tamamlamak isteyip istemediğinize ve ne zaman tamamlayacağınıza siz karar verirsiniz. Site aracılığıyla yapılan tüm rezervasyonlar, Memnuniyet Garantisi ve Rezervasyon Garantisini içeren Kalite Sözü kapsamındadır.
      </p>
    </div>
    {
   
      
    }
    <Footer/>
    </>
    
  )
}

export default Kontakt