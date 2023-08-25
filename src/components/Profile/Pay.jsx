import React,{useState} from "react";
import "../../styles/Profile/Pay.css";
import bank_account from "../../assets/bank_account.svg";
import import_img from "../../assets/import_img.svg";
import clock_day from "../../assets/clock_day.svg";
import clock_night from "../../assets/clock_night.svg";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil} from "@fortawesome/free-solid-svg-icons";

const Pay = () => {
    const [radio1Checked, setRadio1Checked] = useState(true);
    const [radio2Checked, setRadio2Checked] = useState(false);
  
    const toggleRadio1 = () => {
      setRadio1Checked(!radio1Checked);
    };
  
    const toggleRadio2 = () => {
      setRadio2Checked(!radio2Checked);
    };
  return (
    <>
      <div className="pay_container">
        <div className="pay">
          <div className="pay_text">
            <span>ÜCRET DETAYLARI</span>
            <img src={bank_account} alt="" />
          </div>
        </div>
        <div className='pay_detail_container'>
        <div className='pay_detail_header'><span>Ücret detaylarınızı giriniz </span></div>
        <div className='pay_daily_label'>GÜNLÜK</div>
        <p className="pay_daily"><span>Günlük çalışma saatleri durumunda almak istediğiniz ücret</span></p>
        <div>
            <input
        type="text"
        className='pay_daily_text'
        placeholder=" | TL"
        style={{ opacity:"50%"}}

      /></div>
        <p className="daily_time">1 SAATİ</p>
       <div className="daily_line"></div>
       <div className='pay_weekly_label'>HAFTALIK</div>
        <p className="pay_weekly"><span>Haftalık çalışma saatleri durumunda almak istediğiniz ücret
</span></p>
        <div>
            <input
        type="text"
        className='pay_weekly_text'
        placeholder="  | TL"
        style={{ opacity:"50%"}}

      /></div>
        <p className="weekly_time">HAFTALIK</p>
        <div className="weekly_line"></div>
       <div className="import_text"> <img src={import_img} alt="" /><span>Daha uzun dönemli çalışmalar için haftalık çalışma programı uygulanacaktır.</span></div>
       
        </div>
        <div className='owertime_container'>
        <div className='owertime_header'><span>Ekstra Mesai Ücretlendirmesi </span></div>
        <div className="owertime_day_container">
            <img src={clock_day} alt="" />
        <div className='owertime_day_label'>Gündüz tarife</div>
        <p className="owertime_day"><span>Gündüz tarifesinde ekstra çalışma saatleri durumunda alınacak ücret</span></p>
        
        <div>
            <input
        type="text"
        className='owertime_day_text'
        placeholder="  |  TL"
        style={{ opacity:"50%"}}

      />
        <p className="owertime_day_time">1 SAATİ</p>
        </div>
        <div className="owertime_night_container">
            <img src={clock_night} alt="" />
        <div className='owertime_night_label'>Gece tarife</div>
        <p className="owertime_night"><span>Gece yatılı çocuk bakımı <br />tarifesi</span></p>
        
        <div>
            <input
        type="text"
        className='owertime_night_text'
        placeholder="  | TL"
        style={{ paddingLeft:"10px", opacity:"50%"}}

      />
        <p className="owertime_night_time">1 GECESİ</p>
        </div>
        
        </div>
        
      </div>
      
      </div>
      <div className='work_routine_container'>
        <div className='work_routine_header'><span>Tercih ettiğiniz çalışma rutininiz </span></div>
        <div className="work_routine_text">Tercih ettiğiniz çalışma metodunuzu seçiniz</div>
        <div className="daily_routine_container">
            <div className="daily_routine_label"><span>GÜNLÜK</span></div>
            <Form.Check type="radio" className="radio-1" label="8/24 " checked={radio1Checked}
          onChange={toggleRadio1}/><p className="radio_1_text">8 saat çalışabilirim.</p>
            <Form.Check type="radio" className="radio-2" label="12/24" checked={radio2Checked}
          onChange={toggleRadio2} /><p className="radio_2_text">12 saat çalışabilirim.</p>
        </div>
        <div className="weekly_routine_container">
            <div className="weekly_routine_label"><span>HAFTALIK</span></div>
            <Form.Check type="radio" className="radio-1" label="6/24 " defaultChecked/><p className="radio_1_text">Haftada 6 gün çalışabilirim.</p>
            <Form.Check type="radio" className="radio-2" label="7/24" /><p className="radio_2_text">Haftada 7 gün çalışabilirim.</p>
        </div>
        <div className="weekly_routine_line"></div>
        <div className="routine_import_text"> <img src={import_img} alt="" /><span>Daha uzun dönemli çalışmalar için haftalık çalışma programı uygulanacaktır.</span></div>
        <p className="pay_recompose">Tekrar düzenle <FontAwesomeIcon icon={faPencil }/></p>
        <button className="pay_kaydet_btn"><span>Kaydet</span></button>
        </div>
      </div>
    </>
  );
};

export default Pay;

