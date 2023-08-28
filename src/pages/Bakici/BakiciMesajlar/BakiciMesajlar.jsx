import React, { useState } from 'react'
import BakiciMesajlarIptal from './BakiciMesajlarIptal';
import BakiciMesajlarRed from './BakiciMesajlarRed';
import BakiciMesajlarTamamlanan from './BakiciMesajlarTamamlanan';
import BakiciMesajlarOnaylanan from './BakiciMesajlarOnaylanan';
import BakiciMesajlarOnayBekleyen from './BakiciMesajlarOnayBekleyen';
import BakiciMesajlarAnasayfa from './BakiciMesajlarAnasayfa';
import Select from 'react-select';
import kontakt_arrow from "../../../assets/Kontakt_Arrow.svg"
import "./../../../styles/BakiciMesajlar/BakiciMesajlarAnasayfa.css"
import BakiciArsivlenenMesajlar from './BakiciArsivlenenMesajlar';
import kullanıcı2 from "./../../../assets/BakiciMesajlarPhoto1.svg"
import kullanıcı3 from "./../../../assets/BakiciMesajlarPhoto2.svg"
import kullanıcı1 from "./../../../assets/BakiciMesajlarPhoto3.svg"

const acceptedDataDefault = [{
  id: 1,
  name:"Sude Can",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, Tugba hanim. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
},
{
  id: 2,
  name:"David John",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, David Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
}];

const cancelledDataDefault = [{
  id: 1,
  name:"Ahmet Kiraci",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, Tugba hanim. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  whoRejected:"Bakici Tarafindan"
},
{
  id: 2,
  name:"Sara Bell",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, David Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  whoRejected:"Ebeveyn Tarafindan"
}];

const rejectedDataDefault = [{
  id: 1,
  name:"Ahmet Kiracı",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, Tugba hanim. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  reason:"Çalışıyor"
},
{
  id: 2,
  name:"Sara Bell",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  message:"Merhaba, David Bey. 1 haftaligina cocuk bakicisi ariyorum. Sayfanizda bu gunleriniz musait olarak gozukuyor. Sizinle detayli olarak gorusmek istiyorum",
  reason:"Sebep sunmadı"
}];
const BakiciMesajlar = () => {

   

  const secondNavLinks = [
    {
      id: 1,
      title: "",
      Component: () =>  "",
    },
    {
      id: 2,
      title: "ONAY BEKLEYEN",
      Component: () => <BakiciMesajlarOnayBekleyen/>,
    },
    {
      id: 3,
      title: "ONAYLANAN",
      Component: () => <BakiciMesajlarOnaylanan/>,
    },
    {
      id: 4,
      title: "TAMAMLANAN GOREVLER",
      Component: () => <BakiciMesajlarTamamlanan/>,
    },
    {
      id: 5,
      title: "IPTAL EDILEN",
      Component:() =>  <BakiciMesajlarIptal/>,
    },
    {
      id: 5,
      title: "RED EDILEN",
      Component:() =>  <BakiciMesajlarRed/>,
    },
    {
      id: 6,
      title: "ARSIVLENEN MESAJLAR",
      Component:() =>  <BakiciArsivlenenMesajlar/>,
    },
  ];

  



  const [selectedNav, setSelectedNav] = useState(secondNavLinks);
  const [visibility,setVisibility]=useState(true);
  const [selectedNumber,setSelectedNumber] = useState(7);
  const [acceptedUser,setAcceptedUser]=useState();

  const [acceptedMission,setAcceptedMission] = useState(acceptedDataDefault);
  const [completedMission, setCompletedMission] = useState([]);
  const [canceledMission,setCanceledMission] = useState(cancelledDataDefault);
  const [rejectedMission, setRejectedMission] = useState(rejectedDataDefault);




  const changePage = () =>{
    if(selectedNumber == 1){
      return <BakiciMesajlarOnayBekleyen selectedNumber={setSelectedNumber} acceptedMission={acceptedMission} setAcceptedMission={setAcceptedMission} rejectedMission={rejectedMission} setRejectedMission={setRejectedMission}/>
    } if(selectedNumber == 2){
      return <BakiciMesajlarOnaylanan selectedNumber={setSelectedNumber} acceptedMission={acceptedMission} setAcceptedMission={setAcceptedMission}  canceledMission={canceledMission} setCanceledMission={setCanceledMission}  />
    } if(selectedNumber == 3){
      return  <BakiciMesajlarTamamlanan selectedNumber={setSelectedNumber} />
    } if(selectedNumber == 4){
      return <BakiciMesajlarIptal selectedNumber={setSelectedNumber} canceledMission={canceledMission} setCanceledMission={setCanceledMission}/>
    } if(selectedNumber == 5){
      return  <BakiciMesajlarRed selectedNumber={setSelectedNumber} rejectedMission={rejectedMission} setRejectedMission={setRejectedMission}/>
    } if(selectedNumber == 6){
      return   <BakiciArsivlenenMesajlar selectedNumber={setSelectedNumber} />
    } if(selectedNumber == 7){
      return   <BakiciMesajlarAnasayfa  selectedNav={selectedNav} setSelectedNav={setSelectedNav} selectedNumber={setSelectedNumber} visibility={setVisibility}/>
    }
  }
  return (
    <div>
    {
      // visibility &&  <BakiciMesajlarAnasayfa selectedNav={selectedNav} setSelectedNav={setSelectedNav} selectedNumber={setSelectedNumber} visibility={setVisibility}/>
    }
  
    {
      changePage()
      // visibility || selectedNav.Component()
      
    }
    </div>
  )
}

export default BakiciMesajlar