import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TitlesContainer from './components/container/container'
import Series from './components/series/series'
// import Movies from './Movies';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/series'>Series</Link>
            </li>
            {/* Add more navigation links for other routes if needed */}
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<TitlesContainer />} />
          <Route path='/series' element={<Series />} />
          {/* Add more routes for other components if needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
