import { useState } from 'react';
import './Dictionary.css'
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function fetchData(response) {
        setResults(response.data);
    }

    function fetchPhotos(response) {
        setPhotos(response.data);
    }

    function handleSearch(event) {
        event.preventDefault();
        if (keyword !== null) {
        const apiKey = "04dbc8004716437tab5bc0bfo1baf277"
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        const photosUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(fetchData);
        axios.get(photosUrl).then(fetchPhotos);
        } 
    }

    function handleSearchQuery(event) {
        setKeyword(event.target.value);
        
    }
    return (
        <div className="Dictionary">
            <header>
                <h1>Dictionary</h1>
            </header>
            <form className="mt-4" onSubmit={handleSearch}>
                <input type="search" id="search-bar" placeholder="What word would you like to look up?" onChange={handleSearchQuery} />
                <button id="search-button">
                    <span className="material-symbols-outlined">search</span>
                </button>
            </form>
            <Results data={results} />
            <Photos photos={photos} />
        </div>
    )
}