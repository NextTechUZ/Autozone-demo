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
// Make sure to import your context correctly

export function InputFile() {
  const { value, setValue } = useContext(Context);

  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onchen = (e) => {
    setTimeout(() => {
      setValue(e.target.value);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" name="searchInput" onChange={onchen} />
        <Link to={`/search?query=${value}`}>
          <button type="submit" disabled={!value}>
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
