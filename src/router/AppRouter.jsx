import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Yardim from "../pages/Yardim";
import BakiciAra from "../pages/BakiciAra";
import IseBasvur from "../pages/IseBasvur";
import MusteriKayit from "../pages/MusteriKayit";
import MusteriKayitOnay from "../pages/MusteriKayitOnay";


const AppRouter = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yardim" element={<Yardim />} />
        <Route path="/bakiciara" element={<BakiciAra />} />
        <Route path="/isebasvur" element={<IseBasvur />} />
        <Route path="/musterikayit" element={<MusteriKayit />} />
        <Route path="/musterikayitonay" element={<MusteriKayitOnay />} />
        
        <Route path="*" element={<Home />} />

      </Routes>      
    </BrowserRouter>
  );
};

export default AppRouter;
