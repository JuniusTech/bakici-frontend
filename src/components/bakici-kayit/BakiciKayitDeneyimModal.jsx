import React from "react"
import { Formik, Form, Field } from "formik"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { deneyimModalSchema } from "../../validations/validations"

function BakiciKayitDeneyimModal({ show, setShow, setBakiciInfo, bakiciInfo }) {
  const handleSubmit = (values, { resetForm }) => {
    setBakiciInfo({
      ...bakiciInfo,
      experience: [...bakiciInfo.experience, values],
    })
    setShow(false)
    resetForm()
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Deneyim</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            role: "",
            company: "",
            startYear: "",
            endYear: "",
          }}
          validationSchema={deneyimModalSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="role" className="form-label fs-5">
                  Yapılan İş
                </label>
                <Field
                  type="text"
                  id="role"
                  name="role"
                  className="form-control"
                />
                {errors.role && touched.role && (
                  <div className="text-danger">{errors.role}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label fs-5">
                  Çalışılan Yer
                </label>
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                />
                {errors.company && touched.company && (
                  <div className="text-danger">{errors.company}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="startYear" className="form-label fs-5">
                  Başlangıç Yılı
                </label>
                <Field
                  type="text"
                  id="startYear"
                  name="startYear"
                  className="form-control"
                />
                {errors.startYear && touched.startYear && (
                  <div className="text-danger">{errors.startYear}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="endYear" className="form-label fs-5">
                  Bitiş Yılı
                </label>
                <Field
                  type="text"
                  id="endYear"
                  name="endYear"
                  className="form-control"
                />
                {errors.endYear && touched.endYear && (
                  <div className="text-danger">{errors.endYear}</div>
                )}
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  İptal
                </Button>
                <Button variant="primary" type="submit">
                  Kaydet
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

export default BakiciKayitDeneyimModal
