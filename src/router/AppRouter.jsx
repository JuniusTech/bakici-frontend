import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Login from "../pages/Login"
import BakiciAra from "../pages/BakiciAra"
import IseBasvur from "../pages/IseBasvur"
import EbeveynKayit from "../pages/EbeveynKayit"
import EbeveynKayitOnay from "../pages/EbeveynKayitOnay"
import BakiciKayitOnay from "../pages/BakiciKayitOnay"
import MisafirLoginYonlendirici from "../pages/MisafirLoginYonlendirici"
import BakiciKayit from "../pages/BakiciKayit"
import Bakici from "../pages/Bakici/Bakici"
import OfflineYardim from "../pages/OfflineYardim"
import BakiciYardim from "../pages/BakiciYardim"
import Kontakt from "../pages/Kontakt"
import KontaktBasarili from "../pages/KontaktBasarili"
import Misafir from "../pages/Misafir"
import SingleBakici from "../pages/SingleBakici"
import Ebeveyn from "../pages/Ebeveyn/Ebeveyn"
import PrivateRouter from "./PrivateRouter"
import ReservationPage from "../components/Reservation"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yardim" element={<OfflineYardim />} />
        <Route path="/bakyardim" element={<BakiciYardim />} />
        <Route path="/misafir" element={<Misafir />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/bakiciara" element={<BakiciAra />} />
          <Route path="/isebasvur" element={<IseBasvur />} />
          <Route path="/ebeveynkayit" element={<EbeveynKayit />} />
          <Route path="/ebeveynkayitonay" element={<EbeveynKayitOnay />} />
          <Route path="/profile" element={<Bakici />} />
          <Route path="/ebeveynprofil" element={<Ebeveyn />} />
          <Route path="/kontaktbas" element={<KontaktBasarili />} />
          <Route
            path="/singlebakici/:babysitterId"
            element={<SingleBakici />}
          />
        </Route>
        {/* <Route path="/anauyelik" element={<AnaUyelik />} /> */}
        <Route path="/bakicikayitonay" element={<BakiciKayitOnay />} />
        <Route path="/bakicikayit" element={<BakiciKayit />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route
          path="/misafirloginyonlendirici"
          element={<MisafirLoginYonlendirici />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
