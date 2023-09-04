import React from 'react'
import cuate from "./../assets/cuate.svg"
import { NavLink } from 'react-router-dom'
import returnIcon from "./../assets/return.svg"
const KontaktBasarili = () => {
  return (
    <div>
    <p className='kontakt-bas-info text-center'>
    Mesajiniz Tugba´ya iletildi. Kendisi sizinle yakin zamanda iletisime gececektir.
    </p>
    <img src={cuate} alt="" width={"400px"} className=' mb-5 mx-auto d-block'/>
    <div className=' d-flex justify-content-center gap-3 m-5 align-items-center'> 
        <img src={returnIcon} alt="" />
        
            <NavLink to={"/"} className="Kontakt-return ">
            Anasayfa'ya geri don
            </NavLink>
       
    </div>
    </div>
  )
}

export default KontaktBasarili