import React from 'react';
import bank_account from "../../assets/bank_account.svg";
import "../../styles/Profile/BankAccount.css";

const BankAccount = () => {
  return (
    <>
        <div className="bank_account_container">
        <div className="bank_account">
          <div className="bank_account_text">
            <span>BANKA HESABIM</span>
            <img src={bank_account} alt="" />
          </div>
        </div>
        <div className='iban_container'>
        <div className='iban_header'><span>IBAN NUMARANIZ</span></div>
        <p className='iban_label'>Mevcut IBAN Numaranız:</p>
        <input
        type="number"
        className='iban_text'
        

      />
        </div>
        <button className='iban_kaydet_btn'><span>Kaydet</span></button>
        </div>
    </>
  )
}

export default BankAccount;