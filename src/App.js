import './App.css';

import React from 'react';
import SearchBar from './components/SearchBar';




const App = () => {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="search-bar">
      <SearchBar onSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;
