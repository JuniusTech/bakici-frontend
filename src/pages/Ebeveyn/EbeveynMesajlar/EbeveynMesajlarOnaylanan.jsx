import React from 'react'
import "./../../../styles/Ebeveyn/EbeveynMesajlar/EbeveynMesajlarOnaylanan.css"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"
import tik from "./../../../assets/BakiciMesajlarOnaylandi.svg"
import { useState } from 'react'
const EbeveynMesajlarOnaylanan = ({selectedNumber,acceptedMission,setAcceptedMission} ) => {

  const [acceptedMissionData, setacceptedMissionData] = useState(acceptedMission)
  const clickedp = () =>{
    selectedNumber(7);
  }
  const [reason,setReason]=useState();
  const [selectedData, setSelectedData] = useState(acceptedMissionData[0]);
  const handlegender=(e)=>{
   setReason(e.target.value)
   }
   const reddetClicked = (e) =>{
    acceptedMissionData.map((dat,i) => {
      if(dat.id == selectedData.id){
         acceptedMissionData.splice(i,1);
        setSelectedData(dat);
      }
    })
     setacceptedMissionData(acceptedMissionData);
    e.target.closest(".EbeveynMesajlarOnaylanan-Item").remove();
  }
  const removeItem = (selectedUser,e) =>{
    acceptedMissionData.map((dat,i) => {
      if(dat.id == selectedUser.id){
        // acceptedMissionData.splice(i,1);
        setSelectedData(dat);
      }
    })
    console.log(acceptedMissionData);
    
    // setacceptedMissionData(acceptedMissionData);
    // e.target.closest(".EbeveynMesajlarOnaylanan-Item").remove();
  }


  return (
    <div className='EbeveynMesajlarOnaylanan'>
    <div className='EbeveynMesajlarGelenKutusu'>
    <p className='EbeveynMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    <h3 className='EbeveynMesajlarOnaylanan-Title'>ONAYLANAN GÖREVLER</h3>
    {
      acceptedMissionData.map((selectedUser) =>{
        return (
          <>
          <div className='EbeveynMesajlarOnaylanan-Item '>
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
              
                <div className='EbeveynMesajlarOnaylandı-Right-TalepEdilen-Div-Top-Left'>
                  <p className='EbeveynMesajlarOnaylandı-Right-TalepEdilen-Div-Top-Left-Onaylama'>Onayladı</p>
                  <img src={tik} alt="" />
                  </div>
              </div>
              <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
                </div>
                {
                  // onClick={(e) => removeItem(selectedUser,e)}
                }
                <p className='EbeveynMesajlarOnaylanan-Iptal' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => removeItem(selectedUser,e)}>İptal Et</p>
              </div>
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
             
            </div>
              <div className="EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Red-Modal">
              <div className="EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Red">
            <div className="EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Reddetme">
                <h3 className="EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Reddetme-h3">RED ETMEK İSTEDİĞİNİZE EMİN MİSİNİZ?</h3>
            </div>
          </div>
          <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Onaylama'>
            <div >
              <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left'>
              <img src={selectedData.image} alt="" />
              <div>
              <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Name'>{selectedData.name}</p>
              <div  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location'>
              <img src={location} alt="" />
              <p  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedData.location}</p>
              </div>
              </div>
              </div>
            </div>
            <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
              <h2  className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
              <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedData.date}</p>
              <div className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
              <img src={time} alt="" />
              <p className='EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedData.time_duration}</p>
              </div>
            </div>
          </div>  
          <div className='EbeveynMesajlarOnayBekleyen-Reddet-Third'>
            <h3 className='EbeveynMesajlarOnayBekleyen-Reddet-Third-h3'>REDDETME GEREKÇENİZ</h3>
            <div  className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
            
            <input type="radio" name="gender" value="male" onChange={handlegender} className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
            <label className="EbeveynMesajlarOnayBekleyen-Reddet-Third-Label">Çalışıyorum</label> 
            </div>
            <div  className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
            
        <input type="radio" name="gender" value="Female" onChange={handlegender} className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
        <label className="EbeveynMesajlarOnayBekleyen-Reddet-Third-Label">Zamanlama uygun değil</label> 
            </div>

            <div  className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
            
        <input type="radio" name="gender" value="Female" onChange={handlegender}  className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
        <label className="EbeveynMesajlarOnayBekleyen-Reddet-Third-Label">Başka sebepler</label> 
            </div>
          </div>
          <div className='EbeveynMesajlarOnayBekleyen-Reddet-Fourth'>
            <div  className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
            
            <input type="radio" name="gender" value="male" onChange={handlegender} className="EbeveynMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
            <label className="EbeveynMesajlarOnayBekleyen-Reddet-Third-Label">Gerekçe Sunmadan Reddet</label> 
            </div>
            <div className="text-center">
            <button type="submit" data-bs-dismiss="modal" className="EbeveynMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Button-Gonder" onClick={(e) => reddetClicked(e)}>
            GÖNDER
     </button>
            </div>
           
          </div>
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

export default EbeveynMesajlarOnaylanan