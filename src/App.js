import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Home, About } from './pages'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
