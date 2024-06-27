import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                type="text" 
                placeholder="Search for a cake"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default Search;