"use client";
import React, { useState } from "react";

const Context = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState("false");

  return (
    <Context.Provider value={{ isLight, setIsLight }}>
      {children}
    </Context.Provider>
  );
};

export default Context;