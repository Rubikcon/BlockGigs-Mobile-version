// SearchBar.js
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    // Implement search functionality here
  };

  return (
    <div className="w-full max-w-lg flex items-center bg-gray-100 p-2 rounded-lg shadow-md border border-gray-200">
      <FiSearch className="text-gray-400 mx-2" />
      <input
        type="text"
        placeholder="Search for jobs, offers..."
        className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
