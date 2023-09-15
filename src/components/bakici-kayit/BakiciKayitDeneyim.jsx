import Select from "react-select";
import plus from "../../assets/plus.svg";
import pen from "../../assets/pen.svg";
import trash from "../../assets/trash.svg";
import useSelectOptions from "../select/useSelectOptions";
import BakiciKayitDeneyimModal from "./BakiciKayitDeneyimModal";
import { useState } from "react";

const ilceler = [
  { value: "1520", label: "15.000 - 20.000 TL" },
  { value: "2025", label: "20.000 - 25.000 TL" },
  { value: "2530", label: "25.000 - 30.000 TL" },
  { value: "30üstü", label: "30.000 TL üzeri" },
];

const BakiciKayitDeneyim = ({ setKayitRoute }) => {
  const [show, setShow] = useState(false);
  const [deneyim, setDeneyim] = useState({});
  const [deneyimIndex, setDeneyimIndex] = useState(0);
  const [deneyimInfo, setDeneyimInfo] = useState([
    {
      yapilanIs: "Bakici",
      isyeri: "Abc Kreşi",
      süre: "Oca 2022 - Oca 2023 - 1 yıl",
    },
    {
      yapilanIs: "Bakici",
      isyeri: "ef Kreşi",
      süre: "Oca 2022 - Oca 2023 - 1 yıl",
    },
    {
      yapilanIs: "Bakici",
      isyeri: "gh Kreşi",
      süre: "Oca 2022 - Oca 2023 - 1 yıl",
    },
  ]);

  const handleModal = (deneyim, index) => {
    setDeneyim(deneyim);
    setShow(true);
    setDeneyimIndex(index);
  };

  const handleAddModal = () => {
    setDeneyim({});
    setShow(true);
    setDeneyimIndex(deneyimInfo.length);
  };

  const handleDelete = (index) => {
    const newDeneyimInfo = [...deneyimInfo];
    newDeneyimInfo.splice(index, 1);
    setDeneyimInfo(newDeneyimInfo);
  };

  console.log(deneyimInfo);

  const { selectStyles } = useSelectOptions();

  return (
    <>
      <div className="bakici-kayit__calisma-deneyim position-relative py-4 mt-5">
        <div className="d-flex w-75 m-auto">
          <div className="flex-grow-1">
            <h1>Çalışma Detayları</h1>
            <p className="bakici-kayit__input-label mt-5">
              Ücret beklentinizi belirtin
            </p>
            <div className="bakici-kayit__select-div">
              <Select
                className="bakici-kayit__select"
                options={ilceler}
                placeholder="0 - 30.000 TL..."
                styles={selectStyles}
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
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      {deneyim.yapilanIs}
                    </h6>
                    <h6>{deneyim.isyeri}</h6>
                    <p className="">{deneyim.süre}</p>
                  </div>
                  <div className="d-flex gap-4">
                    <button
                      className="my-0 d-flex align-items-center gap-2 border-0 bg-transparent"
                      style={{ textDecoration: "underline" }}
                      onClick={() => handleModal(deneyim, index)}
                    >
                      Tekrar Düzenle{" "}
                      <img className="" src={pen} alt="pen" width={14} />
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
              <button className="" onClick={handleAddModal}>
                {" "}
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
  );
};

export default BakiciKayitDeneyim;
