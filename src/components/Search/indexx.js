// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// function InputFile() {
//   const history = useHistory();
//   const [query, setQuery] = useState("");

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (query) {
//       history.push(`/search?query=${query}`);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           name="searchInput"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// }

// export default InputFile;

import React, { useState } from "react";

function InputFile({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default InputFile;
