import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

function BakiciKayitDeneyimModal({ show, setShow, setBakiciInfo, bakiciInfo }) {
  const [deneyimInfo, setDeneyimInfo] = useState({
    role: "",
    company: "",
    startYear: "",
    endYear: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDeneyimInfo({ ...deneyimInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Yeni deneyimi mevcut deneyimlerin üzerine ekleyin
    setBakiciInfo({
      ...bakiciInfo,
      experience: [...bakiciInfo.experience, deneyimInfo],
    })

    setShow(false)
    setDeneyimInfo({
      role: "",
      company: "",
      startYear: "",
      endYear: "",
    })
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Deneyim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">Yapılan İş</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={deneyimInfo.role}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-5">Çalışılan Yer</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={deneyimInfo.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-5">Başlangıç Yılı</Form.Label>
            <Form.Control
              type="text"
              name="startYear"
              value={deneyimInfo.startYear}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-5">Bitiş Yılı</Form.Label>
            <Form.Control
              type="text"
              name="endYear"
              value={deneyimInfo.endYear}
              onChange={handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              İptal
            </Button>
            <Button variant="primary" type="submit">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default BakiciKayitDeneyimModal
