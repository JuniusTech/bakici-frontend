const BakiciKayitMesai = ({ bakiciInfo, setKayitRoute }) => {
  console.log(bakiciInfo);
  return (
    <div className="bakici-kayit__mesai text-center my-5">
      <h1 className="text-uppercase ">
        Calismak istediginiz Mesai SEKLINIZI SECINIZ
      </h1>

      <div className="bakici-kayit__mesai-div d-flex flex-column m-auto  my-5">
        <div className="d-flex gap-3 align-items-center ">
          <input
            type="checkbox"
            name=""
            id="sgündüz"
            style={{ width: "20px", height: "20px" }}
          />
          <label className="bakici-kayit__mesai-label" htmlFor="sgündüz">
            Sadece gündüz bakıcılığı
          </label>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            name=""
            id="hsonugündüz"
            style={{ width: "20px", height: "20px" }}
          />
          <label className="bakici-kayit__mesai-label" htmlFor="hsonugündüz">
            Sadece haftasonu gunduz bakıcılığı
          </label>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            name=""
            id="haiciyatili"
            style={{ width: "20px", height: "20px" }}
          />
          <label className="bakici-kayit__mesai-label" htmlFor="haiciyatili">
            Sadece haftaiçi yatılı bakıcılık
          </label>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            name=""
            id="hsonuyatili"
            style={{ width: "20px", height: "20px" }}
          />
          <label className="bakici-kayit__mesai-label" htmlFor="hsonuyatili">
            Sadece haftasonu yatılı bakıcılık
          </label>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            name=""
            id="tümyatili"
            style={{ width: "20px", height: "20px" }}
          />
          <label className="bakici-kayit__mesai-label" htmlFor="tümyatili">
            Pazar dahil tüm günler yatılı bakıcılık
          </label>
        </div>
      </div>
      <div className="text-center py-5">
        <button
          className="bakici-kayit__form-button me-3"
          onClick={() => setKayitRoute("form")}
        >
          Geri
        </button>
        <button
          className="bakici-kayit__form-button ms-3"
          onClick={() => setKayitRoute("deneyim")}
        >
          Devam et
        </button>
      </div>
    </div>
  );
};

export default BakiciKayitMesai;
