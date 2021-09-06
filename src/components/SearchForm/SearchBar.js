import React from 'react';

function SearchBar( {handleChange, searchText}) {
  return (
    <div className="form-group container-fluid h-100">
      <div className="h-100">
        <input
        className="form-control w-3"
        id="search-bar"
        type="search"
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
        value={searchText}
        />
        <small id="help" className="form-text text-muted text-center">Search a Superhero (or a villain, we don't judge here).</small>
      </div>
    </div>
  );
}

export default SearchBar;