import React, { useState, useContext } from "react";
export const Context = React.createContext();

function ContextProvider({ children }) {
  const [value, setValue] = useState("");

  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
