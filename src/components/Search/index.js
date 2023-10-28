// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// function Search({ onSearch }) {
//   const history = useHistory();
//   const [searchResults, setSearchResults] = useState([]);
//   const [query, setQuery] = useState("");

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     if (query) {
//       // Qidirish so'rovini yuborish va natijalarni olish
//       const results = await onSearch(query);
//       setSearchResults(results);

//       // Qidirish natijalari olinmasa, sahifani tozalang
//       if (!results || results.length === 0) {
//         history.push("/search?query=");
//       } else {
//         // Natijalarni olishdan keyin qidirish sahifasiga o'ting
//         history.push(`/search?query=${query}`);
//       }
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
//       {/* Natijalarni ko'rsatish uchun SearchResults komponentini yaratishingiz mumkin */}
//       {searchResults.map((result, index) => (
//         // Natijalarni chiqaring
//         <div key={index}>{result.title}</div>
//       ))}
//     </div>
//   );
// }

// export default Search;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search({ onSearch }) {
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query) {
      // Qidirish so'rovini yuborish va natijalarni olish
      const results = await onSearch(query);
      setSearchResults(results);

      // Qidirish natijalari olinmasa, sahifani tozalang
      if (!results || results.length === 0) {
        history.push("/search?query=");
      } else {
        // Natijalarni olishdan keyin qidirish sahifasiga o'ting
        history.push(`/search?query=${query}`);
      }
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
      {/* Natijalarni ko'rsatish uchun SearchResults komponentini yaratishingiz mumkin */}
      {searchResults.map((result, index) => (
        // Natijalarni chiqaring
        <div key={index}>{result.title}</div>
      ))}
    </div>
  );
}

export default Search;
