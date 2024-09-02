
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import './searchBar.css';

const SearchBar = ({ onSearchChange }) => {
    const [query, setQuery] = useState('');

    const geoapioptions = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '53726ec76fmshff52bdf3e08fa34p11f9dbjsn96e17267686c',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    const geo_api_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';


    const loadOptions = async (inputValue) => {
      try {
        const response = await fetch(
          `${geo_api_url}?namePrefix=${inputValue}`, 
          geoapioptions
        );
        const result = await response.json();
        const options = result.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }))

        return {
          options
        };
      } catch (error) {
        console.error(error);
      }
    }

    const handleInputChange = (searchData) => {
        setQuery(searchData);
        onSearchChange(searchData);
    }

    // Custom styles
    const customStyles = {
      control: (provided, state) => ({
          ...provided,
          borderRadius: '5px',
          border: '2px solid #ccc',
          boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
      }),
      option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#3699FF' : null,
          color: state.isFocused ? 'white' : null,
      }),
  }

  return (
      <div className='search-bar-container'>
        <AsyncPaginate
            classNamePrefix="custom-select"
            placeholder="Enter city for weather"
            value={query}
            onChange={handleInputChange}
            loadOptions={loadOptions}
            styles={customStyles}
            debounceTimeout={800}/>
      </div>

  );
}
 
export default SearchBar;
