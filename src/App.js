import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchForm/SearchBar';
import SearchResults from './components/Results/SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;
