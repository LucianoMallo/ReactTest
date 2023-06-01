import './App.css'
import TitlesContainer from './components/container/container'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Series from './components/series/series'

function App () {
  return (
    <div>
      <header className='App-header'>
        <div>Demo Streaming</div>
        <div>Log in</div>
        <div>Start your free trial</div>
      </header>
      <Router>
        <Link to='/Series'><TitlesContainer /></Link>
        <Routes>
          <Route exact path='/Series' element={<Series />} />
        </Routes>
      </Router>

      <footer className='App-footer'>
        Home | Terms and Conditions | Privacy Policies | Collections Statement | Help | Manage Account
      </footer>
    </div>

  )
}

export default App
