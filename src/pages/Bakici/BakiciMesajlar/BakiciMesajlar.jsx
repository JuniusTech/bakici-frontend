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


  const changePage = () =>{
    if(selectedNumber == 1){
      return <BakiciMesajlarOnayBekleyen selectedNumber={setSelectedNumber} />
    } if(selectedNumber == 2){
      return <BakiciMesajlarOnaylanan/>
    } if(selectedNumber == 3){
      return  <BakiciMesajlarTamamlanan/>
    } if(selectedNumber == 4){
      return <BakiciMesajlarIptal/>
    } if(selectedNumber == 5){
      return  <BakiciMesajlarRed/>
    } if(selectedNumber == 6){
      return   <BakiciArsivlenenMesajlar/>
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