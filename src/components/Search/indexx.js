import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
export const Context = React.createContext();

function ContextProvider({ children }) {
  const [value, setValue] = useState("");

  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
