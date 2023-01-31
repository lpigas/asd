import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Leftblock from "scenes/LeftBlock/Leftblock";
import Rightblock from "scenes/RightBlock/Rightblock";
import { useStateContext } from "context/StateContext";

const allusers = require("../const/allusers.json");
const blob = require("../const/blob_data.json");
'asdasdasd'

export default function HomePage() {
  const { activeDepart, setActiveUser } = useStateContext();
  const usersActiveDepart =
    activeDepart.length > 0 && Object.keys(blob[activeDepart][0]);

  useEffect(() => {
    setActiveUser();
  }, [activeDepart]);
657567567
  return (
    <div className="max-w-full">
      <Layout titlePage={"pharmbills"}>
        <div className="w-full min-h-100vh flex mt-1">
          <div className="w-1/5 border-r-2 border-gray-300 ">
            {" "}
            <Leftblock />
          </div>
          <div className="pl-2 w-4/5">
            {usersActiveDepart && (
              <Rightblock usersActiveDepart={usersActiveDepart} />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}
