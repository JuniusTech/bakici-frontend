import React from 'react'
import '../styles/MisafirLoginYonlendirici.css'
import ilustrasyon4 from '../assets/ilustrasyon4.svg'
import { NavLink } from 'react-router-dom'

const MisafirLoginYonlendirici = () => {
  return (
    <div className="MisafirLoginYonlendirici">
      <h1 className="MisafirLoginYonlendirici_h1"
      >Başarmak Üzeresiniz!!!</h1>
      <p className="MisafirLoginYonlendirici_p1">Bakıcı bilgilerini inceleyebilmeniz için sitemize <span className='MisafirLoginYonlendirici_p1_span' >kayit olup oturum açmış</span> olmanız gerekiyor.

      </p>
      <img src={ilustrasyon4} alt="ilustrasyon4" className=" ilustrasyon4" />
      <NavLink to="/login" >
        <button type="button" className="MisafirLoginYonlendirici_button">
          Oturum Aç
        </button>
      </NavLink>
      <p className="MisafirLoginYonlendirici_p2">Hesabınız var mı?

      </p>
      <NavLink className="MisafirLoginYonlendirici_navlink" to="/register" >Kayıt ol
    

      </NavLink>
      
    </div>
  )
}

export default MisafirLoginYonlendirici