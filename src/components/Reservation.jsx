import React from "react";
import about_img from "../images/Bakıcı1-single.png";
import "../styles/Reservation.css";
import Select from "react-select";
import useSelectOptions from "./select/useSelectOptions";
import { servis, ages } from "../helper/options";
import { useState } from "react";
import { enUS, tr } from "date-fns/locale";
import { format, isSameDay } from "date-fns";
import { formatDate } from "../helper/utils";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import { LuCalendarDays } from "react-icons/lu";
import axios from "axios";
import Loading from "../helper/Loading";

const Reservation = () => {
  const { selectStyles, CheckboxOption, RadioOption } = useSelectOptions();
  const [loading, setLoading] = useState(false);
  const [specialDays, setspecialDays] = useState([]);
  const [specialDays2, setspecialDays2] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [available, setavailable] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [serviceType, setServiceType] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState(START_DATE);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleDateContainerClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formData = {
    serviceType: serviceType,
    ageGroup: ageGroup,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    message: message,
  };

  console.log("form--", formData);
  const usr = localStorage.getItem("currentUser");
  console.log("usr--", usr);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  const modifiers = {
    special: (date) =>
      specialDays.some((day) => day.getTime() === date.getTime()),
    customBackground: (date) => {
      if (available) {
      }
      return specialDays.some((day) => day.getTime() === date.getTime());
    },
    customBackground2: (date) => {
      if (available) {
      }
      return specialDays2.some((day) => day.getTime() === date.getTime());
    },
    selected: (date) =>
      selectedDates.some((selectedDate) => isSameDay(selectedDate, date)),
  };

  const modifiersClassNames = {
    highlight: "-highlight",
    customBackground: "-customBackground",
    customBackground2: "-customBackground2",
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://carezone.onrender.com/meeting/create/6533d94e8a0ad72b7e0c9f3e`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("res--", res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="reservation_container">
        <p className="title">KONTAKT TUĞBA AKSOY</p>

        <div className="reservation_photo_container">
          <img src={about_img} alt="" className="reservation_photo" />
        </div>
        <div className="line"></div>

        <div className="input_container">
          <p className="select_title">SERVİS</p>
          <div className="bakici-reservation__select-div">
            <Select
              className="bakici-kayit__select"
              placeholder="Servis Seçiniz"
              name="gender"
              isSearchable={false}
              styles={selectStyles}
              options={servis}
              onChange={(selectedOption) =>
                setServiceType(selectedOption.value)
              }
            />
          </div>
        </div>

        <div className="input_container">
          <p className="select_title">YAŞ GRUBU</p>
          <div className="bakici-reservation__select-div">
            <Select
              className="bakici-kayit__select"
              placeholder="Yaş Grubu Seçiniz"
              name="gender"
              isSearchable={false}
              styles={selectStyles}
              options={ages}
              onChange={(selectedOption) => setAgeGroup(selectedOption.value)}
            />
          </div>
        </div>

        <div className="input_container">
          <p className="select_title">TARİH SEÇİNİZ</p>
          <div
            className="bakici-kayit__datecontainer"
            onClick={handleDateContainerClick}
          >
            <span>
              {format(startDate, "dd MMM yyyy", { locale: tr }) +
                " - " +
                format(startDate, "dd MMM yyyy", { locale: tr })}
            </span>
            <LuCalendarDays size={28} color="gray" />
          </div>
          {isCalendarOpen && (
            <div className="bakici-kayit__date">
              <DateRangePickerCalendar
                startDate={startDate}
                endDate={endDate}
                focus={focus}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onFocusChange={handleFocusChange}
                locale={tr}
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
              />
              <button
                className="reservation_button"
                onClick={handleDateContainerClick}
              >
                EKLE
              </button>
            </div>
          )}
        </div>

        <div className="textarea_container">
          <p className="select_title">MESAJINIZ</p>
          <textarea
            type="text"
            className="reservation_textarea"
            rows={5}
            placeholder="Bakıcıya bildirmek istediğiniz bilgileri giriniz. Örneğin çocuğunuz ve ihtiyaçlarınız..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="reservation_button" onClick={handleSubmit}>
          GÖNDER
        </button>
        <p className="reservation_bottom_text">
          Tugba ile hiçbir yükümlülük altına girmeden tamamen ücretsiz olarak
          iletişime geçin. Carezone araciligi ile odeme yaparak rezervasyonu
          tamamlamak isteyip istemediğinize ve ne zaman tamamlayacağınıza siz
          karar verirsiniz. Site aracılığıyla yapılan tüm rezervasyonlar,
          Memnuniyet Garantisi ve Rezervasyon Garantisini içeren Kalite Sözü
          kapsamındadır.
        </p>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default Reservation;
