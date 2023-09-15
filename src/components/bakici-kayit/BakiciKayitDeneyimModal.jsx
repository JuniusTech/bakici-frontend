import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function BakiciKayitDeneyimModal({
  show,
  setShow,
  deneyim,
  setDeneyim,
  deneyimIndex,
  deneyimInfo,
  setDeneyimInfo,
}) {
  console.log(deneyim);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeneyim({ ...deneyim, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(deneyim);
    const newDeneyimInfo = [...deneyimInfo];
    newDeneyimInfo[deneyimIndex] = deneyim;
    setDeneyimInfo(newDeneyimInfo);
    setShow(false);
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Deneyim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">Yapılan İş</Form.Label>
            <Form.Control
              type="text"
              name="yapilanIs"
              value={deneyim.yapilanIs || ""}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-5">Çalışılan Yer</Form.Label>
            <Form.Control
              type="text"
              name="isyeri"
              value={deneyim.isyeri}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-5">Çalışılan Süre</Form.Label>
            <Form.Control
              type="text"
              name="süre"
              value={deneyim.süre}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          İptal
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BakiciKayitDeneyimModal;
