import React from "react";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import NavbarBakici from "../components/NavbarBakici";

const ReservationPage = () => {
  return (
    <>
      <NavbarBakici />
      <Reservation />
      <Footer />
    </>
  );
};

export default ReservationPage;
