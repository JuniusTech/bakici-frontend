import React, { useState } from 'react'
import "./../../../styles/Ebeveyn/EbeveynMesajlar/EbeveynMesajlarTamamlanan.css"
import kullanıcı2 from "./../../../assets/BakiciMesajlarPhoto1.svg"
import kullanıcı3 from "./../../../assets/BakiciMesajlarPhoto2.svg"
import kullanıcı1 from "./../../../assets/BakiciMesajlarPhoto3.svg"
import time from "./../../../assets/BakiciMesajlarTime.svg"
import location from "./../../../assets/BakiciMesajlarLocation2.svg"
import garbage from "./../../../assets/BakiciMesajlarCöpKutusu.svg"
import user from "./../../../assets/BakiciMesajlarKullanici.svg"
import date from "./../../../assets/BakiciMesajlarTakvim.svg"

const data = [{
  id: 1,
  name:"Sude Can",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "Sadece hafta içi gündüz",
  message:"Merhaba, Tugba hanim. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
},
{
  id: 2,
  name:"David John",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "Sadece hafta içi gündüz",
  message:"Merhaba, David Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
},
{
  id: 3,
  name:"Ahmet Kizilay",
  image:kullanıcı3,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "Sadece hafta içi gündüz",
  message:"Merhaba, Ahmet Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
}
]

const EbeveynMesajlarTamamlanan = ({selectedNumber} ) => {

  const [first, setfirst] = useState(data)
  const clickedp = () =>{
    selectedNumber(7);
  }

  const deleteHistory = () =>{
    setfirst([]);
  }


  return (
    <div className='EbeveynMesajlarTamamlanan'>
    <div className='EbeveynMesajlarGelenKutusu'>
    <p className='EbeveynMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    
    <div className='EbeveynMesajlarTamamlanan-Top'>
      <h3 className='EbeveynMesajlarTamamlanan-Top-Title'>HİZMET ALINAN BAKICI GEÇMİŞİ ({first.length})</h3>
      <div className='EbeveynMesajlarTamamlanan-Top-Right'>
        <img src={garbage} alt="" />
        <p className='EbeveynMesajlarTamamlanan-Top-Right-P' onClick={() => deleteHistory()}> Listeyi temizle</p>
      </div>
    </div>
    <hr  className='EbeveynMesajlarTamamlanan-HR'/>
    {
      first.map((selectedUser) =>{
        return (
          <div className='EbeveynMesajlarTamamlanan-Data'>
            <div className='EbeveynMesajlarTamamlanan-Data-Top'>
              <h3 className="EbeveynMesajlarTamamlanan-Data-Top-Title">Tamamlandı</h3>
              <div  className='EbeveynMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Left-Location'>
                <img src={location} className='EbeveynMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p  className='EbeveynMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedUser.location}</p>
                </div>
            </div>
            <hr />
            <div className='EbeveynMesajlarTamamlanan-Data-Bottom'>
              <div className='EbeveynMesajlarTamamlanan-Data-Bottom-Left'>
                <img src={user} className='EbeveynMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='EbeveynMesajlarTamamlanan-Data-Bottom-Left-UserName'>Bakıcı, {selectedUser.name}</p>
              </div>
              <div className='EbeveynMesajlarTamamlanan-Data-Bottom-Middle' >
                <img src={date} className='EbeveynMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='EbeveynMesajlarTamamlanan-Data-Bottom-Date'>{selectedUser.date}</p>
              </div>
              <div className='EbeveynMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} className='EbeveynMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='EbeveynMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
                </div>
            </div>
          </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default EbeveynMesajlarTamamlanan