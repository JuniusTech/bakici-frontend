import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Profile from "../assets/Profile.svg";
import ProfilePlus from "../assets/ProfilePlus.svg";
import MagnifyingGlassNew from "../assets/MagnifyingGlassNew.svg";
import ProfilePlusNew from "../assets/ProfilePlusNew.svg";
import "../styles/NavbarHome.css";
import "../styles/NavbarHome.css";

import CareZone from "../assets/CareZone.svg";

const CareZoneNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true)


  const navstyle = {
    color: "#263238",
    textDecoration: "none",
  };
  const navstyle2 = {
    color: "#263238",
    textDecoration: "underline",
  };

 
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled <= 0){
    setVisible(true)
    }
    else if (scrolled > 0){
    setVisible(false)
    }
    console.log(scrolled)
    console.log(visible);
  };

  window.addEventListener('scroll', toggleVisible);




  return (
    <>
    {visible ? (
    <Navbar expand="md" className="Navbar  " expanded={expanded}>
      <div className="container-fluid ">
        <Navbar.Brand style={{marginLeft:'80px'}}>
          <NavLink
            className=" active"
            style={navstyle}
            onClick={() => setExpanded(expanded & false)}
            to="/"
          >
            <img className="Navbar-Logo" src={CareZone} alt="CareZone" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="justify-content-end flex-grow-1   ">
            <NavLink
              className="me-3 active"
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/bakiciara"
            >
              <Button  className=" bg-white Navbar-Button  ">
                Bakıcı Ara <img className="Navbar-Bakici-MagnifyingGlass" src={MagnifyingGlass} alt="MagnifyingGlass" />
              </Button>
            </NavLink>
            <NavLink
              className="me-3 active"
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/isebasvur"
            >
              <Button className=" bg-white Navbar-Button ">
                İşe Başvur <img className="Navbar-ise-ProfilePlus" src={ProfilePlus} alt="Profile" />
              </Button>
            </NavLink>
           
            <NavLink
              className="me-3 active Navbar-Link"
              style={navstyle2}
              onClick={() => setExpanded(expanded & false)}
              to="/anauyelik"
            >
              Üye Olun
            </NavLink>
            <NavLink
              className="me-3  active"
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/login"
            >
              <Button  className=" bg-white  Navbar-Button ">
                Oturum Aç <img className="Navbar-Login-Profile" src={Profile} alt="Profile" />
              </Button>
            </NavLink>
            <NavLink
              className=" active Navbar-Link"
              style={ { marginRight: "108px",color: "#263238",
              textDecoration: "underline", }} 
              onClick={() => setExpanded(expanded & false)}
              to="/yardim"
            >
              Yardım
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    ) : (
      <Navbar expand="md" className="NavbarNew " expanded={expanded}>
      <div className="container-fluid  ">
        <Navbar.Brand style={{marginLeft:'80px'}}>
          <NavLink
            className=" active"
            style={navstyle}
            onClick={() => setExpanded(expanded & false)}
            to="/"
          >
            <img className="Navbar-Logo" src={CareZone} alt="CareZone" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="justify-content-end flex-grow-1   ">
            <NavLink
              className="me-3 active"
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/bakiciara"
            >
              <Button   className="  Navbar-ButtonNew  ">
                Bakıcı Ara <img className="Navbar-Bakici-MagnifyingGlass" src={MagnifyingGlassNew} alt="MagnifyingGlass" />
              </Button>
            </NavLink>
            <NavLink
              className="me-3 active"
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/isebasvur"
            >
              <Button  className=" Navbar-ButtonNew ">
                İşe Başvur <img className="Navbar-ise-ProfilePlus" src={ProfilePlusNew} alt="Profile" />
              </Button>
            </NavLink>
            
            <NavLink
              className="me-3 active Navbar-Link"
              style={navstyle2}
              onClick={() => setExpanded(expanded & false)}
              to="/register"
            >
              Üye Olun
            </NavLink>
            <NavLink
              className="me-3  active  "
              style={navstyle}
              onClick={() => setExpanded(expanded & false)}
              to="/login"
            >
              <Button  className=" bg-white  Navbar-LinkNew  ">
                Oturum Aç <img className="Navbar-Login-Profile" src={Profile} alt="Profile" />
              </Button>
              
            </NavLink>
            <NavLink
              className=" active Navbar-Link"
              style={ { marginRight: "108px",color: "#263238",
              textDecoration: "underline", }} 
              onClick={() => setExpanded(expanded & false)}
              to="/yardim"
            >
              Yardım
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    )}

    </>
  );
};

export default CareZoneNavbar;
