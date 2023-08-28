import React, { useState } from 'react'
import "./../../../styles/BakiciMesajlar/BakiciMesajlarTamamlanan.css"
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

const BakiciMesajlarTamamlanan = ({selectedNumber} ) => {

  const [first, setfirst] = useState(data)
  const clickedp = () =>{
    selectedNumber(7);
  }

  const deleteHistory = () =>{
    setfirst([]);
  }


  return (
    <div className='BakiciMesajlarTamamlanan'>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    
    <div className='BakiciMesajlarTamamlanan-Top'>
      <h3 className='BakiciMesajlarTamamlanan-Top-Title'>TAMAMLANAN GÖREVLER ({first.length})</h3>
      <div className='BakiciMesajlarTamamlanan-Top-Right'>
        <img src={garbage} alt="" />
        <p className='BakiciMesajlarTamamlanan-Top-Right-P' onClick={() => deleteHistory()}> Görev geçmişini sil</p>
      </div>
    </div>
    <hr  className='BakiciMesajlarTamamlanan-HR'/>
    {
      first.map((selectedUser) =>{
        return (
          <div className='BakiciMesajlarTamamlanan-Data'>
            <div className='BakiciMesajlarTamamlanan-Data-Top'>
              <h3 className="BakiciMesajlarTamamlanan-Data-Top-Title">Tamamlandı</h3>
              <div  className='BakiciMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Left-Location'>
                <img src={location} className='BakiciMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p  className='BakiciMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Left-Location-P'>{selectedUser.location}</p>
                </div>
            </div>
            <hr />
            <div className='BakiciMesajlarTamamlanan-Data-Bottom'>
              <div className='BakiciMesajlarTamamlanan-Data-Bottom-Left'>
                <img src={user} className='BakiciMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='BakiciMesajlarTamamlanan-Data-Bottom-Left-UserName'>Ebeveyn, {selectedUser.name}</p>
              </div>
              <div className='BakiciMesajlarTamamlanan-Data-Bottom-Middle' >
                <img src={date} className='BakiciMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='BakiciMesajlarTamamlanan-Data-Bottom-Date'>{selectedUser.date}</p>
              </div>
              <div className='BakiciMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Right-Time'>
                <img src={time} className='BakiciMesajlarTamamlanan-Data-Bottom-Left-IMG' alt="" />
                <p className='BakiciMesajlarTamamlanan-Right-TalepEdilen-Div-Top-Right-Time-P'>{selectedUser.time_duration}</p>
               
                
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

export default BakiciMesajlarTamamlanan