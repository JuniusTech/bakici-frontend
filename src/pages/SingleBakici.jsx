import React from "react";
import NavbarBakici from "../components/NavbarBakici";
import BakiciInfo from "../components/BakiciInfo";
import BakiciDetail from "../components/BakiciDetail";

function SingleBakici() {
  return (
    <div>
      <NavbarBakici />
      <div className="d-flex">
        <div>
          <BakiciInfo />
        </div>
        <div>
          <BakiciDetail />
        </div>
      </div>
    </div>
  );
}

export default SingleBakici;
