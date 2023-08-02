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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavbarBakici = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <nav className="navbar-bakici row border-bottom border-2 m-0">
      <div className="col-2">
        <img
          src={MusteriKayitLogo}
          alt="MusteriKayitLogo"
          className="MusteriKayit-Logo"
        />
      </div>
      <div className="col-10 d-flex gap-4 justify-content-end align-items-center pe-5">
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
          <div className="d-flex align-items-center gap-4">
            <Link className="navbar-bakici__button " to="/isebasvur">
              <p className="mb-0">İşe Başvur</p>
              <img className="" src={isebasvur} alt="isebasvur" />
            </Link>
            <Link
              className="navbar-bakici__üyeol border-start border-1 border-dark ps-4 text-nowrap "
              to="/register"
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

            <Link className="navbar-bakici__yardim ">Yardım</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarBakici;
