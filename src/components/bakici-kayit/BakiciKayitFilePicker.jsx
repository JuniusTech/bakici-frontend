import dosyaekle from "../../assets/dosyaekle.svg";
import trash from "../../assets/trash.svg";

const BakiciKayitFilePicker = ({ id, desc }) => {
  return (
    <div className="bakici-kayit__belge-container mt-5 pt-5 pb-4">
      <div className="bakici-kayit__belge-ekle-container">
        <div>
          <label className="bakici-kayit__belge-ekle" htmlFor={id}>
            <img
              src={dosyaekle}
              alt=""
              className="bakici-kayit__belge-ekle-image"
            />
          </label>

          <input type="file" name={id} id={id} className="d-none" />

          <p>Dosyalarınızı buraya tıklayarak yükleyin</p>
          <p>Maximum dosya boyutu 50 MB</p>
        </div>
      </div>
      <div
        className="d-flex align-items-center mx-auto "
        style={{ width: "90%" }}
      >
        <div className="position-absolute">
          <button className="bakici-kayit__belge-delete-btn">
            <img src={trash} alt="" />
          </button>
          <button className="bakici-kayit__belge-kaydet-btn">Kaydet</button>
        </div>

        <div className="bakici-kayit__belge-desc mt-4 mx-auto">{desc}</div>
      </div>
    </div>
  );
};

export default BakiciKayitFilePicker;
