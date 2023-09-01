import { Link } from "react-router-dom";
import MusteriKayitLogo from "../assets/MusteriKayitLogo.svg";
import "../styles/NavbarBakici.css";
import bakiciara from "../assets/bakiciara.svg";
import isebasvur from "../assets/isebasvur.svg";
import Profile from "../assets/Profile.svg";
import bildirim from "../assets/bildirim.svg";
import mesaj from "../assets/mesaj.svg";
import bakiciavatar from "../assets/bakiciavatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AnaUyelik from "./AnaUyelik";

const NavbarBakici = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [openAnaUyelik, setOpenAnaUyelik] = useState(false);

  return (
    <>
      <AnaUyelik
        openAnaUyelik={openAnaUyelik}
        setOpenAnaUyelik={setOpenAnaUyelik}
      />

      <nav className="navbar-bakici row border-bottom border-2 m-0">
        <div className="col-2">
        <Link to="/">
        <img
            src={MusteriKayitLogo}
            alt="MusteriKayitLogo"
            className="MusteriKayit-Logo"
          />
        </Link>
          
        </div>
        <div className="col-10 d-flex gap-4 justify-content-end align-items-center pe-4">
          <Link className="navbar-bakici__button" to="/bakiciara">
            <p className="mb-0">Bakıcı Ara</p>
            <img className="" src={bakiciara} alt="bakiciara" />
          </Link>
          {isLogin && (
            <div className="d-flex align-items-center gap-5 ps-4">
              <Link className="navbar-bakici__bildirim position-relative">
                <img src={bildirim} alt="bildirim" />
                <p className="navbar-bakici__bildirim-sayi position-absolute">
                  2
                </p>
              </Link>

              <Link className="navbar-bakici__mesaj position-relative">
                <img src={mesaj} alt="mesaj" />
                <p className="navbar-bakici__mesaj-sayi position-absolute">1</p>
              </Link>

              <div className="d-flex align-items-center gap-3">
                <p className="m-0 border-start ps-4 py-2 border-dark text-nowrap">
                  Tuğba Aksoy
                </p>
                <img src={bakiciavatar} alt="bakiciavatar" />
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          )}

          {!isLogin && (
            <div>
              <div className="d-none d-lg-flex align-items-center gap-4">
                <Link className="navbar-bakici__button " to="/isebasvur">
                  <p className="mb-0">İşe Başvur</p>
                  <img className="" src={isebasvur} alt="isebasvur" />
                </Link>
                <Link
                  className="navbar-bakici__üyeol border-start border-1 border-dark ps-4 text-nowrap "
                  onClick={() => setOpenAnaUyelik(true)}
                >
                  Üye olun
                </Link>
                <Link
                  className="navbar-bakici__oturumac d-flex justify-content-center align-items-center gap-2 "
                  to="/login"
                >
                  <p className="mb-0 text-nowrap">Oturum Aç</p>
                  <img className="" src={Profile} alt="Profile" />
                </Link>

                <Link className="navbar-bakici__yardim " to={"/BakYardim"}>Yardım</Link>
              </div>
              <DropdownButton
                id="dropdown-basic-button"
                title={<FontAwesomeIcon icon={faBars} color="white" />}
                size="lg"
                variant=""
                className="d-lg-none"
                style={{
                  backgroundColor: "#E88585",
                  width: "fit-content",
                  borderRadius: "10px",
                }}
              >
                <Dropdown.Item href="#/action-1">İşe başvur</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Üye olun</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oturum aç</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Yardım</Dropdown.Item>
              </DropdownButton>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarBakici;
