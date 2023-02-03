import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Home, About, Search, MovieDetail } from './pages'
import { API_KEY } from './Constants/keys'

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        if (searchText) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
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
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </div>
    )
}

export default App
