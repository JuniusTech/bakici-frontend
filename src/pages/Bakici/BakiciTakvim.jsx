import React, { useState } from 'react'
import { format, isSameDay } from 'date-fns'
import { enGB, tr } from 'date-fns/locale'
import { getDay,getDate,getWeek,getDayOfYear,getMonth } from 'date-fns'
import DatePicker, { DateObject } from "react-datepicker";
import { Calendar, DatePickerCalendar, DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './../../styles/BakiciTakvim.css'

const BakiciTakvim = () => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [checked, setChecked] = useState(false);
  const [focus, setFocus] = useState(START_DATE);
  const [dateRange, setDateRange] = useState(checked ? "" : [null, null]);
  const [selectedDates, setSelectedDates] = useState([])
  const [available,setavailable]=useState(false);
  const [specialDays, setspecialDays] = useState([])
  const [specialDays2, setspecialDays2] = useState([])
  const [formData, setformData] = useState({
    start_date:new Date(),
    end_date:""
  });
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
      /* style={{background:url()}}*/
      placeholder="Tarih Seçin"
    />
    )
  }
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  const getDateColor = () => {
    return formData.date ? { color: "#2D83AC" } : null;
  };
  const modifiers = {

    special: date => specialDays.some(day => day.getTime() === date.getTime()),
    customBackground: date => {
      if(available){
          
      }
      // Return true for the dates you want to change the background color of
      // For example, let's change the background color of August 15th
      return specialDays.some(day => day.getTime() === date.getTime()); // (months are 0-based)
    },
    customBackground2: date => {
      if(available){

      }
      // Return true for the dates you want to change the background color of
      // For example, let's change the background color of August 15th
     

      return specialDays2.some(day => day.getTime() === date.getTime()); // (months are 0-based)
    },
    selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
  }
  const modifiersClassNames = {
    highlight: '-highlight',
    customBackground: "-customBackground",
    customBackground2: "-customBackground2",
  }
  
  // <p>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: tr }) : 'none'}.</p>
  // <p>Selected end date: {endDate ? format(endDate, 'dd MMM yyyy', { locale: tr }) : 'none'}.</p>
  // <p>Currently selecting: {focus}.</p>
 
  

  const handleDayClick = date => {
    setSelectedDates([...selectedDates, date])
    

  }

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
  const availableSave = () =>{
    setavailable(true);
    var currentDate = startDate;
    setStartDate(null);
    setEndDate(null);
    
    if(currentDate){
      while (currentDate <= endDate) {
        for (let i=0 ; i<=specialDays2.length;i++){
      
          if(new Date (currentDate).toJSON().slice(0,10) == specialDays2[i]?.toJSON().slice(0,10)){
            specialDays2.splice(i, 1);
          }
        }
         specialDays.push(new Date (currentDate))
         currentDate = currentDate.addDays(1);
     }
    }else{
      for (let i = 0; i < selectedDates.length; i++) {
        const element = selectedDates[i];
        for (let j = 0; j < specialDays2.length; j++) {
          if(element.toJSON().slice(0,10) == specialDays2[j]?.toJSON().slice(0,10)){
            specialDays2.splice(j, 1);
          }
          
        }
        
      }
      console.log(selectedDates);
      specialDays.push(...[...selectedDates])
    }
   
    
   
    setSelectedDates([]);
     setspecialDays(specialDays)
    //  setspecialDays2(specialDays)
  }

  const notavailableSave = () =>{
    setavailable(false);
    var currentDate = startDate;
    setStartDate(null);
    setEndDate(null);
    if(currentDate){
      while (currentDate <= endDate) {
        for (let i=0 ; i<=specialDays.length;i++){
          if(new Date (currentDate).toJSON().slice(0,10) == specialDays[i]?.toJSON().slice(0,10)){
            specialDays.splice(i, 1);
          }
        }
         specialDays2.push(new Date (currentDate))
         currentDate = currentDate.addDays(1);
     }
    }else{

      for (let i = 0; i < selectedDates.length; i++) {
        const element = selectedDates[i];
        for (let j = 0; j < specialDays.length; j++) {
          if(element.toJSON().slice(0,10) == specialDays[j]?.toJSON().slice(0,10)){
            specialDays.splice(j, 1);
          }
          
        }
        
      }
      console.log(selectedDates);
      
     
    specialDays2.push(...[...selectedDates])
    }
   
    
    // setspecialDays(specialDays)
    setSelectedDates([]);
    setspecialDays2(specialDays2)
  }
  return (
    <div className='bakici-takvim'>

    <h3 className='bakici-takvim-hello'>Merhaba, Tuğba</h3>
    <p className='bakici-takvim-profil-durumu'>Profil durumu : Aktif</p>
    <p className='bakici-takvim-profil-bilgi'>Profilinizin aktif olmasi için müsait olduğunuz günleri takvimi kullanarak güncelleyebilirsiniz.</p>

    <div className='bakici-takvim-bottom '>
      <div  className='bakici-takvim-bottom-left'>
            <h1 className='bakici-takvim-bottom-left-h1'>HIZLI TAKVİM GÜNCELLEMESİ</h1>
            <p className='bakici-takvim-bottom-left-p'>Hızlı takvim güncellemesi</p>
            <p className='bakici-takvim-bottom-left-p'>
            
             Bir tarih aralığı veya rastgele günler seçin ve müsaitlik durumunu aynı anda herkes için değiştirin.</p>
      
            <label className="Kontakt-Form-Label"  id='option-date'>

            TARİH SEÇİNİZ
        
        
            <DatePicker
            customInput={<CustomMultipleInput/>}
             wrapperClassName="datepicker"
             
        selected={checked ? startDate: false}
        selectsRange={checked ? false : true}
        startDate={checked ? [...selectedDates ]: startDate }
        endDate={checked ? [...selectedDates ] : endDate }
        required
        form="external-form"
        onChange={(update) => {
        if(checked){
        const arr = [];
        arr.push(update);
        arr.push(null);
        setDateRange(arr);
        setStartDate(arr[0]);
        setEndDate(arr[0]);
        console.log(startDate);
        setEndDate("");
        handleDayClick(update);
        // setformData({start_date:arr[0],end_date:""})
        }else{
        setDateRange(update);
        setStartDate(update[0]);
        setEndDate(update[1]);
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
        ARDIŞIK GÜN SEÇME
        </p>
        
        </label>
        
        
        </DatePicker>
         
            
            
            {/*<img src={Calendar} alt="Calendar" className="Arrow-tarih" /> */}
          </label>

            <button className='bakici-takvim-bottom-left-button1' onClick={availableSave}>
              Seçili tarihleri müsait olarak kaydet
            </button>
            <button className='bakici-takvim-bottom-left-button2' onClick={notavailableSave}>
            Seçili tarihleri müsait değil olarak kaydet
            </button>


            <div className='bakici-takvim-bottom-uzaktamodu'>
              <h3 className='bakici-takvim-bottom-uzaktamodu-h3'>  UZAKTA MODU</h3>
              <p className='bakici-takvim-bottom-uzaktamodu-bilgi'>
              Care Zone da geçici olarak müsait değilseniz (ör. tatilde, okulla meşgul vb.), ebeveynlerin sizinle iletişim kuramaması ve yanıt alamama riskini alması için lütfen profilinizi Dışarıda Moduna ayarlayın.
              </p>
              <div className='d-flex align-items-center gap-2'>
              <input type="checkbox" id="scales" name="scales" className='bakici-takvim-bottom-uzaktamodu-checkbox'  />
               <label for="scales" className='bakici-takvim-bottom-uzaktamodu-label'>UZAKTA MODU</label>
              </div>
              

            </div>
            </div>
        <div className='bakici-takvim-bottom-right'>
            <h3 className='bakici-takvim-bottom-right-h3'>ÇALIŞMA MÜSAİT SAATLERİNİZİ GÜNCELLEYİN</h3>
            <div className="bakici-takvim-date-range-picker-calendar">

            {
              checked ? <Calendar
              onDayClick={handleDayClick}
              locale={tr}
              
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
            />: 
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
            }
           

          <div className='bakici-takvim-bottom-right-kutucuklar'>
            <div className='bakici-takvim-bottom-right-kutucuklar-musait'>
            <div className='bakici-takvim-bottom-right-kutucuklar-ilk'>
              </div>
            <p className='bakici-takvim-bottom-right-kutucuklar-text' >Müsait</p>
              
              
            </div>

            <div className='bakici-takvim-bottom-right-kutucuklar-degil'>
            <div className='bakici-takvim-bottom-right-kutucuklar-ikinci'>
            </div>
            <p className='bakici-takvim-bottom-right-kutucuklar-text'>Müsait değil</p>
            
            
          </div>

          <div className='bakici-takvim-bottom-right-kutucuklar-dolu'>
          <div className='bakici-takvim-bottom-right-kutucuklar-üçüncü'>
          </div>
          <p className='bakici-takvim-bottom-right-kutucuklar-text'>Dolu</p>
         
          
        </div>
          </div>
            </div>
        </div>
    </div>

   

 

    </div>
  )
}

export default BakiciTakvim