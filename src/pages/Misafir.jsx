import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./../styles/Misafir.css"
import misafir from "./../assets/misafir.svg"

const Misafir = () => {

  return (
    <div>
    <h1 className='misafir-top-h1'>
    Basarmak Uzeresiniz!!!
    </h1>
    <p className='misafir-info-p'>Bakici bilgilerini inceleyebilmeniz icin sitemize <span className='misafir-info-span'>kayit olup oturum acmis</span>  olmaniz gerekiyor.</p>
    <img src={misafir} alt="" className='misafir-img'/>
    <div className=' text-center'>
    <Link to="/login"> 
    <button className='misafir-button' >Oturum Ac</button>
    </Link>
  
    </div>
   
    <div className='d-flex justify-content-center gap-5'>
        <p className='misafir-hesap-p'>Hesabiniz yok mu?</p>
        <Link className='misafir-kayit-link' to="/register">Kayit ol</Link>
    </div>


    </div>
  )
}

export default Misafir