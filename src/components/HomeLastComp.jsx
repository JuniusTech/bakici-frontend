import React from 'react'
import Logo from '../assets/logo.svg'
import '../styles/HomeLastComp.css'

const HomeLastComp = () => {
  return (
    <div className='HomeLastComp' >
        <img src={Logo} alt="Logo"  className='HomeLastCompLogo'/>
        <p className='HomeLastCompText'>
            “ Bebekleriniz için en iyi bakımı bizimle bulun “</p>
    </div>
  )
}

export default HomeLastComp