import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Profile from "../assets/Profile.svg";
import ProfilePlus from "../assets/ProfilePlus.svg";
import "../styles/Navbar.css";
import * as ReactBootStrap from "react-bootstrap";

import CareZone from "../assets/CareZone.svg";

const CareZoneNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navstyle = {
    color: "#263238",
    textDecoration: "none",
  };
  const navstyle2 = {
    color: "#263238",
    textDecoration: "underline",
  };

  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className={`Navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          <NavLink className=" active" style={navstyle} to="/">
            <img className="Navbar-Logo" src={CareZone} alt="CareZone" />
          </NavLink>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggleIcon"
        />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="m-auto"></ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <NavLink className="me-3 active" style={navstyle} to="/bakiciara">
              <Button className="Navbar-Button">
                Bakıcı Ara{" "}
                <img
                  className="Navbar-Bakici-MagnifyingGlass"
                  src={MagnifyingGlass}
                  alt="MagnifyingGlass"
                />
              </Button>
            </NavLink>
            <NavLink
              className="me-3 active"
              style={navstyle}
              onClick={() => setExpanded(false)}
              to="/isebasvur"
            >
              <Button className="Navbar-Button">
                İşe Başvur{" "}
                <img
                  className="Navbar-ise-ProfilePlus"
                  src={ProfilePlus}
                  alt="Profile"
                />
              </Button>
            </NavLink>
            <NavLink
              className="me-3 active Navbar-Link-Uye-Yardım"
              style={navstyle2}
              onClick={() => setExpanded(false)}
              to="/anauyelik"
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
              onClick={() => setExpanded(false)}
              to="/yardim"
            >
              Yardım
            </NavLink>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default CareZoneNavbar;

/////////12.08.2023 ORJİNAL HALİ////////

// import Button from "react-bootstrap/Button";
// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
// import Profile from "../assets/Profile.svg";
// import ProfilePlus from "../assets/ProfilePlus.svg";
// import "../styles/Navbar.css";
// import * as ReactBootStrap from "react-bootstrap";

// import CareZone from "../assets/CareZone.svg";

// const CareZoneNavbar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navstyle = {
//     color: "#263238",
//     textDecoration: "none",
//   };
//   const navstyle2 = {
//     color: "#263238",
//     textDecoration: "underline",
//   };

//   return (
//     <div>
//       <ReactBootStrap.Navbar
//         collapseOnSelect
//         expand="md"
//         variant="dark"
//         className={`Navbar ${isScrolled ? "scrolled" : ""}`}
//       >
//         <ReactBootStrap.Navbar.Brand href="#home">
//           <NavLink className=" active" style={navstyle} to="/">
//             <img className="Navbar-Logo" src={CareZone} alt="CareZone" />
//           </NavLink>
//         </ReactBootStrap.Navbar.Brand>
//         <ReactBootStrap.Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           className="toggleIcon"
//         />
//         <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//           <ReactBootStrap.Nav className="m-auto"></ReactBootStrap.Nav>
//           <ReactBootStrap.Nav>
//             <NavLink className="me-3 active" style={navstyle} to="/bakiciara">
//               <Button className="Navbar-Button">
//                 Bakıcı Ara{" "}
//                 <img
//                   className="Navbar-Bakici-MagnifyingGlass"
//                   src={MagnifyingGlass}
//                   alt="MagnifyingGlass"
//                 />
//               </Button>
//             </NavLink>
//             <NavLink
//               className="me-3 active"
//               style={navstyle}
//               onClick={() => setExpanded(false)}
//               to="/isebasvur"
//             >
//               <Button className="Navbar-Button">
//                 İşe Başvur{" "}
//                 <img
//                   className="Navbar-ise-ProfilePlus"
//                   src={ProfilePlus}
//                   alt="Profile"
//                 />
//               </Button>
//             </NavLink>
//             <NavLink
//               className="me-3 active Navbar-Link"
//               style={navstyle2}
//               onClick={() => setExpanded(false)}
//               to="/anauyelik"
//             >
//               <Button className="Navbar-Button">
//                 Üye Olun
//                 <img
//                   className="Navbar-ise-ProfilePlus"
//                   src={ProfilePlus}
//                   alt="Profile"
//                 />
//               </Button>
//             </NavLink>
//             <NavLink className="me-3 active" style={navstyle} to="/login">
//               <Button className="Navbar-Button">
//                 Oturum Aç{" "}
//                 <img
//                   className="Navbar-Login-Profile"
//                   src={Profile}
//                   alt="Profile"
//                 />
//               </Button>
//             </NavLink>
//             <NavLink
//               className="me-3 active Navbar-Link"
//               style={
//                 {
//                   // marginRight: "1rem",
//                   // color: "#263238",
//                   // textDecoration: "underline",
//                 }
//               }
//               onClick={() => setExpanded(false)}
//               to="/yardim"
//             >
//               <Button className="Navbar-Button">
//                 Yardım
//                 <img
//                   className="Navbar-Login-Profile"
//                   src={Profile}
//                   alt="Profile"
//                 />
//               </Button>
//             </NavLink>
//           </ReactBootStrap.Nav>
//         </ReactBootStrap.Navbar.Collapse>
//       </ReactBootStrap.Navbar>
//     </div>
//   );
// };

// export default CareZoneNavbar;

///////////ORJİNAL BİTİŞ//////////////////
