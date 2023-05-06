import React from 'react'
import '../styles/AnaUyelik.css'
import logo from '../assets/logo.svg'
import MusteriButton from '../assets/MusteriButton.svg'
import BakiciButton from '../assets/BakiciButton.svg'

const AnaUyelik = () => {
  return (
    <div className="AnaUyelik">
        <div className="AnaUyelik-nav-logo">
            <img src={logo} alt="Logo" className="AnaUyelik-nav-logo-img" />
            <h1 className=' AnaUyelik-nav-logo-h1'>UYE OLMAK ICIN TIKLAYIN</h1>
        </div>
        <div className="AnaUyelik-main">
            <div role="button" className="AnaUyelik-main-left">
               <img className='AnaUyelik-main-left-img'
               src={MusteriButton} alt="MusteriButton" />
               <p className='AnaUyelik-main-left-p'
               >Musteri olarak</p>
            </div>
            <div role="button"
             className="AnaUyelik-main-right">
                <img className='AnaUyelik-main-right-img'
                 src={BakiciButton} alt="BakiciButton" />
                <p className='AnaUyelik-main-right-p'
                >BAKICI olarak</p>
            </div>    
        </div>
    </div>
  )
}

export default AnaUyelik