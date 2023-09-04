import React, { useState } from 'react'
import Select from 'react-select';
import kontakt_arrow from "../../../assets/Kontakt_Arrow.svg"
import "./../../../styles/Ebeveyn/EbeveynMesajlar/EbeveynMesajlarAnasayfa.css"

const EbeveynMesajlarAnasayfa = ({selectedNav,setSelectedNav,visibility,selectedNumber}) => {
    const [selectData, setSelectData] = useState();
    const [imgColor, setImgColor] = useState("");
    const filterColor =
        "  invert(48%) sepia(31%) saturate(841%) hue-rotate(155deg) brightness(90%) contrast(103%)";
      
     
    const service_options = [
      {
        label: "Onaylanan",
        value: "Onaylanan",
      },
      {
        label: "Hizmet Alınan Bakıcı Geçmişi",
        value: "Tamamlanmis gorevleriniz",
      },
      {
        label: "İptal edilen",
        value: "Iptal edilen",
      },
      {
        label: "Reddedilen",
        value: "Reddedilen",
      }
      
    ];

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

      const changePage = (e) => {
        if(e.value === "Onay Bekleyen"){
          selectedNumber(1);
        }else  if(e.value === "Onaylanan"){
          selectedNumber(2);
        }else  if(e.value === "Tamamlanmis gorevleriniz"){
          selectedNumber(3);
        }else  if(e.value === "Iptal edilen"){
          selectedNumber(4);
        }else  if(e.value === "Reddedilen"){
          selectedNumber(5);
        }
        
        visibility(false);
      }

      const arsivlenenMesajlar = () =>{
        selectedNumber(6);
        visibility(false);
      }
  return (
    <div className='Ebeveyn-Mesajlar-Anasayfa'>
    <div className='Ebeveyn-Mesajlar-Anasayfa-Top'>
    <h3 className='Ebeveyn-Mesajlar-Anasayfa-Top-H3'>Hizmet Raporlarınız</h3>
    <div className='Ebeveyn-Mesajlar-Anasayfa-Top-Select'>
    <label className="Kontakt-Form-Label" id='option-servis'>
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
        (option) => option.value === selectData
      )}
      onChange={changePage}
      placeholder="Seçiniz"
    />

    <img
      style={{ filter: imgColor}}
      src={kontakt_arrow}
      alt="Arrow"
      className="Ebeveyn-Mesajlar-Anasayfa-Top-Select-Arrow"
    />
  </label>
    </div>
  
  <p className='Ebeveyn-Mesajlar-Anasayfa-Top-Paragraph' onClick={arsivlenenMesajlar}>Arşivlenen Mesajlar</p>
    </div>
   
    <div className='Ebeveyn-Mesajlar-Anasayfa-Middle'>

    <svg className='Ebeveyn-Mesajlar-Anasayfa-Middle-HR' xmlns="http://www.w3.org/2000/svg" width="80vw" height="2" viewBox="0 0 1532 2" fill="none">
<path d="M1 1H1531" stroke="#455A64" stroke-width="0.5" stroke-linecap="round"/>
</svg>
    </div>


    <div className='Ebeveyn-Mesajlar-Anasayfa-Bottom' onClick={arsivlenenMesajlar}>

            <p className='Ebeveyn-Mesajlar-Anasayfa-Bottom-Paragraph'>1 okunmamış mesajınız var</p>
            <p className='Ebeveyn-Mesajlar-Anasayfa-Bottom-Number'>1</p>
 
    </div>


    </div>
  )
}

export default EbeveynMesajlarAnasayfa