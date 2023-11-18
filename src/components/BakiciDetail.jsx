import React, { useState } from "react"
import "../styles/BakiciDetail/BakiciDetail.css"
import Bakici1 from "../images/Bakıcı1.png"
import Bakici2 from "../images/Bakıcı2.png"
import Slider from "react-slick"
import "../styles/BakiciDetail/Slick.css"
import "../styles/BakiciDetail/Slick-theme.css"
import RedHeart from "../images/RedHeart.png"
import LanguageIcon from "../images/LanguageIcon.png"
import DeneyimIcon from "../images/DeneyimIcon.png"
import EngelliIcon from "../images/EngelliIcon.png"
import SaatIcon from "../images/DetayClock.png"
import GeceIcon from "../images/DetayGeceIcon.png"
import EkServisIcon1 from "../images/EkServisIcon1.png"
import EkServisIcon2 from "../images/EkServisIcon2.png"
import TarihSecimi from "./TarihSecimi"
import Select from "react-select"
import ReactPaginate from "react-paginate"
import { useEffect } from "react"
import kontakt_arrow from "../assets/Kontakt_Arrow.svg"
import { datas, service_options } from "../helper/options"

function BakiciDetail({ babysitterInfo }) {
  const [specialDays, setspecialDays] = useState([])
  const [formData, setformData] = useState({
    selectedOption: "",
    age: "",
    start_date: new Date(),
    end_date: "",
    message: "",
  })
  const filterColor =
    "  invert(48%) sepia(31%) saturate(841%) hue-rotate(155deg) brightness(90%) contrast(103%)"

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const customStyles = {
    control: (provided, state) => {
      if (state.selectProps.id === "second-select") {
        if (state.hasValue) {
        } else {
          test = "10px 50px"
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
      }
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
      }
    },
  }

  const handleDatesSelected = (dates) => {
    setspecialDays([...specialDays, ...dates])
  }

  const items = [...Array(17).keys()]
  const itemsPerPage = 8

  ///// Pagination Start//////
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage
    setItemOffset(newOffset)
  }

  return (
    <div className="bakici-detail-container">
      <div className="bakici-detail-name-container">
        <h3>{babysitterInfo?.name}</h3>
      </div>
      <div className="bakici-detail-slider-container">
        <Slider {...settings} className="w-100">
          <div>
            <img src={Bakici1} alt="" className="d-block w-100" />
          </div>
          <div>
            <img src={Bakici2} alt="" className="d-block mw-100" />
          </div>
          <div>
            <img src={Bakici1} alt="" className="d-block w-100" />
          </div>
        </Slider>
        <div className="bakici-detail-heart-star-text-container d-flex flex-column justify-content-center align-items-center w-100 mt-3 flex-md-row justify-content-md-between">
          <div className="d-flex justify-content-center align-items-center my-1">
            <div className="rating_wrap justify-content-between m-0">
              <div className="rating ">
                <div className="product_rate"></div>
              </div>
            </div>
            <p className="m-0 bakici-detail-star-rate">4.7</p>
          </div>
          <div className="d-flex justify-content-center align-items-center my-1">
            <img src={RedHeart} alt="" className="heart-icon" />
            <p className="bakici-detail-favorilenme m-0">
              7 kişi favori listesine ekledi
            </p>
          </div>
        </div>
      </div>
      <hr className="slider-bottom-hr" />
      <div>
        <div className="bakici-detail-hakkinda-container">
          <h5>HAKKINDA</h5>
          <p>{babysitterInfo?.descripton}</p>
        </div>
        <div className="deneyim-container">
          <h5>DENEYİMLERİ</h5>
          <div className="d-flex flex-column justify-content-between my-4 flex-sm-row">
            <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row">
              <img src={LanguageIcon} alt="" className="px-2" />
              <p className="text-center">
                İyi seviye {babysitterInfo?.languages} konuşabiliyorum
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row">
              <img src={DeneyimIcon} alt="" className="px-2" />
              <p className="text-center">
                + {babysitterInfo?.experience?.map((e) => e.time)} yil deneyim
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row">
              <img src={EngelliIcon} alt="" className="px-2" />
              <p className="text-center">Engelli çocuk bakımı</p>
            </div>
          </div>
        </div>
        <div className="servisler-container">
          <h5>TUĞBANIN SERVİSLERİ</h5>
          <div>
            <div className="d-flex flex-column justify-content-between my-4 flex-sm-row">
              <div className="d-flex flex-column justify-content-center align-items-center d-md-block my-2">
                <img src={SaatIcon} alt="" className="float-start" />
                <div className="tarife-container">
                  <h6 className="text-center text-sm-start">Gündüz Tarife</h6>
                  <p>
                    Gündüz tarifesinde ekstra çalışma saatleri durumunda
                    alınacak ücret
                  </p>
                </div>
              </div>
              <div className="tarife-ücret d-flex flex-column justify-content-center align-items-center d-md-block my-2">
                <h4>30TL/Saati</h4>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between my-4 flex-sm-row">
              <div className="d-flex flex-column justify-content-center align-items-center d-md-block my-2">
                <img src={GeceIcon} alt="" className="float-start px-2" />
                <div className="tarife-container">
                  <h6 className="text-center text-sm-start">Gece Tarife</h6>
                  <p className="text-center text-sm-start">
                    Gece yatılı çocuk bakımı tarifesi
                  </p>
                </div>
              </div>
              <div className="tarife-ücret my-2">
                <h4>200TL/Gecesi</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="ek-servisler-container">
          <h5>TUĞBANIN EK SERVİSİ</h5>
          <div className="my-4">
            <div className="d-flex justify-content-between my-2">
              <div className="d-block my-2">
                <img src={EkServisIcon1} alt="" className="float-start px-2" />
                <p>Montesori eğitimi / aktiviteleri</p>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2">
              <div className="d-block my-2">
                <img src={EkServisIcon2} alt="" className="float-start px-3" />
                <p className="ek-servis-content">
                  Ebeveyn işyerinden çocuğu almak/ bırakmak
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="gündüz-tarife-container"> */}
        <label className="Kontakt-Form-Label-1" id="option-servis">
          SERVIS
          <Select
            id="first-select"
            className="Form-Select"
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
            onChange={(event) =>
              setformData({ ...formData, selectedOption: event.value })
            }
            placeholder="Gunduz Tarife"
          />
          <img src={kontakt_arrow} alt="Arrow" className="Kontakt-Arrow" />
        </label>

        <div className="tarih-container">
          <TarihSecimi onDatesSelected={handleDatesSelected} />
        </div>
        <div className="yorumlar-container">
          <h5>YORUMLAR</h5>

          {datas.map((data, index) => (
            <div key={index} className="bakici-detail-yorumlar-data">
              <div className="bakici-detail-yorumlar-data-top flex-column flex-md-row ">
                <div className="bakici-detail-yorumlar-data-top-left d-flex flex-column flex-md-row">
                  <img
                    src={data.image}
                    className="bakici-detail-yorumlar-data-top-left-img mt-5 mt-md-0"
                    alt=""
                  />
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="bakici-detail-yorumlar-data-top-left-p m-0">
                      {data.name}, {data.date}
                    </p>
                  </div>
                </div>
                <div className="bakici-yorumlar-data-top-right m-2">
                  <p className="bakici-yorumlar-data-top-right-point">
                    {data.point}
                  </p>
                  <p className="bakici-yorumlar-data-top-right-type">
                    {data.work_type} - {data.baby_type}
                  </p>
                </div>
              </div>
              <div>
                <p className="bakici-detail-yorumlar-data-bottom">
                  {data.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        className="pagination"
        forcePage={itemOffset / itemsPerPage}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link next-item"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default BakiciDetail
