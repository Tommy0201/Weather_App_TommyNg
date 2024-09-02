import './App.css';

import React from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/WeatherToday';




const App = () => {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="app">
      <div className = "container">
        <SearchBar onSearchChange={handleSearchChange} />
        <Weather />
      </div>
    </div>
  );
}

export default App;
