import React from 'react'

const BakiciMesajlarOnayBekleyen = ({selectedNumber}) => {

  const data = [{
    name:"Sude Can",
    image:"./",
    location:"Ankara, Demetevler",
    date:"20.08.2023 - 25.08.2023",
    time_duration: "5 gun sadece gunduz",
    message:"Merhaba, Tugba hanim. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  },
  {
    name:"David John",
    image:"./",
    location:"Ankara, Demetevler",
    date:"20.08.2023 - 25.08.2023",
    time_duration: "5 gun sadece gunduz",
    message:"Merhaba, David Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  },
  {
    name:"Ahmet Kizilay",
    image:"./",
    location:"Ankara, Demetevler",
    date:"20.08.2023 - 25.08.2023",
    time_duration: "5 gun sadece gunduz",
    message:"Merhaba, Ahmet Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  }
]

  return (
    <div className='BakiciOnayBekleyen'>
      <div className='BakiciOnayBekleyen-TopDiv'>
        <p className='BakiciOnayBekleyen-TopDiv-p' onClick={() => selectedNumber(7)}>Gelen kutusuna geri don</p>
      </div>
    </div>
  )
}

export default BakiciMesajlarOnayBekleyen