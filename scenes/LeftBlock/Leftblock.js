import React, { useState } from "react";
import Departaments from "./components/Departaments";

export default function leftblock() {
  const [openDepartamets, setOpenDepartaments] = useState(false);

  return (
    <>
      <img src="/image/logo.png" className="m-2" />
      <Departaments
        openDepartamets={openDepartamets}
        setOpenDepartaments={setOpenDepartaments}
      />
    </>
  );
}
