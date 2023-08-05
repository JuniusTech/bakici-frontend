import React, { useState } from "react";
import "../../styles/Bakici.css";
import BakiciHome from "./BakiciHome";
import NavbarBakici from '../../components/NavbarBakici';
import Footer from '../../components/Footer';

const secondNavLinks = [
  {
    id: 1,
    title: "ANASAYFA",
    Component: BakiciHome,
  },
  {
    id: 2,
    title: "MESAJLAR",
    Component: () => <div>Mesajlar</div>,
  },
  {
    id: 3,
    title: "TAKVIM",
    Component: () => <div>Takvim</div>,
  },
  {
    id: 4,
    title: "PROFIL",
    Component: () => <div>Profil</div>,
  },
  {
    id: 5,
    title: "YORUMLAR",
    Component: () => <div>Yorumlar</div>,
  },
];

const Bakici = () => {
  const [selectedNav, setSelectedNav] = useState(secondNavLinks[0]);

  return (
    <>
    <NavbarBakici/>
 
    <div className="bakici">
    
      <div className="bakici_links">
        {secondNavLinks.map((link) => (
          <span
            key={link.id}
            onClick={() => setSelectedNav(link)}
            className={`${
              selectedNav.id === link.id
                ? "bakici_link_text_active"
                : "bakici_link_text"
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

export default Bakici;
