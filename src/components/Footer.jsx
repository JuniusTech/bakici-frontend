import React from "react";
import "../styles/Footer.css";
import logoFooter from "../assets/logoFooter.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import klarna from "../assets/klarna.svg";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Fİrst">
        <Container className="footer-container">
          <Row className="footer-container-row ">
            <Col xs={12} md={12} xxl= {2} className="footer-column1 mb-5">
              <div className="Footer-Logo Footer-Fİrst-First">
                <img
                  src={logoFooter}
                  alt="Care-Zone"
                  className="Footer-Fİrst-First-Logo"
                />
              </div>
            </Col>
            <Col xs={12} md={6} xxl= {3} >
              <div className="Footer-Fİrst-Second text-center text-md-start text-lg-center text-xxl-start">
                <h3 className="Footer-Fİrst-Second-Title">Populer Aramalar</h3>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>CareZone nasıl çalışıyor</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>En çok sorulan sorular</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Çocuk bakımı</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Ödeme yapma yöntemleri</p>
                </NavLink>
              </div>
            </Col>
            <Col xs={12} md={6} xxl={2}>
              <div className="Footer-Fİrst-Third text-center text-md-start text-lg-center text-xxl-start">
                <h3 className="Footer-Fİrst-Third-Title">Hakkımızda</h3>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Hakkımızda</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>İletişim</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Çalışan gizlilik hakları</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Yardım</p>
                </NavLink>
              </div>
            </Col>
            <Col xs={12} md={6} xxl={2} >
              <div className="Footer-Fİrst-Fourth text-center text-md-start text-lg-center text-xxl-start">
                <h3 className="Footer-Fİrst-Fourth-Title">İletişim</h3>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Brazil Green Way</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>(+90) 111 565 999</p>
                </NavLink>
                <NavLink to="#" className="Footer-Fİrst-Second-Link">
                  <p>Carezone@carezone.com.tr</p>
                </NavLink>
              </div>
            </Col>
            <Col xs={12} md={6} xxl= {3} className="footer-column5 mt-md-3">
              <div className="Footer-Fİrst-Fifth d-flex flex-row d-lg-flex flex-lg-row">
                <div className="Footer-Fİrst-Fifth-First mx-2">
                  <img
                    src={visa}
                    alt=""
                    className="Footer-Fİrst-Fifth-img1 m-2"
                  />
                </div>
                <div className="Footer-Fİrst-Fifth-Second mx-2">
                  <img
                    src={klarna}
                    alt=""
                    className="Footer-Fİrst-Fifth-img2 m-2"
                  />
                  <p className="klarna">Klarna</p>
                </div>
                <div className="Footer-Fİrst-Fifth-Third mx-2">
                  <img
                    src={mastercard}
                    alt=""
                    className="Footer-Fİrst-Fifth-img3 m-2"
                  />
                  <p className="mastercard">Mastercard</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Footer-Second">
        <div className="Footer-Last">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <p className="Footer-Second-Text">
                  © {new Date().getFullYear()} CareZone, Inc. Tüm Hakları
                  Saklıdır. Şartlar, Gizlilik ve Erişilebilirlik
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import "../styles/Footer.css";
// import logoFooter from "../assets/logoFooter.svg";
// import visa from "../assets/visa.svg";
// import mastercard from "../assets/mastercard.svg";
// import klarna from "../assets/klarna.svg";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="Footer">
//       <div className="Footer-Fİrst">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 col-md-3">
//               <div className="Footer-Logo Footer-Fİrst-First">
//                 <img
//                   src={logoFooter}
//                   alt="Care-Zone"
//                   className="Footer-Fİrst-First-Logo"
//                 />
//               </div>
//             </div>
//             <div className="col-12 col-md-2">
//               <div className="Footer-Fİrst-Second">
//                 <h3 className="Footer-Fİrst-Second-Title">Populer Aramalar</h3>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>CareZone nasıl çalışıyor</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>En çok sorulan sorular</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Çocuk bakımı</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Ödeme yapma yöntemleri</p>
//                 </NavLink>
//               </div>
//             </div>
//             <div className="col-12 col-md-2">
//               <div className="Footer-Fİrst-Third">
//                 <h3 className="Footer-Fİrst-Third-Title">Hakkımızda</h3>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Hakkımızda</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>İletişim</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Çalışan gizlilik hakları</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Yardım</p>
//                 </NavLink>
//               </div>
//             </div>
//             <div className="col-12 col-md-2">
//               <div className="Footer-Fİrst-Fourth">
//                 <h3 className="Footer-Fİrst-Fourth-Title">İletişim</h3>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Brazil Green Way</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>(+90) 111 565 999</p>
//                 </NavLink>
//                 <NavLink to="#" className="Footer-Fİrst-Second-Link">
//                   <p>Carezone@carezone.com.tr</p>
//                 </NavLink>
//               </div>
//             </div>
//             <div className="col-12 col-md-3">
//               <div className="Footer-Fİrst-Fifth">
//                 <div className="Footer-Fİrst-Fifth-First">
//                   <img src={visa} alt="" className="Footer-Fİrst-Fifth-img1" />
//                 </div>
//                 <div className="Footer-Fİrst-Fifth-Second">
//                   <img
//                     src={klarna}
//                     alt=""
//                     className="Footer-Fİrst-Fifth-img2"
//                   />
//                   <p className="klarna">Klarna</p>
//                 </div>
//                 <div className="Footer-Fİrst-Fifth-Third">
//                   <img
//                     src={mastercard}
//                     alt=""
//                     className="Footer-Fİrst-Fifth-img3"
//                   />
//                   <p className="mastercard">Mastercard</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Footer-Second">
//       <div className="Footer-Last">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12 col-md-12">

//                 <p className="Footer-Second-Text">
//                   © {new Date().getFullYear()} CareZone, Inc. Tüm Hakları
//                   Saklıdır. Şartlar, Gizlilik ve Erişilebilirlik
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
