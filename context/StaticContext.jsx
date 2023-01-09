"use client";
import React, { useState } from "react";

const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [active, setActive] = useState("");

  return (
    <Context.Provider value={{ active, setActive }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
