import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Home, About, Search } from './pages'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')
    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/search' element={<Search searchText={searchText} searchResults={searchResults} />} />
            </Routes>
        </div>
    )
}

export default App
