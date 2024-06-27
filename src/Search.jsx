import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-field">Search for a cake:</label>
            <input 
                type="text" 
                id="search-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default Search;