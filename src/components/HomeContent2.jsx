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
import { useNavigate } from 'react-router-dom';

function HomeContent2() {

const navigate = useNavigate();


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
                    <Col className="Bakici-Box-Card position-relative">
                        <div xs={12} className="Bakici-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="Bakici-Box-Card-Number">1</p>
                            <img
                                className="Bakici-Box-Card-Icon"
                                src={group52}
                                alt="group52"
                            />
                            <p className="Bakici-Box-Card-Text">
                                İstediğiniz bakıcıyı websitemizden seçin.           
                            </p>
                            <hr className="Bakici-Box-Card-Hr position-absolute" /> 
                        </div>
                        
                    </Col>                  
                    <Col className="Bakici-Box-Card position-relative">
                        <div xs={12} className="Bakici-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="Bakici-Box-Card-Number">2</p>
                            <img
                                className="Bakici-Box-Card-Icon"
                                src={group48}
                                alt="group48"
                            />
                            <p className="Bakici-Box-Card-Text">Görüşme için randevu alın.</p>
                            <hr className="Bakici-Box-Card-Hr position-absolute" /> 
                        </div>
                    </Col>
                    <Col className="Bakici-Box-Card position-relative">
                        <div xs= {12} className="Bakici-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="Bakici-Box-Card-Number">3</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group49}
                                alt="group49"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Bakıcınız ile gerekli görüşmelerinizi yapın.
                            </p>
                            <hr className="Bakici-Box-Card-Hr position-absolute" /> 
                        </div>
                    </Col>
                    <Col className="Bakici-Box-Card position-relative">
                    <div xs= {12} className="Bakici-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="Bakici-Box-Card-Number">4</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group50}
                                alt="group50"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Anlaşmanızı ekibimize bildirin.
                            </p>
                            <hr className="Bakici-Box-Card-Hr position-absolute" /> 
                        </div>
                    </Col>
                    <Col className="Bakici-Box-Card position-relative">
                    <div xs= {12} className="Bakici-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="Bakici-Box-Card-Number">5</p>
                            <img
                                className=" Bakici-Box-Card-Icon"
                                src={group51}
                                alt="group51"
                            />
                            <p className="Bakici-Box-Card-Text">
                                Güvenli şekilde bakım servisimizin tadını çıkarın.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='d-flex justify-content-center align-self-center'>
                        <button onClick={()=>navigate("bakiciara")} className="Bakici-Button">BAKICI ARA</button>
                    </Col>
                </Row>
            </Container>
            <img className="HomeBackground3" src={HomeBackground3} alt="" />
            <Container className="BakiciOlma">
                <p className="BakiciOlma-Text">İŞ Mİ ARIYORSUNUZ? </p>
                <Row className="BakiciOlma-Box">
                    <Col className="BakiciOlma-Box-Card position-relative">
                        <div xs={12} className="BakiciOlma-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="BakiciOlma-Box-Card-Number">1</p>
                            <img
                                className="BakiciOlma-Box-Card-Icon"
                                src={kaydolİcon}
                                alt="Kaydolİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Sisteme kaydınızı yapın
                            </p>
                            <hr className="BakiciOlma-Box-Card-Hr position-absolute" />
                        </div>
                    </Col>
                    <Col className="BakiciOlma-Box-Card position-relative">
                    <div xs={12} className="BakiciOlma-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="BakiciOlma-Box-Card-Number">2</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={testİcon}
                                alt="Testİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Online bakıcı yeterlilik testini yapın
                            </p>
                            <hr className="BakiciOlma-Box-Card-Hr position-absolute" />
                        </div>
                    </Col>
                    <Col className="BakiciOlma-Box-Card position-relative">
                    <div xs={12} className="BakiciOlma-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="BakiciOlma-Box-Card-Number">3</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={kurdelaİcon}
                                alt="Kurdelaİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">
                                Yeterlilik bilgilerinizi sistemimize girin
                            </p>
                            <hr className="BakiciOlma-Box-Card-Hr position-absolute" />
                        </div>
                    </Col>
                    <Col className="BakiciOlma-Box-Card position-relative">
                    <div xs={12} className="BakiciOlma-Box-Card d-flex flex-column justify-content-center align-items-center">
                            <p className="BakiciOlma-Box-Card-Number">4</p>
                            <img
                                className=" BakiciOlma-Box-Card-Icon"
                                src={teamİcon}
                                alt="teamİcon"
                            />
                            <p className="BakiciOlma-Box-Card-Text">Ekibe hoşgeldiniz</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='d-flex justify-content-center align-self-center'>
                        <button onClick={()=>navigate("isebasvur")} className="BakiciOlma-Button">İŞE BAŞVUR</button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomeContent2;

