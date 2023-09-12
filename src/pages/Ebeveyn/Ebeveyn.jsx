import React, { useState } from "react";
import "../../styles/Ebeveyn/Ebeveyn.css";
import NavbarBakici from '../../components/NavbarBakici';
import Footer from '../../components/Footer';
import EbeveynHome from "./EbeveynHome";
import EbeveynMesajlar from "./EbeveynMesajlar/EbeveynMesajlar";

const secondNavLinks = [
  {
    id: 1,
    title: "ANASAYFA",
    Component: () =>  <EbeveynHome/>,
  },
  {
    id: 2,
    title: "MESAJLAR",
    Component: () => <EbeveynMesajlar/>,
  },
  {
    id: 3,
    title: "PROFİL",
    Component: () => <div>Profil</div>,
  }
];

const Ebeveyn = () => {
  const [selectedNav, setSelectedNav] = useState(secondNavLinks[0]);

  
  
  return (
    <>
    <NavbarBakici/>
 
    <div className="ebeveyn">
    
      <div className="ebeveyn_links">
        {secondNavLinks.map((link) => (
          <span
            key={link.id}
            onClick={() => setSelectedNav(link)}
            className={`${
              selectedNav.id === link.id
                ? "ebeveyn_link_text_active"
                : "ebeveyn_link_text"
            }`}
          >
            {link.title}
          </span>
        ))}
      
      </div>
      {selectedNav.Component()}
     
    </div>
    <Footer/>
    </>
    
  );
};

export default Ebeveyn;
