import React from 'react'
import "./../../../styles/Ebeveyn/EbeveynMesajlar/EbeveynMesajlarRed.css"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"
import iptal from "./../../../assets/BakiciMesajlarIptal.svg"
const EbeveynMesajlarRed = ({selectedNumber,rejectedMission} ) => {

  const clickedp = () =>{
    selectedNumber(7);
  }
  return (
    <div className='EbeveynMesajlarRed'>
    <div className='EbeveynMesajlarGelenKutusu'>
    <p className='EbeveynMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    <h3 className='EbeveynMesajlarOnaylanan-Title'>REDDEDİLEN GÖREVLER</h3>
    {
      rejectedMission.map((selectedUser) =>{
        return (
          <>
          <div className='EbeveynMesajlarOnaylanan-Item'>
              <div >
                <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left'>
                <img src={selectedUser.image} alt="" />
                <div>
                <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Name'>{selectedUser.name}</p>
                <div  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location'>
                <img src={location} alt="" />
                <p  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedUser.location}</p>
                </div>
                </div>
                </div>
                <div className='EbeveynMesajlarIptal-Right-TalepEdilen-Div-Top-Left'>
                  <p className='EbeveynMesajlarIptal-Right-TalepEdilen-Div-Top-Left-Onaylama'>REDDEDİLDİ</p>
                  <img src={iptal} alt="" />
                </div>
                <div>
                <p className='EbeveynMesajlarRed-Right-TalepEdilen-Div-Top-Left-Onaylama'>/{selectedUser.reason}/</p>
              </div>
              </div>
              <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
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

export default EbeveynMesajlarRed