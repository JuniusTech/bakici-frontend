import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import MagnifyingGlass from "../assets/MagnifyingGlass.svg"
import Profile from "../assets/Profile.svg"
import ProfilePlus from "../assets/ProfilePlus.svg"
import "../styles/Navbar.css"
import { Navbar, Nav, Button } from "react-bootstrap"

import CareZone from "../assets/CareZone.svg"
import AnaUyelik from "./AnaUyelik"

const CareZoneNavbar = () => {
  const [openAnaUyelik, setOpenAnaUyelik] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setOpenAnaUyelik(true)
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navstyle = {
    color: "#263238",
    textDecoration: "none",
  }
  const navstyle2 = {
    color: "#263238",
    textDecoration: "underline",
  }

  return (
    <div>
      <AnaUyelik
        openAnaUyelik={openAnaUyelik}
        setOpenAnaUyelik={setOpenAnaUyelik}
      />
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className={`Navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Navbar.Brand href="#home">
          <NavLink className=" active" style={navstyle} to="/">
            <img className="Navbar-Logo" src={CareZone} alt="CareZone" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggleIcon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <NavLink className="me-3 active" style={navstyle} to="/bakiciara">
              <Button
                className="Navbar-Button"
                onClick={() => navigate("bakiciara")}
              >
                Bakıcı Ara
                <img
                  className="Navbar-Bakici-MagnifyingGlass"
                  src={MagnifyingGlass}
                  alt="MagnifyingGlass"
                />
              </Button>
            </NavLink>
            <NavLink className="me-3 active" style={navstyle} to="/isebasvur">
              <Button
                className="Navbar-Button"
                onClick={() => navigate("isebasvur")}
              >
                İşe Başvur{" "}
                <img
                  className="Navbar-ise-ProfilePlus"
                  src={ProfilePlus}
                  alt="Profile"
                />
              </Button>
            </NavLink>
            <span className="Navbar-Separator"></span>
            <NavLink
              className="me-3 active Navbar-Link-Uye-Ol"
              style={navstyle2}
              onClick={handleClick}
            >
              Üye Olun
            </NavLink>
            <NavLink className="me-3 active" style={navstyle} to="/login">
              <Button className="Navbar-Button">
                Oturum Aç{" "}
                <img
                  className="Navbar-Login-Profile"
                  src={Profile}
                  alt="Profile"
                />
              </Button>
            </NavLink>
            <NavLink
              className="me-3 active Navbar-Link-Uye-Yardım"
              style={navstyle2}
              to="/yardim"
            >
              Yardım
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default CareZoneNavbar
