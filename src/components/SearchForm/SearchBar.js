import React from 'react';

function SearchBar( {handleChange, searchText}) {
  return (
    <div className="form-group container-fluid h-100 border-none">
      <div className="h-100">
        <input
        className="form-control w-3"
        id="search-bar"
        type="search"
        placeholder="Search a Superhero (or a villain, we don't judge here)"
        autoComplete="off"
        onChange={handleChange}
        value={searchText}
        />
        <hr/>
      </div>
    </div>
  );
}

export default SearchBar;