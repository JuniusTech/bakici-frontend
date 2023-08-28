import React from 'react'
import "./../../../styles/BakiciMesajlar/BakiciMesajlarOnaylanan.css"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"
import tik from "./../../../assets/BakiciMesajlarOnaylandi.svg"
import { useState } from 'react'
const BakiciMesajlarOnaylanan = ({selectedNumber,acceptedMission,setAcceptedMission} ) => {

  const [acceptedMissionData, setacceptedMissionData] = useState(acceptedMission)
  const clickedp = () =>{
    selectedNumber(7);
  }

  const removeItem = (selectedUser,e) =>{
    acceptedMissionData.map((dat,i) => {
      if(dat.id == selectedUser.id){
        acceptedMissionData.splice(i,1);
      }
    })
    console.log(acceptedMissionData);
    e.target.closest(".BakiciMesajlarOnaylanan-Item").remove();
    setacceptedMissionData(acceptedMissionData);
  }

  return (
    <div className='BakiciMesajlarOnaylanan'>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    <h3 className='BakiciMesajlarOnaylanan-Title'>ONAYLANAN GÖREVLER</h3>
    {
      acceptedMissionData.map((selectedUser) =>{
        return (
          <>
          <div className='BakiciMesajlarOnaylanan-Item '>
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
              
                <div className='BakiciMesajlarOnaylandı-Right-TalepEdilen-Div-Top-Left'>
                  <p className='BakiciMesajlarOnaylandı-Right-TalepEdilen-Div-Top-Left-Onaylama'>Onaylandı</p>
                  <img src={tik} alt="" />
                  </div>
              </div>
              <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
                </div>
                <p className='BakiciMesajlarOnaylanan-Iptal' onClick={(e) => removeItem(selectedUser,e)}>İptal Et</p>
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

export default BakiciMesajlarOnaylanan