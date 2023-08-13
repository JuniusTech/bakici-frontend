import React from "react";
import NavbarBakici from "../components/NavbarBakici";
import BakiciInfo from "../components/BakiciInfo";
import BakiciDetail from "../components/BakiciDetail";
import { Col, Container, Row } from "react-bootstrap";
import homeicon from "../assets/homeicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SingleBakici() {
  return (
    <div className="w-100 px-3">
      <NavbarBakici />
      <div className="bakici-filtre__path d-flex align-items-center gap-2 mt-4">
        <img src={homeicon} alt="" />
        <p className="text-black-50 m-0">Anasayfa</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-black-50" />
        <p className="text-black-50 m-0">Bakıcılar</p>
        <FontAwesomeIcon icon={faChevronRight} className="text-black-50" />
        <p className="fw-semibold m-0">Tuğba Aksoy</p>
      </div>
      <div className="d-flex">
        <Col md={3} className="">
          <BakiciInfo />
        </Col>
        <Col md={9} className="ms-2">
          <BakiciDetail />
        </Col>
      </div>
    </div>
  );
}

export default SingleBakici;
