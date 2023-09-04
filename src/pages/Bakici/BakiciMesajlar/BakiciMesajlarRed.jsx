import React from 'react'
import "./../../../styles/BakiciMesajlar/BakiciMesajlarRed.css"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"
import iptal from "./../../../assets/BakiciMesajlarIptal.svg"
const BakiciMesajlarRed = ({selectedNumber,rejectedMission} ) => {

  const clickedp = () =>{
    selectedNumber(7);
  }
  return (
    <div className='BakiciMesajlarRed'>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    <h3 className='BakiciMesajlarOnaylanan-Title'>REDDEDİLEN GÖREVLER</h3>
    {
      rejectedMission.map((selectedUser) =>{
        return (
          <>
          <div className='BakiciMesajlarOnaylanan-Item'>
              <div >
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left'>
                <img src={selectedUser.image} alt="" />
                <div>
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Name'>{selectedUser.name}</p>
                <div  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location'>
                <img src={location} alt="" />
                <p  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedUser.location}</p>
                </div>
                </div>
                </div>
                <div className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left'>
                  <p className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left-Onaylama'>REDDEDİLDİ</p>
                  <img src={iptal} alt="" />
                </div>
                <div>
                <p className='BakiciMesajlarRed-Right-TalepEdilen-Div-Top-Left-Onaylama'>/{selectedUser.reason}/</p>
              </div>
              </div>
              <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
                </div>
                 </div>
            </div>
          </>
        )
      })
    }
    </div>
    </div>
  )
}

export default BakiciMesajlarRed