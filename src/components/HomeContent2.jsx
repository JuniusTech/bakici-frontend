import React from 'react';
import "../styles/HomeContent2.css";
import { Container, Row, Col } from 'react-bootstrap';
import HomeBackground2 from "../assets/Ellipse 9.svg";
import HomeBackground3 from "../assets/Ellipse 8.svg";
import group52 from "../assets/Group52.svg";
import group48 from "../assets/Group48.svg";
import group49 from "../assets/Group49.svg";
import group50 from "../assets/Group50.svg";
import group51 from "../assets/Group51.svg";
import kaydolİcon from "../assets/kaydol-icon.svg";
import testİcon from "../assets/test-icon.svg";
import kurdelaİcon from "../assets/kurdela-icon.svg";
import teamİcon from "../assets/team-icon.svg";

function HomeContent2() {
    return (
        <div className='HomeContent2-main-container'>
            <Container className="Description">
                <p className="Description-Title">CAREZONE NASIL ÇALIŞIYOR?</p>
                <hr className="Description-Hr1" />
                <p className="Description-Text">
                    Hayatımızın en değerli varlıklarından biri olan bebeklerimizin
                    sağlıklı ve mutlu bir şekilde büyümesi ebeveynler için çok önemlidir.
                    Ancak günümüzde, iş hayatının yoğunluğu ve diğer nedenlerden dolayı
                    ebeveynler bebekleriyle yeterince ilgilenemeyebilirler. İşte tam da bu
                    noktada biz sizin için devreye giriyoruz. Bebeklerin güvenliği,
                    sağlığı ve mutluluğu için gereken hizmetleri sağlayan bebek bakıcıları
                    ile ebeveynleri buluşturuyoruz.{" "}
                </p>
                <hr className="Description-Hr2" />
            </Container>
            <img className="HomeBackground2" src={HomeBackground2} alt="" />
            <Container className="Bakici">
                <p className="Bakici-Text">BAKICI MI ARIYORSUNUZ? </p>
                <Row className="Bakici-Box">
                    <Col className="Bakici-Box-Card">
                        <div className="Bakici-Box-Card">
                            <p className="Bakici-Box-Card-Number">1</p>
                            <img
                                className="Bakici-Box-Card-Icon"
                                src={group52}
                                alt="group52"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Istediginiz bakiciyi websitemizden secin
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Bakici-Box-Card">
                            <p className="Bakici-Box-Card-Number">2</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group48}
                                alt="group48"
                            />
                            <p className="Bakici-Box-Card-Text">Gorusme icin randevu alin</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Bakici-Box-Card">
                            <p className="Bakici-Box-Card-Number">3</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group49}
                                alt="group49"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Bakiciniz ile gerekli gorusmelerinizi yapin
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Bakici-Box-Card">
                            <p className="Bakici-Box-Card-Number">4</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group50}
                                alt="group50"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Anlasmanizi ekibimize bildirin
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Bakici-Box-Card">
                            <p className="Bakici-Box-Card-Number">5</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group51}
                                alt="group51"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Guvenli sekilde bakim servisimizin tadini cikarin.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <button className="Bakici-Button">BAKICI ARA</button>
                    </Col>

                </Row>
            </Container>
            <img className="HomeBackground3" src={HomeBackground3} alt="" />

            <Container className="BakiciOlma">
                <p className="BakiciOlma-Text">İŞ Mİ ARIYORSUNUZ? </p>
                <Row className="BakiciOlma-Box">
                    <Col className="BakiciOlma-Box-Card">
                        <div className="BakiciOlma-Box-Card">
                            <p className="BakiciOlma-Box-Card-Number">1</p>
                            <img
                                className="BakiciOlma-Box-Card-Icon"
                                src={kaydolİcon}
                                alt="Kaydolİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Sisteme Kaydinizi yapin
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="BakiciOlma-Box-Card">
                            <p className="BakiciOlma-Box-Card-Number">2</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={testİcon}
                                alt="Testİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Online bakici yeterlilik testini yapin
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="BakiciOlma-Box-Card">
                            <p className="BakiciOlma-Box-Card-Number">3</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={kurdelaİcon}
                                alt="Kurdelaİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Yeterlilik bilgilerinizi sistemimize girin
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="BakiciOlma-Box-Card">
                            <p className="BakiciOlma-Box-Card-Number">4</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={teamİcon}
                                alt="teamİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">Ekibe hosgeldiniz</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <button className="BakiciOlma-Button">İŞE BAŞVUR</button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomeContent2;


// import React from 'react'
// import "../styles/HomeContent2.css";
// import HomeBackground2 from "../assets/Ellipse 9.svg";
// import HomeBackground3 from "../assets/Ellipse 8.svg";
// import group52 from "../assets/Group52.svg";
// import group48 from "../assets/Group48.svg";
// import group49 from "../assets/Group49.svg";
// import group50 from "../assets/Group50.svg";
// import group51 from "../assets/Group51.svg";
// import kaydolİcon from "../assets/kaydol-icon.svg";
// import testİcon from "../assets/test-icon.svg";
// import kurdelaİcon from "../assets/kurdela-icon.svg";
// import teamİcon from "../assets/team-icon.svg";

// function HomeContent2() {
//     return (
//         <div>
//             <div className="Description">
//                 <p className="Description-Title">CAREZONE NASIL ÇALIŞIYOR?</p>
//                 <hr className="Description-Hr1" />
//                 <p className="Description-Text">
//                     Hayatımızın en değerli varlıklarından biri olan bebeklerimizin
//                     sağlıklı ve mutlu bir şekilde büyümesi ebeveynler için çok önemlidir.
//                     Ancak günümüzde, iş hayatının yoğunluğu ve diğer nedenlerden dolayı
//                     ebeveynler bebekleriyle yeterince ilgilenemeyebilirler. İşte tam da bu
//                     noktada biz sizin için devreye giriyoruz. Bebeklerin güvenliği,
//                     sağlığı ve mutluluğu için gereken hizmetleri sağlayan bebek bakıcıları
//                     ile ebeveynleri buluşturuyoruz.{" "}
//                 </p>
//                 <hr className="Description-Hr2" />
//             </div>
//             <img className="HomeBackground2" src={HomeBackground2} alt="" />
//             <div className="Bakici">
//                 <p className="Bakici-Text">BAKICI MI ARIYORSUNUZ? </p>
//                 <div className="Bakici-Box">
//                     <div className="Bakici-Box-Cards">
//                         <div className="Bakici-Box-Card">
//                             <p className="Bakici-Box-Card-Number">1</p>
//                             <img
//                                 className=" Bakici-Box-Card-Icon"
//                                 src={group52}
//                                 alt="group52"
//                             />
//                             <p className="Bakici-Box-Card-Text">
//                                 Istediginiz bakiciyi websitemizden secin
//                             </p>
//                         </div>
//                         <hr className="Bakici-Box-Card-Hr" />

//                         <div className="Bakici-Box-Card">
//                             <p className="Bakici-Box-Card-Number">2</p>
//                             <img
//                                 className=" Bakici-Box-Card-Icon"
//                                 src={group48}
//                                 alt="group48"
//                             />
//                             <p className="Bakici-Box-Card-Text">Gorusme icin randevu alin</p>
//                         </div>
//                         <hr className="Bakici-Box-Card-Hr" />

//                         <div className="Bakici-Box-Card">
//                             <p className="Bakici-Box-Card-Number">3</p>
//                             <img
//                                 className=" Bakici-Box-Card-Icon"
//                                 src={group49}
//                                 alt="group49"
//                             />
//                             <p className="Bakici-Box-Card-Text">
//                                 Bakiciniz ile gerekli gorusmelerinizi yapin
//                             </p>
//                         </div>
//                         <hr className="Bakici-Box-Card-Hr" />

//                         <div className="Bakici-Box-Card">
//                             <p className="Bakici-Box-Card-Number">4</p>
//                             <img
//                                 className=" Bakici-Box-Card-Icon"
//                                 src={group50}
//                                 alt="group50"
//                             />
//                             <p className="Bakici-Box-Card-Text">
//                                 Anlasmanizi ekibimize bildirin
//                             </p>
//                         </div>
//                         <hr className="Bakici-Box-Card-Hr" />

//                         <div className="Bakici-Box-Card">
//                             <p className="Bakici-Box-Card-Number">5</p>
//                             <img
//                                 className=" Bakici-Box-Card-Icon"
//                                 src={group51}
//                                 alt="group51"
//                             />
//                             <p className="Bakici-Box-Card-Text">
//                                 Guvenli sekilde bakim servisimizin tadini cikarin.
//                             </p>
//                         </div>
//                     </div>
//                     <button className="Bakici-Button">BAKICI ARA</button>
//                 </div>
//             </div>
//             <img className="HomeBackground3" src={HomeBackground3} alt="" />

//             <div className="BakiciOlma">
//                 <p className="BakiciOlma-Text">İŞ Mİ ARIYORSUNUZ? </p>
//                 <div className="BakiciOlma-Box">
//                     <div className="BakiciOlma-Box-Cards">
//                         <div className="BakiciOlma-Box-Card">
//                             <p className="BakiciOlma-Box-Card-Number">1</p>
//                             <img
//                                 className=" BakiciOlma-Box-Card-Icon"
//                                 src={kaydolİcon}
//                                 alt="Kaydolİcon"
//                             />
//                             <p className="BakiciOlma-Box-Card-Text">
//                                 Sisteme Kaydinizi yapin
//                             </p>
//                         </div>
//                         <hr className="BakiciOlma-Box-Card-Hr" />

//                         <div className="BakiciOlma-Box-Card">
//                             <p className="BakiciOlma-Box-Card-Number">2</p>
//                             <img
//                                 className=" BakiciOlma-Box-Card-Icon"
//                                 src={testİcon}
//                                 alt="Testİcon"
//                             />
//                             <p className="BakiciOlma-Box-Card-Text">
//                                 Online bakici yeterlilik testini yapin
//                             </p>
//                         </div>
//                         <hr className="BakiciOlma-Box-Card-Hr" />

//                         <div className="BakiciOlma-Box-Card">
//                             <p className="BakiciOlma-Box-Card-Number">3</p>
//                             <img
//                                 className=" BakiciOlma-Box-Card-Icon"
//                                 src={kurdelaİcon}
//                                 alt="Kurdelaİcon"
//                             />
//                             <p className="BakiciOlma-Box-Card-Text">
//                                 Yeterlilik bilgilerinizi sistemimize girin
//                             </p>
//                         </div>
//                         <hr className="BakiciOlma-Box-Card-Hr" />

//                         <div className="BakiciOlma-Box-Card">
//                             <p className="BakiciOlma-Box-Card-Number">4</p>
//                             <img
//                                 className=" BakiciOlma-Box-Card-Icon"
//                                 src={teamİcon}
//                                 alt="teamİcon"
//                             />
//                             <p className="BakiciOlma-Box-Card-Text">Ekibe hosgeldiniz</p>
//                         </div>
//                     </div>
//                     <button className="BakiciOlma-Button">İŞE BAŞVUR</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeContent2