import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import homepageicon from "../assets/homepageicon.svg";
 import Arrow from "../assets/Arrow.svg";
import BottomArrow from "../assets/bottom-vector.svg";
import Child from "../assets/Child.svg";
import Location from "../assets/Location.svg";
import Calendar from "../assets/calendar.svg";
import Search from "../assets/Search.svg";
import "../styles/HomeFirst.css";
import cities from "./Cities";
import Select from 'react-select'
import BabyCar from "../assets/baby_car.svg"
import Baby from "../assets/Baby.svg"
import AdultAndBaby from "../assets/adult_and_baby.svg"

const HomeFirst = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [arrow,setArrow]=useState(Arrow);
  const [arrow2,setArrow2]=useState(Arrow);
  const [imgColor,setImgColor]=useState("");
  const [imgColor2,setImgColor2]=useState("");
  const [imgColor3,setImgColor3]=useState("");
  const [childImageSource,setChildImageSource]=useState("");
  const [changeBottom,setChangeBottom]=useState("46px");
  const filterColor="  invert(48%) sepia(31%) saturate(841%) hue-rotate(155deg) brightness(90%) contrast(103%)";
  let test="";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedOption);
    console.log("Location:", location);
    console.log("Date:", date);
  };

  const options = [
    {label: <div><img src={BabyCar} height="30px" width="30.72px" style={{marginRight:'20px'}}/>0-12 yas arası </div> , value: '0-12 yas arasi'},
    {label: <div><img src={Baby} height="30px" width="30.72px" style={{marginRight:'20px'}}/>1 ve 2 yas arası </div> , value: '1 ve 2 yas arasi',imageSrc: 'path/to/image1.jpg' },
    {label: <div class="image-container">
      
    <img src={AdultAndBaby} height="30px" width="30.72px" style={{marginRight:'20px'}}/>
    <img src={BabyCar} height="30px" width="30.72px" style={{marginRight:'20px'}}/>
    <p style={{marginLeft:'50px',marginBottom:'0px'}}> 3 yaş ve üzeri</p></div> ,imageSrc: 'path/to/image1.jpg' },
  ];

  const changeColor3 = (e)=>{
    setImgColor3(filterColor);
    
    return e.target.type = "date";
  }

  const changeColorDefault3 = ()=>{
    setImgColor3("");
  }

  const customStyles = {
    control: (provided, state) => {
   
      if(state.selectProps.id === "first-select"){
        test= state.hasValue  ? setChildImageSource("none") : "10px 50px"
        test= state.hasValue  ? setChangeBottom("20px") : "10px 50px"
        test=state.isFocused  ? setImgColor(filterColor) : setImgColor("")
        test= state.menuIsOpen  ? setArrow(BottomArrow) : setArrow(Arrow)
      }
      if(state.selectProps.id === "second-select"){
        test=state.isFocused  ? setImgColor2(filterColor) : setImgColor2("")
        test=state.menuIsOpen  ? setArrow2(BottomArrow) : setArrow2(Arrow)
      }

      return {
        ...provided,
        width: "300px",
        ...(state.selectProps.id === "first-select" && {
          padding:  state.hasValue  ? "10px 10px" : "10px 50px",
        }),
        ...(state.selectProps.id === "second-select" && {
          padding: "10px 50px",
        }),
        height: "64px",
        margin: "11px 0 -19px 0",
        cursor: "pointer",
        textAlign: 'left',
        border: state.isFocused ? '1px solid #2D83AC' : '1px solid #C7C7C7',
        borderRadius: "32px",
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #2D83AC', 
        }, 

        
      };
    },
    singleValue: (provided, state) => ({
      ...provided,
      color: '#2D83AC', // Set the desired color for the selected value
      filter: filterColor,
    }),
    placeholder: (provided,state) => ({
      ...provided,
      color: state.isFocused ? '#2D83AC' : '#C7C7C7',// Set the desired color for the placeholder text
      fontWeight: state.isFocused ? '500' : '',
      ...(state.selectProps.id === "second-select" && {
        color: state.isFocused ? 'white' : '#C7C7C7',
      }),
    }),
    menu: (provided) => ({
      ...provided,
      border: '1px solid #2D83AC',
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
        textAlign:"left",
        paddingLeft:"27px",
        backgroundColor: isFocused ? "#EBEBEB" : "",
        color: isSelected ? "#EBEBEB" : "",
        color: '#455A64;',
        cursor: "pointer",
      };
    },
  };

  const getDateColor = () => {
    return date ? { color: '#2D83AC'} : null;
  };
  return (
    <div className="Home-First">
      <div className="Home-First-Text-Form">
        <h1 className="Home-First-Text">
          Bebekleriniz için en iyi bakımı bizimle bulun
        </h1>
        <div>
          <form onSubmit={handleSubmit}  className="Home-First-Form">
            <label className="Form-Label">Bakıcı Arıyorum

              <Select 
              id="first-select"
              styles={customStyles}
              options={options}
              isSearchable={false}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }} 
              openMenuOnFocus={true}
              value={options.find(option => option.value === selectedOption)}
              onChange={(event) => setSelectedOption(event.value)}
              placeholder="Çocuğum için..."
              />
              

              {
                /*
              <select
              className="Form-input Child-Location"
              onFocus={changeColor}
              onMouseDown={openList}
              onBlur={changeColorDefault}
              placeholder="Çocuğum için..."
              value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                
                <option value="" disabled selected hidden>Çocuğum için....</option>
                <option value="0-12 ay arası">0-12 ay arası</option>
                <option value="1 ve 2 yaş arasi">1 ve 2 yaş arasi</option>
                <option value="3 yaş ve üzeri">3 yaş ve üzeri</option>
              
                
              </select>
              */
              }
              
              {<img style={{filter: imgColor,display: childImageSource}}  src={Child} alt="Child" className="Child" /> }
              <img style={{filter: imgColor ,bottom: changeBottom}} src={arrow} alt="Arrow" className="Arrow" /> 
            </label>
            <label className="Form-Label ">
                Nerede Yaşıyorsunuz?
                <Select 
                  id="second-select"
                  styles={customStyles}
                  options={cities}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null
                  }} 
                  openMenuOnFocus={true}
                  value={options.find(option => option.value === location)}
                  onChange={(event) => setLocation(event.value)}
                  placeholder="Şehir seçin..."
              />
                {/*
              <select
                className="Form-input Child-Location"
                type="text"
                id="Choose-city"
                onFocus={changeColor2}
                onBlur={changeColorDefault2}
                onMouseDown={openList2}
                placeholder="Şehir seçin..."
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                > 
                
                <option value="" disabled selected hidden>Şehir Seçin</option>
                {cities.map((city) => <option value={city}>{city}</option>)}
                </select>*/
                }
              {/* <img src={Location} alt="Location" className="Location" />
              <img src={Arrow} alt="Arrow" className="Arrow" /> */}
              <img style={{filter: imgColor2}} src={Location} alt="Location" className="Location" />
              <img style={{filter: imgColor2}} src={arrow2} alt="Arrow" className="Arrow" /> 
            </label>
            <label className="Form-Label ">
              Başlangıç Tarihi
              <input
                className="Form-input"
                style={getDateColor()}
                type="text"
                id="Choose-date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                onFocus={changeColor3}
                onBlur={changeColorDefault3}
               /* style={{background:url()}}*/
                placeholder="Tarih Secin"
              />
             {/*<img src={Calendar} alt="Calendar" className="Arrow-tarih" /> */}
            </label>
            <button type="submit" className="Home-First-Button">
              Arama Yap{" "}  <img className="Search-Logo" src={Search} alt="CareZone" />
            </button>
          </form>
          {/* <Form className="Home-First-Form"> */}
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label">Bakıcı Arıyorum</Form.Label>
              <Form.Control
                className="Form-input Child-Location"
                type="text"
                placeholder="Çocuğum için..."
              />
              <img src={Child} alt="Child" className="Child" />
              <img src={Arrow} alt="Arrow" className="Arrow" />
            </Form.Group> */}

            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label-location ">
                Nerede Yaşıyorsunuz?
              </Form.Label>
              <Form.Control
                className="Form-input Child-Location"
                type="text"
                placeholder="Şehir seçin..."
              />
              <img src={Location} alt="Location" className="Location" />
              <img src={Arrow} alt="Arrow" className="Arrow" />
            </Form.Group> */}

            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label">Başlangıç Tarihi</Form.Label>
              <Form.Control
                className="Form-input"
                type="text"
                placeholder="Tarih Seçin"
              />
              <img src={Arrow} alt="Arrow" className="Arrow-tarih" />
            </Form.Group> */}

            {/* <Button type="submit" className="Home-First-Button">
              Arama Yap{" "}
            </Button> */}
          {/* </Form> */}
        </div>
      </div>
      <div className="Home-First-img">
        <img src={homepageicon} alt="homepage icon" />
      </div>
    </div>
  );
};

export default HomeFirst;
