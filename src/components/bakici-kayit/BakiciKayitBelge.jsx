import { Link } from "react-router-dom";
import belge from "../../assets/doküman.svg";
import BakiciKayitFilePicker from "./BakiciKayitFilePicker";

const belgeler = [
  {
    id: "kimlikon",
    desc: (
      <p>
        Nufus cuzdaninizin <b>ön</b> sayfasinin resmini kutunun icine tiklayarak
        ekleyin
      </p>
    ),
  },
  {
    id: "kimlikarka",
    desc: (
      <p>
        Nufus kagidinizin <b>arka</b> sayfasinin resmini kutunun icine
        tiklayarak ekleyin
      </p>
    ),
  },
  {
    id: "adlisicil",
    desc: (
      <p className="">
        <b>Adli sicil kayit</b> dokumaninizi kutunun icine tiklayarak ekleyin
      </p>
    ),
  },
];

const BakiciKayitBelge = ({ setKayitRoute }) => {
  return (
    <div className="text-center">
      <h2>
        RESMİ DÖKÜMALARINIZI EKLEYİN <img src={belge} alt="" width={30} />
      </h2>
      <div>
        {belgeler.map((belge) => (
          <BakiciKayitFilePicker id={belge.id} desc={belge.desc} />
        ))}
      </div>

      <div className="text-center py-5">
        <button
          className="bakici-kayit__form-button me-3"
          onClick={() => setKayitRoute("deneyim")}
        >
          Geri
        </button>
        <Link to="/bakicikayitonay">
          <button className="bakici-kayit__form-button ms-3">
            Kaydı Tamamla
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BakiciKayitBelge;
