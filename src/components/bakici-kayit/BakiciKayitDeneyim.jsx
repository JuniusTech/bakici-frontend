import React, { useState } from "react"
import Select from "react-select"
import plus from "../../assets/plus.svg"
import pen from "../../assets/pen.svg"
import trash from "../../assets/trash.svg"
import useSelectOptions from "../select/useSelectOptions"
import BakiciKayitDeneyimModal from "./BakiciKayitDeneyimModal"
import { priceRange } from "../../helper/options"

const BakiciKayitDeneyim = ({ setKayitRoute, setBakiciInfo, bakiciInfo }) => {
  const [show, setShow] = useState(false)
  const [deneyim, setDeneyim] = useState({})
  const [deneyimIndex, setDeneyimIndex] = useState(0)
  const [deneyimInfo, setDeneyimInfo] = useState([
    {
      role: "Bakici",
      company: "Abc Kreşi",
      startYear: 2022,
      endYear: 2023,
    },
    {
      role: "Bakici",
      company: "ef Kreşi",
      startYear: 2019,
      endYear: 2020,
    },
    {
      role: "Bakici",
      company: "gh Kreşi",
      startYear: 2021,
      endYear: 2022,
    },
  ])

  // setBakiciInfo((experience = deneyimInfo))

  const handleModal = (deneyim, index) => {
    setDeneyim(deneyim)
    setShow(true)
    setDeneyimIndex(index)
  }

  const handleAddModal = () => {
    setDeneyim({})
    setShow(true)
    setDeneyimIndex(deneyimInfo.length)
  }

  const handleDelete = (index) => {
    const newDeneyimInfo = [...deneyimInfo]
    newDeneyimInfo.splice(index, 1)
    setDeneyimInfo(newDeneyimInfo)
  }

  const { selectStyles } = useSelectOptions()

  return (
    <>
      <div className="bakici-kayit__calisma-deneyim position-relative py-4 mt-5">
        <div className="d-flex w-75 m-auto">
          <div className="flex-grow-1 ">
            <h1>Çalışma Detayları</h1>
            <p className="bakici-kayit__input-label mt-5">
              Ücret beklentinizi belirtin
            </p>
            <div className="bakici-kayit__select-div w-75">
              <Select
                className="bakici-kayit__select"
                options={priceRange}
                placeholder="0 - 30.000 TL..."
                styles={selectStyles}
                onChange={(selectedOption) =>
                  setBakiciInfo({
                    ...bakiciInfo,
                    price_range: selectedOption.value,
                  })
                }
              />
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex-grow-1 ms-5">
            <h1>Deneyim</h1>
            <div className="bakici-kayit__deneyim mt-5">
              {deneyimInfo.map((deneyim, index) => (
                <div key={index} className="mb-4">
                  <div>
                    <h6 style={{ textDecoration: "underline" }}>
                      {deneyim.role}
                    </h6>
                    <h6>{deneyim.company}</h6>
                    <p className="d-flex gap-4">
                      {deneyim.startYear}-{deneyim.endYear}
                    </p>
                  </div>
                  <div className="d-flex gap-4">
                    <button
                      className="my-0 d-flex align-items-center gap-2 border-0 bg-transparent"
                      style={{ textDecoration: "underline" }}
                      onClick={() => handleModal(deneyim, index)}
                    >
                      Tekrar Düzenle
                      <img src={pen} alt="pen" width={14} />
                    </button>
                    <button
                      className="border-0 bg-transparent"
                      onClick={() => handleDelete(index)}
                    >
                      <img src={trash} width={16} alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <BakiciKayitDeneyimModal
              deneyim={deneyim}
              setDeneyim={setDeneyim}
              deneyimInfo={deneyimInfo}
              setDeneyimInfo={setDeneyimInfo}
              deneyimIndex={deneyimIndex}
              show={show}
              setShow={setShow}
            />
            <div className="bakici-kayit__buttons d-flex justify-content-around align-items-center mt-4">
              <button onClick={handleAddModal}>
                <img src={plus} alt="plus" width={24} /> Deneyim Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <button
          className="bakici-kayit__form-button me-3"
          onClick={() => setKayitRoute("mesai")}
        >
          Geri
        </button>
        <button
          className="bakici-kayit__form-button ms-3"
          onClick={() => setKayitRoute("belge")}
        >
          Devam et
        </button>
      </div>
    </>
  )
}

export default BakiciKayitDeneyim
