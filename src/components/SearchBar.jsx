import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className='searchbar'>
         <input 
    type="text" 
    placeholder="Search contacts" 
    value={searchTerm} 
    onChange={(e) => setSearchTerm(e.target.value)} 
  />
    </div>
 
);

export default SearchBar;
