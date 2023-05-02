import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for food..." value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
