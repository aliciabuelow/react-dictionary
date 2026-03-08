import { useState } from 'react';
import './Dictionary.css'
import axios from 'axios';
import Results from './Results';

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);
    const [results, setResults] = useState(null);

    function fetchData (response) {
        setResults(response.data);
    }

    function handleSearch(event) {
        event.preventDefault();

        const apiKey = "04dbc8004716437tab5bc0bfo1baf277"
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(fetchData);
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
            <Results data={results} />
        </div>
    )
}