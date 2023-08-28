import React from 'react'
import "./../../../styles/BakiciMesajlar/BakiciMesajlarOnayBekleyen.css"
import kullanıcı2 from "./../../../assets/BakiciMesajlarPhoto1.svg"
import kullanıcı3 from "./../../../assets/BakiciMesajlarPhoto2.svg"
import kullanıcı1 from "./../../../assets/BakiciMesajlarPhoto3.svg"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation.svg"

import { useState } from 'react'

const data = [{
  id: 1,
  name:"Sude Can",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, Tuğba hanım. 1 haftalığına çocuk bakıcısı arıyorum. Sayfanızda bu günleriniz müsait olarak gözüküyor. Sizinle detaylı olarak görüşmek istiyorum.",
},
{
  id: 2,
  name:"David John",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, David bey. 1 haftalığına çocuk bakıcısı arıyorum. Sayfanızda bu günleriniz müsait olarak gözüküyor. Sizinle detaylı olarak görüşmek istiyorum.",
},
{
  id: 3,
  name:"Ahmet Kizilay",
  image:kullanıcı3,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, Ahmet bey. 1 haftalığına çocuk bakıcısı arıyorum. Sayfanızda bu günleriniz müsait olarak gözüküyor. Sizinle detaylı olarak görüşmek istiyorum.",
}
]

const BakiciMesajlarOnayBekleyen = ({selectedNumber,acceptedMission,setAcceptedMission,rejectedMission,setRejectedMission}) => {

  const [first, setfirst] = useState(data)
  const [selectedUser, setselectedUser] = useState(data[0]);
  const [selectedComp, setselectedComp] = useState(0);
  const [reason,setReason]=useState();

 const handlegender=(e)=>{
  setReason(e.target.value)
  }

  const acceptedClicked = (e) =>{
    first.map((dat,i) =>{
      if(dat.id==selectedUser.id){
        setAcceptedMission([...acceptedMission,dat]);
        first.splice(i, 1);
        console.log([...acceptedMission,dat]);
      }
    })
    setselectedUser(first[0]);
    setselectedComp(0);
    setfirst(first);
    e.preventDefault();
   console.log(e);
  }


  const reddetClicked = () =>{
    first.map((dat,i) =>{
      if(dat.id==selectedUser.id){
        setRejectedMission([...rejectedMission,dat]);
        data.splice(i, 1);
      }
    })
    setselectedComp(0);
    setselectedUser(data[0]);
    setfirst(data);
  }


  const changeUse = (data) =>{
    setselectedComp(0);
    setselectedUser(data);
  }
  const clickedp = () =>{
    selectedNumber(7);
  }




  return (
    <div className='BakiciOnayBekleyen'>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    </div>

    <div className='BakiciMesajlarOnayBekleyen'>
      <div className='BakiciMesajlarOnayBekleyen-Left-Div'>
          <h3 className='BakiciMesajlarOnayBekleyen-Left-Div-h3'>Onay bekleyenler</h3>
        
          {
            first.map((dat) =>{
              return (
                <>
                <hr />
                <div className='BakiciMesajlarOnayBekleyen-Left-Div-Data' onClick={() => changeUse(dat)}>
                  <img src={dat.image} alt="" />
                  <p className='BakiciMesajlarOnayBekleyen-Left-Div-Name'>{dat.name}</p>
                
                </div>
                </>
              
              )
            })
          }


      </div>
          
      <div className='BakiciMesajlarOnayBekleyen-Right-Div'>
     
      {(() => {
        if (selectedComp==0) {
          return (
            <>
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top'>
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
              <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right'> 
                <h2  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-h2'>Talep edilen süreç</h2>
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Date'>{selectedUser.date}</p>
                <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} alt="" />
                <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
                </div>
              </div>
            </div>
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Middle'>
            <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Middle-Message'>{selectedUser.message}</p>
            </div>
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom'>
            <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Reject' onClick={() => setselectedComp(2)}>REDDET</p>
            <button type="submit" className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Button" onClick={() => setselectedComp(1)}>
                         ONAYLA
                  </button>
            </div>
            </>

          )
         
        } else if (selectedComp==1) {
          return (
            <>
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Onaylama'>
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
                <div>
                  <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Left-Onaylama'>Onayladınız</p>
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
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Middle-Onaylama'>
            <p className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Middle-Message'>{selectedUser.message}</p>
            </div>
            <div >
            <form  className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Onaylama'>
            <textarea className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-TextArea' name="w3review" rows="5" cols="50" placeholder="Mesajınız" minlength="20" required></textarea>
           <button type="submit" className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Button-Gonder" onSubmit={(e) => acceptedClicked(e) }>
                         GÖNDER
                  </button>
            </form>
            
            </div>
            </>
          )
        } else if (selectedComp==2){
          return (
            <>
            <div className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Red">
              <div className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Reddetme">
                  <h3 className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Reddetme-h3">RED ETMEK İSTEDİĞİNİZE EMİN MİSİNİZ?</h3>
              </div>
            </div>
            <div className='BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Top-Onaylama'>
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
            <div className='BakiciMesajlarOnayBekleyen-Reddet-Third'>
              <h3 className='BakiciMesajlarOnayBekleyen-Reddet-Third-h3'>REDDETME GEREKÇENİZ</h3>
              <div  className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
              
              <input type="radio" name="gender" value="male" onChange={handlegender} className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
              <label className="BakiciMesajlarOnayBekleyen-Reddet-Third-Label">Çalışıyorum</label> 
              </div>
              <div  className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
              
          <input type="radio" name="gender" value="Female" onChange={handlegender} className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
          <label className="BakiciMesajlarOnayBekleyen-Reddet-Third-Label">Zamanlama uygun değil</label> 
              </div>

              <div  className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
              
          <input type="radio" name="gender" value="Female" onChange={handlegender}  className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
          <label className="BakiciMesajlarOnayBekleyen-Reddet-Third-Label">Başka sebepler</label> 
              </div>
            </div>
            <div className='BakiciMesajlarOnayBekleyen-Reddet-Fourth'>
              <div  className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButtons" >
              
              <input type="radio" name="gender" value="male" onChange={handlegender} className="BakiciMesajlarOnayBekleyen-Reddet-Third-RadioButton" />
              <label className="BakiciMesajlarOnayBekleyen-Reddet-Third-Label">Gerekçe Sunmadan Reddet</label> 
              </div>
              <div className="text-center">
              <button type="submit" className="BakiciMesajlarOnayBekleyen-Right-TalepEdilen-Div-Bottom-Button-Gonder" onClick={() => reddetClicked()}>
              GÖNDER
       </button>
              </div>
             
            </div>
            </>
            
          )
        }
      })()}

      </div>
    </div>
    </div>
  )
}

export default BakiciMesajlarOnayBekleyen