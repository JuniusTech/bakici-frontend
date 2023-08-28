import React from 'react'
import "./../../../styles/BakiciMesajlar/BakiciMesajlarIptal.css"
import time from "./../../../assets/BakiciMesajlarTimeGray.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"
import iptal from "./../../../assets/BakiciMesajlarIptal.svg"

const BakiciMesajlarIptal = ({selectedNumber,canceledMission,setCanceledMission} ) => {

  const clickedp = () =>{
    selectedNumber(7);
  }
  return (
    <div className='BakiciMesajlarIptal'>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    <h3 className='BakiciMesajlarOnaylanan-Title'>İPTAL EDİLEN GÖREVLER</h3>
    {
      canceledMission.map((selectedUser) =>{
        return (
          <>
          <div className='BakiciMesajlarOnaylanan-Item'>
              <div >
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left'>
                <img src={selectedUser.image} alt="" />
                <div>
                <p className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left-Name'>{selectedUser.name}</p>
                <div  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location'>
                <img src={location} alt="" />
                <p  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedUser.location}</p>
                </div>
                </div>
                </div>
                <div className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left'>
                  <p className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left-Onaylama'>İPTAL EDİLDİ</p>
                  <img src={iptal} alt="" />
                </div>
                <div>
                  <li className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Left-Onaylama-List'>{selectedUser.whoRejected}</li>
                </div>
              </div>
              <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='BakiciMesajlarIptal-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
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

export default BakiciMesajlarIptal