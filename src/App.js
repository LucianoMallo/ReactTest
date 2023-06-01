import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TitlesContainer from './components/container/container'
import './App.css'
import Series from './components/series/series'
import Movies from './components/movies/movies'
import SocialContainers from './components/socialContainer/socailContainer'
import StoresContainers from './components/storesContainers/storesContainers'

const App = () => {
  return (
    <Router>
      <div className='App-container'>
        <header className='App-header'>
          <div>Demo Streaming</div>
          <div className='Login'>Log in</div>
          <div className='Trial'>Start your free trial</div>
        </header>
        <div className='content'>
          <Routes>
            <Route path='/' element={<TitlesContainer />} />
            <Route path='/series' element={<Series />} />
            <Route path='/movies' element={<Movies />} />
            {/* Add more routes for other components if needed */}
          </Routes>
        </div>
        <footer className='App-footer'>
          <div className='Contact'>
            Home | Terms and Conditions | Privacy Policies | Collections Statement | Help | Manage Account
          </div>
          <div className='allRights'>Copyright 2016 DEMO Streaming All Right Reserved </div>
          <SocialContainers className='social-media' />
          <StoresContainers className='stores-containers' />
        </footer>
      </div>

    </Router>
  )
}

export default App
