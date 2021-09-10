import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResults({superheroData = []} ) {

  console.log(superheroData);
  return (
    <div className="card-columns container">
      {superheroData.map(superhero =>
        <SearchResultItem data={superhero} key={superhero.id}/>
      )}
    </div>
  );
}

export default SearchResults;