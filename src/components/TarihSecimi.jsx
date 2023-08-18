import React, { useState } from "react";
import { format, isSameDay } from "date-fns";
import { tr } from "date-fns/locale";
// import DatePicker, { START_DATE } from "react-nice-dates";
import DatePicker from "react-datepicker";
import "react-nice-dates/build/style.css";


const TarihSecimi = ({onDatesSelected}) => {
  const [startDate, setStartDate] = useState();
  const [checked, setChecked] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [endDate, setEndDate] = useState()
  const [dateRange, setDateRange] = useState(checked ? "" : [null, null]);
  const [formData, setformData] = useState({
    start_date:new Date(),
    end_date:""
  });

  const handleDayClick = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  const getDateColor = () => {
    return formData.date ? { color: "#2D83AC" } : null;
  };

  function CustomMultipleInput({ innerRef, onFocus, value, onChange }) {
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
        /* style={{background:url()}}*/
        placeholder="Tarih Secin"
      />
    );
  }

  return (
    <div>
      <label className="Kontakt-Form-Label" id="option-date">
        TARIH SECINIZ
        <DatePicker
          customInput={<CustomMultipleInput />}
          wrapperClassName="datepicker"
          selected={checked ? startDate : false}
          selectsRange={checked ? false : true}
          startDate={checked ? [...selectedDates] : startDate}
          endDate={checked ? [...selectedDates] : endDate}
          required
          form="external-form"
          onChange={(update) => {
            if (checked) {
              const arr = [];
              arr.push(update);
              arr.push(null);
              setDateRange(arr);
              setStartDate(arr[0]);
              setEndDate(arr[0]);
              console.log(startDate);
              setEndDate("");
              handleDayClick(update);
            } else {
              setDateRange(update);
              setStartDate(update[0]);
              setEndDate(update[1]);
            }
            onDatesSelected(update);
          }}
        >
          <label className="">
            <input
              type="checkbox"
              defaultChecked={checked}
              className=" text-black"
              style={{ marginLeft: "5px" }}
              onChange={() => setChecked(!checked)}
            />

            <p className=" d-inline ms-2">ARDISIK GUN SECME</p>
          </label>
        </DatePicker>

      </label>
    </div>
  );
};

export default TarihSecimi;
