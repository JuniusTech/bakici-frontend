import React, { useEffect, useState } from "react"
import NavbarBakici from "../components/NavbarBakici"
import BakiciInfo from "../components/BakiciInfo"
import BakiciDetail from "../components/BakiciDetail"
import { Col } from "react-bootstrap"
import homeicon from "../assets/homeicon.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/Footer"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { toastErrorNotify } from "../helper/ToastNotify"

function SingleBakici() {
  const { babysitterId } = useParams()
  const [babysitterInfo, setBabysitterInfo] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const babysitterDetail = async () => {
      try {
        const baseURL = process.env.REACT_APP_BASE_URL
        const res = await axios.get(`${baseURL}/babysitter/${babysitterId}`, {
          withCredentials: true,
        })
        console.log(res)
        setBabysitterInfo(res.data.babySitter)
      } catch (err) {
        toastErrorNotify("Bakıcı bilgileri getirilirken bir hata meydana geldi")
        navigate("/")
      }
    }
    babysitterDetail()
  }, [babysitterId])

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
      <div className="d-flex flex-column flex-md-row">
        <Col md={3} className="px-0 px-md-3">
          <BakiciInfo babysitterInfo={babysitterInfo} />
        </Col>
        <Col md={9} className="ms-2 px-0 px-md-3">
          <BakiciDetail babysitterInfo={babysitterInfo} />
        </Col>
      </div>
      <Footer />
    </div>
  )
}

export default SingleBakici
