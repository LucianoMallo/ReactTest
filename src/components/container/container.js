import { useState } from 'react'
import { Titles } from '../titles/titles.js'
import Series from '../series/series.jsx'
import Movies from '../movies/movies.jsx'

const TitlesContainer = () => {
  const [activeComponent, setActiveComponent] = useState(null)

  const handleClick = (componentName) => {
    setActiveComponent(componentName)
  }

  const componentMap = {
    series: Series,
    movies: Movies
    // Add more components here
  }

  const ActiveComponent = activeComponent ? componentMap[activeComponent] : null

  return (
    <>
      {!ActiveComponent && (
        <>
          <Titles name='SERIES' onClick={() => handleClick('series')} />
          <Titles name='MOVIES' onClick={() => handleClick('movies')} />
          {/* Add more Titles here */}
        </>
      )}
      {ActiveComponent && <ActiveComponent />}
    </>
  )
}

export default TitlesContainer
