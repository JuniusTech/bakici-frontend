import React, { useState } from "react";
import { isSameDay } from "date-fns";
import { tr } from "date-fns/locale";
import {
  Calendar,
  DatePickerCalendar,
  DateRangePickerCalendar,
  START_DATE,
} from "react-nice-dates";
import "../styles/TarihSecimi.css";
import "react-nice-dates/build/style.css";

const TarihSecimi = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState();
  const [checked, setChecked] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [endDate, setEndDate] = useState();
  const [dateRange, setDateRange] = useState(checked ? "" : [null, null]);
  const [formData, setformData] = useState({
    start_date: new Date(),
    end_date: "",
  });

  const [focus, setFocus] = useState(START_DATE);
  const [available, setavailable] = useState(false);
  const [specialDays, setspecialDays] = useState([]);
  const [specialDays2, setspecialDays2] = useState([]);

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
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  const getDateColor = () => {
    return formData.date ? { color: "#2D83AC" } : null;
  };
  const modifiers = {
    special: (date) =>
      specialDays.some((day) => day.getTime() === date.getTime()),
    customBackground: (date) => {
      if (available) {
      }
      // Return true for the dates you want to change the background color of
      // For example, let's change the background color of August 15th
      return specialDays.some((day) => day.getTime() === date.getTime()); // (months are 0-based)
    },
    customBackground2: (date) => {
      if (available) {
      }
      // Return true for the dates you want to change the background color of
      // For example, let's change the background color of August 15th

      return specialDays2.some((day) => day.getTime() === date.getTime()); // (months are 0-based)
    },
    selected: (date) =>
      selectedDates.some((selectedDate) => isSameDay(selectedDate, date)),
  };
  const modifiersClassNames = {
    highlight: "-highlight",
    customBackground: "-customBackground",
    customBackground2: "-customBackground2",
  };


  const handleDayClick = (date) => {
    setSelectedDates([...selectedDates, date]);
  };

  return (
    <div>
      <div className="bakici-takvim-date-range-picker-calendar-1">
        {checked ? (
          <Calendar
            onDayClick={handleDayClick}
            locale={tr}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
          />
        ) : (
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
        )}

        <div className="bakici-takvim-bottom-right-kutucuklar">
          <div className="bakici-takvim-bottom-right-kutucuklar-musait">
            <div className="bakici-takvim-bottom-right-kutucuklar-ilk"></div>
            <p className="bakici-takvim-bottom-right-kutucuklar-text">Musait</p>
          </div>

          <div className="bakici-takvim-bottom-right-kutucuklar-degil">
            <div className="bakici-takvim-bottom-right-kutucuklar-ikinci"></div>
            <p className="bakici-takvim-bottom-right-kutucuklar-text">
              Musait degil
            </p>
          </div>

          <div className="bakici-takvim-bottom-right-kutucuklar-dolu">
            <div className="bakici-takvim-bottom-right-kutucuklar-üçüncü"></div>
            <p className="bakici-takvim-bottom-right-kutucuklar-text">Dolu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarihSecimi;
