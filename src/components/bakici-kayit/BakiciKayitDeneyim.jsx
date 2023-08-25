import Select from "react-select";
import plus from "../../assets/plus.svg";
import pen from "../../assets/pen.svg";
import useSelectOptions from "../select/useSelectOptions";

const ilceler = [
  { value: "beyoglu", label: "Beyoğlu" },
  { value: "cubuk", label: "Çubuk" },
  { value: "urla", label: "Urla" },
  { value: "nilufer", label: "Nilüfer" },
  { value: "ceyhan", label: "Ceyhan" },
  { value: "besni", label: "Besni" },
];

const BakiciKayitDeneyim = ({ setKayitRoute }) => {
  const { selectStyles } = useSelectOptions();

  return (
    <>
      <div className="bakici-kayit__calisma-deneyim position-relative py-5 mt-5">
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
                placeholder="İlçe"
                styles={selectStyles}
              />
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex-grow-1 ms-5">
            <h1>Deneyim</h1>
            <div className="bakici-kayit__deneyim mt-5">
              <h6 className="" style={{ textDecoration: "underline" }}>
                Bakıcı
              </h6>
              <h6>Abc Kreşi</h6>
              <p className="">Oca 2022 - Oca 2023 - 1 yıl</p>
            </div>
            <div className="bakici-kayit__buttons d-flex justify-content-around align-items-center mt-5">
              <p
                className="my-0 d-flex align-items-center gap-2"
                style={{ textDecoration: "underline" }}
              >
                Tekrar Düzenle{" "}
                <img className="" src={pen} alt="pen" width={14} />
              </p>
              <button className="">
                {" "}
                <img src={plus} alt="plus" width={24} /> Deneyim Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
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
