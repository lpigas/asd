import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [activeDepart, setActiveDepart] = useState("");
  const [activeUser, setActiveUser] = useState();

  return (
    <Context.Provider
      value={{
        activeUser,
        setActiveUser,
        activeDepart,
        setActiveDepart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
