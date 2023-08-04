import React from 'react'
import '../styles/Login.css'
import Logo from '../assets/logo.svg'
import googleicon from '../assets/google-icon.svg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = (e) =>{
    e.preventDefault();
    console.log(email)
    console.log(password);;
  }
  return (
    <div className='login'>
      <div className='login-form-container'>
      <img src={Logo} alt="" className='login-logo' />

      <div className='login-form'>
      
        <h1 className='login-form-title'>OTURUM AC</h1>
        <button className='login-form-btn'>
          <img src={googleicon} alt= "Vgoogle-icon"
          className='login-form-btn-icon' />
          Google hesabınız ile giriş yapın</button>

          <p className='login-form-text'> 
          <span className='login-form-text-span'>•••••</span>
          &nbsp;&nbsp;
            Yada e-posta adresiniz ile 
            &nbsp;&nbsp;
          <span className='login-form-text-span'>•••••</span>
          </p>
          <form action="" onSubmit={onsubmit}>
          <div className='login-form-email-div'>
          <label htmlFor="email" className='login-form-label-email'>Email</label>
          <br />
          <input 
          type="text" 
          placeholder='mail@gmail.com'
           className='login-form-input-email' 
           required
          value={email}
          onChange={(e) => setemail(e.target.value)}
           /><br />
         

          </div>
          <div className='login-form-password-div'>
          <label htmlFor="password" className='login-form-label-password'>Şifre</label>
          <br />
          <input 
          type="password"
           placeholder='Min. 6 karakter' 
           className='login-form-input-password'
           required
           value={password}
           onChange={(e) => setpassword(e.target.value)}
           /><br />

          </div>
         
          <button className='login-form-submit-btn' type='submit' >Oturum Ac</button>
          </form>
          
            <p className='login-form-text-span-dot'>
            •••••••••••••••
            </p>
            <div className='login-form-text-link-container'>
              <p className='login-form-text-link'>Hesabınız yok mu?</p>
              <NavLink to="/register" className='login-form-link'>Kayıt Ol</NavLink>
            </div>
            


      </div>

      </div>
      <div className='login-img-container d-none d-lg-block'>
        

      </div>
    </div>
  )
}

export default Login