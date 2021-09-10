import React, { useState }  from 'react';
import SearchResults from '../../components/Results/SearchResults';
import SearchBar from '../../components/SearchForm/SearchBar';


function SearchScreen() {
    const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log(data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 2) {
      searchSuperHeroes();
    }
  }
    return (
        
      <div>
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
        
    )
}
export default SearchScreen;