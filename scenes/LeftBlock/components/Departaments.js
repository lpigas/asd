import { useStateContext } from "context/StateContext";
import React, { useEffect, useState } from "react";
const blob = require("../../../const/blob_data.json");

function Departaments({ openDepartamets, setOpenDepartaments }) {
  const { activeDepart, setActiveDepart } = useStateContext();
  const departaments = Object.keys(blob);

  useEffect(() => {
    !openDepartamets && setActiveDepart("");
  }, [openDepartamets]);

  return (
    <div className="my-4">
      <div
        onClick={() => setOpenDepartaments(!openDepartamets)}
        className={`${openDepartamets ? "bg-orange-600" : "bg-white"} py-4`}
      >
        Departaments{" "}
      </div>
      {openDepartamets &&
        departaments.map((departament) => (
          <div
            key={departament}
            className={`p-4 ${
              departament === activeDepart ? "bg-gray-300" : "bg-white"
            } border-b-2 border-gray-300`}
            onClick={() => setActiveDepart(departament)}
          >
            {departament}
          </div>
        ))}
    </div>
  );
}

export default Departaments;
