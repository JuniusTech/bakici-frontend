import { Link } from "react-router-dom"
import belge from "../../assets/doküman.svg"
import BakiciKayitFilePicker from "./BakiciKayitFilePicker"
import { belgeler } from "../../helper/options"

const BakiciKayitBelge = ({ setKayitRoute, setBakiciInfo, bakiciInfo }) => {
  return (
    <div className="text-center">
      <h2>
        RESMİ DÖKÜMALARINIZI EKLEYİN <img src={belge} alt="" width={30} />
      </h2>
      <div>
        {belgeler.map((belge) => (
          <BakiciKayitFilePicker
            key={belge.id}
            setBakiciInfo={setBakiciInfo}
            bakiciInfo={bakiciInfo}
            desc={belge.desc}
          />
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
  )
}

export default BakiciKayitBelge
