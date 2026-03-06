import { useState } from 'react';
import './Dictionary.css'

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);

    function handleSearch(event) {
        event.preventDefault();
    }

    function handleSearchQuery(event) {
        setKeyword(event.target.value);
    }
    return (
        <div>
            <header>
                <h1>Dictionary</h1>
            </header>
            <form className="mt-4" onSubmit={handleSearch}>
                <input type="search" placeholder="Search a word" onChange={handleSearchQuery} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}