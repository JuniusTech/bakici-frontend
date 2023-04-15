import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import homepageicon from "../assets/homepageicon.svg";
import Arrow from "../assets/Arrow.svg";
import Child from "../assets/Child.svg";
import Location from "../assets/Location.svg";
import "../styles/HomeFirst.css";

const HomeFirst = () => {
  return (
    <div className="Home-First">
      <div className="Home-First-Text-Form">
        <h1 className="Home-First-Text">
          Bebekleriniz için en iyi bakımı bizimle bulun
        </h1>
        <div>
          <Form className="Home-First-Form">
          <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label">Bakıcı Arıyorum</Form.Label>
              <Form.Control
                className="Form-input Child-Location"
                type="text"
                placeholder="Çocuğum için..."
              />
              <img src={Child} alt="Child" className="Child" /> 
              <img src={Arrow} alt="Arrow" className="Arrow" />
            </Form.Group>
                    
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label-location ">
                Nerede Yaşıyorsunuz?
              </Form.Label>
              <Form.Control
                className="Form-input Child-Location"
                type="text"
                placeholder="Şehir seçin..."
              />
              <img src={Location} alt="Location" className="Location" />
              <img src={Arrow} alt="Arrow" className="Arrow" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="Form-Label">Başlangıç Tarihi</Form.Label>
              <Form.Control
                className="Form-input"
                type="text"
                placeholder="Tarih Seçin"
              />
              <img src={Arrow} alt="Arrow" className="Arrow-tarih" />
            </Form.Group>

            <Button type="submit" className="Home-First-Button">
              Arama Yap{" "}
            </Button>
          </Form>
        </div>
      </div>
      <div className="Home-First-img">
        <img src={homepageicon} alt="homepage icon" />
      </div>
    </div>
  );
};

export default HomeFirst;
