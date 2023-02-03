import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Home, About, Search } from './pages'
/**
 * Keep here so that we don't get a warning on empty apiKey when useEffect runs
 */
const apiKey = process.env.REACT_APP_TMDB_KEY

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        if (searchText) {
            fetch(
                `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${searchText}&page=1`
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setSearchResults(data.results)
                })
        }
    }, [searchText])
    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/search"
                    element={
                        <Search
                            searchText={searchText}
                            searchResults={searchResults}
                        />
                    }
                />
            </Routes>
        </div>
    )
}

export default App
